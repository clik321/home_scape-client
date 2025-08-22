import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/LoginPage/LoginPage';
import Button from './components/Button/Button';
import Services from './components/pages/Services';
import RegisterPage from './components/RegisterPage/RegisterPage';
import About from './components/pages/About/About';
import Home from '../router-continue/components/pages/Home/Home';
import Contact from '../router-continue/components/pages/Contact/Contact';
import Notifications from './components/Notifications/Notifications';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MobileDrawer from './components/MobileDrawer/MobileDrawer';
import Navbar from './components/Navbar/Navbar';
import Products from './components/pages/products/Products';
import Product from './components/pages/product/Product';
import UserManagement from './components/UserManagement/UserManagement';
import Input from '../router-continue/components/Input/Input';
import PropertyModal from './components/PropertyModal/PropertyModal';
import Spinner from './components/Spinner/Spinner';








function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        
        <Header />
        <Navbar />
        <MobileDrawer />
        <Button />
        

        {loading ? (
          <Spinner />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/services" element={<Services />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>

            <PropertyModal />
            <Footer />
            <Input />
          </>
        )}
      </div>
    </>
  );
}

export default App;
