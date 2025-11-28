import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Gift, TrendingUp, Star, Lock } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products, categories, comboPacks } from '../data/products';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Carousel } from '../components/Carousel';

export const Home: React.FC = () => {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 8);
  const saleProducts = products.filter(p => p.isOnSale).slice(0, 4);

  const carouselSlides = [
    {
      src: 'https://images.unsplash.com/photo-1722461073513-534b62957cec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc2NDMzNzg4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'New Bismi Gift House - Toys, Gifts & Stationery',
      title: 'Welcome to New Bismi Gift House',
      description: 'Discover our amazing collection of toys, gifts, and stationery'
    },
    {
      src: 'https://images.unsplash.com/photo-1745954757871-3be53100bad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwd2FsbCUyMGNsb2Nrc3xlbnwxfHx8fDE3NjQzMzc4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Beautiful Wall Clocks Collection',
      title: 'Explore Our Wall Clocks',
      description: 'Premium collection of decorative and modern wall clocks'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Admin Button - Fixed Position */}
      <Link
        to="/admin"
        className="fixed top-20 right-4 z-50 p-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        title="Admin Login"
      >
        <Lock className="w-5 h-5" />
      </Link>

      {/* Hero Carousel */}
      <section className="relative bg-gray-900 overflow-hidden">
        <Carousel slides={carouselSlides} autoPlayInterval={4000} />
      </section>

      {/* Featured Categories */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12 text-gray-900 dark:text-gray-100">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Combo Gift Packs */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900 dark:text-gray-100">Special Combo Packs</h2>
            <p className="text-gray-600 dark:text-gray-400">Curated gift bundles for every occasion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comboPacks.map((combo) => (
              <div key={combo.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={combo.image}
                    alt={combo.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white rounded-full text-sm">
                    Save ₹{combo.savings}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3 text-gray-900 dark:text-gray-100">{combo.name}</h3>
                  <ul className="mb-4 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {combo.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Gift className="w-4 h-4 text-purple-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-gray-900 dark:text-gray-100">₹{combo.price}</span>
                    <Link
                      to="/shop"
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl mb-2 text-gray-900 dark:text-gray-100">Best Sellers</h2>
            <p className="text-gray-600 dark:text-gray-400">Most loved by our customers</p>
          </div>
          <Link
            to="/shop"
            className="px-6 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition flex items-center gap-2"
          >
            View All
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900 dark:text-gray-100">Special Offers</h2>
            <p className="text-gray-600 dark:text-gray-400">Limited time deals you don't want to miss</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
              View All Offers
              <TrendingUp className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center mb-12 text-gray-900 dark:text-gray-100">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                comment: 'Amazing collection of toys! My kids absolutely loved the building blocks set.',
                rating: 5
              },
              {
                name: 'Rajesh Kumar',
                comment: 'Great quality products at affordable prices. The gift wrapping service is excellent.',
                rating: 5
              },
              {
                name: 'Anita Patel',
                comment: 'Fast delivery and wonderful customer service. Highly recommended for all gift needs!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                <p className="text-gray-900 dark:text-gray-100">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
