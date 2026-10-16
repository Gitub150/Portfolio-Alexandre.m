import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <footer id="contact" className="section-padding bg-transparent text-slate-300 border-t border-slate-800/50 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
         <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans text-slate-100 hw-accelerated">
           initiate_contact
         </h2>
         <p className="text-slate-500 text-lg mb-12 max-w-2xl mx-auto font-mono font-light">
            // Je suis actuellement à l'écoute d'opportunités en alternance ou stage de fin d'étude pour 2027. 
            N'hésitez pas à me contacter via mes réseaux professionnels ou par email.
         </p>
         
         <div className="flex flex-col sm:flex-row justify-center items-center gap-6 font-mono">
            <a href="mailto:alexandre.marquant@protonmail.com" className="w-full sm:w-auto flex items-center justify-center gap-4 btn-gradient border border-white/10 px-8 py-4 rounded-xl text-sm font-medium transition-all hw-accelerated hover:scale-[1.02] active:scale-[0.98] duration-300">
               <Mail size={18} />
               <span>[ Envoyer un Email ]</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/alexandre-marquant-61149a3a0/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto flex items-center justify-center gap-4 bg-transparent border border-primary/40 text-slate-200 px-8 py-4 rounded-xl text-sm font-medium hover:bg-primary/10 hover:text-slate-50 hover:border-primary/70 transition-all hw-accelerated hover:scale-[1.02] active:scale-[0.98] duration-300"
            >
               <Linkedin size={18} />
               <span>[ Réseau LinkedIn ]</span>
            </a>
         </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest font-mono">
         <p>System_Date: {new Date().getFullYear()} | User: Alexandre Marquant | Status: Online</p>
         <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">/legal_mentions</a>
            <a href="#" className="hover:text-slate-300 transition-colors">/sitemap.xml</a>
         </div>
      </div>
    </footer>
  );
};
