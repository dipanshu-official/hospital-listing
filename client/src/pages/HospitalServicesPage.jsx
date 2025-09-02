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
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
        {/* Hero Image */}
        <div className="relative h-64 bg-gradient-to-br from-medical-100 to-teal-100">
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
                ? 'bg-red-500 text-white border-red-500' 
                : 'bg-white/90 text-gray-600 border-white/50 hover:bg-red-50 hover:text-red-500'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-4xl font-bold">{hospital.name}</h1>
              {hospital.isVerified && (
                <div className="bg-green-500 p-2 rounded-full">
                  <Award className="w-6 h-6" />
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-white/90 font-medium text-lg">{hospital.type}</p>
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{hospital.rating}</span>
                <span className="text-white/80">({hospital.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hospital Info */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{hospital.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <a href={`tel:${hospital.phone}`} className="text-medical-600 hover:text-medical-700 transition-colors">
                    {hospital.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <a href={`mailto:${hospital.email}`} className="text-medical-600 hover:text-medical-700 transition-colors">
                    {hospital.email}
                  </a>
                </div>
                {hospital.website && (
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <a 
                      href={hospital.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-medical-600 hover:text-medical-700 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Hospital Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-medical-50 rounded-lg">
                  <Users className="w-6 h-6 text-medical-600 mx-auto mb-2" />
                  <div className="font-bold text-lg">{hospital.bedCount}</div>
                  <div className="text-sm text-gray-600">Beds</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <Stethoscope className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                  <div className="font-bold text-lg">{hospital.doctors}</div>
                  <div className="text-sm text-gray-600">Doctors</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-lg">{hospital.established}</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-lg">{hospital.isOpen24h ? '24/7' : 'Limited'}</div>
                  <div className="text-sm text-gray-600">Hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services & Pricing Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Services & Pricing</h2>
          <p className="text-gray-600 text-lg">Comprehensive medical services with transparent pricing</p>
        </div>

        <div className="space-y-4">
          {hospital.services.map((serviceCategory, categoryIndex) => (
            <div key={serviceCategory.category} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleServiceExpansion(categoryIndex)}
                className="w-full bg-gradient-to-r from-medical-50 to-teal-50 hover:from-medical-100 hover:to-teal-100 px-6 py-5 flex items-center justify-between transition-all duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-medical-500 rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-900">{serviceCategory.category}</h3>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-medical-600 font-medium bg-white px-3 py-1 rounded-full">
                    {serviceCategory.items.length} services
                  </span>
                  {expandedService === categoryIndex ? (
                    <ChevronUp className="w-6 h-6 text-medical-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-medical-600" />
                  )}
                </div>
              </button>
              
              {expandedService === categoryIndex && (
                <div className="bg-white animate-slide-up">
                  {serviceCategory.items.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex} 
                      className="px-6 py-5 border-t border-gray-100 hover:bg-medical-25 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-medical-700 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                        <div className="ml-8 text-right">
                          <div className="bg-gradient-to-r from-medical-500 to-teal-500 text-white px-6 py-3 rounded-xl shadow-lg">
                            <div className="text-2xl font-bold">{service.price}</div>
                            <div className="text-xs opacity-90 font-medium">Starting from</div>
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
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2 text-lg">Important Pricing Information</h4>
              <p className="text-blue-800 leading-relaxed mb-4">
                Prices shown are estimates and may vary based on individual circumstances, insurance coverage, and specific treatment requirements. Please contact our billing department for detailed cost information and insurance verification.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 font-medium">Call for pricing: {hospital.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 font-medium">Email: {hospital.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="flex-1 bg-medical-600 text-white py-4 px-6 rounded-xl hover:bg-medical-700 transition-colors font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
            <Calendar className="w-5 h-5" />
            <span>Book Appointment</span>
          </button>
          <a
            href={`tel:${hospital.phone}`}
            className="flex-1 bg-teal-600 text-white py-4 px-6 rounded-xl hover:bg-teal-700 transition-colors font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-5 h-5" />
            <span>Call Hospital</span>
          </a>
          <button className="flex-1 bg-gray-600 text-white py-4 px-6 rounded-xl hover:bg-gray-700 transition-colors font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
            <MapPin className="w-5 h-5" />
            <span>Get Directions</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalServicesPage;