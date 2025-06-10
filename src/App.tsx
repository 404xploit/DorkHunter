import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SearchInterface } from './components/SearchInterface';
import { DorkCatalog } from './components/DorkCatalog';
import { ResultsDisplay } from './components/ResultsDisplay';
import { Dashboard } from './components/Dashboard';
import { googleDorks } from './data/dorks';
import { performSearch, exportResults } from './utils/searchEngine';
import { GoogleDork, SearchResult, FilterState, SavedQuery } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'search' | 'catalog' | 'dashboard'>('search');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedDorks, setSelectedDorks] = useState<string[]>([]);
  const [filteredDorks, setFilteredDorks] = useState<GoogleDork[]>(googleDorks);
  const [savedQueries, setSavedQueries] = useState<SavedQuery[]>([]);

  // Filter dorks based on search and filters
  const handleSearch = async (query: string, filters: FilterState) => {
    setIsSearching(true);
    try {
      const results = await performSearch(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSaveQuery = (name: string, query: string) => {
    const newQuery: SavedQuery = {
      id: Date.now().toString(),
      name,
      dorks: [query],
      lastRun: new Date().toISOString(),
      resultCount: searchResults.length
    };
    setSavedQueries(prev => [...prev, newQuery]);
  };

  const handleExport = () => {
    if (searchResults.length === 0) return;
    
    const format = prompt('Choose export format (json, csv, markdown):') as 'json' | 'csv' | 'markdown';
    if (!format || !['json', 'csv', 'markdown'].includes(format)) return;
    
    const exportData = exportResults(searchResults, format);
    const blob = new Blob([exportData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `dork-results.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSelectDork = (dork: GoogleDork) => {
    setSelectedDorks(prev => 
      prev.includes(dork.id) 
        ? prev.filter(id => id !== dork.id)
        : [...prev, dork.id]
    );
  };

  const handleRunSavedQuery = async (query: SavedQuery) => {
    setCurrentView('search');
    setIsSearching(true);
    try {
      const results = await performSearch(query.dorks[0]);
      setSearchResults(results);
      
      // Update query with new results
      setSavedQueries(prev => prev.map(q => 
        q.id === query.id 
          ? { ...q, lastRun: new Date().toISOString(), resultCount: results.length }
          : q
      ));
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleDeleteQuery = (id: string) => {
    setSavedQueries(prev => prev.filter(q => q.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header onSettingsClick={() => {}} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-1 bg-slate-800/30 rounded-lg p-1 border border-slate-700/50">
            {[
              { id: 'search', label: 'Search & Results' },
              { id: 'catalog', label: 'Dork Catalog' },
              { id: 'dashboard', label: 'Dashboard' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCurrentView(tab.id as any)}
                className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                  currentView === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content based on current view */}
        {currentView === 'search' && (
          <div className="space-y-8">
            <SearchInterface
              onSearch={handleSearch}
              onSaveQuery={handleSaveQuery}
              onExport={handleExport}
              isSearching={isSearching}
              resultCount={searchResults.length}
            />
            <ResultsDisplay results={searchResults} isLoading={isSearching} />
          </div>
        )}

        {currentView === 'catalog' && (
          <DorkCatalog
            dorks={filteredDorks}
            onSelectDork={handleSelectDork}
            selectedDorks={selectedDorks}
          />
        )}

        {currentView === 'dashboard' && (
          <Dashboard
            savedQueries={savedQueries}
            onRunQuery={handleRunSavedQuery}
            onDeleteQuery={handleDeleteQuery}
          />
        )}
      </main>
    </div>
  );
}

export default App;