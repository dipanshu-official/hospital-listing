import React from 'react';
import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import HospitalList from './components/HospitalList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <SearchFilters />
          <HospitalList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;