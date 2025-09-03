import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Building, Pill, Stethoscope, Heart, ArrowRight, Star, Users, Award } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

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
      <div className="text-center space-y-8">
        <div className="space-y-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent leading-tight">
            Find Quality Healthcare
          </h1>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Your comprehensive directory for hospitals, pharmacies, and healthcare services. 
            Discover quality care with transparent pricing and verified providers.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
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
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-200/50 p-8">
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