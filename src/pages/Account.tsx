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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl mb-8 text-gray-900 dark:text-gray-100">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-xl text-gray-900 dark:text-gray-100">{user.name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
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
                          ? 'bg-gray-900 dark:bg-gray-700 text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl mb-2 text-gray-900 dark:text-gray-100">Welcome Back</h1>
          <p className="text-gray-600 dark:text-gray-400">Login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Demo: Use any email and password to login
        </p>
      </div>
    </div>
  );
};

const ProfileTab: React.FC<{ user: any }> = ({ user }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
    <h2 className="text-2xl mb-6 text-gray-900 dark:text-gray-100">Personal Information</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Name</label>
        <p className="text-lg text-gray-900 dark:text-gray-100">{user.name}</p>
      </div>
      <div>
        <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Email</label>
        <p className="text-lg text-gray-900 dark:text-gray-100">{user.email}</p>
      </div>
      <div>
        <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">Phone</label>
        <p className="text-lg text-gray-900 dark:text-gray-100">{user.phone}</p>
      </div>
    </div>
  </div>
);

const OrdersTab: React.FC<{ user: any }> = ({ user }) => (
  <div className="space-y-6">
    <h2 className="text-2xl text-gray-900 dark:text-gray-100">Order History</h2>
    {user.orders.map((order: any) => (
      <div key={order.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl text-gray-900 dark:text-gray-100">Order #{order.id}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Placed on {order.date}</p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              order.status === 'Delivered'
                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                : order.status === 'Shipped'
                ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
            }`}
          >
            {order.status}
          </span>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex justify-between text-gray-700 dark:text-gray-300 mb-2">
            <span>Total Amount</span>
            <span>₹{order.total}</span>
          </div>
          <div className="flex justify-between text-green-600 dark:text-green-400">
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
    <h2 className="text-2xl mb-6 text-gray-900 dark:text-gray-100">My Wishlist ({wishlist.length})</h2>
    {wishlist.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center shadow-md">
        <Heart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Your wishlist is empty</p>
        <Link
          to="/shop"
          className="inline-block px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg"
        >
          Start Shopping
        </Link>
      </div>
    )}
  </div>
);
