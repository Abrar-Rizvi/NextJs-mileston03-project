export interface IProduct {
    id: number; // Unique identifier for the product
    smallHeading: string; // Short title for the product
    longHeading: string; // Detailed title or name of the product
    price: string; // Price of the product in string format
    description: string; // A short description of the product
    features: string[]; // An array of features describing the product
    imageUrl: string;  //image url  in string format
  }
export const products: IProduct[] = [
    {
        id: 1,
        smallHeading: "Smartphone",
        longHeading: "Apple iPhone 14 Pro Max with A16 Bionic Chip",
        price: "Rs.1,49,999",
        description: "The iPhone 14 Pro Max features an advanced triple-camera system, vibrant Super Retina XDR display, and the powerful A16 Bionic chip.",
        features: ["6.7-inch OLED display", "48 MP main camera", "Dynamic Island"],
        imageUrl: "/images2/smartphone.jpg"
    },
    {
        id: 2,
        smallHeading: "Laptop",
        longHeading: "Dell Inspiron 15 with Intel i5 Processor and 8GB RAM",
        price: "Rs.57,999",
        description: "A versatile laptop for work and play, featuring an Intel i5 processor, 8GB RAM, and a Full HD display.",
        features: ["15.6-inch FHD display", "512GB SSD", "Windows 11 pre-installed"],
         imageUrl: "/images2/laptop.jpg"
    },
    {
        id: 3,
        smallHeading: "Smartwatch",
        longHeading: "Samsung Galaxy Watch 5 with Advanced Health Monitoring",
        price: "Rs.21,999",
        description: "Track your health and fitness seamlessly with the Galaxy Watch 5, featuring body composition analysis and sleep tracking.",
        features: ["AMOLED display", "SpO2 monitoring", "5ATM water resistance"],
           imageUrl: "/images2/smartwatch.jpg"
    },
    {
        id: 4,
        smallHeading: "Headphones",
        longHeading: "Sony WH-1000XM5 Noise-Canceling Wireless Headphones",
        price: "Rs.29,999",
        description: "Experience premium sound quality with industry-leading noise cancellation and long battery life.",
        features: ["30-hour battery life", "Adaptive sound control", "Touch controls"],
           imageUrl: "/images2/headphones.jpg"
    },
    {
        id: 5,
        smallHeading: "Bluetooth Speaker",
        longHeading: "JBL Flip 6 Portable Waterproof Bluetooth Speaker",
        price: "Rs.8,999",
        description: "Enjoy powerful, crystal-clear sound with the rugged and waterproof JBL Flip 6.",
        features: ["IP67 waterproof", "12-hour playtime", "Dual passive radiators"],
           imageUrl: "/images2/bluetoothspeaker.jpg"
    },
    {
        id: 6,
        smallHeading: "Gaming Console",
        longHeading: "Sony PlayStation 5 with DualSense Wireless Controller",
        price: "Rs.54,999",
        description: "Immerse yourself in gaming with the PlayStation 5, offering stunning graphics and fast load times.",
        features: ["4K gaming", "Ray tracing", "Haptic feedback"],
           imageUrl: "/images2/gamingconsole.jpg"
    },
    {
        id: 7,
        smallHeading: "Camera",
        longHeading: "Canon EOS R6 Mirrorless Camera with 24-105mm Lens",
        price: "Rs.1,85,000",
        description: "Capture professional-grade photos and videos with the Canon EOS R6 featuring advanced autofocus and 4K recording.",
        features: ["20.1 MP sensor", "In-body stabilization", "4K 60fps video"],
           imageUrl: "/images2/camera.jpg"
    },
    {
        id: 8,
        smallHeading: "Smart TV",
        longHeading: "Samsung 55-inch QLED 4K Ultra HD Smart TV",
        price: "Rs.74,999",
        description: "Enjoy vibrant colors and detailed images with the QLED 4K TV, powered by Tizen OS for seamless streaming.",
        features: ["Quantum Dot technology", "Alexa and Google Assistant support", "120Hz refresh rate"],
           imageUrl: "/images2/smarttv.jpg"
    },
    {
        id: 9,
        smallHeading: "Refrigerator",
        longHeading: "LG 260L Frost-Free Double Door Refrigerator",
        price: "Rs.24,499",
        description: "Keep your food fresh and organized with this energy-efficient double-door refrigerator.",
        features: ["Smart inverter compressor", "Moist Balance Crisper", "2-star energy rating"],
           imageUrl: "/images2/refrigrator.jpg"
    },
    {
        id: 10,
        smallHeading: "Microwave Oven",
        longHeading: "IFB 20 L Solo Microwave Oven for Quick Heating",
        price: "Rs.6,799",
        description: "Perfect for quick meals and reheating, the IFB Solo Microwave is compact and efficient.",
        features: ["20L capacity", "5 power levels", "Defrost function"],
           imageUrl: "/images2/oven.jpg"
    },
    {
        id: 11,
        smallHeading: "T-shirt",
        longHeading: "Men's Cotton Round Neck T-shirt - Black",
        price: "Rs.599",
        description: "A comfortable and stylish black cotton T-shirt perfect for casual outings.",
        features: ["100% cotton", "Regular fit", "Machine washable"],
           imageUrl: "/images2/tshirt.jpg"
    },
    {
        id: 12,
        smallHeading: "Jeans",
        longHeading: "Women's High-Waisted Skinny Fit Jeans - Blue",
        price: "Rs.1,299",
        description: "Trendy and comfortable high-waisted skinny jeans with a stretchable fabric.",
        features: ["Skinny fit", "Stretchable denim", "5-pocket design"],
           imageUrl: "/images2/jeans.jpg"
    },
    {
        id: 13,
        smallHeading: "Shoes",
        longHeading: "Nike Air Zoom Running Shoes for Men",
        price: "Rs.5,499",
        description: "Lightweight running shoes designed for performance and comfort during long runs.",
        features: ["Breathable mesh upper", "Cushioned sole", "High grip outsole"],
           imageUrl: "/images2/shoes.jpg"
    },
    {
        id: 14,
        smallHeading: "Backpack",
        longHeading: "Wildcraft Laptop Backpack with Multiple Compartments",
        price: "Rs.1,899",
        description: "Spacious and durable laptop backpack with multiple compartments for all your essentials.",
        features: ["Water-resistant material", "Padded laptop sleeve", "Adjustable straps"],
           imageUrl: "/images2/backpack.jpg"
    },
    {
        id: 15,
        smallHeading: "Perfume",
        longHeading: "Davidoff Cool Water Eau de Toilette for Men",
        price: "Rs.3,999",
        description: "A refreshing and masculine fragrance inspired by the ocean.",
        features: ["Long-lasting", "Aqua and woody notes", "100ml bottle"],
           imageUrl: "/images2/perfume.jpg"
    },
    {
        id: 16,
        smallHeading: "Hair Dryer",
        longHeading: "Philips ThermoProtect Hair Dryer for Quick Drying",
        price: "Rs.1,299",
        description: "Style your hair with ease using the Philips ThermoProtect hair dryer.",
        features: ["ThermoProtect technology", "3 heat settings", "Compact design"],
           imageUrl: "/images2/hairdryer.jpg"
    },
    {
        id: 17,
        smallHeading: "Fitness Band",
        longHeading: "Mi Smart Band 7 with SpO2 and Heart Rate Tracking",
        price: "Rs.2,799",
        description: "Stay active and monitor your health with the Mi Smart Band 7.",
        features: ["AMOLED display", "14-day battery life", "Water-resistant"],
           imageUrl: "/images2/fitnessband.jpg"
    },
    {
        id: 18,
        smallHeading: "Tablet",
        longHeading: "Apple iPad Air 2023 with M1 Chip",
        price: "Rs.59,999",
        description: "Powerful and versatile, the iPad Air is perfect for work and entertainment.",
        features: ["10.9-inch Liquid Retina display", "M1 chip", "Touch ID"],
          imageUrl: "/images2/tablet.jpg"
    },
    {
        id: 19,
        smallHeading: "Book",
        longHeading: "Atomic Habits by James Clear",
        price: "Rs.499",
        description: "A practical guide to building good habits and breaking bad ones.",
        features: ["Paperback", "320 pages", "Bestselling author"],
          imageUrl: "/images2/book.jpg"
    },
    {
        id: 20,
        smallHeading: "Chair",
        longHeading: "Ergonomic Office Chair with Adjustable Lumbar Support",
        price: "Rs.7,999",
        description: "An ergonomic chair designed to provide comfort during long working hours.",
        features: ["Adjustable height", "Breathable mesh back", "360-degree swivel"],
         imageUrl: "/images2/chair.jpg"
    },
    {
        id: 21,
        smallHeading: "Wireless Earbuds",
        longHeading: "Apple AirPods Pro 2 with Active Noise Cancellation",
        price: "Rs.22,499",
        description: "Premium wireless earbuds with spatial audio and industry-leading noise cancellation.",
        features: ["Active Noise Cancellation", "Adaptive EQ", "MagSafe charging case"],
        imageUrl: "/images2/Wireless Earbuds.jpg"
    },
    {
        id: 22,
        smallHeading: "Smartphone Case",
        longHeading: "Spigen Rugged Armor Case for Samsung Galaxy S23",
        price: "Rs.1,299",
        description: "Protect your smartphone with this sleek, shock-absorbent rugged case.",
        features: ["Flexible TPU", "Carbon fiber design", "Air Cushion technology"],
        imageUrl: "/images2/smartphone-case.jpg",
      },
      {
        id: 23,
        smallHeading: "Kitchen Mixer",
        longHeading: "Bajaj GX8 Mixer Grinder with 3 Jars",
        price: "Rs.3,999",
        description: "A powerful mixer grinder for all your cooking needs.",
        features: ["750W motor", "3 stainless steel jars", "Overload protection"],
        imageUrl: "/images2/kitchen-mixer.jpg",
      },
      {
        id: 24,
        smallHeading: "Air Conditioner",
        longHeading: "Voltas 1.5 Ton 3 Star Split AC with Copper Coil",
        price: "Rs.38,499",
        description: "Stay cool with this energy-efficient split AC with rapid cooling technology.",
        features: ["Turbo cooling", "Copper condenser", "Environment-friendly refrigerant"],
        imageUrl: "/images2/air-conditioner.jpg",
      },
      {
        id: 25,
        smallHeading: "Washing Machine",
        longHeading: "Samsung 6.5 kg Fully Automatic Top Load Washing Machine",
        price: "Rs.18,999",
        description: "Efficient and easy-to-use washing machine with a diamond drum design.",
        features: ["Fully automatic", "Diamond drum", "Energy-efficient motor"],
        imageUrl: "/images2/washing-machine.jpg",
      },
      {
        id: 26,
        smallHeading: "Water Purifier",
        longHeading: "Kent RO+UV+UF Water Purifier with Mineral Technology",
        price: "Rs.15,499",
        description: "Pure and safe drinking water with advanced multi-stage purification.",
        features: ["8-liter capacity", "TDS control", "Zero water wastage"],
        imageUrl: "/images2/water-purifier.jpg",
      },
      {
        id: 27,
        smallHeading: "Printer",
        longHeading: "HP DeskJet Ink Advantage 2335 All-in-One Printer",
        price: "Rs.4,999",
        description: "Print, scan, and copy with this compact and reliable printer.",
        features: ["All-in-one functionality", "Energy-efficient", "High-quality prints"],
        imageUrl: "/images2/printer.jpg",
      },
      {
        id: 28,
        smallHeading: "Watch",
        longHeading: "Fossil Men's Grant Chronograph Leather Watch",
        price: "Rs.9,499",
        description: "A stylish leather watch with a classic chronograph design.",
        features: ["Water-resistant", "Quartz movement", "Genuine leather strap"],
        imageUrl: "/images2/watch.jpg",
      },
      {
        id: 29,
        smallHeading: "Blender",
        longHeading: "NutriBullet Pro 900 High-Speed Blender/Mixer",
        price: "Rs.6,299",
        description: "Blend smoothies, juices, and shakes effortlessly with the NutriBullet Pro.",
        features: ["900W motor", "Durable cups", "Compact design"],
        imageUrl: "/images2/blender.jpg",
      },
      {
        id: 30,
        smallHeading: "Gaming Mouse",
        longHeading: "Logitech G502 HERO High-Performance Wired Gaming Mouse",
        price: "Rs.3,999",
        description: "A high-precision gaming mouse with customizable weights and RGB lighting.",
        features: ["11 programmable buttons", "16,000 DPI sensor", "Adjustable weight system"],
        imageUrl: "/images2/gaming-mouse.jpg",
      },
      {
        id: 31,
        smallHeading: "Gaming Keyboard",
        longHeading: "Razer BlackWidow V3 Mechanical Gaming Keyboard",
        price: "Rs.8,999",
        description: "A premium mechanical keyboard with tactile keys and customizable RGB lighting.",
        features: ["Green mechanical switches", "Doubleshot ABS keycaps", "Razer Chroma RGB"],
        imageUrl: "/images2/gaming-keyboard.jpg",
      },
      {
        id: 32,
        smallHeading: "Projector",
        longHeading: "Epson EB-X06 XGA Projector for Home and Office",
        price: "Rs.33,999",
        description: "A versatile projector with high brightness and sharp image quality.",
        features: ["3600 lumens brightness", "XGA resolution", "2 HDMI ports"],
        imageUrl: "/images2/projector.jpg",
      },
      {
        id: 33,
        smallHeading: "Home Theatre",
        longHeading: "Sony HT-S40R 5.1ch Dolby Digital Home Theatre System",
        price: "Rs.24,499",
        description: "Immerse yourself in cinematic audio with this powerful home theatre system.",
        features: ["600W output", "Wireless subwoofer", "Bluetooth connectivity"],
        imageUrl: "/images2/home-theatre.jpg",
      },
      {
        id: 34,
        smallHeading: "Electric Kettle",
        longHeading: "Prestige Electric Kettle with Auto Shut-Off",
        price: "Rs.1,699",
        description: "Boil water quickly and safely with this durable electric kettle.",
        features: ["1.5L capacity", "Stainless steel body", "360-degree swivel base"],
        imageUrl: "/images2/electric-kettle.jpg",
      },
      {
        id: 35,
        smallHeading: "Electric Bike",
        longHeading: "Ather 450X Electric Scooter with Smart Dashboard",
        price: "Rs.1,49,999",
        description: "Experience the future of commuting with this sleek and eco-friendly electric scooter.",
        features: ["116 km range", "7-inch touchscreen display", "Fast charging"],
        imageUrl: "/images2/electric-bike.jpg",
      },
      {
        id: 36,
        smallHeading: "Bicycle",
        longHeading: "Hercules Roadeo Hardtail Mountain Bike",
        price: "Rs.13,499",
        description: "A sturdy mountain bike designed for adventure and city rides.",
        features: ["18-speed gear system", "Front suspension", "Disc brakes"],
        imageUrl: "/images2/bicycle.jpg",
      },
      {
        id: 37,
        smallHeading: "Fan",
        longHeading: "Havells Ceiling Fan with Decorative Finish",
        price: "Rs.2,499",
        description: "A high-speed ceiling fan with an elegant design for modern homes.",
        features: ["72W power", "3 blades", "High air delivery"],
        imageUrl: "/images2/fan.jpg",
      },
      {
        id: 38,
        smallHeading: "Vacuum Cleaner",
        longHeading: "Dyson V12 Cordless Vacuum Cleaner with Powerful Suction",
        price: "Rs.42,999",
        description: "Keep your home spotless with this efficient and lightweight vacuum cleaner.",
        features: ["Cordless design", "HEPA filter", "60-minute runtime"],
        imageUrl: "/images2/vacuum-cleaner.jpg",
      },
      {
        id: 39,
        smallHeading: "Iron",
        longHeading: "Philips Steam Iron with Non-Stick Soleplate",
        price: "Rs.1,599",
        description: "Smooth out wrinkles effortlessly with this steam iron from Philips.",
        features: ["1200W power", "Non-stick soleplate", "Continuous steam output"],
        imageUrl: "/images2/iron.jpg",
      },
      {
        id: 40,
        smallHeading: "Electric Treadmill",
        longHeading: "PowerMax Fitness TDM-98 Motorized Treadmill",
        price: "Rs.26,999",
        description: "Achieve your fitness goals with this compact and foldable treadmill.",
        features: ["1.75HP motor", "12 preset programs", "LCD display"],
        imageUrl: "/images2/electric-treadmill.jpg",
      },
  
];

