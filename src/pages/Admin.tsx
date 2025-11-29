import React, { useState, useEffect } from 'react';
import { Package, ShoppingCart, Lock, LogOut, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Product } from '../data/products';

interface Order {
  id: string;
  date: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: any[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  address: string;
  pointsEarned: number;
}

export const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Toys',
    image: '',
    description: '',
    specifications: '',
    rating: '4.5',
    reviews: '0',
    isBestSeller: false,
    isOnSale: false,
    salePrice: ''
  });

  // Load products and orders from localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem('adminProducts');
    const savedOrders = localStorage.getItem('allOrders');
    
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check (in production, use proper authentication)
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmitProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProduct: Product = {
      id: editingProduct ? editingProduct.id : `product-${Date.now()}`,
      name: formData.name,
      price: parseFloat(formData.price),
      category: formData.category,
      image: formData.image || 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500',
      description: formData.description,
      specifications: formData.specifications ? formData.specifications.split(',').map(s => s.trim()) : [],
      rating: parseFloat(formData.rating),
      reviews: parseInt(formData.reviews),
      isBestSeller: formData.isBestSeller,
      isOnSale: formData.isOnSale,
      salePrice: formData.salePrice ? parseFloat(formData.salePrice) : undefined
    };

    let updatedProducts;
    if (editingProduct) {
      updatedProducts = products.map(p => p.id === editingProduct.id ? newProduct : p);
    } else {
      updatedProducts = [...products, newProduct];
    }

    setProducts(updatedProducts);
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts));
    
    // Reset form
    setFormData({
      name: '',
      price: '',
      category: 'Toys',
      image: '',
      description: '',
      specifications: '',
      rating: '4.5',
      reviews: '0',
      isBestSeller: false,
      isOnSale: false,
      salePrice: ''
    });
    setShowProductForm(false);
    setEditingProduct(null);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      category: product.category,
      image: product.image,
      description: product.description,
      specifications: product.specifications?.join(', ') || '',
      rating: product.rating.toString(),
      reviews: product.reviews.toString(),
      isBestSeller: product.isBestSeller || false,
      isOnSale: product.isOnSale || false,
      salePrice: product.salePrice?.toString() || ''
    });
    setShowProductForm(true);
  };

  const handleDeleteProduct = (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(p => p.id !== productId);
      setProducts(updatedProducts);
      localStorage.setItem('adminProducts', JSON.stringify(updatedProducts));
    }
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('allOrders', JSON.stringify(updatedOrders));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center px-4">
        <div className="bg-[#1A1A1A] rounded-xl shadow-lg border border-[#4DA6FF]/20 p-8 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#4DA6FF]/20 border border-[#4DA6FF]/40 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-[#4DA6FF]" />
            </div>
          </div>
          <h1 className="text-2xl text-center mb-6 text-white">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block mb-2 text-[#B3B3B3]">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-[#4DA6FF]/30 rounded-lg bg-[#0F0F0F] text-white placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#4DA6FF] text-white rounded-lg hover:bg-[#4DA6FF]/80 transition"
            >
              Login
            </button>
            <p className="mt-4 text-sm text-[#B3B3B3] text-center">
              Default password: admin123
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-[#1A1A1A] rounded-xl border border-[#4DA6FF]/20 shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl text-white">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-[#1A1A1A] rounded-xl border border-[#4DA6FF]/20 shadow-md mb-8">
          <div className="flex border-b border-[#4DA6FF]/20">
            <button
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2 px-6 py-4 transition ${
                activeTab === 'products'
                  ? 'border-b-2 border-[#4DA6FF] text-white'
                  : 'text-[#B3B3B3] hover:text-white'
              }`}
            >
              <Package className="w-5 h-5" />
              Products ({products.length})
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-2 px-6 py-4 transition ${
                activeTab === 'orders'
                  ? 'border-b-2 border-[#4DA6FF] text-white'
                  : 'text-[#B3B3B3] hover:text-white'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              Orders ({orders.length})
            </button>
          </div>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div>
            {/* Add Product Button */}
            {!showProductForm && (
              <div className="mb-6">
                <button
                  onClick={() => {
                    setShowProductForm(true);
                    setEditingProduct(null);
                    setFormData({
                      name: '',
                      price: '',
                      category: 'Toys',
                      image: '',
                      description: '',
                      specifications: '',
                      rating: '4.5',
                      reviews: '0',
                      isBestSeller: false,
                      isOnSale: false,
                      salePrice: ''
                    });
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-[#4DA6FF] text-white rounded-lg hover:bg-[#4DA6FF]/80 transition"
                >
                  <Plus className="w-5 h-5" />
                  Add New Product
                </button>
              </div>
            )}

            {/* Product Form */}
            {showProductForm && (
              <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-2xl mb-6 text-white">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h2>
                <form onSubmit={handleSubmitProduct} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-[#B3B3B3]">Product Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[#4DA6FF]/30 rounded-lg bg-[#0F0F0F] text-white placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-[#B3B3B3]">Price (₹) *</label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[#4DA6FF]/30 rounded-lg bg-[#0F0F0F] text-white placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-[#B3B3B3]">Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[#4DA6FF]/30 rounded-lg bg-[#0F0F0F] text-white focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                        required
                      >
                        <option value="Toys">Toys</option>
                        <option value="Newborn Baby Items">Newborn Baby Items</option>
                        <option value="Wall Clocks">Wall Clocks</option>
                        <option value="Watches">Watches</option>
                        <option value="Stationery">Stationery</option>
                        <option value="Remote Cars">Remote Cars</option>
                        <option value="Gift Items">Gift Items</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-2 text-[#B3B3B3]">Image URL</label>
                      <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[#4DA6FF]/30 rounded-lg bg-[#0F0F0F] text-white placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-[#B3B3B3]">Rating (0-5)</label>
                      <input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleInputChange}
                        step="0.1"
                        min="0"
                        max="5"
                        className="w-full px-4 py-2 border border-[#4DA6FF]/30 rounded-lg bg-[#0F0F0F] text-white placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-[#B3B3B3]">Number of Reviews</label>
                      <input
                        type="number"
                        name="reviews"
                        value={formData.reviews}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-[#4DA6FF]/30 rounded-lg bg-[#0F0F0F] text-white placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-[#B3B3B3]">Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-[#4DA6FF]/30 rounded-lg bg-[#0F0F0F] text-white placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-[#B3B3B3]">Specifications (comma-separated)</label>
                    <input
                      type="text"
                      name="specifications"
                      value={formData.specifications}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-[#4DA6FF]/30 rounded-lg bg-[#0F0F0F] text-white placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                      placeholder="Size: Large, Color: Red, Material: Plastic"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="isBestSeller"
                        checked={formData.isBestSeller}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-[#4DA6FF]"
                      />
                      <label className="text-[#B3B3B3]">Best Seller</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="isOnSale"
                        checked={formData.isOnSale}
                        onChange={handleInputChange}
                        className="w-5 h-5 accent-[#4DA6FF]"
                      />
                      <label className="text-[#B3B3B3]">On Sale</label>
                    </div>
                    {formData.isOnSale && (
                      <div>
                        <input
                          type="number"
                          name="salePrice"
                          value={formData.salePrice}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-[#4DA6FF]/30 rounded-lg bg-[#0F0F0F] text-white placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-[#4DA6FF]"
                          placeholder="Sale Price"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#4DA6FF] text-white rounded-lg hover:bg-[#4DA6FF]/80 transition"
                    >
                      {editingProduct ? 'Update Product' : 'Add Product'}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowProductForm(false);
                        setEditingProduct(null);
                      }}
                      className="px-6 py-3 bg-[#1A1A1A] border border-[#4DA6FF]/30 text-[#B3B3B3] rounded-lg hover:bg-[#0F0F0F] transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Products List */}
            <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#0F0F0F]">
                    <tr>
                      <th className="px-6 py-3 text-left text-white">Image</th>
                      <th className="px-6 py-3 text-left text-white">Name</th>
                      <th className="px-6 py-3 text-left text-white">Category</th>
                      <th className="px-6 py-3 text-left text-white">Price</th>
                      <th className="px-6 py-3 text-left text-white">Status</th>
                      <th className="px-6 py-3 text-left text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center text-[#B3B3B3]">
                          No products added yet. Click "Add New Product" to get started.
                        </td>
                      </tr>
                    ) : (
                      products.map((product) => (
                        <tr key={product.id} className="border-t border-[#4DA6FF]/20">
                          <td className="px-6 py-4">
                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                          </td>
                          <td className="px-6 py-4 text-white">{product.name}</td>
                          <td className="px-6 py-4 text-[#B3B3B3]">{product.category}</td>
                          <td className="px-6 py-4 text-white">₹{product.price}</td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              {product.isBestSeller && (
                                <span className="px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs rounded">
                                  Best Seller
                                </span>
                              )}
                              {product.isOnSale && (
                                <span className="px-2 py-1 bg-red-500/20 border border-red-500/30 text-red-400 text-xs rounded">
                                  On Sale
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleEditProduct(product)}
                                className="p-2 text-[#4DA6FF] hover:text-[#4DA6FF]/80 transition"
                                title="Edit"
                              >
                                <Edit className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="p-2 text-red-500 hover:text-red-600 transition"
                                title="Delete"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="bg-[#1A1A1A] border border-[#4DA6FF]/20 rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0F0F0F]">
                  <tr>
                    <th className="px-6 py-3 text-left text-white">Order ID</th>
                    <th className="px-6 py-3 text-left text-white">Date</th>
                    <th className="px-6 py-3 text-left text-white">Customer</th>
                    <th className="px-6 py-3 text-left text-white">Items</th>
                    <th className="px-6 py-3 text-left text-white">Total</th>
                    <th className="px-6 py-3 text-left text-white">Status</th>
                    <th className="px-6 py-3 text-left text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-8 text-center text-[#B3B3B3]">
                        No orders yet.
                      </td>
                    </tr>
                  ) : (
                    orders.map((order) => (
                      <tr key={order.id} className="border-t border-[#4DA6FF]/20">
                        <td className="px-6 py-4 text-white">#{order.id.slice(0, 8)}</td>
                        <td className="px-6 py-4 text-[#B3B3B3]">
                          {new Date(order.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-white">{order.customerName || 'Guest'}</div>
                          <div className="text-sm text-[#B3B3B3]">{order.customerEmail}</div>
                        </td>
                        <td className="px-6 py-4 text-[#B3B3B3]">{order.items.length} items</td>
                        <td className="px-6 py-4 text-white">₹{order.total}</td>
                        <td className="px-6 py-4">
                          <select
                            value={order.status}
                            onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value as Order['status'])}
                            className={`px-3 py-1 rounded text-sm border ${
                              order.status === 'Processing'
                                ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400'
                                : order.status === 'Shipped'
                                ? 'bg-[#4DA6FF]/20 border-[#4DA6FF]/30 text-[#4DA6FF]'
                                : order.status === 'Delivered'
                                ? 'bg-green-500/20 border-green-500/30 text-green-400'
                                : 'bg-red-500/20 border-red-500/30 text-red-400'
                            }`}
                          >
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            className="p-2 text-[#4DA6FF] hover:text-[#4DA6FF]/80 transition"
                            title="View Details"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
