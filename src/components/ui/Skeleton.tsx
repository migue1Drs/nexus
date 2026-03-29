import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      // role="status" y aria-hidden para que los lectores de pantalla lo ignoren
      role="status"
      aria-hidden="true"
      className={cn(
        "animate-pulse rounded-md bg-zinc-200/80 dark:bg-zinc-800", 
        className
      )}
      {...props}
    >
      {/* Texto oculto para lectores de pantalla opcional */}
      <span className="sr-only">Cargando...</span>
    </div>
  );
}