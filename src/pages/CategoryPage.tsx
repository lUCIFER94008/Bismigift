import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const category = categories.find(c => c.slug === slug);
  const categoryProducts = products.filter(p => 
    p.category.toLowerCase().replace(/ /g, '-') === slug
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4 text-white">Category not found</h1>
          <Link to="/shop" className="text-[#4DA6FF] hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Category Banner */}
      <div className="bg-gradient-to-br from-[#4DA6FF] to-[#2E86DE] py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">{category.icon}</div>
          <h1 className="text-4xl md:text-5xl text-white mb-4">{category.name}</h1>
          <p className="text-white/90 text-lg">
            Explore our collection of {category.name.toLowerCase()}
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 py-12">
        {categoryProducts.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl text-white">
                {categoryProducts.length} Products
              </h2>
              <Link
                to="/shop"
                className="text-[#4DA6FF] hover:underline"
              >
                View All Categories
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-[#B3B3B3] mb-4">
              No products available in this category yet
            </p>
            <Link
              to="/shop"
              className="inline-block px-6 py-2 bg-[#4DA6FF] hover:bg-[#4DA6FF]/80 text-white rounded-lg"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};