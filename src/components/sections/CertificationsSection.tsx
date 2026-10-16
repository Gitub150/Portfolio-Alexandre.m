import React from 'react';
import { Calendar } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { certifications } from '../../data/portfolio';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certs" className="section-padding relative z-10">
      <SectionHeading subtitle="Verified_Credentials">Mes Certifications</SectionHeading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div key={cert.name} className="flex items-center gap-4 p-6 bg-slate-950/40 border border-slate-800/50 rounded-2xl hover:border-primary/40 transition-colors group hw-accelerated">
            <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800 group-hover:border-primary/30 text-primary">{cert.icon}</div>
            <div className="font-sans">
              <h4 className="font-medium text-slate-200 leading-tight group-hover:text-slate-50">{cert.name}</h4>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-2 font-mono">
                 <span className="text-slate-400 uppercase">{cert.issuer}</span>
                 <span className="opacity-30">|</span>
                 <span className="flex items-center gap-1 text-primary"><Calendar size={10}/> {cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
