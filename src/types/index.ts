export interface GoogleDork {
  id: string;
  query: string;
  description: string;
  category: DorkCategory;
  platform: BugBountyPlatform[];
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

export type DorkCategory = 
  | 'admin-panels'
  | 'exposed-files'
  | 'database-dumps'
  | 'config-files'
  | 'git-repositories'
  | 'cloud-storage'
  | 'api-endpoints'
  | 'error-pages'
  | 'development'
  | 'backups';

export type BugBountyPlatform = 
  | 'hackerone'
  | 'bugcrowd'
  | 'yeswehack'
  | 'synack'
  | 'intigriti'
  | 'cobalt'
  | 'generic';

export type AssetType = 
  | 'subdomain'
  | 'file'
  | 'repository'
  | 'endpoint'
  | 'database'
  | 'storage'
  | 'panel'
  | 'documentation';

export type NoiseLevel = 'low' | 'medium' | 'high';
export type RiskLevel = 'info' | 'low' | 'medium' | 'high' | 'critical';

export interface FilterState {
  categories: DorkCategory[];
  platforms: BugBountyPlatform[];
  assetTypes: AssetType[];
  noiseLevel: NoiseLevel[];
  searchTerm: string;
}

export interface ExportOptions {
  format: 'json' | 'csv' | 'markdown';
  includeMetadata: boolean;
  filterByRisk: RiskLevel[];
}
