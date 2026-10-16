import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { getDocPath } from '../../data/portfolio';

export const HeroSection: React.FC = () => {
  return (
    <header id="accueil" className="min-h-screen flex flex-col justify-center items-center text-center p-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/50 to-ink pointer-events-none z-0"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8 p-1 rounded-full bg-slate-900/50 border border-slate-800/80 relative z-10 hw-accelerated shadow-[0_0_40px_rgba(37,99,235,0.12)]"
      >
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-ink flex items-center justify-center border border-white/5 transition-all duration-700 ease-in-out">
           <img src={getDocPath("images/profile.jpg")} alt="Alexandre Marquant" className="w-full h-full object-cover opacity-90" loading="lazy" />
        </div>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 hw-accelerated relative z-10 font-sans bg-clip-text text-transparent bg-gradient-to-br from-slate-100 via-blue-700 to-violet-600 pb-2"
      >
        Alexandre Marquant
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed relative z-10 font-mono font-light hw-accelerated"
      >
        <span className="text-accent mr-2">/</span> Étudiant en <span className="text-slate-200">BTS SIO option SISR</span><br/>
        <span className="text-accent mr-2">/</span> Infrastructures, Réseau & Cybersécurité.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 flex flex-col sm:flex-row gap-4 relative z-10 font-sans hw-accelerated"
      >
        <button 
          onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-gradient border border-white/10 px-8 py-3.5 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 active:scale-95 duration-300"
          aria-label="Voir mes projets"
        >
          Découvrir les projets <ChevronRight size={16} />
        </button>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-transparent border border-primary/40 text-slate-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-primary/10 hover:text-slate-50 hover:border-primary/70 transition-all active:scale-95 duration-300"
          aria-label="Me contacter"
        >
          Me contacter
        </button>
      </motion.div>
    </header>
  );
};
