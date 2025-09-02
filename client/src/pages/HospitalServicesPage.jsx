import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Phone, 
  Globe, 
  Clock, 
  Heart,
  Users,
  Award,
  Stethoscope,
  Calendar,
  Mail,
  Building,
  Shield,
  DollarSign,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { mockHospitals } from '../data/mockData';

const HospitalServicesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState(null);
  const [favorites, setFavorites] = useState(new Set());

  const hospital = mockHospitals.find(h => h.id === parseInt(id));

  if (!hospital) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Hospital Not Found</h2>
        <p className="text-gray-600 mb-6">The hospital you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-medical-600 text-white px-6 py-3 rounded-lg hover:bg-medical-700 transition-colors"
        >
          Back to Hospital List
        </button>
      </div>
    );
  }

  const toggleServiceExpansion = (categoryIndex) => {
    setExpandedService(expandedService === categoryIndex ? null : categoryIndex);
  };

  const toggleFavorite = () => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(hospital.id)) {
      newFavorites.delete(hospital.id);
    } else {
      newFavorites.add(hospital.id);
    }
    setFavorites(newFavorites);
  };

  const isFavorite = favorites.has(hospital.id);

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center space-x-2 text-gray-600 hover:text-medical-600 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back to Hospital List</span>
      </button>

      {/* Hospital Header */}
      <div className="glass-effect rounded-2xl shadow-xl border border-white/30 overflow-hidden mb-8">
        {/* Hero Image */}
        <div className="relative h-72 bg-gradient-to-br from-medical-100 to-medical-200">
          <img
            src={hospital.image}
            alt={hospital.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className={`absolute top-6 right-6 p-3 backdrop-blur-sm rounded-full border transition-all shadow-lg ${
              isFavorite 
                ? 'bg-error-500 text-white border-error-500' 
                : 'bg-white/90 text-gray-600 border-white/50 hover:bg-error-50 hover:text-error-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-5xl font-bold drop-shadow-lg">{hospital.name}</h1>
              {hospital.isVerified && (
                <div className="bg-success-500 p-3 rounded-full shadow-lg">
                  <Award className="w-6 h-6" />
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-white/90 font-semibold text-xl drop-shadow">{hospital.type}</p>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-warning-400 fill-current drop-shadow" />
                <span className="font-bold text-lg drop-shadow">{hospital.rating}</span>
                <span className="text-white/90 drop-shadow">({hospital.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hospital Info */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-medical-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{hospital.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-medical-600" />
                  </div>
                  <a href={`tel:${hospital.phone}`} className="text-medical-600 hover:text-medical-700 transition-colors font-medium">
                    {hospital.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-medical-600" />
                  </div>
                  <a href={`mailto:${hospital.email}`} className="text-medical-600 hover:text-medical-700 transition-colors font-medium">
                    {hospital.email}
                  </a>
                </div>
                {hospital.website && (
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-medical-100 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-medical-600" />
                    </div>
                    <a 
                      href={hospital.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-medical-600 hover:text-medical-700 transition-colors font-medium"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Hospital Information</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-4 bg-gradient-to-br from-medical-50 to-medical-100 rounded-xl border border-medical-200 shadow-sm">
                  <Users className="w-7 h-7 text-medical-600 mx-auto mb-2" />
                  <div className="font-bold text-xl text-gray-800">{hospital.bedCount}</div>
                  <div className="text-sm text-gray-600 font-medium">Beds</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-success-50 to-success-100 rounded-xl border border-success-200 shadow-sm">
                  <Stethoscope className="w-7 h-7 text-success-600 mx-auto mb-2" />
                  <div className="font-bold text-xl text-gray-800">{hospital.doctors}</div>
                  <div className="text-sm text-gray-600 font-medium">Doctors</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-warning-50 to-warning-100 rounded-xl border border-warning-200 shadow-sm">
                  <Calendar className="w-7 h-7 text-warning-600 mx-auto mb-2" />
                  <div className="font-bold text-xl text-gray-800">{hospital.established}</div>
                  <div className="text-sm text-gray-600 font-medium">Established</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 shadow-sm">
                  <Clock className="w-7 h-7 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-xl text-gray-800">{hospital.isOpen24h ? '24/7' : 'Limited'}</div>
                  <div className="text-sm text-gray-600 font-medium">Hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services & Pricing Section */}
      <div className="glass-effect rounded-2xl shadow-xl border border-white/30 p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold gradient-text mb-4">Services & Pricing</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Comprehensive medical services with transparent pricing</p>
        </div>

        <div className="space-y-6">
          {hospital.services.map((serviceCategory, categoryIndex) => (
            <div key={serviceCategory.category} className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <button
                onClick={() => toggleServiceExpansion(categoryIndex)}
                className="w-full bg-gradient-to-r from-medical-50 to-medical-100 hover:from-medical-100 hover:to-medical-200 px-8 py-6 flex items-center justify-between transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-5 h-5 bg-gradient-to-br from-medical-500 to-medical-600 rounded-full shadow-md"></div>
                  <h3 className="text-2xl font-bold text-gray-800">{serviceCategory.category}</h3>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-medical-700 font-semibold bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-medical-200 shadow-md">
                    {serviceCategory.items.length} services
                  </span>
                  {expandedService === categoryIndex ? (
                    <ChevronUp className="w-6 h-6 text-medical-700" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-medical-700" />
                  )}
                </div>
              </button>
              
              {expandedService === categoryIndex && (
                <div className="bg-white/90 backdrop-blur-sm animate-slide-up">
                  {serviceCategory.items.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex} 
                      className="px-8 py-6 border-t border-gray-100 hover:bg-medical-50/50 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-3 text-xl group-hover:text-medical-700 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
                        </div>
                        <div className="ml-8 text-right">
                          <div className="bg-gradient-to-r from-medical-500 to-medical-600 text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200">
                            <div className="text-2xl font-bold">{service.price}</div>
                            <div className="text-xs opacity-90 font-semibold">Starting from</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pricing Disclaimer */}
        <div className="mt-8 bg-gradient-to-r from-medical-50 to-blue-50 border border-medical-200 rounded-2xl p-8 shadow-lg">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-medical-500 to-medical-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-3 text-xl">Important Pricing Information</h4>
              <p className="text-gray-700 leading-relaxed mb-4 text-base">
                Prices shown are estimates and may vary based on individual circumstances, insurance coverage, and specific treatment requirements. Please contact our billing department for detailed cost information and insurance verification.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-medical-600" />
                  <span className="text-medical-700 font-semibold">Call for pricing: {hospital.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-medical-600" />
                  <span className="text-medical-700 font-semibold">Email: {hospital.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="flex-1 bg-gradient-to-r from-medical-500 to-medical-600 text-white py-4 px-6 rounded-xl hover:from-medical-600 hover:to-medical-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105">
            <Calendar className="w-5 h-5" />
            <span>Book Appointment</span>
          </button>
          <a
            href={`tel:${hospital.phone}`}
            className="flex-1 bg-gradient-to-r from-success-500 to-success-600 text-white py-4 px-6 rounded-xl hover:from-success-600 hover:to-success-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>Call Hospital</span>
          </a>
          <button className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white py-4 px-6 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105">
            <MapPin className="w-5 h-5" />
            <span>Get Directions</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalServicesPage;