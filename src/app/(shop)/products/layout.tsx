import { CATEGORIES } from "@/lib/data-prueba";
import { CategoryNav } from "@/components/shop/CategoryNav";

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 w-full min-h-screen">
      <header className="mb-6">
        <h2 className="text-2xl font-bold italic tracking-tighter">TecnoShop</h2>
      </header>

      <CategoryNav categories={CATEGORIES} />

      <section className="py-8">
        {children}
      </section>
    </div>
  );
}