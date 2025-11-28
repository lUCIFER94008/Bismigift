import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, Gift } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, toggleGiftWrapping, user } = useApp();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-gray-400" />
          <h1 className="text-3xl mb-4 text-gray-900 dark:text-gray-100">Your cart is empty</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Add some products to get started!
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = cart.reduce((sum, item) => {
    const price = item.isOnSale ? item.salePrice! : item.price;
    return sum + (price * item.quantity);
  }, 0);

  const giftWrappingCost = cart.reduce((sum, item) => 
    item.giftWrapping ? sum + (50 * item.quantity) : sum, 0
  );

  const deliveryCharges = 50;
  const pointsToEarn = user ? Math.floor(subtotal * 0.05) : 0;
  const total = subtotal + giftWrappingCost + deliveryCharges;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl mb-8 text-gray-900 dark:text-gray-100">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => {
              const displayPrice = item.isOnSale ? item.salePrice! : item.price;
              return (
                <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md">
                  <div className="flex gap-4">
                    {/* Image */}
                    <Link to={`/product/${item.id}`} className="flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <div>
                          <Link
                            to={`/product/${item.id}`}
                            className="text-lg text-gray-900 dark:text-gray-100 hover:text-cyan-600 dark:hover:text-cyan-400"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.category}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl text-cyan-600 dark:text-cyan-400">₹{displayPrice}</span>
                        {item.isOnSale && (
                          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                            ₹{item.price}
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg flex items-center justify-center"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-lg text-gray-900 dark:text-gray-100 w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg flex items-center justify-center"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <span className="text-lg text-gray-900 dark:text-gray-100">
                          ₹{displayPrice * item.quantity}
                        </span>
                      </div>

                      {/* Gift Wrapping */}
                      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={item.giftWrapping}
                            onChange={() => toggleGiftWrapping(item.id)}
                            className="w-4 h-4 text-purple-600"
                          />
                          <Gift className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            Add Gift Wrapping (+₹{50 * item.quantity})
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md sticky top-24">
              <h2 className="text-2xl mb-6 text-gray-900 dark:text-gray-100">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>₹{subtotal}</span>
                </div>

                {giftWrappingCost > 0 && (
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span className="flex items-center gap-1">
                      <Gift className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      Gift Wrapping
                    </span>
                    <span>₹{giftWrappingCost}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>Delivery Charges</span>
                  <span>₹{deliveryCharges}</span>
                </div>

                {user && pointsToEarn > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>Points to Earn (5%)</span>
                    <span>+{pointsToEarn} pts</span>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between text-xl text-gray-900 dark:text-gray-100">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition mb-4"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/shop"
                className="block text-center text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                Continue Shopping
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <p>✓ Secure Checkout</p>
                <p>✓ Free Delivery on orders above ₹999</p>
                <p>✓ Easy Returns within 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
