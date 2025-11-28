import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../data/products';

interface CartItem extends Product {
  quantity: number;
  giftWrapping: boolean;
}

interface User {
  name: string;
  email: string;
  phone: string;
  rewardPoints: number;
  orders: Order[];
}

interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
  address: string;
  pointsEarned: number;
}

interface AppContextType {
  cart: CartItem[];
  addToCart: (product: Product, giftWrapping?: boolean) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleGiftWrapping: (productId: string) => void;
  clearCart: () => void;
  
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  
  darkMode: boolean;
  toggleDarkMode: () => void;
  
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  
  createOrder: (address: string, pointsUsed: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedUser = localStorage.getItem('user');

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode));
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Cart functions
  const addToCart = (product: Product, giftWrapping = false) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, giftWrapping }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleGiftWrapping = (productId: string) => {
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, giftWrapping: !item.giftWrapping } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist functions
  const addToWishlist = (product: Product) => {
    setWishlist(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  // Dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // User functions
  const login = (email: string, password: string) => {
    // Mock login - in real app, validate credentials
    const newUser: User = {
      name: 'Guest User',
      email,
      phone: '+91 94466 51773',
      rewardPoints: 500,
      orders: [
        {
          id: 'ORD001',
          date: '2024-11-20',
          items: [],
          total: 2999,
          status: 'Delivered',
          address: '123 Main Street, City',
          pointsEarned: 150
        },
        {
          id: 'ORD002',
          date: '2024-11-25',
          items: [],
          total: 1499,
          status: 'Shipped',
          address: '123 Main Street, City',
          pointsEarned: 75
        }
      ]
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (userData: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...userData } : null);
  };

  const createOrder = (address: string, pointsUsed: number) => {
    if (!user) return;

    const subtotal = cart.reduce((sum, item) => {
      const price = item.isOnSale ? item.salePrice! : item.price;
      return sum + (price * item.quantity);
    }, 0);

    const giftWrappingCost = cart.reduce((sum, item) => 
      item.giftWrapping ? sum + (50 * item.quantity) : sum, 0
    );

    const total = subtotal + giftWrappingCost + 50 - (pointsUsed * 0.1); // 50 delivery, 1 point = ₹0.1

    const pointsEarned = Math.floor(total * 0.05); // 5% of total as points

    const newOrder: Order = {
      id: `ORD${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      items: [...cart],
      total,
      status: 'Processing',
      address,
      pointsEarned
    };

    setUser(prev => prev ? {
      ...prev,
      orders: [newOrder, ...prev.orders],
      rewardPoints: prev.rewardPoints - pointsUsed + pointsEarned
    } : null);

    clearCart();
  };

  const value: AppContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleGiftWrapping,
    clearCart,
    
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    
    darkMode,
    toggleDarkMode,
    
    user,
    login,
    logout,
    updateUser,
    
    createOrder
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
