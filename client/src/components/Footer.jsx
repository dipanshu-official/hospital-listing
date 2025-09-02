import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-medical-500 to-medical-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">MediFind</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in finding quality healthcare. Connecting patients with the best medical facilities nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-medical-400 transition-all duration-200 hover:translate-x-1">Find Hospitals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-medical-400 transition-all duration-200 hover:translate-x-1">Specialties</a></li>
              <li><a href="#" className="text-gray-300 hover:text-medical-400 transition-all duration-200 hover:translate-x-1">Emergency Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-medical-400 transition-all duration-200 hover:translate-x-1">Health Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-medical-400 transition-all duration-200 hover:translate-x-1">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-medical-400 transition-all duration-200 hover:translate-x-1">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-medical-400 transition-all duration-200 hover:translate-x-1">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-medical-400 transition-all duration-200 hover:translate-x-1">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>1-800-MEDIFIND</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>help@medifind.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © 2025 MediFind. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-medical-400 transition-all duration-200">
              Privacy
            </a>
            <a href="#" className="text-gray-300 hover:text-medical-400 transition-all duration-200">
              Terms
            </a>
            <a href="#" className="text-gray-300 hover:text-medical-400 transition-all duration-200">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;