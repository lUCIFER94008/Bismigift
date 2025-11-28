import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export const Checkout: React.FC = () => {
  const { cart, user, createOrder } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const [pointsToUse, setPointsToUse] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (cart.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }

  const subtotal = cart.reduce((sum, item) => {
    const price = item.isOnSale ? item.salePrice! : item.price;
    return sum + (price * item.quantity);
  }, 0);

  const giftWrappingCost = cart.reduce((sum, item) => 
    item.giftWrapping ? sum + (50 * item.quantity) : sum, 0
  );

  const deliveryCharges = 50;
  const pointsDiscount = pointsToUse * 0.1; // 1 point = ₹0.1
  const total = subtotal + giftWrappingCost + deliveryCharges - pointsDiscount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const fullAddress = `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`;
    
    if (user) {
      createOrder(fullAddress, pointsToUse);
    }
    
    // Save order to admin panel
    const newOrder = {
      id: `order-${Date.now()}`,
      date: new Date().toISOString(),
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      items: cart,
      total: total,
      status: 'Processing' as const,
      address: fullAddress,
      pointsEarned: Math.floor(total * 0.05)
    };
    
    const existingOrders = localStorage.getItem('allOrders');
    const orders = existingOrders ? JSON.parse(existingOrders) : [];
    orders.push(newOrder);
    localStorage.setItem('allOrders', JSON.stringify(orders));
    
    setOrderPlaced(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md text-center shadow-xl">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h1 className="text-3xl mb-4 text-gray-900 dark:text-gray-100">Order Placed Successfully!</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Thank you for your order. We'll send you a confirmation email shortly.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/account/orders')}
              className="w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition"
            >
              View Orders
            </button>
            <button
              onClick={() => navigate('/shop')}
              className="w-full px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-lg transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl mb-8 text-gray-900 dark:text-gray-100">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Details */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-xl mb-4 text-gray-900 dark:text-gray-100">Customer Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-xl mb-4 text-gray-900 dark:text-gray-100">Delivery Address</h2>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                    Full Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h2 className="text-xl mb-4 text-gray-900 dark:text-gray-100">Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-400 transition">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="w-5 h-5 text-cyan-600"
                  />
                  <div>
                    <p className="text-gray-900 dark:text-gray-100">Cash on Delivery (COD)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pay when you receive</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-400 transition">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                    className="w-5 h-5 text-cyan-600"
                  />
                  <div>
                    <p className="text-gray-900 dark:text-gray-100">UPI Payment</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Google Pay, PhonePe, Paytm</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-400 transition">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    className="w-5 h-5 text-cyan-600"
                  />
                  <div>
                    <p className="text-gray-900 dark:text-gray-100">Credit/Debit Card</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Visa, Mastercard, RuPay</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md sticky top-24">
              <h2 className="text-xl mb-4 text-gray-900 dark:text-gray-100">Order Summary</h2>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                
                {giftWrappingCost > 0 && (
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Gift Wrapping</span>
                    <span>₹{giftWrappingCost}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>Delivery</span>
                  <span>₹{deliveryCharges}</span>
                </div>

                {user && user.rewardPoints > 0 && (
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <label className="block mb-2 text-gray-700 dark:text-gray-300">
                      Use Reward Points
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="0"
                        max={Math.min(user.rewardPoints, subtotal * 10)}
                        value={pointsToUse}
                        onChange={(e) => setPointsToUse(Math.min(parseInt(e.target.value) || 0, user.rewardPoints))}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      />
                      <button
                        type="button"
                        onClick={() => setPointsToUse(Math.min(user.rewardPoints, subtotal * 10))}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-xs"
                      >
                        Max
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Available: {user.rewardPoints} points (1 point = ₹0.1)
                    </p>
                    {pointsToUse > 0 && (
                      <p className="text-green-600 dark:text-green-400 mt-1">
                        -₹{pointsDiscount.toFixed(2)}
                      </p>
                    )}
                  </div>
                )}

                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between text-xl text-gray-900 dark:text-gray-100">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
              >
                Place Order
              </button>

              <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 text-center">
                By placing an order you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
