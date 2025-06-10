import React from 'react';
import { SavedQuery } from '../types';
import { Play, Trash2, Clock, BarChart3 } from 'lucide-react';

interface DashboardProps {
  savedQueries: SavedQuery[];
  onRunQuery: (query: SavedQuery) => void;
  onDeleteQuery: (id: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ 
  savedQueries, 
  onRunQuery, 
  onDeleteQuery 
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Personal Dashboard</h2>
        <div className="text-sm text-slate-400">
          {savedQueries.length} saved queries
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600/20 rounded-lg">
              <BarChart3 className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">{savedQueries.length}</p>
              <p className="text-sm text-slate-400">Saved Queries</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-600/20 rounded-lg">
              <Clock className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {savedQueries.reduce((sum, q) => sum + q.resultCount, 0)}
              </p>
              <p className="text-sm text-slate-400">Total Results</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-600/20 rounded-lg">
              <Play className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white">
                {savedQueries.filter(q => q.lastRun).length}
              </p>
              <p className="text-sm text-slate-400">Recently Run</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Saved Queries */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Saved Queries</h3>
        
        {savedQueries.length === 0 ? (
          <div className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-8 text-center">
            <div className="text-slate-400">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium mb-2">No saved queries</p>
              <p className="text-sm">Save your favorite dork combinations to run them later</p>
            </div>
          </div>
        ) : (
          <div className="grid gap-4">
            {savedQueries.map((query) => (
              <div
                key={query.id}
                className="bg-slate-800/30 rounded-lg border border-slate-700/50 p-4 hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-white">{query.name}</h4>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onRunQuery(query)}
                      className="p-2 text-green-400 hover:text-green-300 hover:bg-green-900/20 rounded-lg transition-colors"
                    >
                      <Play className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onDeleteQuery(query.id)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  {query.dorks.map((dork, index) => (
                    <code key={index} className="block text-sm text-green-400 bg-slate-900/50 px-3 py-2 rounded font-mono break-all">
                      {dork}
                    </code>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{query.dorks.length} dork{query.dorks.length !== 1 ? 's' : ''}</span>
                  <div className="flex items-center space-x-4">
                    <span>{query.resultCount} results</span>
                    {query.lastRun && (
                      <span>Last run: {new Date(query.lastRun).toLocaleDateString()}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};