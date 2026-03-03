'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Product } from '@/types/Product';
import { ProductFilters } from '@/components/shop/ProductFilters';
import { ProductCard } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/Button';
import { SlidersHorizontal, ShoppingBag } from 'lucide-react';

interface Props {
  products: Product[];
}

export default function FilteredProductGrid({ products }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [confirmedParams, setConfirmedParams] = useState(searchParams.toString());

  const paramsString = searchParams.toString();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setConfirmedParams(paramsString);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);   
  }, [paramsString]);

  
  const handleUpdateFilters = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (name === 'order') {
      params.set('order', value);
    } else {
      const currentValues = params.getAll(name);
      if (currentValues.includes(value)) {
        const newValues = currentValues.filter(v => v !== value);
        params.delete(name);
        newValues.forEach(v => params.append(name, v));
      } else {
        params.append(name, value);
      }
    }
    
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleApply = () => {
    setConfirmedParams(searchParams.toString());
    setIsFilterOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClearFilters = () => {
    router.push(pathname, { scroll: false });
    setConfirmedParams(""); 
    if (isFilterOpen) setIsFilterOpen(false);
  };

  const filteredProducts = useMemo(() => {
    const params = new URLSearchParams(confirmedParams);
    const brands = params.getAll('brand');
    const colors = params.getAll('color');
    const order = params.get('order') || 'featured';

    let result = [...products];

    if (brands.length > 0) {
      result = result.filter(p => brands.includes(p.brand.toLowerCase()));
    }

    if (colors.length > 0) {
      result = result.filter(p => 
        p.colors.some(c => colors.includes(c.name.toLowerCase()))
      );
    }

    result.sort((a, b) => {
      switch (order) {
        case 'price_asc': return a.price - b.price;
        case 'price_desc': return b.price - a.price;
        case 'newest': return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          if (a.inStock !== b.inStock) return a.inStock ? -1 : 1;
          if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

    return result;
  }, [products, confirmedParams]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-gray-100 pb-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-zinc-500 mr-4">
              {filteredProducts.length > 0 ? filteredProducts.length: 'No hay' } resultado{filteredProducts.length == 1 ? '' : 's'}
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsFilterOpen(true)}
              className="md:hidden flex items-center gap-2 rounded-full border-zinc-200"
            >
              <SlidersHorizontal size={14} />
              Filtros
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-64 md:border-r border-gray-200 shrink-0">
             <ProductFilters 
                products={products}
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                onUpdateFilters={handleUpdateFilters}
                onClearFilters={handleClearFilters}
                onApply={handleApply}
              />
          </div>

          <main className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-40 bg-zinc-50">
                <ShoppingBag className="text-zinc-300 mb-6" size={60} strokeWidth={1} />
                <h3 className="text-2xl font-bold text-zinc-900">No hay resultados</h3>
                <p className="text-zinc-500 mt-2">Intenta ajustar los filtros para encontrar lo que buscas.</p>
                <Button 
                  onClick={handleClearFilters}
                  variant="primary"
                  className="mt-8 rounded-full"
                >
                  Limpiar Filtros
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}