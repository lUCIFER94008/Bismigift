import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#B3B3B3] pt-12 pb-6 border-t border-[#4DA6FF]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-2xl mb-4 text-white">NEW BISMI GIFT HOUSE</h4>
            <p className="text-sm mb-4 text-[#B3B3B3]">
              Your one-stop destination for gifts, toys, stationery, and more. Quality products at affordable prices.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0F0F0F] border border-[#4DA6FF]/30 rounded-lg hover:bg-[#4DA6FF]/20 hover:border-[#4DA6FF] transition">
                <Facebook className="w-5 h-5 text-[#4DA6FF]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0F0F0F] border border-pink-500/30 rounded-lg hover:bg-pink-500/20 hover:border-pink-400 transition">
                <Instagram className="w-5 h-5 text-pink-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0F0F0F] border border-[#4DA6FF]/30 rounded-lg hover:bg-[#4DA6FF]/20 hover:border-[#4DA6FF] transition">
                <Twitter className="w-5 h-5 text-[#4DA6FF]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Home</Link></li>
              <li><Link to="/shop" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Shop</Link></li>
              <li><Link to="/about" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">About Us</Link></li>
              <li><Link to="/contact" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Contact</Link></li>

              <li><Link to="/account" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">My Account</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/toys" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Toys</Link></li>
              <li><Link to="/category/newborn-baby-items" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Newborn Baby Items</Link></li>
              <li><Link to="/category/wall-clocks" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Wall Clocks</Link></li>
              <li><Link to="/category/watches" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Watches</Link></li>
              <li><Link to="/category/stationery" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Stationery</Link></li>
              <li><Link to="/category/remote-cars" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Remote Cars</Link></li>
              <li><Link to="/category/gift-items" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Gift Items</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#4DA6FF]" />
                <span className="text-[#B3B3B3]">17, Desabhimani Rd, Palarivattom, Mamangalam, Kaloor, Kochi, Ernakulam, Kerala 682017</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#4DA6FF]" />
                <span className="text-[#B3B3B3]">+91 94466 51773</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#4DA6FF]" />
                <span className="text-[#B3B3B3]">info@bismigifthouse.com</span>
              </li>
              <li className="text-sm">
                <strong className="text-white">Store Hours:</strong><br />
                <span className="text-[#B3B3B3]">All Days: 9:00 AM - 10:00 PM</span>
              </li>
              <li>
                <a
                  href="https://wa.me/919446651773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition mt-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order via WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Policies */}
        <div className="border-t border-[#4DA6FF]/20 pt-6 mb-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/policy/privacy" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Privacy Policy</Link>
            <span className="text-[#B3B3B3]">•</span>
            <Link to="/policy/terms" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Terms & Conditions</Link>
            <span className="text-[#B3B3B3]">•</span>
            <Link to="/policy/refund" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Refund Policy</Link>
            <span className="text-[#B3B3B3]">•</span>
            <Link to="/policy/shipping" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">Shipping Policy</Link>
            <span className="text-[#B3B3B3]">•</span>
            <Link to="/policy/faq" className="text-[#B3B3B3] hover:text-[#4DA6FF] transition">FAQ</Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-[#4DA6FF]/20 pt-6">
          <p className="text-[#B3B3B3]">&copy; {new Date().getFullYear()} New Bismi Gift House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
