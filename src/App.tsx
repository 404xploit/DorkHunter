import { useState } from 'react';
import { Header } from './components/Header';
import { SearchInterface } from './components/SearchInterface';
import { DorkCatalog } from './components/DorkCatalog';
import { ResultsDisplay } from './components/ResultsDisplay';
import { Dashboard } from './components/Dashboard';
import { googleDorks } from './data/dorks';
import { performSearch, exportResults } from './utils/searchEngine';
import { GoogleDork, SearchResult, FilterState, SavedQuery } from './types';

type View = 'search' | 'catalog' | 'dashboard';

const tabs: Array<{ id: View; label: string }> = [
  { id: 'search', label: 'Search & Results' },
  { id: 'catalog', label: 'Dork Catalog' },
  { id: 'dashboard', label: 'Dashboard' },
];

function App() {
  const [currentView, setCurrentView] = useState<View>('search');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedDorks, setSelectedDorks] = useState<string[]>([]);
  const [savedQueries, setSavedQueries] = useState<SavedQuery[]>([]);

  const handleSearch = async (query: string, filters: FilterState) => {
    setIsSearching(true);
    try {
      const results = await performSearch(query, filters);
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
      resultCount: searchResults.length,
    };
    setSavedQueries((previous) => [...previous, newQuery]);
  };

  const handleExport = () => {
    if (searchResults.length === 0) return;

    const requestedFormat = prompt('Choose export format (json, csv, markdown):');
    if (!requestedFormat || !['json', 'csv', 'markdown'].includes(requestedFormat)) return;
    const format = requestedFormat as 'json' | 'csv' | 'markdown';

    const exportData = exportResults(searchResults, format);
    const blob = new Blob([exportData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `dork-results.${format}`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  const handleSelectDork = (dork: GoogleDork) => {
    setSelectedDorks((previous) =>
      previous.includes(dork.id)
        ? previous.filter((id) => id !== dork.id)
        : [...previous, dork.id],
    );
  };

  const handleRunSavedQuery = async (query: SavedQuery) => {
    setCurrentView('search');
    setIsSearching(true);
    try {
      const results = await performSearch(query.dorks[0], {
        categories: [],
        platforms: [],
        assetTypes: [],
        noiseLevel: [],
        searchTerm: '',
      });
      setSearchResults(results);
      setSavedQueries((previous) => previous.map((savedQuery) =>
        savedQuery.id === query.id
          ? { ...savedQuery, lastRun: new Date().toISOString(), resultCount: results.length }
          : savedQuery,
      ));
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleDeleteQuery = (id: string) => {
    setSavedQueries((previous) => previous.filter((query) => query.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header onSettingsClick={() => undefined} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <nav className="flex space-x-1 bg-slate-800/30 rounded-lg p-1 border border-slate-700/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCurrentView(tab.id)}
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
            dorks={googleDorks}
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
