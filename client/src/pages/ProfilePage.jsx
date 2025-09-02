import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  User, 
  Heart, 
  Settings, 
  Bell, 
  Shield, 
  CreditCard,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Star,
  Edit3,
  Save,
  X,
  Camera,
  Clock,
  Award,
  CheckCircle,
  Building,
  Activity,
  FileText,
  Lock,
  Download,
  Trash2,
  UserX
} from 'lucide-react';
import { mockHospitals } from '../data/mockData';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '(555) 123-4567',
    dateOfBirth: '1985-06-15',
    address: '123 Main St, San Francisco, CA 94102',
    emergencyContact: 'Jane Doe - (555) 987-6543',
    insurance: 'Blue Cross Blue Shield',
    memberSince: '2023'
  });

  // Mock favorite hospitals
  const favoriteHospitalIds = [1, 3, 5];
  const favoriteHospitals = mockHospitals.filter(hospital => 
    favoriteHospitalIds.includes(hospital.id)
  );

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User, color: 'blue' },
    { id: 'favorites', label: 'Favorites', icon: Heart, color: 'red' },
    { id: 'settings', label: 'Settings', icon: Settings, color: 'purple' }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const getTabColorClasses = (color, isActive) => {
    const colors = {
      blue: isActive ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-transparent text-gray-600 hover:text-blue-600 hover:bg-blue-50',
      red: isActive ? 'border-red-500 text-red-600 bg-red-50' : 'border-transparent text-gray-600 hover:text-red-600 hover:bg-red-50',
      purple: isActive ? 'border-purple-500 text-purple-600 bg-purple-50' : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-purple-50'
    };
    return colors[color];
  };

  return (
    <div className="max-w-7xl mx-auto animate-fade-in space-y-8">
      {/* Navigation Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-all duration-300 group bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl border border-white/50"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-lg">Back to Hospital Directory</span>
        </button>
        
        <div className="flex items-center space-x-3 text-sm text-gray-500 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-white/50">
          <Activity className="w-4 h-4 text-emerald-500" />
          <span className="font-medium">Account Active</span>
        </div>
      </div>

      {/* Profile Hero Section */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Hero Background */}
        <div className="relative h-64 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        </div>
        
        <div className="relative px-8 pb-8">
          {/* Profile Picture */}
          <div className="absolute -top-20 left-8">
            <div className="relative group">
              <div className="w-40 h-40 bg-gradient-to-br from-white to-gray-100 rounded-3xl border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden">
                <User className="w-20 h-20 text-gray-400" />
              </div>
              <button className="absolute bottom-3 right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 group-hover:rotate-12">
                <Camera className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Profile Information */}
          <div className="pt-24 flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-6 lg:space-y-0">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {profileData.firstName} {profileData.lastName}
                </h1>
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg">
                  VERIFIED
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600 text-lg">{profileData.email}</span>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-gray-500">
                <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-xl">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Member since {profileData.memberSince}</span>
                </div>
                <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-xl">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="font-medium">{favoriteHospitals.length} favorites</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-xl">
                  <Shield className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">{profileData.insurance}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                isEditing 
                  ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700' 
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'
              }`}
            >
              {isEditing ? <X className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
              <span className="text-lg">{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
            </button>
          </div>
        </div>

        {/* Account Stats */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-8 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-3xl text-gray-900 mb-1">{favoriteHospitals.length}</div>
              <div className="text-gray-600 font-medium">Favorite Hospitals</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-3xl text-gray-900 mb-1">12</div>
              <div className="text-gray-600 font-medium">Appointments</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-3xl text-gray-900 mb-1">8</div>
              <div className="text-gray-600 font-medium">Reviews Written</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="font-bold text-3xl text-gray-900 mb-1">2</div>
              <div className="text-gray-600 font-medium">Years Active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
          <div className="flex space-x-2 px-8 py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 py-4 px-6 rounded-2xl border-2 transition-all duration-300 font-semibold hover:scale-105 ${
                    getTabColorClasses(tab.color, isActive)
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-lg">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-8">
              {/* Edit Mode Banner */}
              {isEditing && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 animate-slide-up">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Edit3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-blue-900 text-lg">Edit Mode Active</h3>
                        <p className="text-blue-700">Make changes to your profile information</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={handleSaveProfile}
                        className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-2xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <Save className="w-5 h-5" />
                        <span>Save Changes</span>
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-2xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <X className="w-5 h-5" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Personal Information</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">First Name</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={profileData.firstName}
                            onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
                          />
                        ) : (
                          <div className="bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm">
                            <span className="text-gray-900 font-semibold">{profileData.firstName}</span>
                          </div>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">Last Name</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={profileData.lastName}
                            onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
                          />
                        ) : (
                          <div className="bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm">
                            <span className="text-gray-900 font-semibold">{profileData.lastName}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Email Address</label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
                        />
                      ) : (
                        <div className="bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-blue-500" />
                          <span className="text-gray-900 font-semibold">{profileData.email}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Phone Number</label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
                        />
                      ) : (
                        <div className="bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-emerald-500" />
                          <span className="text-gray-900 font-semibold">{profileData.phone}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Date of Birth</label>
                      {isEditing ? (
                        <input
                          type="date"
                          value={profileData.dateOfBirth}
                          onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm"
                        />
                      ) : (
                        <div className="bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-purple-500" />
                          <span className="text-gray-900 font-semibold">{new Date(profileData.dateOfBirth).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact & Insurance */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-200 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Contact & Insurance</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Home Address</label>
                      {isEditing ? (
                        <textarea
                          value={profileData.address}
                          onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-200 bg-white shadow-sm resize-none"
                        />
                      ) : (
                        <div className="bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-emerald-500 mt-1" />
                          <span className="text-gray-900 font-semibold leading-relaxed">{profileData.address}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Emergency Contact</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={profileData.emergencyContact}
                          onChange={(e) => setProfileData({...profileData, emergencyContact: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-200 bg-white shadow-sm"
                        />
                      ) : (
                        <div className="bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-red-500" />
                          <span className="text-gray-900 font-semibold">{profileData.emergencyContact}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Insurance Provider</label>
                      {isEditing ? (
                        <select
                          value={profileData.insurance}
                          onChange={(e) => setProfileData({...profileData, insurance: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-200 bg-white shadow-sm"
                        >
                          <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
                          <option value="Aetna">Aetna</option>
                          <option value="Cigna">Cigna</option>
                          <option value="UnitedHealthcare">UnitedHealthcare</option>
                          <option value="Medicare">Medicare</option>
                          <option value="Medicaid">Medicaid</option>
                        </select>
                      ) : (
                        <div className="bg-white px-4 py-3 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-blue-500" />
                          <span className="text-gray-900 font-semibold">{profileData.insurance}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Favorites Tab */}
          {activeTab === 'favorites' && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3">Your Favorite Hospitals</h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">Quick access to your preferred healthcare providers for faster booking and consultation</p>
              </div>

              {favoriteHospitals.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {favoriteHospitals.map((hospital) => (
                    <div key={hospital.id} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                      <div className="flex items-start space-x-6">
                        <div className="relative">
                          <img
                            src={hospital.image}
                            alt={hospital.name}
                            className="w-24 h-24 rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                          />
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                            <Heart className="w-4 h-4 text-white fill-current" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{hospital.name}</h4>
                            {hospital.isVerified && (
                              <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-xl text-xs font-bold shadow-lg">
                                <Award className="w-3 h-3 inline mr-1" />
                                VERIFIED
                              </div>
                            )}
                          </div>
                          
                          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-xl mb-3 inline-block">
                            <span className="text-blue-700 font-bold text-sm">{hospital.type}</span>
                          </div>
                          
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="flex items-center space-x-1">
                              <Star className="w-5 h-5 text-yellow-500 fill-current" />
                              <span className="font-bold text-lg text-gray-900">{hospital.rating}</span>
                            </div>
                            <span className="text-gray-500 font-medium">({hospital.reviewCount} reviews)</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-gray-600 mb-4">
                            <MapPin className="w-4 h-4 text-emerald-500" />
                            <span className="font-medium">{hospital.address.split(',')[0]}, {hospital.address.split(',')[1]}</span>
                          </div>
                          
                          <div className="flex space-x-3">
                            <button
                              onClick={() => navigate(`/hospital/${hospital.id}/services`)}
                              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2"
                            >
                              <Building className="w-4 h-4" />
                              <span>View Services</span>
                            </button>
                            <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>Book Now</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl border-2 border-dashed border-gray-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">No Favorites Yet</h4>
                  <p className="text-gray-600 mb-6 text-lg max-w-md mx-auto">Start adding hospitals to your favorites for quick access and personalized recommendations</p>
                  <button
                    onClick={() => navigate('/')}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    Browse Hospitals
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-3">Account Settings</h3>
                <p className="text-gray-600 text-lg">Manage your account preferences and security settings</p>
              </div>

              {/* Notification Settings */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-200 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Bell className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Notification Preferences</h4>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 text-lg mb-1">Email Notifications</p>
                        <p className="text-gray-600">Receive updates about appointments and health tips</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-indigo-600 shadow-lg"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 text-lg mb-1">SMS Notifications</p>
                        <p className="text-gray-600">Get text reminders for appointments</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-indigo-600 shadow-lg"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Privacy & Security */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Privacy & Security</h4>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-white rounded-2xl p-6 hover:bg-blue-50 transition-all duration-300 border border-blue-100 shadow-sm hover:shadow-lg group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                          <Lock className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-gray-900 text-lg">Change Password</p>
                          <p className="text-gray-600">Update your account password</p>
                        </div>
                      </div>
                      <ArrowLeft className="w-6 h-6 text-gray-400 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                  
                  <button className="w-full bg-white rounded-2xl p-6 hover:bg-blue-50 transition-all duration-300 border border-blue-100 shadow-sm hover:shadow-lg group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-300">
                          <Shield className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-gray-900 text-lg">Two-Factor Authentication</p>
                          <p className="text-gray-600">Add an extra layer of security</p>
                        </div>
                      </div>
                      <ArrowLeft className="w-6 h-6 text-gray-400 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                  
                  <button className="w-full bg-white rounded-2xl p-6 hover:bg-blue-50 transition-all duration-300 border border-blue-100 shadow-sm hover:shadow-lg group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                          <Download className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-gray-900 text-lg">Download My Data</p>
                          <p className="text-gray-600">Export your account information</p>
                        </div>
                      </div>
                      <ArrowLeft className="w-6 h-6 text-gray-400 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Account Actions */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-8 border border-red-200 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <UserX className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-red-900">Danger Zone</h4>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-white rounded-2xl p-6 hover:bg-red-50 transition-all duration-300 border border-red-200 shadow-sm hover:shadow-lg group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                          <UserX className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-red-900 text-lg">Deactivate Account</p>
                          <p className="text-red-700">Temporarily disable your account</p>
                        </div>
                      </div>
                      <ArrowLeft className="w-6 h-6 text-red-400 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                  
                  <button className="w-full bg-white rounded-2xl p-6 hover:bg-red-50 transition-all duration-300 border border-red-200 shadow-sm hover:shadow-lg group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300">
                          <Trash2 className="w-6 h-6 text-red-600" />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-red-900 text-lg">Delete Account</p>
                          <p className="text-red-700">Permanently remove your account and data</p>
                        </div>
                      </div>
                      <ArrowLeft className="w-6 h-6 text-red-400 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;