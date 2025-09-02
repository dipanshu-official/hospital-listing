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
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-slate-600 transition-colors duration-300 leading-tight">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              {type}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-bold text-gray-900">{rating}</span>
              <span className="text-gray-500 text-sm">({reviewCount})</span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start space-x-2 text-gray-600">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-500" />
          <p className="text-sm font-medium leading-relaxed text-blue-700">
            {address.split(',').slice(0, 2).join(', ')}
          </p>
        </div>

        {/* Specialties - Show only top 2 */}
        <div className="flex flex-wrap gap-2">
          {specialties.slice(0, 2).map((specialty) => (
            <span
              key={specialty}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
            >
              {specialty}
            </span>
          ))}
          {specialties.length > 2 && (
            <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium border border-indigo-200">
              +{specialties.length - 2} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-blue-100">
          <div className="flex space-x-3">
            <button
              onClick={handleViewServices}
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group-hover:scale-105"
            >
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={`tel:${phone}`}
              className="flex items-center justify-center px-4 py-3 border-2 border-blue-200 rounded-2xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <Phone className="w-4 h-4 text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;