export const CATEGORIES = [
  { id: '0', name: 'Todos', slug: null},
  { id: '1', name: 'Teclados', slug: 'teclados'},
  { id: '2', name: 'Mouse', slug: 'mouse'},
  { id: '3', name: 'Audio', slug: 'audio' },
  { id: '4', name: 'Sillas', slug: 'sillas'},
  { id: '5', name: 'Escritorio', slug: 'escritorio'},
];

export const PRODUCTS = [
  {
    id: 'p1',
    name: 'Teclado Mecánico Nexus Pro',
    slug: 'teclado-mecanico-nexus-pro',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&auto=format&fit=crop',
    colors:[
      { name: 'Black Anthracite', hex: '#2c2c2c' },
      { name: 'Hourglass', hex: '#d1cfc7' },
      { name: 'Sunset Apricot', hex: '#df9e7d' },
    ],
    category: '1',
    isNew: true,
    inStock: true,
  },
  {
    id: 'p2',
    name: 'Mouse Ergonómico Stealth',
    slug: 'mouse-ergonomico-stealth',
    price: 59.50,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop',
    colors:[
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    category: '2',
    isNew: false,
  },
  {
    id: 'p3',
    name: 'Silla Gamer Omega Series',
    slug: 'silla-gamer-omega-series',
    price: 349.00,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=800&auto=format&fit=crop',
    colors:[
      { name: 'Red', hex: '#ff0000' },
      { name: 'Blue', hex: '#0000ff' },
      { name: 'Green', hex: '#00ff00' },
    ],
    category: '4',
    isNew: true,
  },
 {
    id: 'p4',
    name: 'Auriculares Studio Hi-Fi',
    slug: 'auriculares-studio-hifi',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    colors:[
      { name: 'Black', hex: '#000000' },
      { name: 'Silver', hex: '#c0c0c0' },
    ],
    category: '3',
    isNew: false,
  },
  {
    id: 'p5',
    name: 'Lámpara de Escritorio Minimalist',
    slug: 'lampara-escritorio-minimalist',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800&auto=format&fit=crop',
    colors:[
      { name: 'White', hex: '#ffffff' },
      { name: 'Black', hex: '#000000' },
    ],
    category: '5',
    isNew: false,
  },
  {
    id: 'p6',
    name: 'Teclado Compacto 60% RGB',
    slug: 'teclado-compacto-60-rgb',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=800&auto=format&fit=crop',
    colors:[
      { name: 'RGB', hex: 'linear-gradient(90deg, #ff0000, #00ff00, #0000ff)' },
    ],
    category: '1',
    isNew: true,
  }
];