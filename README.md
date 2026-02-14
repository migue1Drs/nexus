# Nexus: Enterprise-Grade Marketplace & ERP

Nexus es una plataforma integral para la gestión de inventarios y comercio electrónico de alto rendimiento. Diseñada con un enfoque en **Type-Safety** de extremo a extremo, utiliza el stack T3 modernizado para ofrecer una experiencia administrativa robusta y una tienda pública optimizada para SEO.

## Características destacadas

* **Arquitectura Multi-Layout:** Rutas agrupadas (`(dashboard)`, `(shop)`, `(auth)`) que permiten interfaces totalmente independientes compartiendo la misma lógica de negocio.
* **Inventario Dimension-Aware:** Gestión de stock con integridad referencial en PostgreSQL, permitiendo trazabilidad por categorías, proveedores y variantes.
* **Server Actions & Data Layer:** Lógica de servidor encapsulada en `src/server/actions` para mutaciones seguras sin necesidad de APIs externas manuales.
* **UI System con Shadcn/UI:** Componentes atómicos basados en Tailwind CSS, con soporte nativo para **Dark Mode** y accesibilidad (ARIA).
* **Type-safe DB con Drizzle:** Sincronización automática entre el esquema de la base de datos y los tipos de TypeScript, eliminando errores en tiempo de ejecución.
* **Validación con Zod:** Esquemas de validación compartidos entre el cliente (formularios) y el servidor (base de datos).

## Estructura del repositorio
```text
Nexus/
├─ src/
│  ├─ app/                 # Next.js App Router (Routing & Layouts)
│  │  ├─ (auth)/           # Flujos de sesión y registro
│  │  ├─ (dashboard)/      # Panel administrativo, inventario y órdenes
│  │  ├─ (shop)/           # Experiencia de cliente y catálogo
│  │  └─ api/              # Webhooks (Stripe) y endpoints externos
│  ├─ components/          # Componentes React + Tailwind
│  │  ├─ ui/               # Átomos de Shadcn/UI
│  │  ├─ dashboard/        # Componentes exclusivos del ERP
│  │  └─ shop/             # Componentes de la tienda
│  ├─ server/              # Backend Logic
│  │  ├─ db/               # Esquemas de Postgres (Drizzle) y cliente
│  │  ├─ actions/          # Mutaciones (Server Actions)
│  │  └─ data/             # Capa de acceso a datos (Queries)
│  ├─ lib/                 # Utilidades (Stripe, Auth, cn helper)
│  └─ types/               # Definiciones de TypeScript
├─ drizzle/                # Migraciones SQL generadas
└─ public/                 # Assets estáticos
```
## Requisitos

* Node.js ≥ 18.x
* npm ≥ 9.x
* PostgreSQL 15+ (Local o Cloud como Neon/Supabase)

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

| Variable | Descripción |
| :--- | :--- |
| `DATABASE_URL` | Cadena de conexión de PostgreSQL (`postgres://...`). |
| `NEXTAUTH_SECRET` | Secreto para la encriptación de sesiones. |
| `NEXT_PUBLIC_APP_URL` | URL base de la aplicación (http://localhost:3000). |
| `STRIPE_SECRET_KEY` | Llave privada para integración de pagos. |

## Puesta en marcha rápida

1.  **Instalación de dependencias:**
    ```bash
    npm install
    ```

2.  **Preparación de la Base de Datos:**
    ```bash
    # Genera las migraciones basadas en el esquema
    npm run db:generate

    # Empuja los cambios directamente a Postgres
    npm run db:push
    ```

3.  **Ejecución en desarrollo:**
    ```bash
    npm run dev
    ```
    La app quedará disponible en `http://localhost:3000`.

## Scripts útiles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo de Next.js. |
| `npm run build` | Compila la aplicación para producción. |
| `npm run db:studio` | Abre una interfaz visual para explorar tu DB Postgres. |
| `npm run lint` | Ejecuta ESLint para verificar la calidad del código. |

## Flujo de Trabajo (Workflow)

1.  **Definición de Datos:** Modifica `src/server/db/schema.ts` para añadir nuevas entidades.
2.  **Sincronización:** Ejecuta `npm run db:push` para actualizar Postgres.
3.  **Lógica:** Crea una Server Action en `src/server/actions` para manipular los nuevos datos.
4.  **UI:** Importa la acción en un componente de `src/components` y estila con Tailwind.

## Verificación manual sugerida

* **Type-Check:** Ejecuta `npx tsc --noEmit` para asegurar que no hay errores de tipos tras modificar el esquema de la DB.
* **Responsive Test:** Verifica que el Sidebar del Dashboard se colapse correctamente en dispositivos móviles usando las clases `hidden lg:flex` de Tailwind.
* **Auth Middleware:** Intenta acceder a `/inventory` sin estar logueado; el sistema debería redirigirte automáticamente a `/login`.

## Próximos pasos sugeridos

* [ ] Implementar el Dashboard de analíticas con gráficos dinámicos.
* [ ] Configurar Webhooks de Stripe para actualizar el estado de las órdenes en Postgres.
* [ ] Añadir Unit Testing para las Server Actions críticas de inventario.