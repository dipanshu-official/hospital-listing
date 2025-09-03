import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ArrowLeft, Stethoscope, Search, Filter } from 'lucide-react';
import ServiceList from '../components/ServiceList';
import SearchFilters from '../components/SearchFilters';
import { mockServices } from '../data/mockData';

const ServicesPage = () => {
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

    // Search healthcare services
    mockServices.forEach(service => {
      if (
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        service.address.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        results.push({
          type: 'healthcare-service',
          id: service.id,
          name: service.name,
          description: service.description,
          rating: service.rating,
          location: service.address,
          serviceId: service.id,
          serviceType: service.type
        });
      }

      // Search service offerings within each service
      if (service.serviceOfferings) {
        service.serviceOfferings.forEach(serviceCategory => {
          serviceCategory.items.forEach(offering => {
            if (
              offering.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              offering.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
              serviceCategory.category.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              results.push({
                type: 'service-offering',
                id: `${service.id}-${offering.name}`,
                name: offering.name,
                description: offering.description,
                price: offering.price,
                category: serviceCategory.category,
                serviceName: service.name,
                serviceId: service.id,
                location: service.address,
                serviceType: service.type
              });
            }
          });
        });
      }
    });

    setSearchResults(results);
  };

  return (
    <div className="max-w-7xl mx-auto animate-fade-in space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-3 text-gray-600 hover:text-purple-600 transition-all duration-300 group bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl border border-white/50"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-lg">Back to Home</span>
        </button>
        
        <div className="flex items-center space-x-3 text-sm text-gray-500 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-white/50">
          <Stethoscope className="w-4 h-4 text-purple-500" />
          <span className="font-medium">Healthcare Services Directory</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="relative h-64 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          <div className="relative h-full flex items-center justify-center text-center text-white px-8">
            <div>
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Healthcare Services</h1>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed drop-shadow">
                Discover home healthcare, mobile diagnostics, and specialized medical services that come to you
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
        selectedCategory="services"
      />

      {/* Service List */}
      {!isSearching && <ServiceList />}
    </div>
  );
};

export default ServicesPage;