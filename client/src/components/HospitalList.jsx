import React, { useState } from 'react';
import HospitalCard from './HospitalCard';
import HospitalModal from './HospitalModal';
import { mockHospitals } from '../data/mockData';

const HospitalList = () => {
  const [selectedHospital, setSelectedHospital] = useState(null);
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
          <h2 className="text-2xl font-bold text-gray-900">Available Hospitals</h2>
          <p className="text-gray-600 mt-1">Showing {mockHospitals.length} hospitals in your area</p>
        </div>
        <div className="text-sm text-gray-500">
          Updated just now
        </div>
      </div>

      {/* Hospital Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {mockHospitals.map((hospital) => (
          <HospitalCard
            key={hospital.id}
            hospital={hospital}
            isFavorite={favorites.has(hospital.id)}
            onToggleFavorite={toggleFavorite}
            onViewDetails={setSelectedHospital}
          />
        ))}
      </div>

      {/* Hospital Detail Modal */}
      {selectedHospital && (
        <HospitalModal
          hospital={selectedHospital}
          isOpen={!!selectedHospital}
          onClose={() => setSelectedHospital(null)}
          isFavorite={favorites.has(selectedHospital.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default HospitalList;