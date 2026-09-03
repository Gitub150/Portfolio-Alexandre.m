import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/ui/Navbar';

// Code-Splitting: Lazy loading des sections pour réduire le bundle initial
const HeroSection = lazy(() => import('./components/sections/HeroSection').then(m => ({ default: m.HeroSection })));
const PresentationSection = lazy(() => import('./components/sections/PresentationSection').then(m => ({ default: m.PresentationSection })));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const TPsSection = lazy(() => import('./components/sections/TPsSection').then(m => ({ default: m.TPsSection })));
const CVSection = lazy(() => import('./components/sections/CVSection').then(m => ({ default: m.CVSection })));
const CertificationsSection = lazy(() => import('./components/sections/CertificationsSection').then(m => ({ default: m.CertificationsSection })));
const VeilleSection = lazy(() => import('./components/sections/VeilleSection').then(m => ({ default: m.VeilleSection })));
const ContactSection = lazy(() => import('./components/sections/ContactSection').then(m => ({ default: m.ContactSection })));

const LoadingFallback = () => (
  <div className="h-screen flex items-center justify-center bg-[#020617]">
    <div className="w-12 h-12 border-2 border-slate-800 border-t-[#38bdf8] rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('accueil');

  // Suivi du défilement pour la Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'presentation', 'projets', 'tps', 'cv', 'certs', 'veille', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Suivi de la souris pour le Spot Glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    
    // will-change est optimisé, mais on écoute uniquement sur requestAnimationFrame si possible,
    // ici une simple variable CSS est très performante.
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden">
      {/* Background Cyber-Sleek Layer */}
      <div className="cursor-spot-glow pointer-events-none fixed inset-0 z-0"></div>
      <div className="sleek-grid pointer-events-none fixed inset-0 z-0 opacity-40"></div>
      
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        <Suspense fallback={<LoadingFallback />}>
          <HeroSection />
          <PresentationSection />
          <ProjectsSection />
          <TPsSection />
          <CVSection />
          <CertificationsSection />
          <VeilleSection />
        </Suspense>
      </main>

      <div className="relative z-10">
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </div>
    </div>
  );
}
