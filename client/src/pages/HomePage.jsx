import React from 'react';
import SearchFilters from '../components/SearchFilters';
import HospitalList from '../components/HospitalList';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <SearchFilters />
      <HospitalList />
    </div>
  );
};

export default HomePage;