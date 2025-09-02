import React from 'react';
import { useState } from 'react';
import SearchFilters from '../components/SearchFilters';
import HospitalList from '../components/HospitalList';
import { mockHospitals } from '../data/mockData';

const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = [];

    // Search hospitals
    mockHospitals.forEach(hospital => {
      if (
        hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        hospital.address.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        results.push({
          type: 'hospital',
          id: hospital.id,
          name: hospital.name,
          description: hospital.description,
          rating: hospital.rating,
          location: `${hospital.address.split(',')[1]}, ${hospital.address.split(',')[2]}`,
          hospitalId: hospital.id
        });
      }

      // Search services within each hospital
      hospital.services.forEach(serviceCategory => {
        serviceCategory.items.forEach(service => {
          if (
            service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            serviceCategory.category.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            results.push({
              type: 'service',
              id: `${hospital.id}-${service.name}`,
              name: service.name,
              description: service.description,
              price: service.price,
              category: serviceCategory.category,
              hospitalName: hospital.name,
              hospitalId: hospital.id
            });
          }
        });
      });
    });

    setSearchResults(results);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <SearchFilters 
        onSearch={handleSearch}
        searchResults={searchResults}
        isSearching={isSearching}
      />
      {!isSearching && <HospitalList />}
    </div>
  );
};

export default HomePage;