import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { 
  Star, 
  MapPin, 
  Phone, 
  Heart, 
  Award,
  ArrowRight,
  Pill,
  Clock,
  Shield
} from 'lucide-react';

const MedicalStoreCard = ({ store, isFavorite, onToggleFavorite }) => {
  const navigate = useNavigate();

  const {
    id,
    name,
    type,
    rating,
    reviewCount,
    address,
    phone,
    image,
    services,
    isVerified,
    isOpen24h
  } = store;

  const handleViewDetails = () => {
    toast.success(`Opening ${name} products page`);
    navigate(`/medical-store/${id}/products`);
  };

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    onToggleFavorite(id);
    if (isFavorite) {
      toast.error(`Removed ${name} from favorites`);
    } else {
      toast.success(`Added ${name} to favorites`);
    }
  };

  const handleCallStore = (e) => {
    e.stopPropagation();
    toast.success(`Calling ${name}...`);
  };
  return (
    <div className="group bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-emerald-200/50 hover:scale-105 hover:-translate-y-2">
      {/* Store Image */}
      <div className="relative h-56 bg-gradient-to-br from-emerald-100 to-green-200 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Top Right Actions */}
        <div className="absolute top-4 right-4 flex space-x-2">
          {isVerified && (
            <div className="bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg backdrop-blur-sm">
              <Award className="w-3 h-3" />
              <span>Verified</span>
            </div>
          )}
          {isOpen24h && (
            <div className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg backdrop-blur-sm">
              <Clock className="w-3 h-3" />
              <span>24/7</span>
            </div>
          )}
          <button
            onClick={handleToggleFavorite}
            className={`p-2.5 rounded-full backdrop-blur-sm border transition-all duration-300 ${
              isFavorite 
                ? 'bg-red-500 text-white border-red-400 shadow-lg scale-110' 
                : 'bg-white/90 text-gray-600 border-white/50 hover:bg-red-50 hover:text-red-500 shadow-md hover:scale-110'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Store Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300 leading-tight">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="inline-block bg-white/80 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
              {type}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-bold text-slate-800">{rating}</span>
              <span className="text-slate-500 text-sm">({reviewCount})</span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start space-x-2 text-slate-600">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-500" />
          <p className="text-sm font-medium leading-relaxed text-slate-600">
            {address.split(',').slice(0, 2).join(', ')}
          </p>
        </div>

        {/* Services - Show only top 2 */}
        <div className="flex flex-wrap gap-2">
          {services.slice(0, 2).map((service) => (
            <span
              key={service}
              className="bg-white/70 text-slate-700 px-3 py-1 rounded-full text-xs font-medium border border-slate-200 shadow-sm"
            >
              {service}
            </span>
          ))}
          {services.length > 2 && (
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium border border-emerald-200 shadow-sm">
              +{services.length - 2} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-200">
          <div className="flex space-x-3">
            <button
              onClick={handleViewDetails}
              className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-4 rounded-2xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group-hover:scale-105"
            >
              <span>View Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={`tel:${phone}`}
              onClick={handleCallStore}
              className="flex items-center justify-center px-4 py-3 border-2 border-slate-300 rounded-2xl hover:bg-white hover:border-slate-400 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <Phone className="w-4 h-4 text-slate-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalStoreCard;