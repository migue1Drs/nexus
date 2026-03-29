import { Skeleton } from "../ui/Skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {/* Contenedor de la Imagen */}
      <Skeleton className="aspect-square w-full rounded-2xl" />
      
      <div className="space-y-2">
        {/* Marca */}
        <Skeleton className="h-3 w-20" />
        {/* Nombre del Producto */}
        <Skeleton className="h-5 w-full" />
        {/* Precio */}
        <Skeleton className="h-4 w-16" />
      </div>
      
      {/* Colores */}
      <div className="flex gap-2">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
    </div>
  );
}