import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Heart, ShoppingCart, Share2, Star, Package, Truck, Shield, Gift } from 'lucide-react';
import { products } from '../data/products';
import { useApp } from '../contexts/AppContext';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useApp();

  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [giftWrapping, setGiftWrapping] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4 text-white">Product not found</h1>
          <Link to="/shop" className="text-[#4DA6FF] hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const displayPrice = product.isOnSale ? product.salePrice! : product.price;
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, giftWrapping);
    }
    navigate('/cart');
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, giftWrapping);
    }
    navigate('/checkout');
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const giftWrappingCost = giftWrapping ? 50 * quantity : 0;

  return (
    <div className="min-h-screen bg-[#0F0F0F] py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-[#B3B3B3]">
          <Link to="/" className="hover:text-[#4DA6FF]">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-[#4DA6FF]">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${product.category.toLowerCase().replace(/ /g, '-')}`} className="hover:text-[#4DA6FF]">
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg sticky top-24 border border-[#333333]">
              <div className="aspect-square">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isBestSeller && (
                  <span className="px-3 py-1 bg-yellow-500 text-white rounded-lg">Best Seller</span>
                )}
                {product.isOnSale && (
                  <span className="px-3 py-1 bg-red-500 text-white rounded-lg">
                    Save ₹{product.price - product.salePrice!}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            {/* Category */}
            <p className="text-[#4DA6FF] mb-2">{product.category}</p>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl mb-4 text-white">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-[#333333]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[#B3B3B3]">{product.rating}</span>
              <span className="text-[#666666]">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl text-[#4DA6FF]">₹{displayPrice}</span>
                {product.isOnSale && (
                  <span className="text-2xl text-[#666666] line-through">₹{product.price}</span>
                )}
              </div>
              {product.isOnSale && (
                <p className="text-green-400 mt-2">
                  You save ₹{product.price - product.salePrice!} ({Math.round(((product.price - product.salePrice!) / product.price) * 100)}% off)
                </p>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl mb-3 text-white">Description</h2>
              <p className="text-[#B3B3B3]">{product.description}</p>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="mb-6">
                <h2 className="text-xl mb-3 text-white">Specifications</h2>
                <ul className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-center gap-2 text-[#B3B3B3]">
                      <Package className="w-5 h-5 text-[#4DA6FF]" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block mb-2 text-white">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-[#1A1A1A] hover:bg-[#4DA6FF]/20 text-white rounded-lg border border-[#333333]"
                >
                  -
                </button>
                <span className="text-xl text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-[#1A1A1A] hover:bg-[#4DA6FF]/20 text-white rounded-lg border border-[#333333]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Gift Wrapping */}
            <div className="mb-6 p-4 bg-[#1A1A1A] rounded-lg border-2 border-purple-500/30">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={giftWrapping}
                  onChange={(e) => setGiftWrapping(e.target.checked)}
                  className="w-5 h-5 text-purple-600 accent-purple-600"
                />
                <Gift className="w-6 h-6 text-purple-400" />
                <div className="flex-1">
                  <span className="text-white">Add Gift Wrapping</span>
                  <p className="text-sm text-[#B3B3B3]">+ ₹50 per item</p>
                </div>
                {giftWrapping && (
                  <span className="text-purple-400">+ ₹{giftWrappingCost}</span>
                )}
              </label>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 px-6 py-3 bg-[#4DA6FF] hover:bg-[#3D8FE6] text-white rounded-lg flex items-center justify-center gap-2 transition"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
              >
                Buy Now
              </button>
            </div>

            <div className="flex gap-4 mb-6">
              <button
                onClick={handleWishlist}
                className={`flex-1 px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition ${
                  inWishlist
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'bg-[#1A1A1A] text-[#B3B3B3] hover:bg-[#4DA6FF]/20 border border-[#333333]'
                }`}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-current' : ''}`} />
                {inWishlist ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
              <button
                onClick={handleShare}
                className="px-6 py-3 bg-[#1A1A1A] hover:bg-[#4DA6FF]/20 text-[#B3B3B3] rounded-lg flex items-center gap-2 transition border border-[#333333]"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#333333]">
              <div className="flex items-center gap-3">
                <Truck className="w-8 h-8 text-[#4DA6FF]" />
                <div>
                  <p className="text-sm text-white">Fast Delivery</p>
                  <p className="text-xs text-[#B3B3B3]">2-5 days</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-sm text-white">Secure Payment</p>
                  <p className="text-xs text-[#B3B3B3]">100% Safe</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-8 h-8 text-purple-400" />
                <div>
                  <p className="text-sm text-white">Easy Returns</p>
                  <p className="text-xs text-[#B3B3B3]">7 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl mb-8 text-white">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
