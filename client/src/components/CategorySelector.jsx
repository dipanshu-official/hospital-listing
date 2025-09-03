import React from 'react';
import { Building, Pill, Stethoscope, Heart } from 'lucide-react';

const CategorySelector = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    {
      id: 'hospitals',
      name: 'Hospitals',
      icon: Building,
      description: 'Find medical centers and hospitals',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      count: '500+'
    },
    {
      id: 'medical-stores',
      name: 'Medical Stores',
      icon: Pill,
      description: 'Pharmacies and medical supplies',
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200',
      count: '200+'
    },
    {
      id: 'services',
      name: 'Healthcare Services',
      icon: Stethoscope,
      description: 'Home care and mobile services',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      count: '150+'
    }
  ];

  return (
    <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-200/50 p-8 mb-8 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
          <Heart className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-slate-800 mb-4">
          Choose Healthcare Category
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Select the type of healthcare provider you're looking for. Browse hospitals, pharmacies, or specialized services.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`group relative overflow-hidden rounded-3xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                isSelected 
                  ? `${category.borderColor} shadow-2xl scale-105` 
                  : 'border-gray-200 shadow-lg hover:border-gray-300'
              }`}
            >
              <div className={`bg-gradient-to-br ${isSelected ? category.bgColor : 'from-white to-gray-50'} p-8 h-full`}>
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-110'}`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                    isSelected ? 'text-gray-900' : 'text-gray-800 group-hover:text-gray-900'
                  }`}>
                    {category.name}
                  </h3>
                  <p className={`text-gray-600 mb-4 leading-relaxed ${
                    isSelected ? 'text-gray-700' : 'group-hover:text-gray-700'
                  }`}>
                    {category.description}
                  </p>
                  
                  {/* Count Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-xl font-bold text-sm shadow-lg ${
                    isSelected 
                      ? `bg-gradient-to-r ${category.color} text-white` 
                      : 'bg-white text-gray-600 group-hover:bg-gray-100'
                  }`}>
                    {category.count} providers
                  </div>
                </div>

                {/* Selection Indicator */}
                {isSelected && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg animate-scale-in">
                    <Heart className="w-4 h-4 text-white fill-current" />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Category Info */}
      {selectedCategory && (
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 animate-slide-up">
          <div className="text-center">
            <h4 className="text-xl font-bold text-blue-900 mb-2">
              Browsing {categories.find(c => c.id === selectedCategory)?.name}
            </h4>
            <p className="text-blue-700">
              {categories.find(c => c.id === selectedCategory)?.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySelector;