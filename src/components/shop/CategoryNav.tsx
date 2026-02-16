"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Category {
  id: string;
  name: string;
  slug: string | null;
}

export function CategoryNav({ categories }: { categories: Category[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Categorías de productos">
      <ul className="flex flex-nowrap overflow-x-auto gap-8 no-scrollbar">
        {categories.map((category) => {
          const hrefCategoy = category.slug ? `/products/${category.slug}` : "/products";

          const isActive = pathname === hrefCategoy;

          return (
            <li key={category.id} className="text-sm font-medium list-none text-center">
              <Link
                href={hrefCategoy}
                className={`block transition-all duration-200 hover:text-black ${
                  isActive 
                    ? "text-black border-b border-black" 
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