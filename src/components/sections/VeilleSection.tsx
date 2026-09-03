import React from 'react';
import { Rss, Shield, ExternalLink, Cpu } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const VeilleSection: React.FC = () => {
  return (
    <section id="veille" className="section-padding relative z-10">
      <SectionHeading subtitle="Information_Gathering">Veille Technologique</SectionHeading>
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-950/40 p-6 md:p-10 rounded-2xl border border-[#38bdf8]/20 mb-10 transition-colors hover:border-[#38bdf8]/40">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="p-4 bg-[#38bdf8]/10 text-[#38bdf8] rounded-2xl shrink-0 border border-[#38bdf8]/30 hw-accelerated">
              <Rss size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-slate-100 font-sans">Ma démarche de veille</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                Pour mon parcours SISR, je réalise une veille constante sur l'évolution des menaces et des solutions d'infrastructure. 
                J'utilise <strong className="text-[#38bdf8] font-medium">Feedly</strong> pour agréger mes flux RSS et je consulte les bulletins officiels pour anticiper les failles de sécurité.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-rose-500/10 text-rose-500 rounded-lg border border-rose-500/30 hw-accelerated">
                <Shield size={20} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-medium text-slate-100 font-sans">Cybersécurité</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Je surveille les alertes du <strong className="text-rose-500 font-medium">CERT-FR</strong> et de l'<strong className="text-rose-500 font-medium">ANSSI</strong>. Mon focus actuel porte sur le modèle <strong className="text-slate-200 font-medium">Zero Trust</strong> et la protection contre les ransomwares.
            </p>
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/50 space-y-2">
              <a href="https://www.cert.ssi.gouv.fr/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 hover:bg-rose-500/5 border border-transparent hover:border-rose-500/30 rounded-lg transition-colors group">
                <span className="text-xs font-mono text-slate-300 group-hover:text-rose-500">CERT-FR (Bulletins ANSSI)</span>
                <ExternalLink size={14} className="text-slate-600 group-hover:text-rose-500" />
              </a>
              <a href="https://www.zataz.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 hover:bg-rose-500/5 border border-transparent hover:border-rose-500/30 rounded-lg transition-colors group">
                <span className="text-xs font-mono text-slate-300 group-hover:text-rose-500">ZATAZ (Veille Actu Cyber)</span>
                <ExternalLink size={14} className="text-slate-600 group-hover:text-rose-500" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#38bdf8]/10 text-[#38bdf8] rounded-lg border border-[#38bdf8]/30 hw-accelerated">
                <Cpu size={20} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-medium text-slate-100 font-sans">IA & Automatisation</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Veille sur l'utilisation des LLM pour l'<strong className="text-[#38bdf8] font-medium">automatisation réseau</strong> (Ansible, PowerShell) et l'analyse intelligente des logs pour la détection d'anomalies.
            </p>
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/50 space-y-2">
              <a href="https://www.it-connect.fr/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 hover:bg-[#38bdf8]/5 border border-transparent hover:border-[#38bdf8]/30 rounded-lg transition-colors group">
                <span className="text-xs font-mono text-slate-300 group-hover:text-[#38bdf8]">IT Connect (Tutos & News)</span>
                <ExternalLink size={14} className="text-slate-600 group-hover:text-[#38bdf8]" />
              </a>
              <a href="https://korben.info/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 hover:bg-[#38bdf8]/5 border border-transparent hover:border-[#38bdf8]/30 rounded-lg transition-colors group">
                <span className="text-xs font-mono text-slate-300 group-hover:text-[#38bdf8]">Korben.info (Outils & Sécu)</span>
                <ExternalLink size={14} className="text-slate-600 group-hover:text-[#38bdf8]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
