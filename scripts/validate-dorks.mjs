#!/usr/bin/env node
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { validateCatalogDirectory } from './catalog-validator.mjs';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '..');
const catalogDirectory = path.join(repositoryRoot, 'src', 'data', 'dorks');

try {
  const { errors, summary } = await validateCatalogDirectory(catalogDirectory, {
    minimumEntries: 100,
    requireAllCategories: true,
  });

  if (errors.length > 0) {
    console.error(`Dork catalog validation failed with ${errors.length} error(s):`);
    errors.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
  } else {
    console.log(
      `Dork catalog valid: ${summary.entries} unique entries across ${summary.categories} categories.`,
    );
  }
} catch (error) {
  console.error(`Dork catalog validation failed: ${error.message}`);
  process.exitCode = 1;
}
