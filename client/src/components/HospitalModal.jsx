import React, { useState } from 'react';
import { 
  X, 
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
  Navigation,
  Mail,
  Building,
  Shield,
  DollarSign,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const HospitalModal = ({ hospital, isOpen, onClose, isFavorite, onToggleFavorite }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedService, setExpandedService] = useState(null);

  if (!isOpen) return null;

  const {
    id,
    name,
    type,
    rating,
    reviewCount,
    address,
    phone,
    website,
    email,
    image,
    specialties,
    isOpen24h,
    bedCount,
    isVerified,
    description,
    services,
    doctors,
    emergencyServices,
    established,
    accreditation,
    facilities,
    insurance
  } = hospital;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Building },
    { id: 'services', label: 'Services & Pricing', icon: DollarSign },
    { id: 'facilities', label: 'Facilities', icon: Stethoscope },
    { id: 'insurance', label: 'Insurance', icon: Shield }
  ];

  const toggleServiceExpansion = (categoryIndex) => {
    setExpandedService(expandedService === categoryIndex ? null : categoryIndex);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
          {/* Header Image */}
          <div className="relative h-64 bg-gradient-to-br from-medical-100 to-teal-100">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Favorite Button */}
            <button
              onClick={() => onToggleFavorite(id)}
              className={`absolute top-4 right-16 p-2 backdrop-blur-sm rounded-full border transition-all shadow-lg ${
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
                <h2 className="text-4xl font-bold">{name}</h2>
                {isVerified && (
                  <div className="bg-green-500 p-2 rounded-full">
                    <Award className="w-5 h-5" />
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-white/90 font-medium text-lg">{type}</p>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{rating}</span>
                  <span className="text-white/80">({reviewCount} reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
            <div className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-medical-600 text-medical-600'
                        : 'border-transparent text-gray-600 hover:text-medical-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center p-4 bg-medical-50 rounded-lg">
                    <Users className="w-6 h-6 text-medical-600 mx-auto mb-2" />
                    <div className="font-bold text-lg">{bedCount}</div>
                    <div className="text-sm text-gray-600">Beds</div>
                  </div>
                  <div className="text-center p-4 bg-teal-50 rounded-lg">
                    <Stethoscope className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                    <div className="font-bold text-lg">{doctors}</div>
                    <div className="text-sm text-gray-600">Doctors</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-lg">{established}</div>
                    <div className="text-sm text-gray-600">Established</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="font-bold text-lg">{isOpen24h ? '24/7' : 'Limited'}</div>
                    <div className="text-sm text-gray-600">Hours</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <Award className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                    <div className="font-bold text-xs leading-tight">{accreditation}</div>
                    <div className="text-sm text-gray-600">Accreditation</div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">About {name}</h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>

                {/* Specialties */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Specialties</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {specialties.map((specialty) => (
                      <div
                        key={specialty}
                        className="bg-medical-50 border border-medical-200 text-medical-800 px-4 py-3 rounded-lg text-sm font-medium text-center hover:bg-medical-100 transition-colors"
                      >
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-700">{address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <a href={`tel:${phone}`} className="text-medical-600 hover:text-medical-700 transition-colors">
                          {phone}
                        </a>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <a href={`mailto:${email}`} className="text-medical-600 hover:text-medical-700 transition-colors">
                          {email}
                        </a>
                      </div>
                      {website && (
                        <div className="flex items-center space-x-3">
                          <Globe className="w-5 h-5 text-gray-400" />
                          <a 
                            href={website} 
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
                </div>
              </div>
            )}

            {/* Services & Pricing Tab */}
            {activeTab === 'services' && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Services & Pricing</h3>
                  <p className="text-gray-600">Comprehensive medical services with transparent pricing</p>
                </div>

                {services.map((serviceCategory, categoryIndex) => (
                  <div key={serviceCategory.category} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleServiceExpansion(categoryIndex)}
                      className="w-full bg-gray-50 hover:bg-gray-100 px-6 py-4 flex items-center justify-between transition-colors"
                    >
                      <h4 className="text-lg font-semibold text-gray-900">{serviceCategory.category}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{serviceCategory.items.length} services</span>
                        {expandedService === categoryIndex ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    {expandedService === categoryIndex && (
                      <div className="bg-white">
                        {serviceCategory.items.map((service, serviceIndex) => (
                          <div 
                            key={serviceIndex} 
                            className="px-6 py-4 border-t border-gray-100 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <h5 className="font-semibold text-gray-900 mb-1">{service.name}</h5>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                              </div>
                              <div className="ml-4 text-right">
                                <div className="text-xl font-bold text-medical-600">{service.price}</div>
                                <div className="text-xs text-gray-500">Starting from</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <DollarSign className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Pricing Information</h4>
                      <p className="text-blue-800 text-sm">
                        Prices shown are estimates and may vary based on individual circumstances, insurance coverage, and specific treatment requirements. Please contact our billing department for detailed cost information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Facilities Tab */}
            {activeTab === 'facilities' && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Hospital Facilities</h3>
                  <p className="text-gray-600">State-of-the-art medical facilities and amenities</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-3 h-3 bg-medical-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-800 font-medium">{facility}</span>
                    </div>
                  ))}
                </div>

                {emergencyServices && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 text-red-700">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                      <h4 className="font-semibold text-lg">24/7 Emergency Services Available</h4>
                    </div>
                    <p className="text-red-600 mt-2">
                      Our emergency department is staffed around the clock with board-certified emergency physicians and trauma specialists.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Insurance Tab */}
            {activeTab === 'insurance' && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Accepted Insurance Plans</h3>
                  <p className="text-gray-600">We work with most major insurance providers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {insurance.map((plan, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{plan}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-1">Insurance Verification</h4>
                      <p className="text-yellow-800 text-sm">
                        Please verify your specific coverage with your insurance provider before receiving services. Our billing department can help verify benefits and estimate your out-of-pocket costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex-1 bg-medical-600 text-white py-3 px-6 rounded-lg hover:bg-medical-700 transition-colors font-semibold flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
              <button className="flex-1 bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors font-semibold flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
              <button className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors font-semibold flex items-center justify-center space-x-2">
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalModal;