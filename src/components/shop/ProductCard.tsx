import React from 'react'

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    image: string;
    colors: { name: string; hex: string }[];
    category: string;
    isNew: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group w-full h-full border-none overflow-hidden shadow-md hover:shadow-lg flex flex-col">   
        <div className = "aspect-square  bg-gray-100 overflow-hidden">   
          <img 
          src={product.image} 
          className="w-full min-h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>

        <div className="h-[25%] px-2 py-4 flex flex-col justify-between flex-1">
          <ul className="flex gap-2 items-center">
            {product.colors.map((color, index) => (
              <li key={index}>
                <span className="inline-block w-3 h-3 rounded-full border border-gray-300" style={{ backgroundColor: color.hex }}></span>
              </li>
            ))
            }
            <li><span className = "inline-block w-3 h-3 rounded-full bg-gray-300"></span></li>
            
          </ul>
          <div className="">
            {product.isNew ? <span className="text-xs text-blue-500">Nuevo</span> : null}
          </div>
          <div className="flex-end">
            <h3 className="">
            <span 
              className="text-sm font-semibold leading-tight">
              {product.name}
            </span>      
            </h3>    
            <div className="">
              <span className="text-sm">${product.price}</span>
            </div>
          </div>
          
        </div>
    </div>
  )
}
