import React from 'react'
import { ProductCard } from '@/components/shop/ProductCard'
import { CATEGORIES,PRODUCTS } from '@/lib/data-prueba'
import Link from 'next/link'

export default function ProductsPage() {
  return (
    <main>
        <section>
          <h3 className='text-lg font-semibold tracking-wide py-7'>Descubre nuestros favoritos</h3>
        </section>
        <section className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    </main>
  )
}
