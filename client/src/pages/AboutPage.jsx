import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  Users, 
  Award, 
  Shield, 
  Clock, 
  Globe,
  Target,
  Eye,
  Lightbulb,
  CheckCircle,
  Star,
  Building,
  Stethoscope,
  Activity,
  TrendingUp,
  UserCheck,
  Zap
} from 'lucide-react';

const AboutPage = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Building, label: 'Partner Hospitals', value: '500+', color: 'from-blue-500 to-indigo-600' },
    { icon: Users, label: 'Happy Patients', value: '50K+', color: 'from-emerald-500 to-green-600' },
    { icon: Stethoscope, label: 'Medical Specialists', value: '2,500+', color: 'from-purple-500 to-indigo-600' },
    { icon: Star, label: 'Average Rating', value: '4.8', color: 'from-yellow-500 to-orange-500' }
  ];

  const features = [
    {
      icon: Target,
      title: 'Find the Right Care',
      description: 'Advanced search and filtering to help you find the perfect healthcare provider for your specific needs.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Verified Providers',
      description: 'All hospitals and medical centers in our directory are thoroughly verified and accredited.',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing information so you can make informed healthcare decisions.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with any questions or concerns.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'We believe healthcare should be accessible, transparent, and focused on patient needs.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear pricing, honest reviews, and verified information help you make better decisions.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously improve our platform to provide the best healthcare discovery experience.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: UserCheck,
      title: 'Trust & Quality',
      description: 'Every provider is carefully vetted to ensure you receive the highest quality care.',
      color: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in space-y-12">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-all duration-300 group bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl border border-white/50"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-lg">Back to Directory</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="relative h-80 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          <div className="relative h-full flex items-center justify-center text-center text-white px-8">
            <div>
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">About MediFind</h1>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow">
                Connecting patients with quality healthcare providers through transparency, innovation, and trust
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
      </div>

      {/* Mission Statement */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            At MediFind, we're revolutionizing how people discover and connect with healthcare providers. 
            Our platform empowers patients to make informed decisions about their healthcare by providing 
            transparent pricing, verified provider information, and comprehensive service details.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <p className="text-lg text-blue-800 font-semibold italic">
              "Healthcare should be accessible, transparent, and patient-centered. We're here to make that vision a reality."
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MediFind?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the most comprehensive healthcare directory with features designed to help you find the best care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at MediFind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Built by Healthcare Experts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our team combines healthcare expertise with cutting-edge technology to create the best possible experience for patients and providers
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Stethoscope className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Medical Professionals</h4>
                <p className="text-gray-600">Healthcare experts ensuring accuracy</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Tech Innovators</h4>
                <p className="text-gray-600">Building cutting-edge solutions</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <UserCheck className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Patient Advocates</h4>
                <p className="text-gray-600">Focused on patient experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-12 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Healthcare Provider?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of patients who trust MediFind to help them discover quality healthcare providers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Browse Hospitals
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-blue-500/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;