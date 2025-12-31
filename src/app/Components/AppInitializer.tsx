// src/app/Components/AppInitializer.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "./NavBar/NavBar";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import { usePathname } from "next/navigation";
import WhatsAppButton from "./ContactWhatssap";

interface Subservice {
  name: string;
  image_url: string;
  description: string;
  benefits: string[];
  gallery: string[];
}

interface Service {
  service: string;
  slug: string;
  subservices: Subservice[];
}

interface AppInitializerProps {
  services: Service[];
  children: React.ReactNode;
}
export default function AppInitializer({
  services,
  children,
}: AppInitializerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
    const pathname = usePathname();
  useEffect(() => {
    // Reset scroll al cambiar de ruta
    window.scrollTo(0, 0);
  }, [pathname]);

  // Detectar tamaño de pantalla simple
  const getLoadingDuration = () => {
    const width = window.innerWidth;
    if (width < 768) return 3000;     // Móvil: 3 segundos
    if (width < 1024) return 5000;    // Tablet: 5 segundos
    return 10000;                     // PC: 10 segundos
  };

  useEffect(() => {
    const duration = getLoadingDuration();
    const interval = 50;
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;
    const timer = setInterval(() => {
      currentProgress += increment;
      setLoadingProgress(Math.min(currentProgress, 100));

      if (currentProgress >= 100) {
        clearInterval(timer);
        setIsLoading(false);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <>
      <Navbar services={services} />
      {children}
      <WhatsAppButton />
      <section
        id='footer'
        className='w-full flex flex-col mt-[85px] items-center justify-center h-[350px]'
      >
        <Footer />
      </section>
    </>
  );
}