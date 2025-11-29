import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4 text-white">Contact Us</h1>
          <p className="text-lg text-[#B3B3B3]">
            We'd love to hear from you. Get in touch with us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <div className="bg-[#1A1A1A] rounded-xl p-6 shadow-md text-center">
            <div className="w-16 h-16 bg-[#4DA6FF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-[#4DA6FF]" />
            </div>
            <h3 className="text-xl mb-2 text-white">Phone</h3>
            <p className="text-[#B3B3B3] mb-2">+91 9605773773</p>
            <p className="text-[#B3B3B3]">All Days: 9AM-10PM</p>
          </div>

          <div className="bg-[#1A1A1A] rounded-xl p-6 shadow-md text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl mb-2 text-white">Email</h3>
            <p className="text-[#B3B3B3] mb-2">info@bismigifthouse.com</p>
            <p className="text-[#B3B3B3]">24/7 Support</p>
          </div>

          <div className="bg-[#1A1A1A] rounded-xl p-6 shadow-md text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl mb-2 text-white">Address</h3>
            <p className="text-[#B3B3B3]">
              17, Desabhimani Rd, Palarivattom, Mamangalam, Kaloor, Kochi, Ernakulam, Kerala 682017
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-[#1A1A1A] rounded-xl p-8 shadow-md">
            <h2 className="text-2xl mb-6 text-white">Send us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-500/20 text-green-400 p-4 rounded-lg text-center">
                <p className="text-lg">Thank you! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm text-[#B3B3B3]">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] bg-[#0F0F0F] text-white placeholder-[#666666]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm text-[#B3B3B3]">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] bg-[#0F0F0F] text-white placeholder-[#666666]"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-[#B3B3B3]">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] bg-[#0F0F0F] text-white placeholder-[#666666]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-[#B3B3B3]">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] bg-[#0F0F0F] text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Related</option>
                    <option value="product">Product Question</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-[#B3B3B3]">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DA6FF] bg-[#0F0F0F] text-white placeholder-[#666666]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#4DA6FF] hover:bg-[#3D8FE6] text-white rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-[#1A1A1A] rounded-xl shadow-md overflow-hidden h-64">
              <iframe
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1307224310895!2d76.29211937507813!3d10.00605939009964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d12ae496bb1%3A0xc6b4dac9ca2e4cdf!2sNew%20Bismi%20Gift%20House!5e0!3m2!1sen!2sin!4v1764324622713!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-md">
              <MessageCircle className="w-12 h-12 mb-4" />
              <h3 className="text-2xl mb-2">Quick Support</h3>
              <p className="mb-4 text-green-100">
                Get instant assistance via WhatsApp
              </p>
              <a
                href="https://wa.me/919605773773"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Store Hours */}
            <div className="bg-[#1A1A1A] rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#4DA6FF]" />
                <h3 className="text-xl text-white">Store Hours</h3>
              </div>
              <div className="space-y-2 text-[#B3B3B3]">
                <div className="flex justify-between">
                  <span>All Days</span>
                  <span className="text-white">9:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
