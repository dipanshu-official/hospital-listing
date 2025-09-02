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
  ChevronUp,
  Navigation,
  CheckCircle,
  Info,
  Search
} from 'lucide-react';
import { mockHospitals } from '../data/mockData';

const HospitalServicesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [favorites, setFavorites] = useState(new Set([1, 3, 5]));
  const [searchTerm, setSearchTerm] = useState('');

  const hospital = mockHospitals.find(h => h.id === parseInt(id));

  if (!hospital) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hospital Not Found</h2>
          <p className="text-gray-600 mb-8 text-lg">The hospital you're looking for doesn't exist in our directory.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
          >
            Back to Hospital Directory
          </button>
        </div>
      </div>
    );
  }

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

  // Get all services for global search
  const allServices = hospital.services.flatMap(category => 
    category.items.map(item => ({
      ...item,
      category: category.category
    }))
  );

  // Filter services based on search term
  const globalFilteredServices = searchTerm 
    ? allServices.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const categoryFilteredServices = searchTerm && !searchTerm.trim()
    ? hospital.services[selectedCategory]?.items || []
    : hospital.services[selectedCategory]?.items.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) || [];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-3 text-gray-600 hover:text-slate-600 transition-all duration-200 group bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md hover:shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Directory</span>
        </button>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md">
          <Clock className="w-4 h-4" />
          <span>Updated 2 minutes ago</span>
        </div>
      </div>

      {/* Hospital Hero Section */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Hero Image with Overlay */}
        <div className="relative h-80 bg-gradient-to-br from-blue-50 to-indigo-100">
          <img
            src={hospital.image}
            alt={hospital.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Floating Action Buttons */}
          <div className="absolute top-6 right-6 flex space-x-3">
            <button
              onClick={toggleFavorite}
              className={`p-4 backdrop-blur-md rounded-2xl border transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 ${
                isFavorite 
                  ? 'bg-pink-400/90 text-white border-pink-300' 
                  : 'bg-white/90 text-gray-600 border-white/50 hover:bg-pink-50 hover:text-pink-400'
              }`}
            >
              <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button className="p-4 backdrop-blur-md rounded-2xl border bg-white/90 text-gray-600 border-white/50 hover:bg-blue-50 hover:text-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110">
              <Navigation className="w-6 h-6" />
          </div>

          {/* Hospital Title */}
          <div className="absolute bottom-8 left-8 text-white">
            <div className="flex items-center space-x-4 mb-3">
              <h1 className="text-5xl font-bold drop-shadow-lg">{hospital.name}</h1>
              {hospital.isVerified && (
                <div className="bg-emerald-500 p-3 rounded-2xl shadow-xl">
                  <Award className="w-7 h-7" />
                </div>
              )}
            </div>
            <div className="flex items-center space-x-6 mb-4">
              <span className="text-xl font-semibold text-blue-200 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                {hospital.type}
              </span>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                <Star className="w-6 h-6 text-yellow-400 fill-current drop-shadow" />
                <span className="font-bold text-xl">{hospital.rating}</span>
                <span className="text-blue-200">({hospital.reviewCount} reviews)</span>
              </div>
            </div>
            <p className="text-blue-100 text-lg max-w-2xl leading-relaxed drop-shadow">
              {hospital.description}
            </p>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-2xl text-gray-900">{hospital.bedCount}</div>
              <div className="text-sm text-gray-600 font-medium">Hospital Beds</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-2xl text-gray-900">{hospital.doctors}</div>
              <div className="text-sm text-gray-600 font-medium">Medical Doctors</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-2xl text-gray-900">{hospital.established}</div>
              <div className="text-sm text-gray-600 font-medium">Established</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-2xl text-gray-900">{hospital.isOpen24h ? '24/7' : 'Limited'}</div>
              <div className="text-sm text-gray-600 font-medium">Operating Hours</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-sm text-gray-900 leading-tight">{hospital.accreditation.split(' ')[0]}</div>
              <div className="text-sm text-gray-600 font-medium">Accredited</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="px-8 py-6 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Address</p>
                <p className="text-gray-900 font-semibold">{hospital.address}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <a href={`tel:${hospital.phone}`} className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
                  {hospital.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <a href={`mailto:${hospital.email}`} className="text-purple-600 hover:text-purple-700 font-semibold transition-colors">
                  {hospital.email.split('@')[0]}@...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 text-white">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-3">Medical Services & Pricing</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
              Browse our comprehensive medical services by category. Use the search to find specific services or select a category from the navigation.
            </p>
          </div>
        </div>

        {/* Services Navigation & Content */}
        <div className="flex">
          {/* Services Navigation */}
          <div className="w-80 bg-gradient-to-b from-gray-50 to-blue-50 border-r border-gray-200 flex flex-col">
            {/* Search Box */}
            <div className="p-6 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                />
              </div>
            </div>

            <div className="p-6 flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Stethoscope className="w-5 h-5 text-blue-600" />
                <span>Service Categories</span>
              </h3>
              <div className="space-y-2">
                {hospital.services.map((serviceCategory, categoryIndex) => (
                  <button
                    key={serviceCategory.category}
                    onClick={() => {
                      setSelectedCategory(categoryIndex);
                      setSearchTerm(''); // Clear search when selecting category
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 border ${
                      selectedCategory === categoryIndex && !searchTerm
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-blue-500 shadow-lg'
                        : 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-base mb-1">{serviceCategory.category}</h4>
                        <p className={`text-sm ${
                          selectedCategory === categoryIndex && !searchTerm ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {serviceCategory.items.length} services
                        </p>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${
                        selectedCategory === categoryIndex && !searchTerm ? 'bg-white' : 'bg-blue-500'
                      }`}></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Content */}
          <div className="flex-1 p-8">
            {searchTerm ? (
              /* Global Search Results */
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Search Results
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Found {globalFilteredServices.length} services matching "{searchTerm}"
                  </p>
                </div>

                {globalFilteredServices.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {globalFilteredServices.map((service, serviceIndex) => (
                      <div 
                        key={serviceIndex} 
                        className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                      >
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                  {service.category}
                                </span>
                              </div>
                              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {service.name}
                              </h4>
                              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                              
                              <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center space-x-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                  <CheckCircle className="w-4 h-4" />
                                  <span className="font-medium">Available</span>
                                </div>
                                <div className="flex items-center space-x-1 text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                  <Calendar className="w-4 h-4" />
                                  <span className="font-medium">Book Online</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg">
                              <div className="text-xl font-bold">{service.price}</div>
                              <div className="text-blue-100 text-xs font-medium">Starting from</div>
                            </div>
                            <button className="bg-white border-2 border-blue-200 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 font-semibold shadow-sm hover:shadow-md hover:scale-105">
                              Get Quote
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl border-2 border-dashed border-gray-300">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Search className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">No Services Found</h4>
                    <p className="text-gray-600 mb-6 text-lg max-w-md mx-auto">
                      No services match your search term "{searchTerm}". Try a different keyword.
                    </p>
                    <button
                      onClick={() => setSearchTerm('')}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                      Clear Search
                    </button>
                  </div>
                )}
              </div>
            ) : hospital.services[selectedCategory] && (
              <div className="space-y-6">
                {/* Category Header */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {hospital.services[selectedCategory].category}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {hospital.services[selectedCategory].items.length} available services in this category
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {hospital.services[selectedCategory].items.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex} 
                      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                            
                            <div className="flex items-center space-x-4 text-sm">
                              <div className="flex items-center space-x-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                <CheckCircle className="w-4 h-4" />
                                <span className="font-medium">Available</span>
                              </div>
                              <div className="flex items-center space-x-1 text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                <Calendar className="w-4 h-4" />
                                <span className="font-medium">Book Online</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg">
                            <div className="text-xl font-bold">{service.price}</div>
                            <div className="text-blue-100 text-xs font-medium">Starting from</div>
                          </div>
                          <button className="bg-white border-2 border-blue-200 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 font-semibold shadow-sm hover:shadow-md hover:scale-105">
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pricing Information */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-200 px-8 py-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Info className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Important Pricing Information</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                All prices shown are starting estimates and may vary based on individual medical needs, insurance coverage, 
                and specific treatment requirements. Final costs will be determined after consultation with our medical team.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl shadow-sm">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span className="text-gray-700 font-medium">Call for exact pricing: </span>
                  <a href={`tel:${hospital.phone}`} className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    {hospital.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl shadow-sm">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-gray-700 font-medium">Insurance verification available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
          <p className="text-gray-600">Book an appointment or contact the hospital directly</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105">
            <Calendar className="w-5 h-5" />
            <span>Book Appointment</span>
          </button>
          <a
            href={`tel:${hospital.phone}`}
            className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 px-6 rounded-2xl hover:from-emerald-700 hover:to-green-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>Call Hospital</span>
          </a>
          <button className="bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 px-6 rounded-2xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 font-semibold flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105">
            <Navigation className="w-5 h-5" />
            <span>Get Directions</span>
          </button>
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Specialties */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            <span>Medical Specialties</span>
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {hospital.specialties.map((specialty, index) => (
              <div
                key={specialty}
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl hover:from-purple-100 hover:to-indigo-100 transition-all duration-200"
              >
                <div className="w-2 h-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full"></div>
                <span className="font-semibold text-gray-800">{specialty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span>Accepted Insurance</span>
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {hospital.insurance.map((plan, index) => (
              <div
                key={plan}
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl hover:from-emerald-100 hover:to-green-100 transition-all duration-200"
              >
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold text-gray-800">{plan}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalServicesPage;