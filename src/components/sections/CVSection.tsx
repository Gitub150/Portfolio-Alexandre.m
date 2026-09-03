import React from 'react';
import { Download, FileText } from 'lucide-react';
import { getDocPath } from '../../data/portfolio';

export const CVSection: React.FC = () => {
  return (
    <section id="cv" className="section-padding bg-slate-950/30 border border-slate-800/50 text-white rounded-2xl mx-4 md:mx-10 my-20 relative overflow-hidden z-10">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
        <div className="flex-grow">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight hw-accelerated text-slate-100">sys.load(<span className="text-[#38bdf8] font-light">Candidature</span>)</h2>
          <p className="text-slate-500 text-lg max-w-xl font-mono font-light">
            // Fichiers prêts pour l'extraction. CV et Lettre de motivation disponibles pour missions d'alternance ou de stage.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto font-mono">
           <a href={getDocPath("documents/cv.pdf")} download className="bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] px-8 py-4 rounded-xl text-sm font-medium hover:bg-[#38bdf8]/20 transition-all flex items-center justify-center gap-3 hw-accelerated hover:scale-[1.02] active:scale-[0.98]">
              <Download size={18} /> fetch(CV.pdf)
           </a>
           <a href={getDocPath("documents/lm.pdf")} download className="bg-transparent text-slate-300 border border-slate-700 px-8 py-4 rounded-xl text-sm font-medium hover:bg-slate-800/50 hover:text-white hover:border-slate-500 transition-all flex items-center justify-center gap-3 hw-accelerated hover:scale-[1.02] active:scale-[0.98]">
              <FileText size={18} /> fetch(LM.pdf)
           </a>
        </div>
      </div>
    </section>
  );
};
