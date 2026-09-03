import React from 'react';
import { Lock, Network, Terminal, Cpu, Globe } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const PresentationSection: React.FC = () => {
  return (
    <section id="presentation" className="section-padding overflow-hidden relative z-10">
      <SectionHeading subtitle="Qui suis-je ?">Présentation</SectionHeading>
      
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Bio & Skills (Main Column) */}
        <div className="lg:col-span-7 space-y-12 hw-accelerated">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-slate-300 leading-snug font-light">
              <span className="text-[#38bdf8] font-mono mr-2">/</span> Futur technicien <span className="text-white font-medium">SISR</span>, je construis les infrastructures qui porteront les services de demain.
            </p>
            <p className="text-slate-500 leading-relaxed max-w-2xl text-sm font-light">
              Actuellement en première année de BTS SIO au Lycée Saint Remi à Amiens, je me passionne pour l'administration système et la sécurité offensive. 
              Rigoureux et autodidacte, j'expérimente quotidiennement sur des environnements virtualisés complexes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 glass-premium rounded-2xl hw-accelerated sleek-hover group">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20 rounded-lg group-hover:bg-[#38bdf8]/20 transition-colors"><Lock size={16} strokeWidth={1.5}/></div>
                 <h4 className="font-medium text-sm text-slate-200">Expertise Système</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-400 font-light">
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#38bdf8] rounded-full"/> Windows Server & AD</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#38bdf8] rounded-full"/> Administration GNU/Linux</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#38bdf8] rounded-full"/> Scripting Automatisé (Bash)</li>
              </ul>
            </div>
            
            <div className="p-6 glass-premium rounded-2xl hw-accelerated sleek-hover group">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/20 rounded-lg group-hover:bg-[#0ea5e9]/20 transition-colors"><Network size={16} strokeWidth={1.5}/></div>
                 <h4 className="font-medium text-sm text-slate-200">Réseaux & Sécu</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-400 font-light">
                 <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0ea5e9] rounded-full"/> Routage & VLANs (Cisco)</li>
                 <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0ea5e9] rounded-full"/> Pare-feux & Détection Intrusion</li>
                 <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#0ea5e9] rounded-full"/> Supervision & Audit (Nmap)</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 font-mono">
             <div>
                <h4 className="text-[10px] font-medium uppercase tracking-widest text-slate-500 mb-3 px-1">Langues</h4>
                <div className="flex gap-2">
                   <span className="px-3 py-1 bg-slate-900/50 border border-slate-800 rounded-md text-xs text-slate-400">FR</span>
                   <span className="px-3 py-1 bg-slate-900/50 border border-slate-800 rounded-md text-xs text-slate-400">EN</span>
                   <span className="px-3 py-1 bg-slate-900/50 border border-slate-800 rounded-md text-xs text-slate-400">RU</span>
                </div>
             </div>
             <div>
                <h4 className="text-[10px] font-medium uppercase tracking-widest text-slate-500 mb-3 px-1">Soft Skills</h4>
                <div className="flex gap-2">
                   <span className="px-3 py-1 bg-[#38bdf8]/5 border border-[#38bdf8]/20 text-[#38bdf8] rounded-md text-xs">Autonome</span>
                   <span className="px-3 py-1 bg-[#38bdf8]/5 border border-[#38bdf8]/20 text-[#38bdf8] rounded-md text-xs">Curieux</span>
                   <span className="px-3 py-1 bg-[#38bdf8]/5 border border-[#38bdf8]/20 text-[#38bdf8] rounded-md text-xs">Analytique</span>
                </div>
             </div>
          </div>
        </div>

        {/* Identity Card (Side Column) */}
        <div className="lg:col-span-5 hw-accelerated">
          <div className="glass-premium rounded-2xl p-1 overflow-hidden h-full">
             <div className="bg-[#020617]/80 backdrop-blur-md rounded-xl p-8 h-full flex flex-col font-mono relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8]/5 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex justify-between items-start mb-12">
                   <div className="flex gap-2">
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                      <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                   </div>
                   <Terminal size={16} className="text-slate-600" />
                </div>

                <div className="flex-grow space-y-10">
                   <section>
                      <h4 className="text-slate-500 text-[10px] uppercase tracking-widest mb-4 border-b border-slate-800/50 pb-2">~ / académique</h4>
                      <div className="space-y-4">
                         <div className="flex flex-col gap-1">
                            <span className="text-[#38bdf8] text-xs">2025-2027</span>
                            <p className="text-sm font-medium text-slate-200">BTS SIO SISR</p>
                            <p className="text-[11px] text-slate-500">Lycée Saint Remi, Amiens</p>
                         </div>
                         <div className="flex flex-col gap-1 mt-4">
                            <span className="text-slate-600 text-xs">2026</span>
                            <p className="text-sm font-medium text-slate-400">Bac Pro MELEC</p>
                            <p className="text-[11px] text-[#38bdf8]">Mention Très Bien</p>
                         </div>
                      </div>
                   </section>

                   <section>
                      <h4 className="text-slate-500 text-[10px] uppercase tracking-widest mb-4 border-b border-slate-800/50 pb-2">~ / laboratoires</h4>
                      <div className="space-y-4">
                         <div className="flex flex-col gap-1">
                            <span className="text-[#0ea5e9] text-xs">Stage 6 sem.</span>
                            <p className="text-[11px] text-slate-300">Tech2V (Virtualisation)</p>
                         </div>
                         <div className="flex flex-col gap-1 mt-4">
                            <span className="text-slate-600 text-xs">Personnel</span>
                            <p className="text-[11px] text-slate-400">Home-Lab ESXi / Proxmox</p>
                         </div>
                      </div>
                   </section>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/50 flex justify-between items-end">
                   <div>
                      <p className="text-[10px] text-slate-600 uppercase tracking-widest mb-1">Localisation</p>
                      <p className="text-xs text-slate-300">Amiens, FR</p>
                   </div>
                   <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border border-[#020617] bg-slate-900 flex items-center justify-center text-[#38bdf8]"><Cpu size={10} /></div>
                      <div className="w-6 h-6 rounded-full border border-[#020617] bg-slate-900 flex items-center justify-center text-[#0ea5e9]"><Globe size={10} /></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
