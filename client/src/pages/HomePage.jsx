import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Building, Pill, Stethoscope, Heart, ArrowRight, Star, Users, Award } from 'lucide-react';
import SearchFilters from '../components/SearchFilters';
import { mockHospitals, mockMedicalStores, mockServices } from '../data/mockData';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = [];

    // Search hospitals
    mockHospitals.forEach(hospital => {
      if (
        hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        hospital.address.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        results.push({
          type: 'hospital',
          id: hospital.id,
          name: hospital.name,
          description: hospital.description,
          rating: hospital.rating,
          location: `${hospital.address.split(',')[1]}, ${hospital.address.split(',')[2]}`,
          hospitalId: hospital.id,
          hospitalType: hospital.type
        });
      }

      // Search services within each hospital
      hospital.services.forEach(serviceCategory => {
        serviceCategory.items.forEach(service => {
          if (
            service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            serviceCategory.category.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            results.push({
              type: 'service',
              id: `${hospital.id}-${service.name}`,
              name: service.name,
              description: service.description,
              price: service.price,
              category: serviceCategory.category,
              hospitalName: hospital.name,
              hospitalId: hospital.id,
              location: `${hospital.address.split(',')[1]}, ${hospital.address.split(',')[2]}`,
              hospitalType: hospital.type
            });
          }
        });
      });
    });

    // Search medical stores
    mockMedicalStores.forEach(store => {
      if (
        store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        store.services.some(service => 
          service.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        store.address.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        results.push({
          type: 'medical-store',
          id: store.id,
          name: store.name,
          description: store.description,
          rating: store.rating,
          location: `${store.address.split(',')[1]}, ${store.address.split(',')[2]}`,
          storeId: store.id,
          storeType: store.type
        });
      }

      // Search products within each store
      store.products.forEach(productCategory => {
        productCategory.items.forEach(product => {
          if (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            productCategory.category.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            results.push({
              type: 'product',
              id: `${store.id}-${product.name}`,
              name: product.name,
              description: product.description,
              price: product.price,
              category: productCategory.category,
              storeName: store.name,
              storeId: store.id,
              location: `${store.address.split(',')[1]}, ${store.address.split(',')[2]}`,
              storeType: store.type
            });
          }
        });
      });
    });

    // Search healthcare services
    mockServices.forEach(service => {
      if (
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        service.address.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        results.push({
          type: 'healthcare-service',
          id: service.id,
          name: service.name,
          description: service.description,
          rating: service.rating,
          location: service.address,
          serviceId: service.id,
          serviceType: service.type
        });
      }

      // Search service offerings within each service
      if (service.serviceOfferings) {
        service.serviceOfferings.forEach(serviceCategory => {
          serviceCategory.items.forEach(offering => {
            if (
              offering.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              offering.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
              serviceCategory.category.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              results.push({
                type: 'service-offering',
                id: `${service.id}-${offering.name}`,
                name: offering.name,
                description: offering.description,
                price: offering.price,
                category: serviceCategory.category,
                serviceName: service.name,
                serviceId: service.id,
                location: service.address,
                serviceType: service.type
              });
            }
          });
        });
      }
    });

    setSearchResults(results);
  };
  const categories = [
    {
      id: 'hospitals',
      name: 'Hospitals',
      icon: Building,
      description: 'Find medical centers and hospitals near you',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      count: '500+',
      route: '/hospitals',
      features: ['24/7 Emergency Care', 'Specialist Doctors', 'Advanced Equipment', 'Insurance Accepted']
    },
    {
      id: 'medical-stores',
      name: 'Medical Stores',
      icon: Pill,
      description: 'Pharmacies and medical supplies near you',
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200',
      count: '200+',
      route: '/medical-stores',
      features: ['Prescription Medications', 'Medical Equipment', 'Health Products', 'Home Delivery']
    },
    {
      id: 'services',
      name: 'Healthcare Services',
      icon: Stethoscope,
      description: 'Home care and mobile medical services',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      count: '150+',
      route: '/services',
      features: ['Home Healthcare', 'Mobile Diagnostics', 'Nursing Care', 'Therapy Services']
    }
  ];

  const handleCategoryClick = (category) => {
    toast.success(`Opening ${category.name} directory`);
    navigate(category.route);
  };

  const stats = [
    { icon: Building, label: 'Partner Hospitals', value: '500+', color: 'from-blue-500 to-indigo-600' },
    { icon: Users, label: 'Happy Patients', value: '50K+', color: 'from-emerald-500 to-green-600' },
    { icon: Stethoscope, label: 'Medical Specialists', value: '2,500+', color: 'from-purple-500 to-indigo-600' },
    { icon: Star, label: 'Average Rating', value: '4.8', color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
      {/* Hero Section */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Background Image */}
        <div className="relative h-96 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          <div className="relative h-full flex items-center justify-center text-center text-white px-8">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-6xl font-bold drop-shadow-lg leading-tight">
                  Find Quality Healthcare
                </h1>
                <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed drop-shadow">
                  Your comprehensive directory for hospitals, pharmacies, and healthcare services. 
                  Discover quality care with transparent pricing and verified providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <SearchFilters 
        onSearch={handleSearch}
        searchResults={searchResults}
        isSearching={isSearching}
        selectedCategory="all"
      />

      {/* Stats Section */}
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-200/50 p-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className="font-bold text-4xl text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-200/50 p-8" id="categories">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Choose Healthcare Category
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Select the type of healthcare provider you're looking for. Browse hospitals, pharmacies, or specialized services.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            
            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className="group relative overflow-hidden rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer bg-white"
              >
                <div className={`bg-gradient-to-br ${category.bgColor} p-8 h-full`}>
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Count Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-xl font-bold text-sm shadow-lg bg-white text-gray-600 group-hover:bg-gray-100">
                      {category.count} providers
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 pt-4">
                      {category.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <div className={`bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                        <span>Browse {category.name}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-12 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Healthcare Provider?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of patients who trust HealthHub to help them discover quality healthcare providers with transparent pricing and verified information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleCategoryClick({ name: 'Hospitals', route: '/hospitals' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Find Hospitals
            </button>
            <button
              onClick={() => navigate('/about')}
              className="bg-blue-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;