import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Phone, 
  Heart, 
  Award,
  ArrowRight
} from 'lucide-react';

const HospitalCard = ({ hospital, isFavorite, onToggleFavorite }) => {
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
    specialties,
    isVerified
  } = hospital;

  const handleViewServices = () => {
    navigate(`/hospital/${id}/services`);
  };

  return (
    <div className="group bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-200/50 hover:scale-105 hover:-translate-y-2">
      {/* Hospital Image */}
      <div className="relative h-56 bg-gradient-to-br from-blue-100 to-indigo-200 overflow-hidden">
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
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(id);
            }}
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

      {/* Hospital Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
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
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
          <p className="text-sm font-medium leading-relaxed text-slate-600">
            {address.split(',').slice(0, 2).join(', ')}
          </p>
        </div>

        {/* Specialties - Show only top 2 */}
        <div className="flex flex-wrap gap-2">
          {specialties.slice(0, 2).map((specialty) => (
            <span
              key={specialty}
              className="bg-white/70 text-slate-700 px-3 py-1 rounded-full text-xs font-medium border border-slate-200 shadow-sm"
            >
              {specialty}
            </span>
          ))}
          {specialties.length > 2 && (
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 shadow-sm">
              +{specialties.length - 2} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-200">
          <div className="flex space-x-3">
            <button
              onClick={handleViewServices}
              className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 text-white py-3 px-4 rounded-2xl hover:from-slate-800 hover:to-slate-900 transition-all duration-300 font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group-hover:scale-105"
            >
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={`tel:${phone}`}
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

export default HospitalCard;