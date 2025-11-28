import React from 'react';
import { Award, Heart, Shield, TrendingUp, Users, Package } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Hero Section */}
      <section className="relative h-96 bg-[#1A1A1A] overflow-hidden border-b border-[#4DA6FF]/20">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1645886702021-43a8849dedea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwc3RvcmUlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjQzNDM0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Us"
            className="w-full h-full object-cover opacity-10 grayscale"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl mb-4 text-white">About Bismi Gift House</h1>
            <p className="text-xl text-[#B3B3B3]">
              Your trusted destination for gifts, toys, and more since years
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-8 text-white">Our Story</h2>
          <div className="prose prose-lg mx-auto">
            <p className="mb-4 text-[#B3B3B3] leading-relaxed">
              Bismi Gift House was founded with a simple mission: to bring joy and happiness to every celebration through thoughtfully curated gifts and products. What started as a small local store has grown into a trusted destination for gift shopping.
            </p>
            <p className="mb-4 text-[#B3B3B3] leading-relaxed">
              We believe that every gift tells a story and creates lasting memories. That's why we carefully select each product in our collection, ensuring quality, uniqueness, and value for our customers.
            </p>
            <p className="text-[#B3B3B3] leading-relaxed">
              Today, we serve thousands of happy customers with our diverse range of products including toys, newborn baby items, watches, stationery, remote cars, and unique gift items. Our commitment to excellence and customer satisfaction remains at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#1A1A1A] border-y border-[#4DA6FF]/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12 text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#0F0F0F] border border-[#4DA6FF]/20 rounded-xl hover:border-[#4DA6FF]/40 transition">
              <div className="w-16 h-16 bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#4DA6FF]" />
              </div>
              <h3 className="text-xl mb-3 text-white">Customer First</h3>
              <p className="text-[#B3B3B3]">
                We prioritize customer satisfaction above all else, ensuring every shopping experience is delightful.
              </p>
            </div>

            <div className="text-center p-6 bg-[#0F0F0F] border border-[#4DA6FF]/20 rounded-xl hover:border-[#4DA6FF]/40 transition">
              <div className="w-16 h-16 bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#4DA6FF]" />
              </div>
              <h3 className="text-xl mb-3 text-white">Quality Products</h3>
              <p className="text-[#B3B3B3]">
                Every product is carefully selected and verified to meet our high quality standards.
              </p>
            </div>

            <div className="text-center p-6 bg-[#0F0F0F] border border-[#4DA6FF]/20 rounded-xl hover:border-[#4DA6FF]/40 transition">
              <div className="w-16 h-16 bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#4DA6FF]" />
              </div>
              <h3 className="text-xl mb-3 text-white">Best Value</h3>
              <p className="text-[#B3B3B3]">
                We offer competitive prices without compromising on quality, giving you the best value.
              </p>
            </div>

            <div className="text-center p-6 bg-[#0F0F0F] border border-[#4DA6FF]/20 rounded-xl hover:border-[#4DA6FF]/40 transition">
              <div className="w-16 h-16 bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#4DA6FF]" />
              </div>
              <h3 className="text-xl mb-3 text-white">Innovation</h3>
              <p className="text-[#B3B3B3]">
                We continuously evolve our product range and services to meet changing customer needs.
              </p>
            </div>

            <div className="text-center p-6 bg-[#0F0F0F] border border-[#4DA6FF]/20 rounded-xl hover:border-[#4DA6FF]/40 transition">
              <div className="w-16 h-16 bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#4DA6FF]" />
              </div>
              <h3 className="text-xl mb-3 text-white">Community</h3>
              <p className="text-[#B3B3B3]">
                We are committed to being an active and responsible member of our community.
              </p>
            </div>

            <div className="text-center p-6 bg-[#0F0F0F] border border-[#4DA6FF]/20 rounded-xl hover:border-[#4DA6FF]/40 transition">
              <div className="w-16 h-16 bg-[#4DA6FF]/10 border border-[#4DA6FF]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-[#4DA6FF]" />
              </div>
              <h3 className="text-xl mb-3 text-white">Fast Delivery</h3>
              <p className="text-[#B3B3B3]">
                Quick and reliable delivery service to ensure your gifts reach on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0F0F0F] border-y border-[#4DA6FF]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl mb-2 text-[#4DA6FF]">10K+</p>
              <p className="text-[#B3B3B3]">Happy Customers</p>
            </div>
            <div>
              <p className="text-5xl mb-2 text-[#4DA6FF]">500+</p>
              <p className="text-[#B3B3B3]">Products</p>
            </div>
            <div>
              <p className="text-5xl mb-2 text-[#4DA6FF]">50+</p>
              <p className="text-[#B3B3B3]">Brands</p>
            </div>
            <div>
              <p className="text-5xl mb-2 text-[#4DA6FF]">4.8</p>
              <p className="text-[#B3B3B3]">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12 text-white">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl p-6 hover:border-[#4DA6FF]/40 transition">
            <h3 className="text-xl mb-3 text-white">Wide Selection</h3>
            <p className="text-[#B3B3B3]">
              From toys to stationery, watches to gift items - find everything under one roof.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl p-6 hover:border-[#4DA6FF]/40 transition">
            <h3 className="text-xl mb-3 text-white">Quality Assured</h3>
            <p className="text-[#B3B3B3]">
              Every product goes through rigorous quality checks before reaching you.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl p-6 hover:border-[#4DA6FF]/40 transition">
            <h3 className="text-xl mb-3 text-white">Gift Wrapping</h3>
            <p className="text-[#B3B3B3]">
              Professional gift wrapping services available for that perfect presentation.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl p-6 hover:border-[#4DA6FF]/40 transition">
            <h3 className="text-xl mb-3 text-white">Reward Program</h3>
            <p className="text-[#B3B3B3]">
              Earn points on every purchase and redeem them for exciting discounts.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl p-6 hover:border-[#4DA6FF]/40 transition">
            <h3 className="text-xl mb-3 text-white">Easy Returns</h3>
            <p className="text-[#B3B3B3]">
              Hassle-free returns within 7 days if you're not completely satisfied.
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl p-6 hover:border-[#4DA6FF]/40 transition">
            <h3 className="text-xl mb-3 text-white">24/7 Support</h3>
            <p className="text-[#B3B3B3]">
              Our customer support team is always ready to assist you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
