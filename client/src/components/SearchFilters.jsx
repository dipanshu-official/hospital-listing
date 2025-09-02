import React, { useState } from 'react';
import { Search, MapPin, Filter, Star, Building, Stethoscope, X, ChevronDown } from 'lucide-react';

const SearchFilters = ({ onSearch, searchResults, isSearching }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [rating, setRating] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    resultType: 'all', // 'all', 'hospitals', 'services'
    location: '',
    specialty: '',
    hospitalType: '',
    rating: ''
  });
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
    // Reset filters when search changes
    if (!value.trim()) {
      setActiveFilters({
        resultType: 'all',
        location: '',
        specialty: '',
        hospitalType: '',
        rating: ''
      });
    }
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...activeFilters, [filterType]: value };
    setActiveFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (filters) => {
    let filtered = [...searchResults];

    // Filter by result type
    if (filters.resultType !== 'all') {
      filtered = filtered.filter(result => {
        if (filters.resultType === 'hospitals') return result.type === 'hospital';
        if (filters.resultType === 'services') return result.type === 'service';
        return true;
      });
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(result => 
        result.location?.toLowerCase().includes(filters.location.toLowerCase()) ||
        result.hospitalName?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by specialty
    if (filters.specialty && filters.specialty !== 'All Specialties') {
      filtered = filtered.filter(result => 
        result.category?.toLowerCase().includes(filters.specialty.toLowerCase()) ||
        result.name?.toLowerCase().includes(filters.specialty.toLowerCase())
      );
    }

    // Filter by hospital type
    if (filters.hospitalType) {
      filtered = filtered.filter(result => 
        result.hospitalType?.toLowerCase().includes(filters.hospitalType.toLowerCase())
      );
    }

    // Filter by rating
    if (filters.rating) {
      filtered = filtered.filter(result => 
        result.rating >= parseFloat(filters.rating)
      );
    }

    setFilteredResults(filtered);
  };

  const clearAllFilters = () => {
    const resetFilters = {
      resultType: 'all',
      location: '',
      specialty: '',
      hospitalType: '',
      rating: ''
    };
    setActiveFilters(resetFilters);
    setFilteredResults([]);
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).filter(value => value && value !== 'all').length;
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

  const hospitalTypes = [
    'All Types',
    'General Hospital',
    'Specialty Hospital',
    'Teaching Hospital',
    'Community Hospital',
    'Pediatric Hospital'
  ];

  const locations = [
    'All Locations',
    'San Francisco, CA',
    'Los Angeles, CA',
    'Seattle, WA',
    'Boston, MA',
    'Austin, TX',
    'Chicago, IL',
    'Miami, FL',
    'Denver, CO'
  ];

  const displayResults = filteredResults.length > 0 ? filteredResults : searchResults;
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

      {/* Search Filters - Only show when searching */}
      {isSearching && searchTerm && (
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Filter className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">Filter Results</h3>
              {getActiveFilterCount() > 0 && (
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {getActiveFilterCount()} active
                </span>
              )}
            </div>
            {getActiveFilterCount() > 0 && (
              <button
                onClick={clearAllFilters}
                className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors font-medium"
              >
                <X className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Result Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Show Results
              </label>
              <select
                value={activeFilters.resultType}
                onChange={(e) => handleFilterChange('resultType', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-white shadow-sm text-sm"
              >
                <option value="all">All Results</option>
                <option value="hospitals">Hospitals Only</option>
                <option value="services">Services Only</option>
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>
              <select
                value={activeFilters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-white shadow-sm text-sm"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc === 'All Locations' ? '' : loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Specialty Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Specialty
              </label>
              <select
                value={activeFilters.specialty}
                onChange={(e) => handleFilterChange('specialty', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-white shadow-sm text-sm"
              >
                {specialties.map((spec) => (
                  <option key={spec} value={spec === 'All Specialties' ? '' : spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            {/* Hospital Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Hospital Type
              </label>
              <select
                value={activeFilters.hospitalType}
                onChange={(e) => handleFilterChange('hospitalType', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-white shadow-sm text-sm"
              >
                {hospitalTypes.map((type) => (
                  <option key={type} value={type === 'All Types' ? '' : type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Min Rating
              </label>
              <select
                value={activeFilters.rating}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-white shadow-sm text-sm"
              >
                <option value="">Any Rating</option>
                <option value="4.5">4.5+ Stars</option>
                <option value="4">4+ Stars</option>
                <option value="3.5">3.5+ Stars</option>
                <option value="3">3+ Stars</option>
              </select>
            </div>
          </div>
        </div>
      )}
      {/* Search Results */}
      {isSearching && searchTerm && (
        <div className="mt-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 animate-slide-up">
          <div className="flex items-center space-x-3 mb-6">
            <Search className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">Search Results</h3>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              {displayResults.length} found
            </span>
            {getActiveFilterCount() > 0 && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                {getActiveFilterCount()} filters applied
              </span>
            )}
          </div>

          {displayResults.length > 0 ? (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {displayResults.map((result, index) => (
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
              <p className="text-gray-600 mb-4">Try searching with different keywords or adjusting your filters</p>
              {getActiveFilterCount() > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Clear Filters
                </button>
              )}
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