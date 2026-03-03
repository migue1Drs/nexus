'use client';
import React, { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Product } from '@/types/Product';
import { Check, X } from 'lucide-react';

export interface FilterStateProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateFilters: (name: string, value: string) => void;
  onClearFilters: () => void;
  onApply: () => void;
}

export const ProductFilters = ({
  products,
  isOpen,
  onClose,
  onUpdateFilters,
  onClearFilters,
  onApply,
}: FilterStateProps) => {
  const searchParams = useSearchParams();

  const selectedBrands = searchParams.getAll('brand');
  const selectedColors = searchParams.getAll('color');
  const selectedOrder = searchParams.get('order') || 'featured';

  const brands = useMemo(() => 
    Array.from(new Set(products.map((p) => p.brand))).sort()
  , [products]);

  const uniqueColors = useMemo(() => {
    const seen = new Set();
    return products
      .flatMap((p) => p.colors)
      .filter((c) => {
        const isDuplicate = seen.has(c.name.toLowerCase());
        seen.add(c.name.toLowerCase());
        return !isDuplicate;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [products]);

  const orderOptions = [
    { label: 'Destacados', value: 'featured' },
    { label: 'Más Recientes', value: 'newest' },
    { label: 'Precio: Alto a Bajo', value: 'price_desc' },
    { label: 'Precio: Bajo a Alto', value: 'price_asc' },
  ];

  return (
    <aside className={`
      fixed top-0 right-0 h-screen w-full z-100 bg-white 
      transform transition-transform duration-500 ease-[cubic-bezier(0.32,0,0.67,0)]
      flex flex-col
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}

      md:relative md:translate-x-0 md:z-0 md:h-auto md:w-64 md:bg-transparent md:block
    `}>
      
      <div className='flex px-6 py-6 justify-between items-center md:hidden border-b border-gray-100'>
        <h2 className='text-xl font-bold tracking-tight'>Filtros</h2>
        <Button variant='ghost' size="icon" onClick={onClose} className="rounded-full">
          <X size={24} />
        </Button>
      </div>

      <div className='flex-1 overflow-y-auto px-6 py-8 space-y-12 md:px-0 md:py-3'>
        {/* SECCIÓN: ordenamiento */}
        <section>
          <h3 className='text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 mb-6'>Ordenar por</h3>
          <div className='space-y-4'>
            {orderOptions.map((op) => (
              <label key={op.value} className='flex items-center gap-3 cursor-pointer group'>
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="order"
                    value={op.value}
                    checked={selectedOrder === op.value}
                    onChange={() => onUpdateFilters('order', op.value)}
                    className='peer appearance-none w-5 h-5 border border-gray-300 rounded-full checked:border-black transition-all'
                  />
                  <div className="absolute w-2.5 h-2.5 bg-black rounded-full opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                <span className='text-[14px] font-medium text-gray-700 group-hover:text-black transition-colors'>
                  {op.label}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* SECCIÓN: marcas */}
        <section>
          <h3 className='text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 mb-6'>Marcas</h3>
          <div className='space-y-4'>
            {brands.map((b) => {
              const isChecked = selectedBrands.includes(b.toLowerCase());
              return (
                <label key={b} className='flex items-center gap-3 cursor-pointer group'>
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onUpdateFilters('brand', b.toLowerCase())}
                      className='peer appearance-none w-5 h-5 border border-gray-300 rounded-sm checked:bg-black checked:border-black transition-all'
                    />
                    <Check size={14} className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className='text-[14px] font-medium text-gray-700 group-hover:text-black transition-colors'>
                    {b}
                  </span>
                </label>
              );
            })}
          </div>
        </section>

        {/* SECCIÓN: colores */}
        <section className="pb-20 md:pb-0">
          <h3 className='text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 mb-6'>Color</h3>
          <div className='grid grid-cols-3 gap-y-6 md:grid-cols-4'>
            {uniqueColors.map((c) => {
              const isActive = selectedColors.includes(c.name.toLowerCase());
              const isWhite = c.name.toLowerCase() === 'white' || c.hex.toLowerCase() === '#ffffff';
              
              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => onUpdateFilters('color', c.name.toLowerCase())}
                  className="flex flex-col items-center gap-2 group outline-none"
                >
                  <div 
                    style={{ backgroundColor: c.hex }}
                    className={`
                      w-8 h-8 rounded-full border transition-all duration-200 flex items-center justify-center
                      ${isActive ? 'scale-105' : 'border-gray-200 group-hover:border-gray-400'}
                      ${isWhite && !isActive ? 'border-gray-300' : ''}
                    `}
                  >
                    {isActive && (
                      <Check size={14} className={c.name.toLowerCase().includes('black') ? 'text-white' : 'text-black'} />
                    )}
                  </div>
                  <span className={`text-[10px] font-medium tracking-tight transition-colors ${isActive ? 'text-black' : 'text-gray-500'}`}>
                    {c.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <div className='p-6 border-t border-gray-100 flex gap-4 bg-white md:hidden'>
        <Button 
          onClick={onClearFilters} 
          variant="outline" 
          className="flex-1 py-6 border-gray-300 font-bold"
        >
          Borrar
        </Button>
        <Button 
          onClick={onApply} 
          className="flex-1 py-6 bg-black text-white font-bold"
        >
          Aplicar
        </Button>
      </div>
    </aside>
  );
};