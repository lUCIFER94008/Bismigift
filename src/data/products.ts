export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  specifications?: string[];
  rating: number;
  reviews: number;
  isBestSeller?: boolean;
  isOnSale?: boolean;
  salePrice?: number;
}

export const products: Product[] = [
  // Toys
  {
    id: "toy-1",
    name: "Building Blocks Set",
    price: 899,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1553158399-3796bdbc82fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHRveXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NjQzMDQ1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Colorful building blocks set for creative play. Perfect for developing motor skills and imagination.",
    specifications: ["100+ pieces", "Non-toxic plastic", "Age 3+", "Multiple colors"],
    rating: 4.5,
    reviews: 128,
    isBestSeller: true
  },
  {
    id: "toy-2",
    name: "Soft Plush Teddy Bear",
    price: 699,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1551861651-26e1bf1cac3e?w=500",
    description: "Adorable soft plush teddy bear, perfect for cuddling and gifting.",
    specifications: ["Size: 12 inches", "Washable", "Soft fabric", "Safe for all ages"],
    rating: 4.8,
    reviews: 245,
    isBestSeller: true
  },
  {
    id: "toy-3",
    name: "Puzzle Game Set",
    price: 449,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1609793858389-f7efedefc586?w=500",
    description: "Educational puzzle game set to enhance problem-solving skills.",
    specifications: ["50 pieces", "Educational", "Age 4+", "Colorful design"],
    rating: 4.3,
    reviews: 87
  },
  {
    id: "toy-4",
    name: "Musical Keyboard Toy",
    price: 1299,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500",
    description: "Fun musical keyboard with various sounds and rhythms.",
    specifications: ["24 keys", "Multiple sounds", "Battery operated", "Age 3+"],
    rating: 4.6,
    reviews: 156,
    isOnSale: true,
    salePrice: 999
  },

  // Newborn Baby Items
  {
    id: "baby-1",
    name: "Baby Rattle Set",
    price: 399,
    category: "Newborn Baby Items",
    image: "https://images.unsplash.com/photo-1620875638370-8957e4dbd830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwaXRlbXMlMjBuZXdib3JufGVufDF8fHx8MTc2NDMyMzgwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Colorful baby rattle set for sensory development.",
    specifications: ["BPA-free", "Set of 5", "Easy to grip", "0-12 months"],
    rating: 4.7,
    reviews: 189,
    isBestSeller: true
  },
  {
    id: "baby-2",
    name: "Newborn Gift Basket",
    price: 2499,
    category: "Newborn Baby Items",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
    description: "Complete newborn gift basket with essentials.",
    specifications: ["10+ items", "Premium quality", "Gift wrapped", "Perfect for baby shower"],
    rating: 4.9,
    reviews: 312,
    isBestSeller: true
  },
  {
    id: "baby-3",
    name: "Baby Teething Toys",
    price: 349,
    category: "Newborn Baby Items",
    image: "https://images.unsplash.com/photo-1596461200800-7d8dfd1b8878?w=500",
    description: "Safe and soothing teething toys for babies.",
    specifications: ["Food-grade silicone", "Set of 4", "Freezer safe", "3+ months"],
    rating: 4.6,
    reviews: 142
  },
  {
    id: "baby-4",
    name: "Baby Mobile Hanger",
    price: 799,
    category: "Newborn Baby Items",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500",
    description: "Musical mobile hanger with soft toys for baby's crib.",
    specifications: ["Musical", "Rotating", "Soft toys", "Battery operated"],
    rating: 4.5,
    reviews: 98
  },

  // Wall Clocks
  {
    id: "clock-1",
    name: "Modern Wall Clock",
    price: 1299,
    category: "Wall Clocks",
    image: "https://images.unsplash.com/photo-1740947852697-5a5c3d9ca40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxsJTIwY2xvY2slMjBtb2Rlcm58ZW58MXx8fHwxNzY0MzIzODA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sleek modern wall clock with silent movement.",
    specifications: ["12-inch diameter", "Silent mechanism", "Battery included", "1-year warranty"],
    rating: 4.4,
    reviews: 76,
    isOnSale: true,
    salePrice: 999
  },
  {
    id: "clock-2",
    name: "Vintage Wooden Clock",
    price: 1899,
    category: "Wall Clocks",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500",
    description: "Classic vintage wooden wall clock with Roman numerals.",
    specifications: ["14-inch diameter", "Wooden frame", "Vintage design", "Ticking sound"],
    rating: 4.7,
    reviews: 134
  },
  {
    id: "clock-3",
    name: "Digital LED Wall Clock",
    price: 2499,
    category: "Wall Clocks",
    image: "https://images.unsplash.com/photo-1616084541675-39ad9acc33f2?w=500",
    description: "Modern LED digital wall clock with temperature display.",
    specifications: ["LED display", "Temperature & date", "Alarm function", "Remote control"],
    rating: 4.6,
    reviews: 203,
    isBestSeller: true
  },

  // Watches
  {
    id: "watch-1",
    name: "Premium Leather Watch",
    price: 3999,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1639564879163-a2a85682410e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmlzdCUyMHdhdGNoJTIwbHV4dXJ5fGVufDF8fHx8MTc2NDMyMzgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Elegant premium leather strap watch with classic design.",
    specifications: ["Leather strap", "Water resistant", "Japanese movement", "2-year warranty"],
    rating: 4.8,
    reviews: 267,
    isBestSeller: true
  },
  {
    id: "watch-2",
    name: "Sports Digital Watch",
    price: 1499,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
    description: "Durable sports digital watch with multiple functions.",
    specifications: ["Stopwatch", "Water proof", "LED backlight", "Shock resistant"],
    rating: 4.5,
    reviews: 189
  },
  {
    id: "watch-3",
    name: "Smart Fitness Watch",
    price: 5999,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=500",
    description: "Feature-rich smart watch with fitness tracking.",
    specifications: ["Heart rate monitor", "Step counter", "Sleep tracking", "30-day battery"],
    rating: 4.7,
    reviews: 421,
    isBestSeller: true
  },

  // Stationery
  {
    id: "stat-1",
    name: "Premium Pen Set",
    price: 799,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1599652293152-e19873ad26a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aW9uZXJ5JTIwZGVzayUyMHN1cHBsaWVzfGVufDF8fHx8MTc2NDMyMzgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Elegant premium pen set perfect for gifting.",
    specifications: ["Set of 3 pens", "Metal body", "Gift box included", "Smooth writing"],
    rating: 4.6,
    reviews: 154
  },
  {
    id: "stat-2",
    name: "Notebook Bundle",
    price: 449,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500",
    description: "Set of premium notebooks for students and professionals.",
    specifications: ["Set of 5 notebooks", "200 pages each", "Ruled pages", "Hard cover"],
    rating: 4.4,
    reviews: 98
  },
  {
    id: "stat-3",
    name: "Art Supplies Kit",
    price: 1299,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500",
    description: "Complete art supplies kit for creative projects.",
    specifications: ["50+ items", "Colors, brushes, pencils", "Portable case", "All ages"],
    rating: 4.7,
    reviews: 176,
    isBestSeller: true
  },
  {
    id: "stat-4",
    name: "Desk Organizer Set",
    price: 899,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500",
    description: "Stylish desk organizer set to keep your workspace tidy.",
    specifications: ["5-piece set", "Premium material", "Multiple compartments", "Modern design"],
    rating: 4.5,
    reviews: 123
  },

  // Remote Cars
  {
    id: "rc-1",
    name: "Off-Road RC Car",
    price: 2499,
    category: "Remote Cars",
    image: "https://images.unsplash.com/photo-1613404196612-e058bb5aa01a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjBjb250cm9sJTIwY2FyfGVufDF8fHx8MTc2NDI4NTkwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Powerful off-road remote control car with high speed.",
    specifications: ["4WD", "Rechargeable battery", "Range: 50m", "Age 8+"],
    rating: 4.8,
    reviews: 289,
    isBestSeller: true
  },
  {
    id: "rc-2",
    name: "Racing RC Sports Car",
    price: 1899,
    category: "Remote Cars",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
    description: "Fast racing RC car with sleek design.",
    specifications: ["High speed", "LED lights", "2.4GHz remote", "USB charging"],
    rating: 4.6,
    reviews: 167
  },
  {
    id: "rc-3",
    name: "Monster Truck RC",
    price: 3299,
    category: "Remote Cars",
    image: "https://images.unsplash.com/photo-1622121189953-209c9f3dd8dc?w=500",
    description: "Heavy-duty monster truck with large wheels and suspension.",
    specifications: ["Large size", "All-terrain", "Shock absorbers", "Water resistant"],
    rating: 4.7,
    reviews: 234,
    isBestSeller: true
  },

  // Gift Items
  {
    id: "gift-1",
    name: "Luxury Gift Hamper",
    price: 4999,
    category: "Gift Items",
    image: "https://images.unsplash.com/photo-1637590957181-8893af2a8344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm94JTIwd3JhcHBlZHxlbnwxfHx8fDE3NjQyNDgzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium luxury gift hamper for special occasions.",
    specifications: ["15+ items", "Premium packaging", "Customizable", "Perfect for festivals"],
    rating: 4.9,
    reviews: 342,
    isBestSeller: true
  },
  {
    id: "gift-2",
    name: "Photo Frame Set",
    price: 899,
    category: "Gift Items",
    image: "https://images.unsplash.com/photo-1609897727870-5b1f5c7c8b2a?w=500",
    description: "Elegant photo frame set for cherished memories.",
    specifications: ["Set of 3", "Multiple sizes", "Wall mount", "Premium finish"],
    rating: 4.5,
    reviews: 145
  },
  {
    id: "gift-3",
    name: "Aromatic Candle Set",
    price: 699,
    category: "Gift Items",
    image: "https://images.unsplash.com/photo-1602874801006-96927c36d6e4?w=500",
    description: "Soothing aromatic candle set with various fragrances.",
    specifications: ["Set of 6", "Natural wax", "Long burning", "Gift boxed"],
    rating: 4.6,
    reviews: 198
  },
  {
    id: "gift-4",
    name: "Coffee Mug Set",
    price: 549,
    category: "Gift Items",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500",
    description: "Beautiful coffee mug set perfect for gifting.",
    specifications: ["Set of 4", "Ceramic", "Microwave safe", "Unique designs"],
    rating: 4.4,
    reviews: 87,
    isOnSale: true,
    salePrice: 399
  },
];

export const categories = [
  { name: "Toys", slug: "toys", icon: "🎮" },
  { name: "Newborn Baby Items", slug: "newborn-baby-items", icon: "👶" },
  { name: "Wall Clocks", slug: "wall-clocks", icon: "🕐" },
  { name: "Watches", slug: "watches", icon: "⌚" },
  { name: "Stationery", slug: "stationery", icon: "✏️" },
  { name: "Remote Cars", slug: "remote-cars", icon: "🚗" },
  { name: "Gift Items", slug: "gift-items", icon: "🎁" },
];

export const comboPacks = [
  {
    id: "combo-1",
    name: "Birthday Bonanza Pack",
    price: 2999,
    items: ["Toy Car", "Birthday Card", "Balloon Set", "Gift Wrap"],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500",
    savings: 500
  },
  {
    id: "combo-2",
    name: "Festival Joy Bundle",
    price: 4499,
    items: ["Decorative Items", "Sweets Box", "Gift Hamper", "Greeting Cards"],
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500",
    savings: 800
  },
  {
    id: "combo-3",
    name: "Office Gift Set",
    price: 1999,
    items: ["Premium Pen Set", "Notebook", "Desk Organizer", "Coffee Mug"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500",
    savings: 300
  }
];
