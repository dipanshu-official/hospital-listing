import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import HospitalServicesPage from './pages/HospitalServicesPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-medical-50 to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-8 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hospital/:id/services" element={<HospitalServicesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;