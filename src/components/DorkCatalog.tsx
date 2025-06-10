import React from 'react';
import { GoogleDork } from '../types';
import { Copy, ExternalLink, Tag, AlertTriangle, Info, Zap, Shield } from 'lucide-react';

interface DorkCatalogProps {
  dorks: GoogleDork[];
  onSelectDork: (dork: GoogleDork) => void;
  selectedDorks: string[];
}

export const DorkCatalog: React.FC<DorkCatalogProps> = ({ 
  dorks, 
  onSelectDork, 
  selectedDorks 
}) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getNoiseLevelColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-400 bg-green-900/20';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20';
      case 'high': return 'text-red-400 bg-red-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'admin-panels': return <Shield className="h-4 w-4" />;
      case 'exposed-files': return <AlertTriangle className="h-4 w-4" />;
      case 'api-endpoints': return <Zap className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Google Dorks Catalog</h2>
        <div className="text-sm text-slate-400">
          {dorks.length} dorks • {selectedDorks.length} selected
        </div>
      </div>
      
      <div className="grid gap-4">
        {dorks.map((dork) => (
          <div
            key={dork.id}
            className={`bg-slate-800/30 rounded-lg border transition-all hover:bg-slate-800/50 ${
              selectedDorks.includes(dork.id) 
                ? 'border-blue-500 ring-1 ring-blue-500/20' 
                : 'border-slate-700/50 hover:border-slate-600'
            }`}
          >
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="text-blue-400">
                    {getCategoryIcon(dork.category)}
                  </div>
                  <h3 className="font-medium text-white">{dork.description}</h3>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getNoiseLevelColor(dork.noiseLevel)}`}>
                    {dork.noiseLevel}
                  </span>
                  <button
                    onClick={() => copyToClipboard(dork.query)}
                    className="p-1 text-slate-400 hover:text-white transition-colors"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-3 mb-3">
                <code className="text-sm text-green-400 font-mono break-all">
                  {dork.query}
                </code>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {dork.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-slate-700/50 text-slate-300"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-slate-400">
                  <span className="capitalize">{dork.category.replace('-', ' ')}</span>
                  <span>{dork.platform.join(', ')}</span>
                  <span className="capitalize">{dork.assetType}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onSelectDork(dork)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      selectedDorks.includes(dork.id)
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {selectedDorks.includes(dork.id) ? 'Selected' : 'Select'}
                  </button>
                  
                  <button className="p-1 text-slate-400 hover:text-white transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {dork.examples && dork.examples.length > 0 && (
                <div className="mt-3 pt-3 border-t border-slate-700/50">
                  <p className="text-xs text-slate-400 mb-2">Examples:</p>
                  <div className="space-y-1">
                    {dork.examples.map((example, index) => (
                      <code key={index} className="block text-xs text-slate-300 bg-slate-900/30 px-2 py-1 rounded">
                        {example}
                      </code>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
