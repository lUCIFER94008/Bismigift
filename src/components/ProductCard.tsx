import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useApp } from '../contexts/AppContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useApp();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const displayPrice = product.isOnSale ? product.salePrice! : product.price;

  return (
    <Link to={`/product/${product.id}`} className="group block h-full">
      <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-lg sm:rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:border-[#4DA6FF]/40 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-[#0F0F0F]">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 flex flex-col gap-1 sm:gap-2">
            {product.isBestSeller && (
              <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-yellow-500 text-white text-[10px] sm:text-xs rounded">
                Best Seller
              </span>
            )}
            {product.isOnSale && (
              <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-red-500 text-white text-[10px] sm:text-xs rounded">
                Sale
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 p-1.5 sm:p-2 bg-[#1A1A1A] border border-[#4DA6FF]/30 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <Heart
              className={`w-4 h-4 sm:w-5 sm:h-5 ${inWishlist ? 'fill-red-500 text-red-500' : 'text-[#B3B3B3]'}`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-grow">
          {/* Category */}
          <p className="text-[9px] sm:text-[10px] md:text-xs text-[#B3B3B3] mb-0.5 sm:mb-1">{product.category}</p>

          {/* Product Name */}
          <h3 className="text-xs sm:text-sm md:text-base text-white mb-1 sm:mb-2 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem] leading-tight">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-0.5 sm:gap-1 mb-1 sm:mb-2">
            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-[10px] sm:text-xs md:text-sm text-white">{product.rating}</span>
            <span className="text-[9px] sm:text-[10px] md:text-xs text-[#B3B3B3]">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
                ₹{displayPrice}
              </span>
              {product.isOnSale && (
                <span className="text-[10px] sm:text-xs md:text-sm text-[#B3B3B3] line-through">
                  ₹{product.price}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 bg-[#4DA6FF] hover:bg-[#4DA6FF]/80 text-white rounded-md sm:rounded-lg flex items-center justify-center gap-1 sm:gap-2 transition text-[11px] sm:text-xs md:text-sm lg:text-base"
          >
            <ShoppingCart className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
};
