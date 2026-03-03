import { CATEGORIES } from "@/lib/data-prueba";
import { CategoryNav } from "@/components/shop/CategoryNav";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 w-full min-h-screen lg:px-12">

      <CategoryNav categories={CATEGORIES} />

      <section className="py-8">
        {children}
      </section>
    </div>
  );
}