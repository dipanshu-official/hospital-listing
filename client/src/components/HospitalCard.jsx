import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    isOpen24h,
    bedCount,
    isVerified
  } = hospital;

  const handleViewServices = () => {
    navigate(`/hospital/${id}/services`);
  };

  return (
    <div className="hospital-card bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden card-hover">
      {/* Hospital Image */}
      <div className="relative h-48 bg-gradient-to-br from-medical-100 to-medical-200">
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
            <div className="bg-success-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 shadow-lg">
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
                ? 'bg-error-500 text-white border-error-500 shadow-lg' 
                : 'bg-white/90 text-gray-600 border-white/50 hover:bg-error-50 hover:text-error-500 shadow-md'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
        {isOpen24h && (
          <div className="absolute bottom-3 left-3 bg-success-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
            <Clock className="w-4 h-4" />
            <span>24/7</span>
          </div>
        )}
      </div>

      {/* Hospital Info */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-1 leading-tight">
            {name}
          </h3>
          <p className="text-medical-500 font-semibold text-sm">{type}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 transition-colors ${
                  i < Math.floor(rating) 
                    ? 'text-warning-400 fill-current' 
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
                className="bg-medical-100 text-medical-700 px-3 py-1 rounded-full text-xs font-semibold border border-medical-200"
              >
                {specialty}
              </span>
            ))}
            {specialties.length > 3 && (
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold border border-gray-200">
                +{specialties.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-6 pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-1 text-gray-500">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">{bedCount} beds</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <Stethoscope className="w-4 h-4" />
            <span className="text-sm font-medium">{specialties.length} specialties</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={handleViewServices}
            className="flex-1 bg-gradient-to-r from-medical-500 to-medical-600 text-white py-3 px-4 rounded-xl hover:from-medical-600 hover:to-medical-700 transition-all duration-200 font-semibold text-sm flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>View Services & Pricing</span>
          </button>
          <a
            href={`tel:${phone}`}
            className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;