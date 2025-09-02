import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Headphones,
  Building,
  Heart,
  CheckCircle,
  Globe,
  Users,
  HelpCircle,
  Shield,
  Zap
} from 'lucide-react';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our support team',
      value: '1-800-MEDIFIND',
      action: 'tel:1-800-633-4346',
      color: 'from-emerald-500 to-green-600',
      available: '24/7 Available'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      value: 'support@medifind.com',
      action: 'mailto:support@medifind.com',
      color: 'from-blue-500 to-indigo-600',
      available: 'Response within 24h'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our team instantly',
      value: 'Start Chat',
      action: '#',
      color: 'from-purple-500 to-indigo-600',
      available: 'Mon-Fri 9AM-6PM'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters location',
      value: 'San Francisco, CA',
      action: '#',
      color: 'from-yellow-500 to-orange-500',
      available: 'By appointment only'
    }
  ];

  const supportCategories = [
    { value: 'general', label: 'General Inquiry', icon: HelpCircle },
    { value: 'technical', label: 'Technical Support', icon: Zap },
    { value: 'billing', label: 'Billing Question', icon: Shield },
    { value: 'partnership', label: 'Hospital Partnership', icon: Building }
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
        <div className="relative h-64 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          <div className="relative h-full flex items-center justify-center text-center text-white px-8">
            <div>
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Headphones className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Get in Touch</h1>
              <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed drop-shadow">
                We're here to help you find the perfect healthcare provider. Reach out anytime!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                    <p className="font-bold text-gray-900 text-lg">{method.value}</p>
                  </div>
                  <div className="text-sm text-emerald-600 font-semibold bg-emerald-50 px-3 py-2 rounded-xl">
                    {method.available}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-600 text-lg">We'll get back to you within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
              >
                {supportCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md"
                placeholder="Brief description of your inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 bg-white shadow-sm hover:shadow-md resize-none"
                placeholder="Please provide details about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-3"
            >
              <Send className="w-6 h-6" />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Office Hours */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Office Hours</h3>
              <p className="text-gray-600">When you can reach our support team</p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Phone Support</p>
                    <p className="text-emerald-700 font-semibold">24/7 Available</p>
                  </div>
                  <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Email & Chat</p>
                    <p className="text-blue-700 font-semibold">Monday - Friday, 9AM - 6PM PST</p>
                  </div>
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Help</h3>
              <p className="text-gray-600">Common questions and answers</p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">How do I book an appointment?</h4>
                <p className="text-gray-600 text-sm">Click on any hospital card and use the "Book Appointment" button to schedule your visit.</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Are the prices accurate?</h4>
                <p className="text-gray-600 text-sm">Prices are estimates. Final costs may vary based on your insurance and specific treatment needs.</p>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">How do I add hospitals to favorites?</h4>
                <p className="text-gray-600 text-sm">Click the heart icon on any hospital card to save it to your favorites list.</p>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl shadow-2xl p-8 text-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Medical Emergency?</h3>
              <p className="text-red-100 mb-6 text-lg">
                If you're experiencing a medical emergency, please call 911 immediately or visit your nearest emergency room.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <p className="font-bold text-2xl">🚨 Call 911</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Response Promise */}
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-12">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            We're committed to providing exceptional support and helping you navigate your healthcare journey with confidence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Fast Response</h4>
              <p className="text-gray-600 text-sm">Quick replies to all inquiries</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Expert Support</h4>
              <p className="text-gray-600 text-sm">Healthcare-trained support team</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Personal Care</h4>
              <p className="text-gray-600 text-sm">Personalized assistance for your needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;