import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

export const CATEGORIES = [
  'admin-panels',
  'api-endpoints',
  'authentication',
  'backup-files',
  'cloud-storage',
  'cms',
  'config-files',
  'database-dumps',
  'development',
  'development-environments',
  'devops',
  'documentation',
  'ecommerce',
  'error-pages',
  'git-repositories',
  'log-files',
  'monitoring',
  'project-management',
  'reconnaissance',
  'server-info',
  'version-control',
  'wordpress',
];

export const PLATFORMS = [
  'artifactory',
  'azure',
  'bugcrowd',
  'cobalt',
  'confluence',
  'docker',
  'drupal',
  'elasticsearch',
  'firebase',
  'gcp',
  'generic',
  'gitlab',
  'grafana',
  'hackerone',
  'intigriti',
  'jboss',
  'jenkins',
  'jira',
  'joomla',
  'kibana',
  'kubernetes',
  'magento',
  'nexus',
  'opencart',
  'prometheus',
  'solr',
  'synack',
  'tomcat',
  'wordpress',
  'yeswehack',
];

export const ASSET_TYPES = [
  'database',
  'documentation',
  'endpoint',
  'environment',
  'file',
  'page',
  'panel',
  'repository',
  'server',
  'storage',
  'subdomain',
  'website',
];

export const NOISE_LEVELS = ['low', 'medium', 'high'];

const REQUIRED_KEYS = [
  'id',
  'query',
  'description',
  'category',
  'platform',
  'assetType',
  'noiseLevel',
  'tags',
];
const OPTIONAL_KEYS = ['examples'];
const ALLOWED_KEYS = new Set([...REQUIRED_KEYS, ...OPTIONAL_KEYS]);
const TAG_PATTERN = /^[a-z0-9][a-z0-9._+-]*$/;
const CONTROL_CHARACTER_PATTERN = /[\u0000-\u001f\u007f]/;

export const normalizeQuery = (query) => query.trim().replace(/\s+/g, ' ').toLowerCase();

const hasBalancedDoubleQuotes = (value) => {
  let quotes = 0;
  let escaped = false;

  for (const character of value) {
    if (escaped) {
      escaped = false;
      continue;
    }
    if (character === '\\') {
      escaped = true;
      continue;
    }
    if (character === '"') quotes += 1;
  }

  return quotes % 2 === 0;
};

const checkText = (value, field, location, errors, { minLength = 1, balancedQuotes = false } = {}) => {
  const fieldLocation = field ? `${location}.${field}` : location;
  if (typeof value !== 'string') {
    errors.push(`${fieldLocation}: expected a string`);
    return;
  }
  if (value !== value.trim()) errors.push(`${fieldLocation}: must not have surrounding whitespace`);
  if (value.trim().length < minLength) errors.push(`${fieldLocation}: must contain at least ${minLength} characters`);
  if (CONTROL_CHARACTER_PATTERN.test(value)) errors.push(`${fieldLocation}: contains a control character`);
  if (balancedQuotes && !hasBalancedDoubleQuotes(value)) errors.push(`${fieldLocation}: contains unbalanced double quotes`);
};

const checkStringArray = (value, field, location, errors, { allowedValues, tagFormat = false, balancedQuotes = false } = {}) => {
  if (!Array.isArray(value) || value.length === 0) {
    errors.push(`${location}.${field}: expected a non-empty array`);
    return;
  }

  const seen = new Set();
  value.forEach((item, index) => {
    const itemLocation = `${location}.${field}[${index}]`;
    checkText(item, '', itemLocation, errors, { balancedQuotes });
    if (typeof item !== 'string') return;
    if (seen.has(item)) errors.push(`${itemLocation}: duplicate value "${item}"`);
    seen.add(item);
    if (allowedValues && !allowedValues.includes(item)) errors.push(`${itemLocation}: unsupported value "${item}"`);
    if (tagFormat && !TAG_PATTERN.test(item)) errors.push(`${itemLocation}: tag must be lowercase and URL-safe`);
  });
};

export const validateDocuments = (documents, { minimumEntries = 1, requireAllCategories = false } = {}) => {
    const errors = [];
    const ids = new Map();
    const queries = new Map();
    const documentNames = new Set(documents.map(({ fileName }) => fileName));
    let entryCount = 0;

    if (requireAllCategories) {
      for (const category of CATEGORIES) {
        const expectedFile = `${category}.json`;
        if (!documentNames.has(expectedFile)) errors.push(`${expectedFile}: missing category file`);
      }
    }

  for (const document of documents) {
    const { fileName, data } = document;
    const expectedCategory = path.basename(fileName, '.json');

    if (!CATEGORIES.includes(expectedCategory)) errors.push(`${fileName}: file name is not a supported category`);
    if (!Array.isArray(data)) {
      errors.push(`${fileName}: root value must be an array`);
      continue;
    }
    if (requireAllCategories && data.length === 0) errors.push(`${fileName}: category file must not be empty`);

    let previousId = -1;
    data.forEach((entry, index) => {
      entryCount += 1;
      const location = `${fileName}[${index}]`;
      if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
        errors.push(`${location}: expected an object`);
        return;
      }

      const keys = Object.keys(entry);
      for (const key of REQUIRED_KEYS) {
        if (!(key in entry)) errors.push(`${location}: missing required field "${key}"`);
      }
      for (const key of keys) {
        if (!ALLOWED_KEYS.has(key)) errors.push(`${location}: unexpected field "${key}"`);
      }

      checkText(entry.id, 'id', location, errors);
      if (typeof entry.id === 'string' && !/^[1-9]\d*$/.test(entry.id)) {
        errors.push(`${location}.id: must be a positive integer encoded as a string`);
      }
      const numericId = Number(entry.id);
      if (typeof entry.id === 'string' && !Number.isSafeInteger(numericId)) {
        errors.push(`${location}.id: must be a safe integer`);
      }
      if (Number.isInteger(numericId) && numericId <= previousId) errors.push(`${location}.id: entries must be sorted numerically`);
      if (Number.isInteger(numericId)) previousId = numericId;
      if (typeof entry.id === 'string') {
        if (ids.has(entry.id)) errors.push(`${location}.id: duplicate of ${ids.get(entry.id)}`);
        else ids.set(entry.id, location);
      }

      checkText(entry.query, 'query', location, errors, { minLength: 4, balancedQuotes: true });
      if (typeof entry.query === 'string') {
        const normalizedQuery = normalizeQuery(entry.query);
        if (queries.has(normalizedQuery)) errors.push(`${location}.query: duplicate of ${queries.get(normalizedQuery)}`);
        else queries.set(normalizedQuery, location);
      }

      checkText(entry.description, 'description', location, errors, { minLength: 10 });
      checkText(entry.category, 'category', location, errors);
      if (typeof entry.category === 'string') {
        if (!CATEGORIES.includes(entry.category)) errors.push(`${location}.category: unsupported value "${entry.category}"`);
        if (entry.category !== expectedCategory) errors.push(`${location}.category: must match file category "${expectedCategory}"`);
      }

      checkStringArray(entry.platform, 'platform', location, errors, { allowedValues: PLATFORMS });
      checkText(entry.assetType, 'assetType', location, errors);
      if (typeof entry.assetType === 'string' && !ASSET_TYPES.includes(entry.assetType)) {
        errors.push(`${location}.assetType: unsupported value "${entry.assetType}"`);
      }
      checkText(entry.noiseLevel, 'noiseLevel', location, errors);
      if (typeof entry.noiseLevel === 'string' && !NOISE_LEVELS.includes(entry.noiseLevel)) {
        errors.push(`${location}.noiseLevel: unsupported value "${entry.noiseLevel}"`);
      }
      checkStringArray(entry.tags, 'tags', location, errors, { tagFormat: true });
      if ('examples' in entry) checkStringArray(entry.examples, 'examples', location, errors, { balancedQuotes: true });
    });
  }

  if (entryCount < minimumEntries) errors.push(`catalog: expected at least ${minimumEntries} entries, found ${entryCount}`);

  return {
    errors,
    summary: {
      entries: entryCount,
      categories: documents.filter(({ data }) => Array.isArray(data) && data.length > 0).length,
      uniqueIds: ids.size,
      uniqueQueries: queries.size,
    },
  };
};

export const loadDocuments = async (directory) => {
  const fileNames = (await readdir(directory)).filter((fileName) => fileName.endsWith('.json')).sort();
  const documents = [];

  for (const fileName of fileNames) {
    const filePath = path.join(directory, fileName);
    const source = await readFile(filePath, 'utf8');
    let data;
    try {
      data = JSON.parse(source);
    } catch (error) {
      throw new Error(`${fileName}: invalid JSON (${error.message})`, { cause: error });
    }
    documents.push({ fileName, data });
  }

  return documents;
};

export const validateCatalogDirectory = async (directory, options) => {
  const documents = await loadDocuments(directory);
  return validateDocuments(documents, options);
};
