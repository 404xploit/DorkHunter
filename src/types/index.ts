export const DORK_CATEGORIES = [
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
] as const;

export const DORK_PLATFORMS = [
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
] as const;

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
] as const;

export const NOISE_LEVELS = ['low', 'medium', 'high'] as const;

export type DorkCategory = (typeof DORK_CATEGORIES)[number];
export type DorkPlatform = (typeof DORK_PLATFORMS)[number];
export type BugBountyPlatform = DorkPlatform;
export type AssetType = (typeof ASSET_TYPES)[number];
export type NoiseLevel = (typeof NOISE_LEVELS)[number];
export type RiskLevel = 'info' | 'low' | 'medium' | 'high' | 'critical';

export interface GoogleDork {
  id: string;
  query: string;
  description: string;
  category: DorkCategory;
  platform: DorkPlatform[];
  assetType: AssetType;
  noiseLevel: NoiseLevel;
  tags: string[];
  examples?: string[];
}

export interface SearchResult {
  id: string;
  title: string;
  url: string;
  snippet: string;
  domain: string;
  detectedTechnologies: string[];
  riskLevel: RiskLevel;
  timestamp: string;
}

export interface SavedQuery {
  id: string;
  name: string;
  dorks: string[];
  lastRun: string;
  resultCount: number;
}

export interface FilterState {
  categories: DorkCategory[];
  platforms: DorkPlatform[];
  assetTypes: AssetType[];
  noiseLevel: NoiseLevel[];
  searchTerm: string;
}

export interface ExportOptions {
  format: 'json' | 'csv' | 'markdown';
  includeMetadata: boolean;
  filterByRisk: RiskLevel[];
}
