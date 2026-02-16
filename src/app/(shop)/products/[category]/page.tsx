import React from 'react'
import { ProductCard } from '@/components/shop/ProductCard'
import { PRODUCTS } from '@/lib/data-prueba'
import Link from 'next/link'

interface CategoryPageProps {
  params: {
    category: string;
  }
}
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  return (
    <div>
        <div>
            <h2>{category}</h2>
        </div>
        
        <div className = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        
    </div>
  )
}
