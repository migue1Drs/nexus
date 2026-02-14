#  Nexus: Enterprise-Grade Marketplace & ERP

**Nexus** es una solución integral Fullstack diseñada para la gestión de inventarios (ERP) y comercio electrónico de alto rendimiento. Construido con un enfoque en la **seguridad de tipos (Type-Safety)**, escalabilidad y una experiencia de usuario (UX) premium, siguiendo las mejores prácticas de la industria moderna.

---

## 🛠 Tech Stack

| Tecnología | Rol |
| :--- | :--- |
| **Next.js 14+** | Framework de React con App Router y Server Actions. |
| **TypeScript** | Programación robusta con tipado estricto de punta a punta. |
| **PostgreSQL** | Base de datos relacional para integridad de datos crítica. |
| **Drizzle ORM** | ORM ligero y Type-safe para consultas SQL eficientes. |
| **Tailwind CSS** | Estilado atómico y responsivo. |
| **Shadcn/UI** | Sistema de componentes accesibles y reutilizables. |
| **NextAuth.js** | Autenticación segura y manejo de sesiones. |
| **Zod** | Validación de esquemas y datos en tiempo de ejecución. |

---

##  Estructura del Proyecto

El proyecto utiliza una arquitectura modular basada en **Route Groups** y separación de responsabilidades para facilitar el mantenimiento y el escalado.

```text
src/
 ├── app/                    #  ROUTING & LAYOUTS (Next.js App Router)
 │    ├── (auth)/             # Grupo: Login, Registro, Recuperación
 │    ├── (dashboard)/        # Grupo: Panel Interno (Gestión de Inventario)
 │    │    ├── inventory/     # Ruta: /inventory
 │    │    └── orders/        # Ruta: /orders/[id]
 │    ├── (shop)/             # Grupo: Vista del Cliente (Landing, Catálogo)
 │    │    └── products/      # Ruta: /products/[slug]
 │    ├── api/                # Endpoints de API y Webhooks (Stripe)
 │    ├── layout.tsx          # Root Layout (Fonts, Providers, Globals)
 │    └── globals.css         # Configuración de Tailwind & Variables CSS
 │
 ├── components/             # COMPONENTES REUTILIZABLES
 │    ├── ui/                 # Componentes atómicos (Shadcn: Button, Input)
 │    ├── dashboard/          # Componentes específicos del panel de control
 │    ├── shop/               # Componentes de la experiencia de compra
 │    └── shared/             # Utilidades globales (Navbars, Footer)
 │
 ├── server/                 #  CAPA DE DATOS Y SERVIDOR (Backend)
 │    ├── db/                 # Configuración de Postgres y Esquemas Drizzle
 │    ├── actions/            # Server Actions (Mutaciones: Crear, Editar, Borrar)
 │    └── data/               # Consultas de solo lectura (Data Access Layer)
 │
 ├── lib/                    # UTILIDADES Y CONFIGURACIONES
 │    ├── utils.ts            # Helper para Tailwind (cn merge)
 │    └── auth-options.ts     # Estrategias de autenticación
 │
 ├── hooks/                  #  Custom Hooks para lógica de cliente
 └── types/                  #  Definiciones globales de TypeScript