import React from 'react';
import { Home, User, Briefcase, Terminal, FileText, Award, Search, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (s: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'accueil', label: 'Accueil', icon: <Home size={18} /> },
    { id: 'presentation', label: 'Présentation', icon: <User size={18} /> },
    { id: 'projets', label: 'Projets', icon: <Briefcase size={18} /> },
    { id: 'tps', label: 'Mes TPs', icon: <Terminal size={18} /> },
    { id: 'cv', label: 'CV & Lettre', icon: <FileText size={18} /> },
    { id: 'certs', label: 'Certifications', icon: <Award size={18} /> },
    { id: 'veille', label: 'Veille', icon: <Search size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-auto">
      <div className="glass rounded-full px-6 py-3 flex gap-2 md:gap-4 overflow-x-auto no-scrollbar max-w-full">
        {menuItems.map((item) => (
          <button
            key={item.id}
            aria-label={item.label}
            onClick={() => {
              setActiveSection(item.id);
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 text-sm font-sans font-medium whitespace-nowrap hw-accelerated ${
              activeSection === item.id 
                ? 'bg-slate-800/80 border border-white/10 text-white shadow-[0_0_15px_rgba(56,189,248,0.15)] scale-105' 
                : 'hover:bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            {item.icon}
            <span className="hidden md:inline">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
