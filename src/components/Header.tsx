import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cart, user, wishlist } = useApp();
  const navigate = useNavigate();

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1A] shadow-lg border-b border-[#4DA6FF]/20">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Spacer for mobile */}
          <div className="w-12 md:w-auto"></div>
          
          {/* Store Name - Centered */}
          <Link to="/" className="flex items-center justify-center flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider neon-text animate-glow">
              NEW BISMI GIFT HOUSE
            </h1>
          </Link>

          {/* Search Bar - Desktop - Moved to navigation row */}

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Wishlist */}
            <Link
              to="/account/wishlist"
              className="p-2 rounded-lg hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-[#4DA6FF] relative transition"
            >
              <Heart className="w-6 h-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="p-2 rounded-lg hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-[#4DA6FF] relative transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#4DA6FF] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              to={user ? "/account" : "/account/login"}
              className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-[#4DA6FF] transition"
            >
              <User className="w-5 h-5" />
              <span>{user ? user.name.split(' ')[0] : 'Login'}</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-[#4DA6FF] transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 pb-4 border-t border-[#4DA6FF]/20 pt-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-[#4DA6FF]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] bg-[#0F0F0F] text-white placeholder-[#B3B3B3]"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B3B3B3] hover:text-[#4DA6FF]"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>
          
          <Link to="/" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">
            Home
          </Link>
          <Link to="/shop" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">
            Shop
          </Link>
          <div className="relative group">
            <button className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">
              Categories
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-[#1A1A1A] border border-[#4DA6FF]/30 shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link to="/category/toys" className="block px-4 py-2 hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-white">
                🎮 Toys
              </Link>
              <Link to="/category/newborn-baby-items" className="block px-4 py-2 hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-white">
                👶 Newborn Baby Items
              </Link>
              <Link to="/category/wall-clocks" className="block px-4 py-2 hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-white">
                🕐 Wall Clocks
              </Link>
              <Link to="/category/watches" className="block px-4 py-2 hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-white">
                ⌚ Watches
              </Link>
              <Link to="/category/stationery" className="block px-4 py-2 hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-white">
                ✏️ Stationery
              </Link>
              <Link to="/category/remote-cars" className="block px-4 py-2 hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-white">
                🚗 Remote Cars
              </Link>
              <Link to="/category/gift-items" className="block px-4 py-2 hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-white">
                🎁 Gift Items
              </Link>
            </div>
          </div>
          <Link to="/about" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">
            About
          </Link>
          <Link to="/contact" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#4DA6FF]/20 bg-[#1A1A1A]">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-[#4DA6FF]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] bg-[#0F0F0F] text-white placeholder-[#B3B3B3]"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B3B3B3] hover:text-[#4DA6FF]"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-white"
              >
                Shop
              </Link>
              <div className="px-4 py-2">
                <p className="text-sm text-[#B3B3B3] mb-2">Categories</p>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/category/toys"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-[#B3B3B3] hover:text-[#4DA6FF]"
                  >
                    🎮 Toys
                  </Link>
                  <Link
                    to="/category/newborn-baby-items"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-[#B3B3B3] hover:text-[#4DA6FF]"
                  >
                    👶 Newborn Baby Items
                  </Link>
                  <Link
                    to="/category/wall-clocks"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-[#B3B3B3] hover:text-[#4DA6FF]"
                  >
                    🕐 Wall Clocks
                  </Link>
                  <Link
                    to="/category/watches"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-[#B3B3B3] hover:text-[#4DA6FF]"
                  >
                    ⌚ Watches
                  </Link>
                  <Link
                    to="/category/stationery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-[#B3B3B3] hover:text-[#4DA6FF]"
                  >
                    ✏️ Stationery
                  </Link>
                  <Link
                    to="/category/remote-cars"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-[#B3B3B3] hover:text-[#4DA6FF]"
                  >
                    🚗 Remote Cars
                  </Link>
                  <Link
                    to="/category/gift-items"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-[#B3B3B3] hover:text-[#4DA6FF]"
                  >
                    🎁 Gift Items
                  </Link>
                </div>
              </div>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-white"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-white"
              >
                Contact
              </Link>
              <Link
                to={user ? "/account" : "/account/login"}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-lg hover:bg-[#4DA6FF]/20 text-[#B3B3B3] hover:text-white flex items-center space-x-2"
              >
                <User className="w-5 h-5" />
                <span>{user ? user.name : 'Login / Register'}</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
