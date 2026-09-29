import { technologyPatterns } from '../data/dorks';
import type { FilterState, RiskLevel, SearchResult } from '../types';

const domains = [
  'example.com',
  'test.com',
  'demo.org',
  'staging.net',
  'dev.io',
  'api.company.com',
  'admin.site.org',
  'backup.service.net',
  's3.amazonaws.com',
  'github.com',
  'gitlab.com',
];

const paths = [
  'admin/login.php',
  'wp-admin/',
  'api/v1/users',
  'config/database.yml',
  '.env',
  'backup.sql',
  'admin/dashboard',
  'phpmyadmin/',
  '.git/config',
  'uploads/sensitive.pdf',
  'api/swagger',
  'debug/phpinfo.php',
];

const titles = [
  'Admin Dashboard - Login Required',
  'Database Configuration File',
  'API Documentation',
  'System Backup Directory',
  'Development Environment Setup',
  'User Authentication Portal',
  'Configuration Management System',
  'Debug Information Page',
  'File Upload Directory',
  'System Administration Panel',
];

const snippets = [
  'This page contains sensitive configuration information including database credentials and API keys.',
  'Administrative access portal for system management. Login required for authorized personnel only.',
  'Exposed directory listing showing backup files, configuration data, and system information.',
  'API endpoint documentation revealing available methods, parameters, and authentication requirements.',
  'Database dump file containing user information, passwords, and system configuration data.',
  'Development environment with debug information, system paths, and application details exposed.',
  'File upload directory with publicly accessible documents and potentially sensitive information.',
  'Git repository configuration file revealing project structure and deployment information.',
  'WordPress administration panel with user authentication and content management capabilities.',
  'System error log containing stack traces, file paths, and application debugging information.',
];

const riskLevels: RiskLevel[] = ['info', 'low', 'medium', 'high', 'critical'];
const riskWeights = [0.1, 0.2, 0.4, 0.25, 0.05];

const hashString = (value: string) => {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
};

const createRandom = (seed: number) => {
  let state = seed;
  return () => {
    state += 0x6d2b79f5;
    let result = state;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
};

const pick = <T>(values: T[], random: () => number): T => values[Math.floor(random() * values.length)];

const generateRiskLevel = (random: () => number): RiskLevel => {
  const value = random();
  let cumulative = 0;

  for (let index = 0; index < riskLevels.length; index += 1) {
    cumulative += riskWeights[index];
    if (value <= cumulative) return riskLevels[index];
  }

  return 'medium';
};

const detectTechnologies = (content: string, random: () => number): string[] => {
  const detected = Object.entries(technologyPatterns)
    .filter(([, pattern]) => pattern.test(content))
    .map(([technology]) => technology);
  const commonTechnologies = ['Apache', 'Nginx', 'PHP', 'MySQL', 'WordPress', 'Node.js']
    .filter(() => random() > 0.7);

  return [...new Set([...detected, ...commonTechnologies])].slice(0, 3);
};

export const performSearch = async (query: string, filters: FilterState): Promise<SearchResult[]> => {
  const context = [
    query,
    filters.searchTerm,
    ...filters.categories,
    ...filters.platforms,
    ...filters.assetTypes,
    ...filters.noiseLevel,
  ].filter(Boolean).join(' ');
  const random = createRandom(hashString(context));

  await new Promise((resolve) => setTimeout(resolve, 600));

  const resultCount = Math.floor(random() * 8) + 5;
  const results = Array.from({ length: resultCount }, (_, index) => {
    const domain = pick(domains, random);
    const url = `https://${domain}/${pick(paths, random)}`;
    const title = pick(titles, random);
    const snippet = `${pick(snippets, random)} Demo match for: ${query.trim()}.`;

    return {
      id: `result-${hashString(`${context}-${index}`)}`,
      title,
      url,
      snippet,
      domain,
      detectedTechnologies: detectTechnologies(`${url} ${snippet}`, random),
      riskLevel: generateRiskLevel(random),
      timestamp: new Date().toISOString(),
    } satisfies SearchResult;
  });

  const riskOrder: Record<RiskLevel, number> = { critical: 0, high: 1, medium: 2, low: 3, info: 4 };
  return results.sort((first, second) => riskOrder[first.riskLevel] - riskOrder[second.riskLevel]);
};

const escapeCsv = (value: string) => `"${value.replace(/"/g, '""')}"`;

export const exportResults = (results: SearchResult[], format: 'json' | 'csv' | 'markdown'): string => {
  switch (format) {
    case 'json':
      return JSON.stringify(results, null, 2);

    case 'csv': {
      const headers = ['Title', 'URL', 'Domain', 'Risk Level', 'Technologies', 'Snippet'];
      const rows = results.map((result) => [
        result.title,
        result.url,
        result.domain,
        result.riskLevel,
        result.detectedTechnologies.join(', '),
        result.snippet,
      ].map(escapeCsv).join(','));
      return [headers.join(','), ...rows].join('\n');
    }

    case 'markdown':
      return results.map((result) =>
        `## ${result.title}\n\n`
        + `**URL:** ${result.url}\n`
        + `**Domain:** ${result.domain}\n`
        + `**Risk Level:** ${result.riskLevel}\n`
        + `**Technologies:** ${result.detectedTechnologies.join(', ')}\n\n`
        + `${result.snippet}\n\n---\n`,
      ).join('\n');
  }
};
