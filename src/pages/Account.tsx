import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { User, Package, Award, Heart, LogOut, Mail } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { ProductCard } from '../components/ProductCard';

export const Account: React.FC = () => {
  const { user, logout, wishlist } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(() => {
    const path = location.pathname;
    if (path.includes('/orders')) return 'orders';
    if (path.includes('/wishlist')) return 'wishlist';
    return 'profile';
  });

  // Mock login page
  if (!user) {
    return <LoginPage />;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl mb-8 text-white">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl p-6 shadow-md">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#4DA6FF] rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-xl text-white">{user.name}</h2>
                <p className="text-sm text-[#B3B3B3]">{user.email}</p>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                        activeTab === tab.id
                          ? 'bg-[#4DA6FF] text-white'
                          : 'text-[#B3B3B3] hover:bg-[#0F0F0F] hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && <ProfileTab user={user} />}
            {activeTab === 'orders' && <OrdersTab user={user} />}
            {activeTab === 'wishlist' && <WishlistTab wishlist={wishlist} />}
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginPage: React.FC = () => {
  const { login } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    navigate('/account');
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center py-12">
      <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#4DA6FF] rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl mb-2 text-white">Welcome Back</h1>
          <p className="text-[#B3B3B3]">Login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm text-[#B3B3B3]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#4DA6FF]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] bg-[#0F0F0F] text-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-[#B3B3B3]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#4DA6FF]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] bg-[#0F0F0F] text-white"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#4DA6FF] hover:bg-[#4DA6FF]/80 text-white rounded-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-[#B3B3B3] mt-6">
          Demo: Use any email and password to login
        </p>
      </div>
    </div>
  );
};

const ProfileTab: React.FC<{ user: any }> = ({ user }) => (
  <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl p-6 shadow-md">
    <h2 className="text-2xl mb-6 text-white">Personal Information</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm text-[#B3B3B3] mb-1">Name</label>
        <p className="text-lg text-white">{user.name}</p>
      </div>
      <div>
        <label className="block text-sm text-[#B3B3B3] mb-1">Email</label>
        <p className="text-lg text-white">{user.email}</p>
      </div>
      <div>
        <label className="block text-sm text-[#B3B3B3] mb-1">Phone</label>
        <p className="text-lg text-white">{user.phone}</p>
      </div>
    </div>
  </div>
);

const OrdersTab: React.FC<{ user: any }> = ({ user }) => (
  <div className="space-y-6">
    <h2 className="text-2xl text-white">Order History</h2>
    {user.orders.map((order: any) => (
      <div key={order.id} className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl p-6 shadow-md">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl text-white">Order #{order.id}</h3>
            <p className="text-sm text-[#B3B3B3]">Placed on {order.date}</p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              order.status === 'Delivered'
                ? 'bg-green-500/20 text-green-400'
                : order.status === 'Shipped'
                ? 'bg-[#4DA6FF]/20 text-[#4DA6FF]'
                : 'bg-yellow-500/20 text-yellow-400'
            }`}
          >
            {order.status}
          </span>
        </div>
        <div className="border-t border-[#4DA6FF]/20 pt-4">
          <div className="flex justify-between text-[#B3B3B3] mb-2">
            <span>Total Amount</span>
            <span>₹{order.total}</span>
          </div>
          <div className="flex justify-between text-green-400">
            <span>Points Earned</span>
            <span>+{order.pointsEarned} pts</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const RewardsTab: React.FC<{ user: any }> = ({ user }) => (
  <div className="space-y-6">
    <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
      <Award className="w-12 h-12 mb-4" />
      <h2 className="text-3xl mb-2">Reward Points</h2>
      <p className="text-5xl mb-4">{user.rewardPoints}</p>
      <p className="text-cyan-100">Available for redemption (1 point = ₹0.1)</p>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
      <h3 className="text-xl mb-4 text-gray-900 dark:text-gray-100">How it Works</h3>
      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
        <li className="flex items-start gap-2">
          <span className="text-green-600">✓</span>
          <span>Earn 5% reward points on every purchase</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-600">✓</span>
          <span>Redeem points for instant discounts at checkout</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-600">✓</span>
          <span>Points never expire</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-600">✓</span>
          <span>Get exclusive member-only deals</span>
        </li>
      </ul>
    </div>
  </div>
);

const WishlistTab: React.FC<{ wishlist: any[] }> = ({ wishlist }) => (
  <div>
    <h2 className="text-2xl mb-6 text-white">My Wishlist ({wishlist.length})</h2>
    {wishlist.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl p-12 text-center shadow-md">
        <Heart className="w-16 h-16 mx-auto mb-4 text-[#B3B3B3]" />
        <p className="text-xl text-[#B3B3B3] mb-4">Your wishlist is empty</p>
        <Link
          to="/shop"
          className="inline-block px-6 py-3 bg-[#4DA6FF] hover:bg-[#4DA6FF]/80 text-white rounded-lg"
        >
          Start Shopping
        </Link>
      </div>
    )}
  </div>
);