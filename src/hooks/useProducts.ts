'use client';

import { useState, useEffect, useRef } from 'react';
import { Product } from '@/types/Product';
import { ProductFilters } from '@/types/Filters';
import { getFilteredProducts } from '@/server/data/products';


export function useProducts(filters: ProductFilters, initialData: Product[] = []) {
 
  const [products, setProducts] = useState<Product[]>(initialData);
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState<string | null>(null);

 
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    let isCurrentRequest = true;

    async function loadData() {
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await getFilteredProducts(filters);
        
        if (isCurrentRequest) {
          setProducts(data);
        }
      } catch (err) {
        if (isCurrentRequest) {
          console.error("Error cargando productos:", err);
          setError("No se pudieron cargar los productos.");
        }
      } finally {
        if (isCurrentRequest) {
          setIsLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isCurrentRequest = false;
    };
  }, [JSON.stringify(filters)]);

  return { products, isLoading, error };
}