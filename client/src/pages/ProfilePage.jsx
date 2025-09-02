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
  Award
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

  // Mock favorite hospitals (in real app, this would come from user data)
  const favoriteHospitalIds = [1, 3, 5];
  const favoriteHospitals = mockHospitals.filter(hospital => 
    favoriteHospitalIds.includes(hospital.id)
  );

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In real app, save to backend
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

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

      {/* Profile Header */}
      <div className="glass-effect rounded-2xl shadow-xl border border-white/30 overflow-hidden mb-8">
        <div className="relative h-40 bg-gradient-to-r from-medical-500 to-medical-600">
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative px-6 pb-6">
          {/* Profile Picture */}
          <div className="absolute -top-16 left-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                <User className="w-16 h-16 text-gray-500" />
              </div>
              <button className="absolute bottom-2 right-2 w-10 h-10 bg-gradient-to-br from-medical-500 to-medical-600 text-white rounded-full flex items-center justify-center hover:from-medical-600 hover:to-medical-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110">
                <Camera className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-20 flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold gradient-text mb-3">
                {profileData.firstName} {profileData.lastName}
              </h1>
              <p className="text-gray-600 mb-2 text-lg">{profileData.email}</p>
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Member since {profileData.memberSince}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span className="font-medium">{favoriteHospitals.length} favorites</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-gradient-to-r from-medical-500 to-medical-600 text-white px-6 py-3 rounded-xl hover:from-medical-600 hover:to-medical-700 transition-all duration-200 font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Edit3 className="w-4 h-4" />
              <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="glass-effect rounded-2xl shadow-xl border border-white/30 overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8 px-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-5 border-b-2 transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'border-medical-500 text-medical-600'
                      : 'border-transparent text-gray-600 hover:text-medical-600 hover:scale-105'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {isEditing && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Edit3 className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-blue-900">Edit Mode</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSaveProfile}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center space-x-2"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Changes</span>
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center space-x-2"
                      >
                        <X className="w-4 h-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={profileData.firstName}
                            onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                          />
                        ) : (
                          <p className="text-gray-900 py-2">{profileData.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={profileData.lastName}
                            onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                          />
                        ) : (
                          <p className="text-gray-900 py-2">{profileData.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                        />
                      ) : (
                        <div className="flex items-center space-x-2 py-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-900">{profileData.email}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                        />
                      ) : (
                        <div className="flex items-center space-x-2 py-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-900">{profileData.phone}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                      {isEditing ? (
                        <input
                          type="date"
                          value={profileData.dateOfBirth}
                          onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                        />
                      ) : (
                        <div className="flex items-center space-x-2 py-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-900">{new Date(profileData.dateOfBirth).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact & Insurance */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact & Insurance</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      {isEditing ? (
                        <textarea
                          value={profileData.address}
                          onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                        />
                      ) : (
                        <div className="flex items-start space-x-2 py-2">
                          <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                          <span className="text-gray-900">{profileData.address}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={profileData.emergencyContact}
                          onChange={(e) => setProfileData({...profileData, emergencyContact: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                        />
                      ) : (
                        <div className="flex items-center space-x-2 py-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-900">{profileData.emergencyContact}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider</label>
                      {isEditing ? (
                        <select
                          value={profileData.insurance}
                          onChange={(e) => setProfileData({...profileData, insurance: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                        >
                          <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
                          <option value="Aetna">Aetna</option>
                          <option value="Cigna">Cigna</option>
                          <option value="UnitedHealthcare">UnitedHealthcare</option>
                          <option value="Medicare">Medicare</option>
                          <option value="Medicaid">Medicaid</option>
                        </select>
                      ) : (
                        <div className="flex items-center space-x-2 py-2">
                          <Shield className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-900">{profileData.insurance}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Stats */}
              <div className="bg-gradient-to-r from-medical-50 to-teal-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Heart className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <div className="font-bold text-lg">{favoriteHospitals.length}</div>
                    <div className="text-sm text-gray-600">Favorite Hospitals</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Calendar className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <div className="font-bold text-lg">12</div>
                    <div className="text-sm text-gray-600">Appointments</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                    <div className="font-bold text-lg">8</div>
                    <div className="text-sm text-gray-600">Reviews Written</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <Clock className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <div className="font-bold text-lg">2</div>
                    <div className="text-sm text-gray-600">Years Active</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Favorites Tab */}
          {activeTab === 'favorites' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Favorite Hospitals</h3>
                <p className="text-gray-600">Quick access to your preferred healthcare providers</p>
              </div>

              {favoriteHospitals.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {favoriteHospitals.map((hospital) => (
                    <div key={hospital.id} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                      <div className="flex items-start space-x-4">
                        <img
                          src={hospital.image}
                          alt={hospital.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{hospital.name}</h4>
                            <Heart className="w-5 h-5 text-red-500 fill-current" />
                          </div>
                          <p className="text-sm text-medical-600 font-medium mb-1">{hospital.type}</p>
                          <div className="flex items-center space-x-2 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{hospital.rating}</span>
                            <span className="text-sm text-gray-500">({hospital.reviewCount} reviews)</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{hospital.address.split(',')[0]}</span>
                          </div>
                          <div className="mt-3 flex space-x-2">
                            <button
                              onClick={() => navigate(`/hospital/${hospital.id}/services`)}
                              className="bg-medical-600 text-white px-3 py-1 rounded-lg hover:bg-medical-700 transition-colors text-sm font-medium"
                            >
                              View Services
                            </button>
                            <button className="bg-gray-600 text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No Favorites Yet</h4>
                  <p className="text-gray-600 mb-4">Start adding hospitals to your favorites for quick access</p>
                  <button
                    onClick={() => navigate('/')}
                    className="bg-medical-600 text-white px-6 py-3 rounded-lg hover:bg-medical-700 transition-colors font-medium"
                  >
                    Browse Hospitals
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h3>

              {/* Notification Settings */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Notification Preferences</span>
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Email Notifications</p>
                      <p className="text-sm text-gray-600">Receive updates about appointments and health tips</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-medical-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-medical-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">SMS Notifications</p>
                      <p className="text-sm text-gray-600">Get text reminders for appointments</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-medical-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-medical-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Privacy Settings */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Privacy & Security</span>
                </h4>
                <div className="space-y-4">
                  <button className="w-full text-left p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Change Password</p>
                        <p className="text-sm text-gray-600">Update your account password</p>
                      </div>
                      <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
                    </div>
                  </button>
                  <button className="w-full text-left p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-600">Add an extra layer of security</p>
                      </div>
                      <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
                    </div>
                  </button>
                  <button className="w-full text-left p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Download My Data</p>
                        <p className="text-sm text-gray-600">Export your account information</p>
                      </div>
                      <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Account Actions */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-4">Account Actions</h4>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-red-50 transition-colors border border-red-200 text-red-700">
                    <p className="font-medium">Deactivate Account</p>
                    <p className="text-sm text-red-600">Temporarily disable your account</p>
                  </button>
                  <button className="w-full text-left p-3 bg-white rounded-lg hover:bg-red-50 transition-colors border border-red-200 text-red-700">
                    <p className="font-medium">Delete Account</p>
                    <p className="text-sm text-red-600">Permanently remove your account and data</p>
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