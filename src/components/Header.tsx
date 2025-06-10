import React from 'react';
import { Search, Shield, Zap, Settings } from 'lucide-react';

interface HeaderProps {
  onSettingsClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSettingsClick }) => {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Search className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">DorkHunter</h1>
              <p className="text-xs text-slate-400">Bug Bounty Reconnaissance Platform</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-slate-300">
                <Shield className="h-4 w-4 text-green-400" />
                <span>12,847 Dorks</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span>Live Search</span>
              </div>
            </div>
            
            <button
              onClick={onSettingsClick}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};