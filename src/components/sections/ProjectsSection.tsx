import React from 'react';
import { Briefcase, Download } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { projects } from '../../data/portfolio';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projets" className="section-padding relative z-10">
      <SectionHeading subtitle="Projet Central / Fil Rouge">Mon Projet Majeur</SectionHeading>
      <div className="max-w-4xl mx-auto">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col gap-8 overflow-hidden group">
            <div className="hw-accelerated">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-900/50 border border-[#38bdf8]/30 text-[#38bdf8] rounded-xl group-hover:bg-[#38bdf8]/10 transition-colors">
                    <Briefcase size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium text-slate-100 leading-tight font-sans">{project.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-mono uppercase bg-[#38bdf8]/5 border border-[#38bdf8]/20 text-[#38bdf8] px-3 py-1 rounded-full">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>
              
              <p className="text-slate-400 text-sm md:text-base mb-8 font-light border-l border-slate-800 pl-4">{project.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8 bg-slate-950/40 p-6 rounded-2xl border border-slate-800/50">
                <div>
                  <h4 className="text-[10px] font-medium uppercase tracking-widest text-[#0ea5e9] mb-4">_Étapes de Programmation</h4>
                  <ul className="space-y-3 font-light text-sm">
                    {project.steps?.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 bg-slate-900/30 p-3 rounded-lg border border-slate-800 hover:border-[#0ea5e9]/40 transition-colors hw-accelerated">
                        <div className="text-[#0ea5e9] text-xs font-mono shrink-0 mt-0.5">
                          0{i+1}.
                        </div>
                        <span className="text-slate-300">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[10px] font-medium uppercase tracking-widest text-[#0ea5e9] mb-4">_Stack Technique</h4>
                  <div className="flex flex-wrap gap-2 mb-8 font-mono">
                     {project.technologies.map(tech => (
                       <span key={tech} className="bg-slate-900/50 border border-slate-800 px-3 py-1 rounded-md text-xs text-slate-400 hover:text-[#38bdf8] hover:border-[#38bdf8]/40 transition-colors">
                         {tech}
                       </span>
                     ))}
                  </div>
                  
                  <div className="mt-auto">
                    <a 
                      href={project.downloadUrl} 
                      download
                      className="w-full flex items-center justify-center gap-3 bg-[#38bdf8]/5 border border-[#38bdf8]/30 text-[#38bdf8] py-4 rounded-xl text-sm font-medium hover:bg-[#38bdf8]/15 transition-all hw-accelerated hover:scale-[1.02] active:scale-[0.98]"
                      aria-label="Télécharger le dossier technique PDF"
                    >
                      <Download size={16} /> Télécharger Doc. Technique
                    </a>
                    <p className="text-[10px] text-slate-600 text-center mt-3 font-mono">Format: PDF | Taille optimisée</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
