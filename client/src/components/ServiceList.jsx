import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ServiceCard from './ServiceCard';
import { mockServices } from '../data/mockData';

const ServiceList = () => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (serviceId) => {
    const newFavorites = new Set(favorites);
    const service = mockServices.find(s => s.id === serviceId);
    if (newFavorites.has(serviceId)) {
      newFavorites.delete(serviceId);
    } else {
      newFavorites.add(serviceId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Available Healthcare Services</h2>
          <p className="text-slate-600 mt-2 text-lg">Showing {mockServices.length} healthcare services in your area</p>
        </div>
        <div className="text-sm text-slate-600 font-medium bg-white/70 px-4 py-2 rounded-xl shadow-sm">
          Updated just now
        </div>
      </div>

      {/* Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        {mockServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isFavorite={favorites.has(service.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;