import React from 'react';
import { SearchResult } from '../types';
import { ExternalLink, Shield, AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';

interface ResultsDisplayProps {
  results: SearchResult[];
  isLoading: boolean;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, isLoading }) => {
  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'critical': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'high': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'medium': return <Shield className="h-4 w-4 text-yellow-500" />;
      case 'low': return <Info className="h-4 w-4 text-blue-500" />;
      case 'info': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Info className="h-4 w-4 text-gray-500" />;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'critical': return 'border-red-500/50 bg-red-900/10';
      case 'high': return 'border-orange-500/50 bg-orange-900/10';
      case 'medium': return 'border-yellow-500/50 bg-yellow-900/10';
      case 'low': return 'border-blue-500/50 bg-blue-900/10';
      case 'info': return 'border-green-500/50 bg-green-900/10';
      default: return 'border-slate-600/50 bg-slate-900/10';
    }
  };

  if (isLoading) {
    return (
      <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-8">
        <div className="flex items-center justify-center space-x-3">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
          <span className="text-slate-300">Searching for results...</span>
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-8 text-center">
        <div className="text-slate-400">
          <Info className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg font-medium mb-2">No results found</p>
          <p className="text-sm">Try adjusting your search query or filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Search Results</h2>
        <div className="text-sm text-slate-400">
          {results.length} results found
        </div>
      </div>
      
      <div className="space-y-4">
        {results.map((result) => (
          <div
            key={result.id}
            className={`rounded-lg border p-4 transition-all hover:bg-slate-800/40 ${getRiskColor(result.riskLevel)}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {getRiskIcon(result.riskLevel)}
                  <h3 className="font-medium text-white line-clamp-1">
                    {result.title}
                  </h3>
                </div>
                
                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center space-x-1 mb-2"
                >
                  <span className="truncate">{result.url}</span>
                  <ExternalLink className="h-3 w-3 flex-shrink-0" />
                </a>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {result.snippet}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-slate-700/30">
              <div className="flex items-center space-x-4">
                <span className="text-xs text-slate-400">
                  Domain: <span className="text-slate-300">{result.domain}</span>
                </span>
                <span className="text-xs text-slate-400">
                  Risk: <span className={`capitalize ${result.riskLevel === 'critical' ? 'text-red-400' : 
                    result.riskLevel === 'high' ? 'text-orange-400' :
                    result.riskLevel === 'medium' ? 'text-yellow-400' :
                    result.riskLevel === 'low' ? 'text-blue-400' : 'text-green-400'}`}>
                    {result.riskLevel}
                  </span>
                </span>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {result.detectedTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};