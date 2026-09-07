import React, { useState, useMemo } from 'react';
import { 
  Terminal, 
  Network, 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Search,
  ShieldCheck,
  Filter
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { tps, Project } from '../../data/portfolio';
import { motion, AnimatePresence } from 'motion/react';

type CategoryFilter = 'all' | 'cisco' | 'linux' | 'support';

const categories = [
  { id: 'all' as CategoryFilter, label: 'Tous les TPs', icon: Filter },
  { id: 'cisco' as CategoryFilter, label: 'Réseau / Cisco', icon: Network },
  { id: 'linux' as CategoryFilter, label: 'Systèmes / Linux', icon: Terminal },
  { id: 'support' as CategoryFilter, label: 'Support & Services', icon: ShieldCheck },
];

export const TPsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrage des TPs selon la catégorie et la recherche
  const filteredTps = useMemo(() => {
    return tps.filter((tp) => {
      const matchesCategory = activeCategory === 'all' || tp.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      
      if (!query) return matchesCategory;

      const matchesSearch = 
        tp.title.toLowerCase().includes(query) ||
        (tp.subtitle && tp.subtitle.toLowerCase().includes(query)) ||
        tp.description.toLowerCase().includes(query) ||
        tp.technologies.some(t => t.toLowerCase().includes(query)) ||
        (tp.notions && tp.notions.some(n => n.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Comptages par catégorie
  const counts = useMemo(() => {
    return {
      all: tps.length,
      cisco: tps.filter(t => t.category === 'cisco').length,
      linux: tps.filter(t => t.category === 'linux').length,
      support: tps.filter(t => t.category === 'support').length,
    };
  }, []);

  return (
    <section id="tps" className="section-padding relative z-10">
      <SectionHeading subtitle="Laboratoires_&_Fiches_Pratiques">
        Travaux Pratiques & Projets Réalisés
      </SectionHeading>

      {/* Barre d'outils : Filtres par Catégorie & Recherche */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Onglets des catégories */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/40 shadow-[0_0_15px_rgba(56,189,248,0.15)] font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                }`}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-[#38bdf8]/20 text-[#38bdf8]' : 'bg-slate-800 text-slate-400'
                }`}>
                  {counts[cat.id]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Champ de recherche */}
        <div className="relative min-w-[240px] max-w-sm">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Rechercher notion, techno..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-900/60 border border-slate-800/80 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#38bdf8]/50 focus:ring-1 focus:ring-[#38bdf8]/50 transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300 font-mono"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Grille des TPs */}
      {filteredTps.length === 0 ? (
        <div className="text-center py-16 px-4 bg-slate-950/30 rounded-2xl border border-slate-800/40">
          <p className="text-slate-400 text-sm">Aucun TP ne correspond à votre recherche "{searchQuery}".</p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 text-xs font-mono text-[#38bdf8] bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 rounded-lg transition-colors border border-[#38bdf8]/30"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTps.map((tp) => (
              <motion.div
                key={tp.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={tp.featured ? "md:col-span-2 lg:col-span-3" : "h-full"}
              >
                {tp.featured ? (
                  /* CARTE SPECIALE EN VEDETTE : LAB MAJEUR (Cisco ou Linux) */
                  <Card className="flex flex-col h-full group border-[#38bdf8]/25 hover:border-[#38bdf8]/60 bg-gradient-to-br from-slate-900/60 via-slate-950/70 to-slate-900/40 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                    {/* Badge d'en-tête et catégorie */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium border ${
                          tp.category === 'cisco' 
                            ? 'bg-sky-500/10 text-sky-400 border-sky-500/30' 
                            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        }`}>
                          {tp.category === 'cisco' ? <Network size={14} /> : <Terminal size={14} />}
                          {tp.categoryLabel}
                        </span>

                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-400/10 text-amber-300 border border-amber-400/20">
                          <Sparkles size={12} />
                          Lab Certifié SISR
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                        {tp.level && (
                          <span className="text-slate-400 bg-slate-800/60 px-2.5 py-0.5 rounded-md border border-slate-700/50">
                            {tp.level}
                          </span>
                        )}
                        {tp.duration && (
                          <span className="flex items-center gap-1 text-slate-400">
                            <Clock size={13} className="text-[#38bdf8]" />
                            {tp.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Titre & Sous-titre */}
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-white transition-colors font-sans">
                        {tp.title}
                      </h3>
                      {tp.subtitle && (
                        <p className="text-sm font-mono text-[#38bdf8]/90 mt-1">
                          ↳ {tp.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-5 font-light">
                      {tp.description}
                    </p>

                    {/* Compétences & Notions abordées */}
                    {tp.notions && tp.notions.length > 0 && (
                      <div className="mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/60">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <CheckCircle2 size={14} className="text-[#38bdf8]" />
                          Notions et compétences clés abordées :
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          {tp.notions.map((notion, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#38bdf8] font-mono shrink-0 mt-0.5">▸</span>
                              <span>{notion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Footer : Technologies & Boutons d'actions */}
                    <div className="mt-auto pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800/60">
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5">
                        {tp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-slate-900/80 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md text-[11px] font-mono"
                          >
                            #{tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions : Visualiser et Télécharger */}
                      <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                        {tp.downloadUrl && (
                          <a
                            href={tp.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-500 transition-all font-sans"
                            title="Ouvrir le document PDF dans un nouvel onglet"
                          >
                            <ExternalLink size={14} />
                            <span>Aperçu</span>
                          </a>
                        )}

                        {tp.downloadUrl && (
                          <a
                            href={tp.downloadUrl}
                            download={tp.fileName || true}
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] hover:from-[#7dd3fc] hover:to-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all transform hover:scale-[1.02] active:scale-[0.98] font-sans"
                            title={`Télécharger ${tp.fileName || 'le fichier PDF'}`}
                          >
                            <Download size={15} />
                            <span>Télécharger PDF</span>
                            {tp.fileSize && (
                              <span className="text-[10px] opacity-75 font-mono">({tp.fileSize})</span>
                            )}
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                ) : (
                  /* CARTE STANDARD POUR LES AUTRES TPS */
                  <Card className="flex flex-col h-full group border-slate-800/80 hover:border-[#38bdf8]/40 bg-slate-950/40">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-mono border ${
                        tp.category === 'cisco' 
                          ? 'bg-sky-500/10 text-sky-400 border-sky-500/20' 
                          : tp.category === 'linux'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                      }`}>
                        {tp.category === 'cisco' && <Network size={12} />}
                        {tp.category === 'linux' && <Terminal size={12} />}
                        {tp.category === 'support' && <ShieldCheck size={12} />}
                        {tp.categoryLabel || 'TP'}
                      </span>

                      {tp.fileSize && (
                        <span className="text-[10px] font-mono text-slate-500">
                          {tp.fileSize}
                        </span>
                      )}
                    </div>

                    <div className="mb-2">
                      <h3 className="font-semibold text-slate-200 text-sm leading-snug group-hover:text-white transition-colors font-sans">
                        {tp.title}
                      </h3>
                      {tp.subtitle && (
                        <p className="text-xs text-slate-500 font-light mt-0.5">
                          {tp.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed mt-1 mb-4 line-clamp-3 font-light">
                      {tp.description}
                    </p>

                    <div className="mt-auto pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1 font-mono text-[9px] text-slate-400 max-w-[60%]">
                        {tp.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="bg-slate-900/60 border border-slate-800 px-1.5 py-0.5 rounded">
                            #{tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        {tp.downloadUrl && (
                          <a
                            href={tp.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-md transition-colors"
                            title="Aperçu dans un nouvel onglet"
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}

                        {tp.downloadUrl && (
                          <a
                            href={tp.downloadUrl}
                            download={tp.fileName || true}
                            className="inline-flex items-center gap-1 text-xs font-medium text-[#38bdf8] hover:text-white bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 border border-[#38bdf8]/30 px-2.5 py-1 rounded-md transition-all font-sans"
                            title={`Télécharger ${tp.fileName || 'PDF'}`}
                          >
                            <Download size={13} />
                            <span>PDF</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};
