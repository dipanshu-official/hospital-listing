import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Menu, X, Heart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-medical-600 to-teal-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MediFind</h1>
              <p className="text-xs text-gray-500 leading-none">Find Your Care</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-medical-600 font-medium transition-colors">
              Find Hospitals
            </a>
            <a href="#" className="text-gray-700 hover:text-medical-600 font-medium transition-colors">
              Specialties
            </a>
            <a href="#" className="text-gray-700 hover:text-medical-600 font-medium transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-medical-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-medical-600 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="bg-medical-600 text-white px-4 py-2 rounded-lg hover:bg-medical-700 transition-colors font-medium flex items-center space-x-2"
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
              <a href="#" className="text-gray-700 hover:text-medical-600 font-medium py-2">
                Find Hospitals
              </a>
              <a href="#" className="text-gray-700 hover:text-medical-600 font-medium py-2">
                Specialties
              </a>
              <a href="#" className="text-gray-700 hover:text-medical-600 font-medium py-2">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-medical-600 font-medium py-2">
                Contact
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