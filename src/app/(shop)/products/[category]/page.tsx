import React from 'react';
import {Suspense} from 'react';
import { notFound } from 'next/navigation';
import { PRODUCTS} from '@/lib/data-prueba';
import FilteredProductGrid from '@/components/products/FilteredProductGrid';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  return {
    title: `Categoría: ${category}`,
    description: `Explora nuestra selección de productos en la categoría ${category}. Encuentra lo que necesitas al mejor precio.`,
  }
}
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const currentCategory = category.toLowerCase();
  const categoryProducts = currentCategory === 'todos'
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category.slug === currentCategory);

  if (categoryProducts.length === 0 && currentCategory !== 'todos') {
    notFound();
  }
  return (
    <div className="p-2">
        <div>
          <h3 className="capitalize text-xl font-bold tracking-wider">{category}</h3>
       
        </div>
        <Suspense
          fallback={<p>Cargando productos...</p>}>
            <main className = "">
            <FilteredProductGrid products={categoryProducts} />
            </main>
        </Suspense>
    </div>
  )
}
