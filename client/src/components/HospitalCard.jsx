import React from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Heart, 
  Stethoscope,
  Users,
  Award
} from 'lucide-react';

const HospitalCard = ({ hospital, isFavorite, onToggleFavorite, onViewDetails }) => {
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
    isOpen24h,
    bedCount,
    isVerified
  } = hospital;

  return (
    <div className="hospital-card bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      {/* Hospital Image */}
      <div className="relative h-48 bg-gradient-to-br from-medical-100 to-teal-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          {isVerified && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <Award className="w-3 h-3" />
              <span>Verified</span>
            </div>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(id);
            }}
            className={`p-2 rounded-full backdrop-blur-sm border transition-all ${
              isFavorite 
                ? 'bg-red-500 text-white border-red-500' 
                : 'bg-white/80 text-gray-600 border-white/50 hover:bg-red-50 hover:text-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
        {isOpen24h && (
          <div className="absolute bottom-3 left-3 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>24/7</span>
          </div>
        )}
      </div>

      {/* Hospital Info */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
            {name}
          </h3>
          <p className="text-medical-600 font-medium text-sm">{type}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="font-semibold text-gray-900">{rating}</span>
          <span className="text-gray-500 text-sm">({reviewCount} reviews)</span>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-2 mb-4 text-gray-600">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p className="text-sm leading-relaxed">{address}</p>
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {specialties.slice(0, 3).map((specialty) => (
              <span
                key={specialty}
                className="bg-medical-50 text-medical-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {specialty}
              </span>
            ))}
            {specialties.length > 3 && (
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                +{specialties.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-6 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-gray-600">
            <Users className="w-4 h-4" />
            <span className="text-sm">{bedCount} beds</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <Stethoscope className="w-4 h-4" />
            <span className="text-sm">{specialties.length} specialties</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={() => onViewDetails(hospital)}
            className="flex-1 bg-medical-600 text-white py-2 px-4 rounded-lg hover:bg-medical-700 transition-colors font-medium text-sm"
          >
            View Details & Pricing
          </button>
          <a
            href={`tel:${phone}`}
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;