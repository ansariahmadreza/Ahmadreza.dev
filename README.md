# ASOS-Inspired Online Shop

Modern online shop inspired by ASOS - featuring price filter, sorting, smart pagination, search, breadcrumb, mock user system, and PWA for mobile installation.


## Features

- 🔍 **Search** - Product search by keyword
- 🧭 **Breadcrumb** - Navigation path display for easy browsing
- 💰 **Price Filter** - Filter by minimum and maximum price
- 📊 **Sorting** - Sort by most expensive / cheapest
- 📄 **Smart Pagination** - Page numbers with click-to-navigate  
- 👤 **Demo User System** - Mock authentication with localStorage
- 📱 **PWA** - Installable on mobile devices
- ❤️ **Wishlist** - Add/remove products to favorites (user-specific)

## Tech Stack

- ⚛️ **Framework:** Next.js
- 🟦 **Language:** TypeScript
- 🎨 **Styling:** TailwindCSS
- 📱 **PWA:** Manual implementation


## 🚀 Installation & Running

> **Prerequisites:** Make sure [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) are installed on your system.

To run the project on your local machine, follow these commands in your terminal:

```bash
# 1. Clone the repository
git clone https://github.com/ansariahmadreza/Ahmadreza.dev.git

# 2. Navigate into the project folder
cd Ahmadreza.dev

# 3. Install dependencies (using pnpm)
pnpm install

# 4. Run in development mode
pnpm dev

## 📁 Project Structure

next-up/
├── src/
│ ├── app/ # Next.js App Router
│ │ ├── (auth)/ # Authentication group route
│ │ │ ├── signin/
│ │ │ │ └── page.tsx
│ │ │ └── user/
│ │ │ └── page.tsx
│ │ ├── (main)/ # Main shop group route
│ │ │ ├── cartlist/
│ │ │ │ └── page.tsx
│ │ │ ├── clothes/
│ │ │ │ ├── [slug]/ # Dynamic route for products
│ │ │ │ │ └── page.tsx
│ │ │ │ └── page.tsx
│ │ │ ├── faverite/
│ │ │ │ └── page.tsx
│ │ │ ├── Container.tsx
│ │ │ ├── layout.tsx
│ │ │ └── page.tsx
│ │ ├── favicon.ico
│ │ ├── globals.css
│ │ ├── globals.d.ts
│ │ ├── layout.tsx
│ │ ├── manifest.ts # PWA manifest file
│ │ └── not-found.tsx
│ │
│ ├── components/ # Reusable UI components
│ │ ├── ui/ # UI components (shadcn/ui)
│ │ │ ├── breadcrumb.tsx
│ │ │ ├── dropdown-menu.tsx
│ │ │ ├── hover-card.tsx
│ │ │ ├── navigation-menu.tsx
│ │ │ └── select.tsx
│ │ └── RegisterSw.tsx # Service Worker registration for PWA
│ │
│ ├── features/ # Feature-based architecture
│ │ ├── auth/ # Authentication feature
│ │ │ ├── assets/ # Login-related images
│ │ │ ├── components/ # SignIn.tsx, UserInfo.tsx
│ │ │ ├── utils/ # auth0.ts, validate.ts
│ │ │ └── index.ts
│ │ ├── discover/ # Homepage / product discovery feature
│ │ │ ├── assets/ # Banners and slider images
│ │ │ ├── components/ # Bottommain, Carousels, HeroSection
│ │ │ └── index.ts
│ │ ├── navbar/ # Navigation bar feature
│ │ │ ├── assets/ # Logos, icons, menu images
│ │ │ ├── components/ # DropDownMenu, NavMenu, Search, TopNav
│ │ │ ├── hooks/ # use-mobile.ts
│ │ │ ├── types/ # gender.ts
│ │ │ └── index.ts
│ │ └── products/ # Products feature
│ │ ├── components/ # CartItems, Clothes, ThumbsGallery, ...
│ │ ├── sort/ # Sorting component (Sort.tsx)
│ │ ├── types/ # typeProduct.ts
│ │ └── index.ts
│ │
│ ├── lib/ # General helper functions
│ │ └── utils.ts
│ │
│ └── shared/ # Shared resources across features
│ ├── assets/ # General product images and banners
│ │ └── lan/ # Country flag icons
│ ├── Components/ # Shared components
│ │ ├── cartcontext/ # CartContextProvider.tsx
│ │ ├── Breadcrumb.tsx
│ │ ├── Footer.tsx
│ │ ├── Nav.tsx
│ │ └── Providers.tsx
│ ├── types/ # Shared TypeScript types
│ │ └── typeCartContext.ts
│ ├── utils/ # Shared helper functions
│ │ └── numberSeparator.ts
│ ├── data.ts # Static product data
│ ├── index.ts
│ └── routes.ts # App route constants
│
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── next.config.js
├── tailwind.config.js
└── README.md
