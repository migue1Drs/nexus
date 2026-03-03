"use client";

import Link from "next/link";
import { usePathname,useParams } from "next/navigation";

interface Category {
  id: string;
  name: string;
  slug: string;
}

export function CategoryNav({ categories }: { categories: Category[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Categorías de productos">
     
      <ul className="flex flex-nowrap overflow-x-auto gap-8 scrollbar-hide py-4"> 
        {categories.map((category) => {
          const hrefCategoy =`/products/${category.slug}` 

          const isActive = pathname === hrefCategoy;

          return (
            <li key={category.id} className="text-sm font-medium list-none text-center tracking-widest">
              <Link
                href={hrefCategoy}
                className={`block transition-all duration-200 hover:text-black ${
                  isActive 
                    ? "text-black/80 border-b-2 border-black font-semibold" 
                    : "text-black"
                }`}
              >
                {category.name.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}