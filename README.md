# 🏛️ Virtual Interior Studio

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
</p>

<h3 align="center">An immersive, cinematic 3D interior design platform.</h3>

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-installation">Installation</a>
</p>

<br />

<!-- ADD YOUR SCREENSHOT HERE -->
<!-- ![Project Screenshot](https://your-repo.vercel.app/screenshot.png) -->

## ✨ About

**Virtual Interior Studio** is a next-generation web application for interior design visualization. Built with a focus on performance and aesthetics, it features a glassmorphic UI, real-time 3D rendering, and cinematic animations inspired by Awwwards-winning sites.

Design your dream space in minutes. Drag, drop, customize, and export.

## 🚀 Live Demo

**[👉 Click here to view Live Demo](https://virtual-interior-studio.vercel.app/)**

## 🎨 Features

| Feature | Description |
| :--- | :--- |
| **🎥 Cinematic UI** | Glassmorphism, parallax effects, and Framer Motion transitions. |
| **📦 3D Workspace** | Fully interactive 3D room builder powered by **Three.js**. |
| **🛋️ Smart Furniture** | Drag-and-drop furniture with real-time property editing. |
| **💡 Lighting Studio** | Dynamic lighting control (Sun, Spot, Ambient). |
| **🎨 Material Editor** | Change colors and materials on the fly. |
| **📱 Responsive** | Works seamlessly on Desktop, Tablet, and Mobile. |
| **☁️ Cloud Save** | Save projects to local storage ( easily upgradable to DB). |

## 🛠️ Tech Stack

-   **Frontend**: [React 18](https://reactjs.org/), [Vite](https://vitejs.dev/)
-   **3D Engine**: [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
-   **Styling**: Custom CSS Variables, Glassmorphism
-   **State Management**: React Context API
-   **Icons**: [Remix Icon](https://remixicon.com/)
-   **Deployment**: [Vercel](https://vercel.com/)

## 📂 Project Structure

```text
src/
├── components/         # Reusable UI components (Button, Card, Modal)
├── components/layout/  # Header, Sidebar, Footer
├── components/sections/# Homepage sections (Hero, Features)
├── components/ui/      # GlassCard, Slider, Tooltip
├── components/workspace/ # 3D Canvas, FurniturePanel, PropertiesPanel
├── context/            # App, Theme, Workspace contexts
├── data/               # Mock data (furniture.js, rooms.js)
├── hooks/              # Custom hooks (useMousePosition, useScrollAnimation)
├── pages/              # Routes (Home, Workspace, Gallery, Dashboard)
├── utils/              # Helpers, Constants, Animations
├── App.jsx             # Main router
└── main.jsx            # Entry point