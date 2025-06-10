import React, { useState } from 'react';
import { Search, Filter, Play, Save, Download } from 'lucide-react';
import { FilterState } from '../types';

interface SearchInterfaceProps {
  onSearch: (query: string, filters: FilterState) => void;
  onSaveQuery: (name: string, query: string) => void;
  onExport: () => void;
  isSearching: boolean;
  resultCount: number;
}

export const SearchInterface: React.FC<SearchInterfaceProps> = ({
  onSearch,
  onSaveQuery,
  onExport,
  isSearching,
  resultCount
}) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    platforms: [],
    assetTypes: [],
    noiseLevel: [],
    searchTerm: ''
  });

  const handleSearch = () => {
    onSearch(query, filters);
  };

  const handleSaveQuery = () => {
    const name = prompt('Enter a name for this query:');
    if (name) {
      onSaveQuery(name, query);
    }
  };

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
      <div className="space-y-4">
        {/* Main Search Bar */}
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Enter Google Dork query or search existing dorks..."
              className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
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

        {/* Action Buttons */}
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

        {/* Filters Panel */}
        {showFilters && (
          <div className="border-t border-slate-700 pt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Categories</label>
                <select
                  multiple
                  className="w-full p-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white text-sm"
                  onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions, option => option.value);
                    setFilters(prev => ({ ...prev, categories: selected as any }));
                  }}
                >
                  <option value="admin-panels">Admin Panels</option>
                  <option value="exposed-files">Exposed Files</option>
                  <option value="database-dumps">Database Dumps</option>
                  <option value="config-files">Config Files</option>
                  <option value="git-repositories">Git Repositories</option>
                  <option value="cloud-storage">Cloud Storage</option>
                  <option value="api-endpoints">API Endpoints</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Platforms</label>
                <select
                  multiple
                  className="w-full p-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white text-sm"
                  onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions, option => option.value);
                    setFilters(prev => ({ ...prev, platforms: selected as any }));
                  }}
                >
                  <option value="hackerone">HackerOne</option>
                  <option value="bugcrowd">Bugcrowd</option>
                  <option value="yeswehack">YesWeHack</option>
                  <option value="synack">Synack</option>
                  <option value="generic">Generic</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Asset Type</label>
                <select
                  multiple
                  className="w-full p-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white text-sm"
                  onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions, option => option.value);
                    setFilters(prev => ({ ...prev, assetTypes: selected as any }));
                  }}
                >
                  <option value="subdomain">Subdomain</option>
                  <option value="file">File</option>
                  <option value="repository">Repository</option>
                  <option value="endpoint">Endpoint</option>
                  <option value="database">Database</option>
                  <option value="storage">Storage</option>
                  <option value="panel">Panel</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Noise Level</label>
                <select
                  multiple
                  className="w-full p-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white text-sm"
                  onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions, option => option.value);
                    setFilters(prev => ({ ...prev, noiseLevel: selected as any }));
                  }}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};