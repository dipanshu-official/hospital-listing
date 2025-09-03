import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ArrowLeft, Pill, Search, Filter } from 'lucide-react';
import MedicalStoreList from '../components/MedicalStoreList';
import SearchFilters from '../components/SearchFilters';
import { mockMedicalStores } from '../data/mockData';

const MedicalStoresPage = () => {
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

    setSearchResults(results);
  };

  return (
    <div className="max-w-7xl mx-auto animate-fade-in space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-all duration-300 group bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl border border-white/50"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold text-lg">Back to Home</span>
        </button>
        
        <div className="flex items-center space-x-3 text-sm text-gray-500 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-white/50">
          <Pill className="w-4 h-4 text-emerald-500" />
          <span className="font-medium">Medical Stores Directory</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="relative h-64 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          <div className="relative h-full flex items-center justify-center text-center text-white px-8">
            <div>
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Pill className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Medical Stores Directory</h1>
              <p className="text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed drop-shadow">
                Find trusted pharmacies and medical supply stores with competitive pricing and quality products
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <SearchFilters 
        onSearch={handleSearch}
        searchResults={searchResults}
        isSearching={isSearching}
        selectedCategory="medical-stores"
      />

      {/* Medical Store List */}
      {!isSearching && <MedicalStoreList />}
    </div>
  );
};

export default MedicalStoresPage;