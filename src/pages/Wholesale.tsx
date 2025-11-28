import React, { useState } from 'react';
import { Package, TrendingUp, Award, CheckCircle } from 'lucide-react';

export const Wholesale: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        productType: '',
        quantity: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <Package className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl mb-4">Wholesale & Bulk Orders</h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Partner with us for bulk orders and enjoy exclusive wholesale pricing
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12 text-gray-900 dark:text-gray-100">Why Choose Our Wholesale Program?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
            <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900 dark:text-gray-100">Competitive Pricing</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get the best wholesale rates with volume discounts on bulk orders
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900 dark:text-gray-100">Quality Products</h3>
            <p className="text-gray-600 dark:text-gray-400">
              All products meet our strict quality standards for wholesale distribution
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900 dark:text-gray-100">Dedicated Support</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Personal account manager to assist with your wholesale needs
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl mb-6 text-center text-gray-900 dark:text-gray-100">Wholesale Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              'Volume-based pricing discounts',
              'Flexible payment terms',
              'Priority order processing',
              'Custom packaging options',
              'Fast bulk shipping',
              'Seasonal product catalogs',
              'Return & exchange policy',
              'Marketing support materials'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4 text-gray-900 dark:text-gray-100">Request a Quote</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form below and our wholesale team will get back to you within 24 hours
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 p-8 rounded-xl text-center">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl mb-2">Enquiry Submitted Successfully!</h3>
                <p>Our wholesale team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                      Business/Shop Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
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
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                      Product Type *
                    </label>
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    >
                      <option value="">Select product type</option>
                      <option value="toys">Toys</option>
                      <option value="baby-items">Newborn Baby Items</option>
                      <option value="clocks">Wall Clocks</option>
                      <option value="watches">Watches</option>
                      <option value="stationery">Stationery</option>
                      <option value="remote-cars">Remote Cars</option>
                      <option value="gift-items">Gift Items</option>
                      <option value="mixed">Mixed Products</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                      Quantity Needed *
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      placeholder="e.g., 100 units"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                    Additional Details / Special Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition text-lg"
                >
                  Submit Enquiry
                </button>

                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Minimum order quantity may apply. Our team will discuss details with you.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl mb-4">Have Questions?</h3>
          <p className="mb-6 text-cyan-100">
            Our wholesale team is here to help you find the perfect solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919446651773"
              className="px-6 py-3 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition"
            >
              Call: +91 94466 51773
            </a>
            <a
              href="mailto:wholesale@bismigifthouse.com"
              className="px-6 py-3 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg transition"
            >
              Email: wholesale@bismigifthouse.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
