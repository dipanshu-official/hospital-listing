import React, { useState } from 'react';
import { Search, MapPin, Filter, Star, Building, Stethoscope } from 'lucide-react';

const SearchFilters = ({ onSearch, searchResults, isSearching }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [rating, setRating] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const specialties = [
    'All Specialties',
    'Cardiology',
    'Neurology', 
    'Orthopedics',
    'Pediatrics',
    'Emergency Medicine',
    'Internal Medicine',
    'Surgery',
    'Oncology'
  ];

  return (
    <div className="glass-effect rounded-2xl shadow-xl border border-white/30 p-8 mb-8 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold gradient-text mb-4">
          Discover Quality Healthcare Providers
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Browse our comprehensive directory of hospitals and medical centers. Use the search below to find specific providers or services.
        </p>
      </div>

      {/* Main Search */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Hospital Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search hospitals, doctors, services..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-400 focus:border-medical-400 transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg"
          />
        </div>

        {/* Location Search */}
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Enter city, state, or ZIP code"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-400 focus:border-medical-400 transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg"
          />
        </div>

        {/* Search Button */}
        <button className="bg-gradient-to-r from-medical-500 to-medical-600 text-white px-6 py-4 rounded-xl hover:from-medical-600 hover:to-medical-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105">
          Search Hospitals
        </button>
      </div>

      {/* Filter Toggle */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 text-gray-500 hover:text-medical-600 transition-all duration-200 font-medium hover:scale-105"
        >
          <Filter className="w-5 h-5" />
          <span>Advanced Filters</span>
        </button>
        <div className="text-sm text-gray-500 font-medium">
          {isSearching ? `Found ${searchResults.length} results` : 'Showing all hospitals'}
        </div>
      </div>

      {/* Search Results */}
      {isSearching && searchTerm && (
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 animate-slide-up">
          <div className="flex items-center space-x-3 mb-6">
            <Search className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Search Results</h3>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              {searchResults.length} found
            </span>
          </div>

          {searchResults.length > 0 ? (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {searchResults.map((result, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all duration-200 hover:scale-105 group">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${
                      result.type === 'hospital' 
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600' 
                        : 'bg-gradient-to-br from-emerald-500 to-green-600'
                    }`}>
                      {result.type === 'hospital' ? (
                        <Building className="w-6 h-6 text-white" />
                      ) : (
                        <Stethoscope className="w-6 h-6 text-white" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {result.name}
                        </h4>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          result.type === 'hospital' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {result.type === 'hospital' ? 'Hospital' : 'Service'}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                        {result.description}
                      </p>
                      
                      {result.type === 'hospital' ? (
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-semibold">{result.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <MapPin className="w-4 h-4" />
                            <span>{result.location}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">{result.hospitalName}</span> • {result.category}
                          </div>
                          <div className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                            {result.price}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-gray-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">No Results Found</h4>
              <p className="text-gray-600">Try searching with different keywords</p>
            </div>
          )}
        </div>
      )}

      {/* Advanced Filters */}
      {showFilters && (
        <div className="mt-8 pt-6 border-t border-gray-200 animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Specialty Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Specialty
              </label>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-400 focus:border-medical-400 transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg"
              >
                {specialties.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Minimum Rating
              </label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-400 focus:border-medical-400 transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg"
              >
                <option value="">Any Rating</option>
                <option value="4">4+ Stars</option>
                <option value="3">3+ Stars</option>
                <option value="2">2+ Stars</option>
              </select>
            </div>

            {/* Distance Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Distance
              </label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-medical-400 focus:border-medical-400 transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg">
                <option value="">Any Distance</option>
                <option value="5">Within 5 miles</option>
                <option value="10">Within 10 miles</option>
                <option value="25">Within 25 miles</option>
                <option value="50">Within 50 miles</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;