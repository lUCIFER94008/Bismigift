import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LiveChat } from './components/LiveChat';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Account } from './pages/Account';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Wholesale } from './pages/Wholesale';
import { PolicyPage } from './pages/PolicyPage';
import { Admin } from './pages/Admin';
import logo from 'figma:asset/6f2503f1db2652c71adcf6aff72ef32baf450fbd.png';

function App() {
  useEffect(() => {
    // Set page title
    document.title = 'New Bismi Gift House - Gifts, Toys & Stationery';
    
    // Set favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = logo;
    if (!document.querySelector("link[rel~='icon']")) {
      document.head.appendChild(link);
    }
  }, []);

  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#0F0F0F] transition-colors">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<Account />} />
              <Route path="/account/login" element={<Account />} />
              <Route path="/account/orders" element={<Account />} />
              <Route path="/account/wishlist" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wholesale" element={<Wholesale />} />
              <Route path="/policy/:type" element={<PolicyPage />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
          <LiveChat />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
