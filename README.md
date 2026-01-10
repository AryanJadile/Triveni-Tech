# Triveni Tech - Digital Solutions

Welcome to the official repository for the **Triveni Tech** website. This project is a modern, high-performance web application built to showcase Triveni Tech's digital services, internship programs, and company vision.

![Triveni Tech Banner](/public/img/logo.jpg)

## 🚀 Overview

Triveni Tech is a premier digital solutions agency based in Pune, specialized in Web Development, App Development, and Digital Marketing. This website serves as the primary touchpoint for clients and students looking for internships.

The application is built using **Next.js 16 (App Router)** and **Tailwind CSS**, ensuring a fast, SEO-friendly, and responsive user experience.

## ✨ Key Features

-   **Modern Branding**: Custom color palette and typography aligned with Triveni Tech's brand identity.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
-   **Global Animations**: Smooth scroll-reveal animations and hover effects using **Framer Motion**.
-   **Internship Portal**: Dedicated section for the 2026 Internship Program with program details and tech stack.
-   **Services Showcase**: Interactive cards displaying core services like MERN Stack, Java, Python, and Data Science.
-   **Company Info**: Comprehensive 'About Us' and 'Contact' pages with centralized layout and easy navigation.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Library**: [React 19](https://react.dev/)
-   **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Utilities**: `clsx` and `tailwind-merge` for dynamic class management.

## 📦 Installation & Getting Started

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/triveni-tech-web.git
    cd triveni-tech-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── about/            # About Us page
│   ├── contact/          # Contact page
│   ├── internships/      # Internships page
│   ├── globals.css       # Global styles & Tailwind directives
│   ├── layout.tsx        # Root layout (Header/Footer wrapper)
│   └── page.tsx          # Home page
├── components/
│   ├── home/             # Home page specific components (Hero, Services)
│   ├── layout/           # Global layout components (Header, Footer)
│   ├── services/         # Service card components
│   └── ui/               # Reusable UI components (ScrollReveal, etc.)
└── lib/                  # Utility functions (cn, etc.)
public/
└── img/                  # Static assets (Logos, images)
```

## 🎨 Customization

### Colors
The color palette is defined in `src/app/globals.css` using CSS variables:
-   `--primary`: Bright Royal Blue (Highlights, Buttons)
-   `--secondary`: Deep Navy Blue (Backgrounds, Text)

### Animations
Animations are managed via the reusable `<ScrollReveal />` and `<PopIn />` components found in `src/components/ui/ScrollReveal.tsx`.

## 📜 License

© 2026 Triveni Tech. All rights reserved.
