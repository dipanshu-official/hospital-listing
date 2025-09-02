import React, { useState } from 'react';
import { Search, MapPin, Filter, Star } from 'lucide-react';

const SearchFilters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [rating, setRating] = useState('');
  const [showFilters, setShowFilters] = useState(false);

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
            onChange={(e) => setSearchTerm(e.target.value)}
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
          Showing all hospitals
        </div>
      </div>

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