import React, { useState } from 'react';
import CategorySelector from '../components/CategorySelector';
import SearchFilters from '../components/SearchFilters';
import HospitalList from '../components/HospitalList';
import MedicalStoreList from '../components/MedicalStoreList';
import ServiceList from '../components/ServiceList';
import { mockHospitals, mockMedicalStores, mockServices } from '../data/mockData';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('hospitals');
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

    // Search based on selected category
    if (selectedCategory === 'hospitals') {
      // Search hospitals
      mockHospitals.forEach(hospital => {
        if (
          hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hospital.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hospital.specialties.some(specialty => 
            specialty.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          hospital.address.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          results.push({
            type: 'hospital',
            id: hospital.id,
            name: hospital.name,
            description: hospital.description,
            rating: hospital.rating,
            location: `${hospital.address.split(',')[1]}, ${hospital.address.split(',')[2]}`,
            hospitalId: hospital.id,
            hospitalType: hospital.type
          });
        }

        // Search services within each hospital
        hospital.services.forEach(serviceCategory => {
          serviceCategory.items.forEach(service => {
            if (
              service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
              serviceCategory.category.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              results.push({
                type: 'service',
                id: `${hospital.id}-${service.name}`,
                name: service.name,
                description: service.description,
                price: service.price,
                category: serviceCategory.category,
                hospitalName: hospital.name,
                hospitalId: hospital.id,
                location: `${hospital.address.split(',')[1]}, ${hospital.address.split(',')[2]}`,
                hospitalType: hospital.type
              });
            }
          });
        });
      });
    } else if (selectedCategory === 'medical-stores') {
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
    } else if (selectedCategory === 'services') {
      // Search healthcare services
      mockServices.forEach(service => {
        if (
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.specialties.some(specialty => 
            specialty.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          service.address.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          results.push({
            type: 'healthcare-service',
            id: service.id,
            name: service.name,
            description: service.description,
            rating: service.rating,
            location: service.address,
            serviceId: service.id,
            serviceType: service.type
          });
        }
      });
    }

    setSearchResults(results);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchResults([]);
    setIsSearching(false);
  };

  const renderCategoryContent = () => {
    if (isSearching) {
      return null; // Search results will be shown in SearchFilters component
    }

    switch (selectedCategory) {
      case 'hospitals':
        return <HospitalList />;
      case 'medical-stores':
        return <MedicalStoreList />;
      case 'services':
        return <ServiceList />;
      default:
        return <HospitalList />;
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <CategorySelector 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <SearchFilters 
        onSearch={handleSearch}
        searchResults={searchResults}
        isSearching={isSearching}
        selectedCategory={selectedCategory}
      />
      {renderCategoryContent()}
    </div>
  );
};

export default HomePage;