import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ArrowLeft, Building, Search, Filter } from 'lucide-react';
import HospitalList from '../components/HospitalList';
import SearchFilters from '../components/SearchFilters';
import { mockHospitals } from '../data/mockData';

const HospitalsPage = () => {
  const navigate = useNavigate();
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
          hospitalId: hospital.id,
          hospitalType: hospital.type
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
              hospitalId: hospital.id,
              location: `${hospital.address.split(',')[1]}, ${hospital.address.split(',')[2]}`,
              hospitalType: hospital.type
            });
          }
        });
      });
    });

    setSearchResults(results);
  };

  return (
    <div className="max-w-7xl mx-auto animate-fade-in space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-all duration-300 group bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl border border-white/50"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-lg">Back to Home</span>
        </button>
        
        <div className="flex items-center space-x-3 text-sm text-gray-500 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-white/50">
          <Building className="w-4 h-4 text-blue-500" />
          <span className="font-medium">Hospital Directory</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="relative h-64 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          <div className="relative h-full flex items-center justify-center text-center text-white px-8">
            <div>
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Hospital Directory</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed drop-shadow">
                Find the best hospitals and medical centers with transparent pricing and verified information
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <SearchFilters 
        onSearch={handleSearch}
        searchResults={searchResults}
        isSearching={isSearching}
        selectedCategory="hospitals"
      />

      {/* Hospital List */}
      {!isSearching && <HospitalList />}
    </div>
  );
};

export default HospitalsPage;