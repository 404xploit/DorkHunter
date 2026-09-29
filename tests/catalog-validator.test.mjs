import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import {
  ASSET_TYPES,
  CATEGORIES,
  loadDocuments,
  NOISE_LEVELS,
  normalizeQuery,
  PLATFORMS,
  validateDocuments,
} from '../scripts/catalog-validator.mjs';
import {
  ASSET_TYPES as APP_ASSET_TYPES,
  DORK_CATEGORIES,
  DORK_PLATFORMS,
  NOISE_LEVELS as APP_NOISE_LEVELS,
} from '../src/types/index';

const temporaryDirectories = [];

afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map((directory) => rm(directory, { recursive: true, force: true })));
});

const validDork = (overrides = {}) => ({
  id: '1',
  query: 'inurl:"/admin" intitle:"Login"',
  description: 'Administrative login interfaces',
  category: 'admin-panels',
  platform: ['generic'],
  assetType: 'panel',
  noiseLevel: 'medium',
  tags: ['admin', 'login'],
  examples: ['inurl:"/admin/login"'],
  ...overrides,
});

const validate = (entries, options) => validateDocuments(
  [{ fileName: 'admin-panels.json', data: entries }],
  { minimumEntries: 1, ...options },
);

describe('normalizeQuery', () => {
  it('normalizes case and repeated whitespace', () => {
    expect(normalizeQuery('  InURL:"/ADMIN"   intitle:"Login" ')).toBe('inurl:"/admin" intitle:"login"');
  });
});

describe('catalog schema', () => {
  it('stays aligned with the application types', () => {
    expect(CATEGORIES).toEqual([...DORK_CATEGORIES]);
    expect(PLATFORMS).toEqual([...DORK_PLATFORMS]);
    expect(ASSET_TYPES).toEqual([...APP_ASSET_TYPES]);
    expect(NOISE_LEVELS).toEqual([...APP_NOISE_LEVELS]);
  });
});

describe('validateDocuments', () => {
  it('accepts a valid catalog entry', () => {
    const result = validate([validDork()]);
    expect(result.errors).toEqual([]);
    expect(result.summary).toEqual({ entries: 1, categories: 1, uniqueIds: 1, uniqueQueries: 1 });
  });

  it('rejects duplicate ids and normalized queries', () => {
    const result = validate([
      validDork(),
      validDork({ description: 'Duplicate administrative query', query: '  INURL:"/admin"   intitle:"Login"  ' }),
    ]);
    expect(result.errors).toEqual(expect.arrayContaining([
      expect.stringContaining('duplicate of admin-panels.json[0]'),
    ]));
    expect(result.errors.filter((error) => error.includes('duplicate of'))).toHaveLength(2);
  });

  it('rejects invalid enums, mismatched category files, and unexpected fields', () => {
    const result = validate([
      validDork({ category: 'wordpress', platform: ['unknown'], assetType: 'unknown', noiseLevel: 'extreme', extra: true }),
    ]);
    expect(result.errors).toEqual(expect.arrayContaining([
      expect.stringContaining('unexpected field "extra"'),
      expect.stringContaining('must match file category "admin-panels"'),
      expect.stringContaining('unsupported value "unknown"'),
      expect.stringContaining('unsupported value "extreme"'),
    ]));
  });

  it('rejects malformed content and unsorted ids', () => {
    const result = validate([
      validDork({ id: '2', query: 'inurl:"/one"', tags: ['admin', 'admin'] }),
      validDork({ id: '1', query: 'inurl:"/two', description: 'short' }),
    ]);
    expect(result.errors).toEqual(expect.arrayContaining([
      expect.stringContaining('duplicate value "admin"'),
      expect.stringContaining('entries must be sorted numerically'),
      expect.stringContaining('unbalanced double quotes'),
      expect.stringContaining('must contain at least 10 characters'),
    ]));
  });

  it('enforces the configured minimum catalog size', () => {
    const result = validate([validDork()], { minimumEntries: 2 });
    expect(result.errors).toContain('catalog: expected at least 2 entries, found 1');
  });

  it('rejects unsafe ids and incomplete category sets when strict mode is enabled', () => {
    const documents = CATEGORIES
      .filter((category) => category !== 'wordpress')
      .map((category) => ({
        fileName: `${category}.json`,
        data: category === 'admin-panels'
          ? [validDork({ id: '9007199254740993' })]
          : [],
      }));
    const result = validateDocuments(documents, { requireAllCategories: true });

    expect(result.errors).toEqual(expect.arrayContaining([
      'wordpress.json: missing category file',
      'admin-panels.json[0].id: must be a safe integer',
      'api-endpoints.json: category file must not be empty',
    ]));
  });
});

describe('loadDocuments', () => {
  it('loads JSON files in deterministic order', async () => {
    const directory = await mkdtemp(path.join(os.tmpdir(), 'dorkhunter-catalog-'));
    temporaryDirectories.push(directory);
    await writeFile(path.join(directory, 'wordpress.json'), '[]\n');
    await writeFile(path.join(directory, 'admin-panels.json'), '[]\n');

    const documents = await loadDocuments(directory);
    expect(documents.map(({ fileName }) => fileName)).toEqual(['admin-panels.json', 'wordpress.json']);
  });

  it('reports the file name for malformed JSON', async () => {
    const directory = await mkdtemp(path.join(os.tmpdir(), 'dorkhunter-catalog-'));
    temporaryDirectories.push(directory);
    await writeFile(path.join(directory, 'admin-panels.json'), '[invalid]\n');

    await expect(loadDocuments(directory)).rejects.toThrow('admin-panels.json: invalid JSON');
  });
});
