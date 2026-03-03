export type Category = {
  id: string;
  name: string;
  slug: string;
};

export interface Color {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  slug: string;
  price: number;
  image: string;
  colors: Color[];
  category: Category;
  rating: number;
  inStock: boolean;
  onSale: boolean;
  isNew: boolean;
  isFeatured: boolean;    // Para el ordenamiento "Destacados"
  createdAt: string;      // Para el ordenamiento "Más Recientes"
}