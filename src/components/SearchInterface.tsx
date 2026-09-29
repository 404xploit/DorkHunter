import React, { useState } from 'react';
import { Search, Filter, Play, Save, Download } from 'lucide-react';
import {
  ASSET_TYPES,
  DORK_CATEGORIES,
  DORK_PLATFORMS,
  NOISE_LEVELS,
  type FilterState,
} from '../types';

interface SearchInterfaceProps {
  onSearch: (query: string, filters: FilterState) => void;
  onSaveQuery: (name: string, query: string) => void;
  onExport: () => void;
  isSearching: boolean;
  resultCount: number;
}

const labels: Record<string, string> = {
  api: 'API',
  cms: 'CMS',
  gcp: 'GCP',
  gitlab: 'GitLab',
  intigriti: 'Intigriti',
  jboss: 'JBoss',
  jira: 'Jira',
  nodejs: 'Node.js',
  wordpress: 'WordPress',
  yeswehack: 'YesWeHack',
};

const formatLabel = (value: string) => value
  .split('-')
  .map((part) => labels[part] ?? `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
  .join(' ');

const selectedValues = <T extends string>(event: React.ChangeEvent<HTMLSelectElement>): T[] =>
  Array.from(event.target.selectedOptions, (option) => option.value as T);

export const SearchInterface: React.FC<SearchInterfaceProps> = ({
  onSearch,
  onSaveQuery,
  onExport,
  isSearching,
  resultCount,
}) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    platforms: [],
    assetTypes: [],
    noiseLevel: [],
    searchTerm: '',
  });

  const handleSearch = () => {
    onSearch(query, filters);
  };

  const handleSaveQuery = () => {
    const name = prompt('Enter a name for this query:');
    if (name) onSaveQuery(name, query);
  };

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
      <div className="space-y-4">
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && handleSearch()}
              placeholder="Enter Google Dork query or search existing dorks..."
              className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            aria-label="Toggle search filters"
            aria-expanded={showFilters}
            className={`px-4 py-3 rounded-lg border transition-colors ${
              showFilters
                ? 'bg-blue-600 border-blue-500 text-white'
                : 'bg-slate-900/50 border-slate-600 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Filter className="h-5 w-5" />
          </button>

          <button
            onClick={handleSearch}
            disabled={isSearching || !query.trim()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <Play className="h-4 w-4" />
            <span>{isSearching ? 'Searching...' : 'Search'}</span>
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            <button
              onClick={handleSaveQuery}
              disabled={!query.trim()}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white rounded-lg text-sm transition-colors flex items-center space-x-2"
            >
              <Save className="h-4 w-4" />
              <span>Save Query</span>
            </button>

            <button
              onClick={onExport}
              disabled={resultCount === 0}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white rounded-lg text-sm transition-colors flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Export Results</span>
            </button>
          </div>

          {resultCount > 0 && (
            <div className="text-sm text-slate-400">
              Found <span className="text-white font-medium">{resultCount}</span> results
            </div>
          )}
        </div>

        {showFilters && (
          <div className="border-t border-slate-700 pt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label htmlFor="category-filter" className="block text-sm font-medium text-slate-300 mb-2">
                  Categories
                </label>
                <select
                  id="category-filter"
                  multiple
                  className="w-full p-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white text-sm"
                  onChange={(event) => setFilters((previous) => ({
                    ...previous,
                    categories: selectedValues<FilterState['categories'][number]>(event),
                  }))}
                >
                  {DORK_CATEGORIES.map((category) => (
                    <option key={category} value={category}>{formatLabel(category)}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="platform-filter" className="block text-sm font-medium text-slate-300 mb-2">
                  Platforms
                </label>
                <select
                  id="platform-filter"
                  multiple
                  className="w-full p-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white text-sm"
                  onChange={(event) => setFilters((previous) => ({
                    ...previous,
                    platforms: selectedValues<FilterState['platforms'][number]>(event),
                  }))}
                >
                  {DORK_PLATFORMS.map((platform) => (
                    <option key={platform} value={platform}>{formatLabel(platform)}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="asset-filter" className="block text-sm font-medium text-slate-300 mb-2">
                  Asset Type
                </label>
                <select
                  id="asset-filter"
                  multiple
                  className="w-full p-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white text-sm"
                  onChange={(event) => setFilters((previous) => ({
                    ...previous,
                    assetTypes: selectedValues<FilterState['assetTypes'][number]>(event),
                  }))}
                >
                  {ASSET_TYPES.map((assetType) => (
                    <option key={assetType} value={assetType}>{formatLabel(assetType)}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="noise-filter" className="block text-sm font-medium text-slate-300 mb-2">
                  Noise Level
                </label>
                <select
                  id="noise-filter"
                  multiple
                  className="w-full p-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white text-sm"
                  onChange={(event) => setFilters((previous) => ({
                    ...previous,
                    noiseLevel: selectedValues<FilterState['noiseLevel'][number]>(event),
                  }))}
                >
                  {NOISE_LEVELS.map((noiseLevel) => (
                    <option key={noiseLevel} value={noiseLevel}>{formatLabel(noiseLevel)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
