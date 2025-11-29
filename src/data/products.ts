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
  {
    id: "toy-5",
    name: "Toy Car Collection",
    price: 599,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1662321979743-3d0a327397bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3klMjBjYXIlMjBraWRzfGVufDF8fHx8MTc2NDMwMjA1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Set of colorful die-cast toy cars for imaginative play.",
    specifications: ["Set of 6 cars", "Die-cast metal", "Age 3+", "Durable finish"],
    rating: 4.7,
    reviews: 178
  },
  {
    id: "toy-6",
    name: "Beautiful Doll Set",
    price: 1199,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1612505995758-b795f2e5d6d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2xsJTIwdG95cyUyMGdpcmxzfGVufDF8fHx8MTc2NDM5MjM1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Charming doll with accessories for creative play.",
    specifications: ["14 inch doll", "Changeable outfits", "Accessories included", "Age 4+"],
    rating: 4.6,
    reviews: 145,
    isBestSeller: true
  },
  {
    id: "toy-7",
    name: "Action Figure Superhero",
    price: 799,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1700825073852-1913b3886584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBmaWd1cmUlMjBzdXBlcmhlcm98ZW58MXx8fHwxNzY0MzkyMzU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Detailed superhero action figure with movable parts.",
    specifications: ["8 inch figure", "Poseable joints", "Durable plastic", "Age 5+"],
    rating: 4.8,
    reviews: 234
  },
  {
    id: "toy-8",
    name: "Family Board Game",
    price: 849,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjBmYW1pbHl8ZW58MXx8fHwxNzY0MzQ3MjY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Exciting family board game for hours of fun together.",
    specifications: ["2-6 players", "Age 8+", "Educational", "Complete set"],
    rating: 4.5,
    reviews: 167
  },
  {
    id: "toy-9",
    name: "Science Experiment Kit",
    price: 1599,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=500",
    description: "Educational science kit with multiple experiments for curious minds.",
    specifications: ["20+ experiments", "Safe materials", "Age 8+", "Instruction guide"],
    rating: 4.7,
    reviews: 198,
    isBestSeller: true
  },
  {
    id: "toy-10",
    name: "Wooden Train Set",
    price: 1399,
    category: "Toys",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500",
    description: "Classic wooden train set with tracks and accessories.",
    specifications: ["30+ pieces", "Natural wood", "Age 3+", "Expandable track"],
    rating: 4.6,
    reviews: 142
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
  {
    id: "baby-5",
    name: "Baby Feeding Bottle Set",
    price: 699,
    category: "Newborn Baby Items",
    image: "https://images.unsplash.com/photo-1593296123312-d6555e88dc75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwZmVlZGluZyUyMGJvdHRsZXxlbnwxfHx8fDE3NjQzMzExMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium anti-colic baby feeding bottles for comfortable feeding.",
    specifications: ["Set of 3", "BPA-free", "Anti-colic design", "0-12 months"],
    rating: 4.8,
    reviews: 267
  },
  {
    id: "baby-6",
    name: "Newborn Baby Clothes Set",
    price: 1299,
    category: "Newborn Baby Items",
    image: "https://images.unsplash.com/photo-1637184572446-aa88b6a6562e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2xvdGhlcyUyMG5ld2Jvcm58ZW58MXx8fHwxNzY0MzkyMzU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Soft and comfortable clothing set for newborns.",
    specifications: ["Set of 8 pieces", "100% cotton", "0-6 months", "Gentle on skin"],
    rating: 4.7,
    reviews: 234,
    isBestSeller: true
  },
  {
    id: "baby-7",
    name: "Baby Diaper Bag",
    price: 1599,
    category: "Newborn Baby Items",
    image: "https://images.unsplash.com/photo-1677740812370-97fbc2948900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwZGlhcGVyJTIwYmFnfGVufDF8fHx8MTc2NDM5MjM1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Spacious and organized diaper bag for on-the-go parents.",
    specifications: ["Multiple pockets", "Waterproof", "Shoulder straps", "Large capacity"],
    rating: 4.6,
    reviews: 189
  },
  {
    id: "baby-8",
    name: "Baby Stroller Premium",
    price: 6999,
    category: "Newborn Baby Items",
    image: "https://images.unsplash.com/photo-1706459773588-20591994dca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc3Ryb2xsZXIlMjBwcmFtfGVufDF8fHx8MTc2NDMzOTQwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Comfortable and safe stroller with smooth ride.",
    specifications: ["5-point harness", "Foldable", "Adjustable canopy", "0-36 months"],
    rating: 4.9,
    reviews: 456,
    isBestSeller: true,
    isOnSale: true,
    salePrice: 5999
  },
  {
    id: "baby-9",
    name: "Baby Bath Tub",
    price: 899,
    category: "Newborn Baby Items",
    image: "https://images.unsplash.com/photo-1612623703869-11515ba4de3c?w=500",
    description: "Safe and comfortable baby bath tub with anti-slip surface.",
    specifications: ["Anti-slip base", "Temperature indicator", "0-24 months", "Compact storage"],
    rating: 4.5,
    reviews: 167
  },
  {
    id: "baby-10",
    name: "Baby Blanket Set",
    price: 799,
    category: "Newborn Baby Items",
    image: "https://images.unsplash.com/photo-1584545762527-01d0b7eae05c?w=500",
    description: "Soft and cozy blanket set perfect for newborns.",
    specifications: ["Set of 3", "100% cotton", "Breathable", "Machine washable"],
    rating: 4.7,
    reviews: 198
  },

  // Wall Clocks
  {
    id: "clock-1",
    name: "Modern Wall Clock",
    price: 1299,
    category: "Wall Clocks",
    image: "https://images.unsplash.com/photo-1740947852697-5a5c3d9ca40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YWxsJTIwY2xvY2t8ZW58MXx8fHwxNzY0MzkyMzU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1762098066355-86f196a4f598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwY2xvY2slMjB2aW50YWdlfGVufDF8fHx8MTc2NDM5MjM1OXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Classic vintage wooden wall clock with Roman numerals.",
    specifications: ["14-inch diameter", "Wooden frame", "Vintage design", "Ticking sound"],
    rating: 4.7,
    reviews: 134,
    isBestSeller: true
  },
  {
    id: "clock-3",
    name: "Digital LED Wall Clock",
    price: 2499,
    category: "Wall Clocks",
    image: "https://images.unsplash.com/photo-1712604036183-4b22bcf2b177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd2FsbCUyMGNsb2NrfGVufDF8fHx8MTc2NDM5MjM2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Modern LED digital wall clock with temperature display.",
    specifications: ["LED display", "Temperature & date", "Alarm function", "Remote control"],
    rating: 4.6,
    reviews: 203,
    isBestSeller: true
  },
  {
    id: "clock-4",
    name: "Minimalist Black Clock",
    price: 999,
    category: "Wall Clocks",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500",
    description: "Elegant minimalist wall clock with clean design.",
    specifications: ["10-inch diameter", "Silent sweep", "Modern design", "Easy to read"],
    rating: 4.5,
    reviews: 145
  },
  {
    id: "clock-5",
    name: "Decorative Pendulum Clock",
    price: 3299,
    category: "Wall Clocks",
    image: "https://images.unsplash.com/photo-1616084541675-39ad9acc33f2?w=500",
    description: "Traditional pendulum wall clock with chime feature.",
    specifications: ["18-inch height", "Wooden case", "Hourly chime", "Pendulum motion"],
    rating: 4.8,
    reviews: 167,
    isBestSeller: true
  },
  {
    id: "clock-6",
    name: "Quartz Wall Clock",
    price: 799,
    category: "Wall Clocks",
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=500",
    description: "Reliable quartz wall clock with clear numbers.",
    specifications: ["11-inch diameter", "Quartz movement", "Large numbers", "Battery operated"],
    rating: 4.4,
    reviews: 123
  },
  {
    id: "clock-7",
    name: "Colorful Kids Clock",
    price: 699,
    category: "Wall Clocks",
    image: "https://images.unsplash.com/photo-1622138145268-09b71655b8fc?w=500",
    description: "Fun and colorful wall clock perfect for kids' rooms.",
    specifications: ["9-inch diameter", "Colorful design", "Silent", "Educational"],
    rating: 4.6,
    reviews: 189
  },
  {
    id: "clock-8",
    name: "Industrial Metal Clock",
    price: 2199,
    category: "Wall Clocks",
    image: "https://images.unsplash.com/photo-1582735689481-62b87d4e6f01?w=500",
    description: "Rustic industrial style metal wall clock.",
    specifications: ["16-inch diameter", "Metal frame", "Exposed gears", "Vintage look"],
    rating: 4.7,
    reviews: 156,
    isOnSale: true,
    salePrice: 1799
  },

  // Watches
  {
    id: "watch-1",
    name: "Premium Leather Watch",
    price: 3999,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1715480914396-cf056a24407d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cmlzdHdhdGNoJTIwbWVufGVufDF8fHx8MTc2NDM5MjM1OXww&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1532435109783-fdb8a2be0baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZml0bmVzc3xlbnwxfHx8fDE3NjQyNzMwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Feature-rich smart watch with fitness tracking.",
    specifications: ["Heart rate monitor", "Step counter", "Sleep tracking", "30-day battery"],
    rating: 4.7,
    reviews: 421,
    isBestSeller: true
  },
  {
    id: "watch-4",
    name: "Analog Quartz Watch",
    price: 2499,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1639564879163-a2a85682410e?w=500",
    description: "Classic analog quartz watch with stainless steel band.",
    specifications: ["Stainless steel", "Scratch resistant", "Date display", "Water resistant"],
    rating: 4.6,
    reviews: 234
  },
  {
    id: "watch-5",
    name: "Ladies Fashion Watch",
    price: 3499,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
    description: "Elegant ladies watch with crystal accents.",
    specifications: ["Crystal details", "Adjustable strap", "Fashion design", "Gift boxed"],
    rating: 4.7,
    reviews: 312,
    isBestSeller: true
  },
  {
    id: "watch-6",
    name: "Chronograph Watch",
    price: 4999,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=500",
    description: "Sophisticated chronograph watch with multiple sub-dials.",
    specifications: ["Chronograph function", "Tachymeter", "Date window", "Premium build"],
    rating: 4.8,
    reviews: 178,
    isOnSale: true,
    salePrice: 3999
  },
  {
    id: "watch-7",
    name: "Kids Digital Watch",
    price: 799,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=500",
    description: "Colorful and durable digital watch for kids.",
    specifications: ["Colorful design", "Easy to read", "Water resistant", "Age 5+"],
    rating: 4.5,
    reviews: 145
  },
  {
    id: "watch-8",
    name: "Minimalist Watch",
    price: 2999,
    category: "Watches",
    image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=500",
    description: "Ultra-thin minimalist watch with clean design.",
    specifications: ["Ultra-thin case", "Minimalist dial", "Leather strap", "Unisex design"],
    rating: 4.6,
    reviews: 198
  },

  // Stationery
  {
    id: "stat-1",
    name: "Premium Pen Set",
    price: 799,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1610371228900-bdec68ba452c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW4lMjBwZW5jaWwlMjBzdGF0aW9uZXJ5fGVufDF8fHx8MTc2NDI5NDc1NXww&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1488748809185-53ad203ca5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9vayUyMGRpYXJ5fGVufDF8fHx8MTc2NDM5MjM2MHww&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1616169158811-6144c62622f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdXBwbGllcyUyMHBhaW50aW5nfGVufDF8fHx8MTc2NDMzNjEzOHww&ixlib=rb-4.1.0&q=80&w=1080",
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
  {
    id: "stat-5",
    name: "Sketch Book Professional",
    price: 599,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500",
    description: "High-quality sketch book for artists and designers.",
    specifications: ["A4 size", "100 sheets", "Heavy paper", "Spiral bound"],
    rating: 4.6,
    reviews: 167
  },
  {
    id: "stat-6",
    name: "Colorful Marker Set",
    price: 699,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1594843310663-706187cd03f3?w=500",
    description: "Vibrant marker set with dual tips for versatile use.",
    specifications: ["Set of 36 colors", "Dual tip", "Non-toxic", "Water-based"],
    rating: 4.7,
    reviews: 189,
    isBestSeller: true
  },
  {
    id: "stat-7",
    name: "Sticky Notes Collection",
    price: 299,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1599652293152-e19873ad26a3?w=500",
    description: "Colorful sticky notes set for organizing and reminders.",
    specifications: ["12 pads", "Various sizes", "Bright colors", "Strong adhesive"],
    rating: 4.4,
    reviews: 134
  },
  {
    id: "stat-8",
    name: "Calligraphy Pen Set",
    price: 1199,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500",
    description: "Professional calligraphy pen set with multiple nibs.",
    specifications: ["5 nibs", "Ink included", "Instruction guide", "Elegant case"],
    rating: 4.8,
    reviews: 156,
    isOnSale: true,
    salePrice: 899
  },
  {
    id: "stat-9",
    name: "Pencil Case Premium",
    price: 499,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1624969862644-791f3dc98927?w=500",
    description: "Spacious pencil case with multiple compartments.",
    specifications: ["Large capacity", "Durable zipper", "Multiple pockets", "Stylish design"],
    rating: 4.5,
    reviews: 112
  },
  {
    id: "stat-10",
    name: "Planner & Journal Set",
    price: 899,
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=500",
    description: "Beautiful planner and journal set for daily organization.",
    specifications: ["365 days", "Monthly & weekly views", "Hard cover", "Ribbon bookmark"],
    rating: 4.7,
    reviews: 223
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
  {
    id: "rc-4",
    name: "RC Drone with Camera",
    price: 4999,
    category: "Remote Cars",
    image: "https://images.unsplash.com/photo-1681042789006-562d71a48616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYyUyMGRyb25lJTIwaGVsaWNvcHRlcnxlbnwxfHx8fDE3NjQzOTIzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Advanced RC drone with HD camera for aerial photography.",
    specifications: ["HD camera", "30min flight time", "GPS enabled", "Remote control"],
    rating: 4.9,
    reviews: 345,
    isBestSeller: true
  },
  {
    id: "rc-5",
    name: "RC Helicopter",
    price: 2799,
    category: "Remote Cars",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500",
    description: "Easy-to-fly RC helicopter with gyro stabilization.",
    specifications: ["3-channel", "Gyro stabilized", "LED lights", "Indoor/outdoor"],
    rating: 4.5,
    reviews: 178
  },
  {
    id: "rc-6",
    name: "RC Drift Car",
    price: 2199,
    category: "Remote Cars",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=500",
    description: "Professional drift RC car for advanced users.",
    specifications: ["Drift tires", "High torque", "2.4GHz", "Rechargeable"],
    rating: 4.7,
    reviews: 156,
    isOnSale: true,
    salePrice: 1799
  },
  {
    id: "rc-7",
    name: "RC Boat Speedster",
    price: 2999,
    category: "Remote Cars",
    image: "https://images.unsplash.com/photo-1601653641194-f539e95ea8f7?w=500",
    description: "High-speed RC boat for water adventures.",
    specifications: ["Waterproof", "High speed", "Long range", "Rechargeable"],
    rating: 4.6,
    reviews: 145
  },
  {
    id: "rc-8",
    name: "RC Rock Crawler",
    price: 3499,
    category: "Remote Cars",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500",
    description: "Ultimate rock crawling RC car for extreme terrain.",
    specifications: ["4x4 drive", "Metal chassis", "All terrain", "Powerful motor"],
    rating: 4.8,
    reviews: 212,
    isBestSeller: true
  },

  // Gift Items
  {
    id: "gift-1",
    name: "Luxury Gift Hamper",
    price: 4999,
    category: "Gift Items",
    image: "https://images.unsplash.com/photo-1637590957181-8893af2a8344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm94JTIwd3JhcHBlZHxlbnwxfHx8fDE3NjQzOTIzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image: "https://images.unsplash.com/photo-1731251447169-1be7bfdc9d0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwcGhvdG8lMjBmcmFtZXxlbnwxfHx8fDE3NjQzOTIzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
  {
    id: "gift-5",
    name: "Decorative Vase Set",
    price: 1299,
    category: "Gift Items",
    image: "https://images.unsplash.com/photo-1581873372796-a2d2375eb8f7?w=500",
    description: "Artistic decorative vase set for home decor.",
    specifications: ["Set of 3", "Ceramic material", "Various sizes", "Modern design"],
    rating: 4.7,
    reviews: 167
  },
  {
    id: "gift-6",
    name: "Personalized Keychain Set",
    price: 399,
    category: "Gift Items",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500",
    description: "Customizable keychain set with elegant designs.",
    specifications: ["Set of 5", "Metal finish", "Customizable", "Gift packaged"],
    rating: 4.5,
    reviews: 234
  },
  {
    id: "gift-7",
    name: "Crystal Paperweight",
    price: 799,
    category: "Gift Items",
    image: "https://images.unsplash.com/photo-1608165108888-c2effb0b256a?w=500",
    description: "Elegant crystal paperweight for desk decoration.",
    specifications: ["Crystal glass", "Premium quality", "Gift boxed", "Multiple designs"],
    rating: 4.6,
    reviews: 123
  },
  {
    id: "gift-8",
    name: "Wine Glass Set",
    price: 1499,
    category: "Gift Items",
    image: "https://images.unsplash.com/photo-1584286595398-a59f21d092f7?w=500",
    description: "Premium wine glass set for celebrations.",
    specifications: ["Set of 6", "Crystal glass", "Dishwasher safe", "Elegant design"],
    rating: 4.8,
    reviews: 189,
    isBestSeller: true
  },
  {
    id: "gift-9",
    name: "Bamboo Gift Box",
    price: 1999,
    category: "Gift Items",
    image: "https://images.unsplash.com/photo-1609897727870-5b1f5c7c8b2a?w=500",
    description: "Eco-friendly bamboo gift box with assorted items.",
    specifications: ["Eco-friendly", "Multiple items", "Reusable box", "Natural bamboo"],
    rating: 4.7,
    reviews: 156
  },
  {
    id: "gift-10",
    name: "Luxury Chocolate Box",
    price: 1299,
    category: "Gift Items",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500",
    description: "Assorted luxury chocolates in premium packaging.",
    specifications: ["25 pieces", "Assorted flavors", "Premium quality", "Gift wrapped"],
    rating: 4.9,
    reviews: 298,
    isBestSeller: true
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
