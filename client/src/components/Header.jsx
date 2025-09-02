import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Menu, X, Heart, User, Bell, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="glass-effect shadow-lg border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">HealthHub</h1>
              <p className="text-xs text-blue-600 leading-none font-medium">Your Healthcare Directory</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-medical-600 font-medium transition-all duration-200 hover:scale-105"
            >
              Find Hospitals
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-gray-600 hover:text-medical-600 font-medium transition-all duration-200 hover:scale-105"
            >
              About
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="text-gray-600 hover:text-medical-600 font-medium transition-all duration-200 hover:scale-105"
            >
              Contact
            </button>
            <a href="#" className="text-gray-600 hover:text-medical-600 font-medium transition-all duration-200 hover:scale-105">
              Specialties
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-3 text-gray-500 hover:text-red-500 transition-all duration-200 hover:scale-110 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg">
              <Bell className="w-5 h-5" />
            </button>
            
            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl border border-white/50 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-sm leading-none">John Doe</p>
                  <p className="text-xs text-gray-500 leading-none mt-1">Premium Member</p>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-slide-up">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">John Doe</p>
                        <p className="text-sm text-gray-500">john.doe@email.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <button
                      onClick={() => {
                        navigate('/profile');
                        setIsProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors flex items-center space-x-3 text-gray-700 hover:text-blue-600"
                    >
                      <User className="w-4 h-4" />
                      <span className="font-medium">View Profile</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-red-50 transition-colors flex items-center space-x-3 text-gray-700 hover:text-red-600"
                    >
                      <Heart className="w-4 h-4" />
                      <span className="font-medium">My Favorites</span>
                    </button>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <button className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-gray-500 hover:text-gray-700 font-medium">
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-up">
            {/* Mobile Profile Section */}
            <div className="px-4 py-4 border-b border-gray-200 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">Premium Member</p>
                </div>
              </div>
            </div>
            
            <nav className="flex flex-col space-y-3 px-4">
              <button 
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Find Hospitals
              </button>
              <button 
                onClick={() => {
                  navigate('/about');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => {
                  navigate('/contact');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Contact
              </button>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Specialties
              </a>
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <button 
                  onClick={() => {
                    navigate('/profile');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2 shadow-lg"
                >
                  <User className="w-4 h-4" />
                  <span>View Profile</span>
                </button>
                <button className="w-full bg-gray-100 text-gray-600 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors font-medium text-sm">
                  Sign Out
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Click outside to close profile dropdown */}
      {isProfileOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsProfileOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-up">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-medical-600 font-medium py-2"
              >
                Find Hospitals
              </button>
              <button 
                onClick={() => {
                  navigate('/about');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-medical-600 font-medium py-2"
              >
                About
              </button>
              <button 
                onClick={() => {
                  navigate('/contact');
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 hover:text-medical-600 font-medium py-2"
              >
                Contact
              </button>
              <a href="#" className="text-gray-700 hover:text-medical-600 font-medium py-2">
                Specialties
              </a>
              <div className="pt-3 border-t border-gray-200">
                <button 
                  onClick={() => {
                    navigate('/profile');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-medical-600 text-white px-4 py-2 rounded-lg hover:bg-medical-700 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;