# 🌍 Wanderlust: Modern Travel & Exploration Platform

A premium, full-stack travel discovery application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This project features a high-performance, mobile-first design aimed at providing users with a seamless experience for discovering destinations, booking adventures, and planning itineraries.

## 🚀 Key Features

* **Dynamic Destination Discovery:** Real-time search and filtering for global travel destinations.
* **Responsive Booking Engine:** A smooth, multi-step booking flow optimized for all screen sizes.
* **Performance Optimized:** Leverages Next.js **Server Components (RSC)** and **Static Site Generation (SSG)** for near-instant page loads.
* **Interactive UI:** Smooth transitions and micro-interactions powered by **Framer Motion**.
* **Modern Navigation:** Implements the Next.js **App Router** for optimized nested layouts and parallel routing.
* **SEO Ready:** Optimized metadata and high-fidelity images using the `next/image` component.

## 🛠 Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Shadcn/UI components)
* **State Management:** React Context API / Zustand
* **Icons & Assets:** Lucide React / Cloudinary
* **Animation:** Framer Motion

## 📂 Project Architecture

```text
travel-web/
├── app/                # Next.js 14 App Router (Pages, Layouts, API)
├── components/         # Atomic design (UI, Common, Navigation)
├── constants/          # Reusable data (Destinations, Links, etc.)
├── public/             # Optimized assets (Images, SVGs)
├── types/              # TypeScript interfaces and types
└── utils/              # Helper functions and business logic

⚙️ Local Development
To run this travel platform locally and explore the code:

# 1. Clone the repository
$ git clone [https://github.com/ShahzaibJatala/travel-web.git](https://github.com/ShahzaibJatala/travel-web.git)

# 2. Install dependencies
$ npm install

# 3. Configure Environment Variables
# Create a .env.local file for any API keys (e.g., Maps, Image storage)

# 4. Start the development server
$ npm run dev
