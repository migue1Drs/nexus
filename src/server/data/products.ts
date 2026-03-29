'use server';
import { Product } from "@/types/Product";
import { ProductFilters } from "@/types/Filters";
import { PRODUCTS } from "@/server/db/products"; 

export async function getFilteredProducts(filters: ProductFilters): Promise<Product[]> {

    await new Promise((resolve) => setTimeout(resolve, 800));

    let filtered = [...PRODUCTS];
    const { category, query, brands, colors, sort } = filters;

    if (category && category !== 'todos') {
        filtered = filtered.filter(p => p.category.slug === category);
    }

    if (query) {
        const searchTerm = query.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.brand.toLowerCase().includes(searchTerm)
        );
    }

    if (brands && brands.length > 0) {
        const lowerBrands = brands.map(b => b.toLowerCase());
        filtered = filtered.filter(p => lowerBrands.includes(p.brand.toLowerCase()));
    }

    if (colors && colors.length > 0) {
        const lowerColors = colors.map(c => c.toLowerCase());
        filtered = filtered.filter(p => 
            p.colors.some(c => lowerColors.includes(c.name.toLowerCase()))
        );
    }

    filtered.sort((a, b) => {
        switch (sort) {
            case 'price_asc': 
                return a.price - b.price;
            case 'price_desc': 
                return b.price - a.price;
            case 'newest': 
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            case 'featured':
            default:
                if (a.inStock !== b.inStock) return a.inStock ? -1 : 1;
                if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
    });

    return filtered;
}

export async function getCategoryFilters(categorySlug: string) {

    const categoryProducts = categorySlug === 'todos' 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category.slug === categorySlug);

    const brands = Array.from(
        new Set(categoryProducts.map(p => p.brand))
    ).sort();

    const colors = Array.from(
        new Map(categoryProducts.flatMap(p => p.colors).map(color=> [color.name, color])).values()
    ).sort();

    return { brands, colors };
}

export async function getProductBySlug(productSlug: string){

    return PRODUCTS.filter( p => p.slug.toLowerCase() === productSlug.toLowerCase())[0];
}