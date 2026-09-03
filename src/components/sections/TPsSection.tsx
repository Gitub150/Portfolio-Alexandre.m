import React from 'react';
import { Terminal, Download } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { tps } from '../../data/portfolio';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const TPsSection: React.FC = () => {
  return (
    <section id="tps" className="section-padding relative z-10">
      <SectionHeading subtitle="Logs_and_Reports">Mes Travaux Pratiques</SectionHeading>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {tps.map((tp) => (
          <motion.div key={tp.id} variants={itemVariants} className="h-full hw-accelerated">
            <Card className="flex flex-col h-full group border-[#38bdf8]/10 hover:border-[#38bdf8]/40 bg-slate-950/40">
               <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 bg-slate-900/50 border border-slate-800 text-[#38bdf8] rounded-xl group-hover:bg-[#38bdf8]/10 transition-colors shrink-0">
                    <Terminal size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-200 text-base leading-snug group-hover:text-white transition-colors font-sans">{tp.title}</h3>
                    <p className="text-slate-500 text-xs mt-1 line-clamp-3 font-light">{tp.description}</p>
                  </div>
               </div>
               
               <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-800/50">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[9px] text-slate-400">
                     {tp.technologies.slice(0, 3).map(tech => (
                       <span key={tech} className="bg-slate-900/50 border border-slate-800 px-1.5 py-0.5 rounded">#{tech}</span>
                     ))}
                  </div>
                  <a 
                    href={tp.downloadUrl} 
                    download
                    className="flex items-center gap-1.5 text-xs font-medium text-[#38bdf8] hover:text-white transition-colors shrink-0 p-1 rounded-md hover:bg-[#38bdf8]/10"
                    aria-label={`Télécharger PDF pour ${tp.title}`}
                  >
                    <Download size={14} /> GET
                  </a>
               </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
