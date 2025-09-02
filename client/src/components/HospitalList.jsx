import React, { useState } from 'react';
import HospitalCard from './HospitalCard';
import { mockHospitals } from '../data/mockData';

const HospitalList = () => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (hospitalId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(hospitalId)) {
      newFavorites.delete(hospitalId);
    } else {
      newFavorites.add(hospitalId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent">Available Hospitals</h2>
          <p className="text-blue-700 mt-2 text-lg">Showing {mockHospitals.length} hospitals in your area</p>
        </div>
        <div className="text-sm text-blue-600 font-medium bg-blue-50 px-4 py-2 rounded-xl">
          Updated just now
        </div>
      </div>

      {/* Hospital Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        {mockHospitals.map((hospital) => (
          <HospitalCard
            key={hospital.id}
            hospital={hospital}
            isFavorite={favorites.has(hospital.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default HospitalList;