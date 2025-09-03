import React, { useState } from 'react';
import toast from 'react-hot-toast';
import MedicalStoreCard from './MedicalStoreCard';
import { mockMedicalStores } from '../data/mockData';

const MedicalStoreList = () => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (storeId) => {
    const newFavorites = new Set(favorites);
    const store = mockMedicalStores.find(s => s.id === storeId);
    if (newFavorites.has(storeId)) {
      newFavorites.delete(storeId);
    } else {
      newFavorites.add(storeId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Available Medical Stores</h2>
          <p className="text-slate-600 mt-2 text-lg">Showing {mockMedicalStores.length} pharmacies and medical stores in your area</p>
        </div>
        <div className="text-sm text-slate-600 font-medium bg-white/70 px-4 py-2 rounded-xl shadow-sm">
          Updated just now
        </div>
      </div>

      {/* Store Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        {mockMedicalStores.map((store) => (
          <MedicalStoreCard
            key={store.id}
            store={store}
            isFavorite={favorites.has(store.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default MedicalStoreList;