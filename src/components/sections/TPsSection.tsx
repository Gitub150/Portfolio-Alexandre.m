import React, { useState, useMemo } from 'react';
import {
  Terminal,
  Network,
  Download,
  ExternalLink,
  Clock,
  Search,
  Server,
  Monitor,
  Layers,
  ShieldCheck,
  ChevronDown,
  LayoutGrid,
  FileText,
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { tps, Project } from '../../data/portfolio';
import { motion, AnimatePresence } from 'motion/react';

type Theme = NonNullable<Project['category']>;
type ThemeFilter = 'all' | Theme;
type YearFilter = 'all' | 1 | 2;

// Thèmes dans l'ordre d'affichage, avec leur couleur de badge
const themes: { id: Theme; label: string; description: string; icon: React.ElementType; tone: string }[] = [
  { id: 'reseau', label: 'Réseau / Cisco', description: 'Adressage IP, VLAN, routage et sécurisation des équipements', icon: Network, tone: 'text-sky-700 bg-sky-50 border-sky-200' },
  { id: 'securite', label: 'Cybersécurité / Audit', description: 'Audit réseau, scan de ports et tests d\'intrusion', icon: ShieldCheck, tone: 'text-rose-700 bg-rose-50 border-rose-200' },
  { id: 'linux', label: 'Systèmes / Linux', description: 'Ligne de commande, utilisateurs, droits et scripts Bash', icon: Terminal, tone: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  { id: 'virtualisation', label: 'Virtualisation', description: 'Hyperviseurs et machines virtuelles', icon: Server, tone: 'text-amber-700 bg-amber-50 border-amber-200' },
  { id: 'windows', label: 'Windows & Dépannage', description: 'CMD, PowerShell et diagnostic des postes', icon: Monitor, tone: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
  { id: 'services', label: 'Services & Gestion de projet', description: 'Services web, sauvegardes, haute disponibilité et planification', icon: Layers, tone: 'text-violet-700 bg-violet-50 border-violet-200' },
];

const themeOf = (id?: Theme) => themes.find(t => t.id === id) ?? themes[0];

const matchesQuery = (tp: Project, query: string) => {
  if (!query) return true;
  const fields = [tp.title, tp.subtitle, tp.description, ...tp.technologies, ...(tp.tags ?? []), ...(tp.notions ?? [])];
  return fields.some(f => f?.toLowerCase().includes(query));
};

const TPCard: React.FC<{ tp: Project }> = ({ tp }) => {
  const theme = themeOf(tp.category);
  const Icon = theme.icon;
  const extraTechs = tp.technologies.length - 4;

  return (
    <Card className="flex flex-col h-full group">
      {/* Thème & année */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border ${theme.tone}`}>
          <Icon size={12} />
          {theme.label}
        </span>
        {tp.year === 2 ? (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-medium text-white bg-primary">2ᵉ année</span>
        ) : (
          <span className="px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-500 bg-slate-900 border border-slate-800">1ʳᵉ année</span>
        )}
      </div>

      {/* Titre */}
      <h3 className="font-semibold text-slate-100 text-base leading-snug font-sans">{tp.title}</h3>
      {tp.subtitle && <p className="text-xs text-primary mt-1">{tp.subtitle}</p>}

      <p className="text-slate-400 text-sm leading-relaxed mt-3 line-clamp-3">{tp.description}</p>

      {/* Infos pratiques */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 text-xs text-slate-500">
        {tp.duration && (
          <span className="flex items-center gap-1"><Clock size={12} /> {tp.duration}</span>
        )}
        {tp.fileSize && (
          <span className="flex items-center gap-1"><FileText size={12} /> PDF · {tp.fileSize}</span>
        )}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {tp.technologies.slice(0, 4).map(tech => (
          <span key={tech} className="bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded text-[11px] font-mono">
            {tech}
          </span>
        ))}
        {extraTechs > 0 && (
          <span className="text-slate-500 px-1 py-0.5 text-[11px] font-mono" title={tp.technologies.slice(4).join(', ')}>
            +{extraTechs}
          </span>
        )}
      </div>

      {/* Notions clés (dépliables) */}
      {tp.notions && tp.notions.length > 0 && (
        <details className="mt-4 group/notions">
          <summary className="flex items-center gap-1.5 cursor-pointer select-none text-xs font-medium text-slate-300 hover:text-primary list-none [&::-webkit-details-marker]:hidden">
            <ChevronDown size={14} className="transition-transform group-open/notions:rotate-180" />
            Notions clés ({tp.notions.length})
          </summary>
          <ul className="mt-3 space-y-2 text-xs text-slate-400 border-l-2 border-primary/20 pl-3">
            {tp.notions.map((notion, idx) => (
              <li key={idx}>{notion}</li>
            ))}
          </ul>
        </details>
      )}

      {/* Actions */}
      {tp.downloadUrl && (
        <div className="mt-auto pt-5 flex items-center gap-2">
          <a
            href={tp.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-300 border border-slate-700 hover:border-primary/50 hover:text-primary transition-colors"
            title="Ouvrir le PDF dans un nouvel onglet"
          >
            <ExternalLink size={14} /> Aperçu
          </a>
          <a
            href={tp.downloadUrl}
            download={tp.fileName || true}
            className="flex-1 btn-gradient inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium"
            title={`Télécharger ${tp.fileName || 'le PDF'}`}
          >
            <Download size={14} /> Télécharger
          </a>
        </div>
      )}
    </Card>
  );
};

export const TPsSection: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<ThemeFilter>('all');
  const [activeYear, setActiveYear] = useState<YearFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const query = searchQuery.trim().toLowerCase();

  // TP filtrés par année et recherche (le thème sert ensuite à grouper)
  const filtered = useMemo(
    () => tps.filter(tp => (activeYear === 'all' || tp.year === activeYear) && matchesQuery(tp, query)),
    [activeYear, query]
  );

  // Groupes par thème : 2e année d'abord, puis ordre du fichier de données
  const groups = useMemo(
    () =>
      themes
        .filter(theme => activeTheme === 'all' || theme.id === activeTheme)
        .map(theme => ({
          theme,
          items: filtered
            .filter(tp => tp.category === theme.id)
            .sort((a, b) => (b.year ?? 1) - (a.year ?? 1)),
        }))
        .filter(group => group.items.length > 0),
    [filtered, activeTheme]
  );

  const countFor = (theme: ThemeFilter) =>
    theme === 'all' ? filtered.length : filtered.filter(tp => tp.category === theme).length;

  const total = groups.reduce((sum, g) => sum + g.items.length, 0);
  const resetFilters = () => { setActiveTheme('all'); setActiveYear('all'); setSearchQuery(''); };

  return (
    <section id="tps" className="section-padding relative z-10">
      <SectionHeading subtitle="Laboratoires_&_Fiches_Pratiques">
        Travaux Pratiques & Projets Réalisés
      </SectionHeading>

      {/* Barre d'outils */}
      <div className="space-y-4 mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Année */}
          <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800 self-start">
            {([['all', 'Toutes les années'], [2, '2ᵉ année'], [1, '1ʳᵉ année']] as [YearFilter, string][]).map(([year, label]) => (
              <button
                key={String(year)}
                onClick={() => setActiveYear(year)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  activeYear === year ? 'bg-primary text-white' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Recherche */}
          <div className="relative w-full md:max-w-xs">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Rechercher une notion, une techno..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500 hover:text-slate-200"
                aria-label="Effacer la recherche"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Thèmes */}
        <div className="flex flex-wrap gap-2">
          {[{ id: 'all' as ThemeFilter, label: 'Tous les thèmes', icon: LayoutGrid }, ...themes].map(theme => {
            const Icon = theme.icon;
            const isActive = activeTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary border-primary/40'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-100 hover:border-slate-700'
                }`}
              >
                <Icon size={15} />
                <span>{theme.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${isActive ? 'bg-primary/15' : 'bg-slate-900'}`}>
                  {countFor(theme.id)}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TP groupés par thème */}
      {total === 0 ? (
        <div className="text-center py-16 px-4 bg-slate-950 rounded-2xl border border-slate-800">
          <p className="text-slate-400 text-sm">Aucun TP ne correspond à ces filtres{searchQuery && ` (« ${searchQuery} »)`}.</p>
          <button
            onClick={resetFilters}
            className="mt-4 px-4 py-2 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/15 rounded-lg transition-colors border border-primary/30"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="space-y-14">
          {groups.map(({ theme, items }) => {
            const Icon = theme.icon;
            return (
              <div key={theme.id}>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                  <div className={`p-2 rounded-lg border ${theme.tone}`}><Icon size={18} /></div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-100 font-sans">{theme.label}</h3>
                    <p className="text-xs text-slate-500">{theme.description}</p>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">{items.length} TP</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence mode="popLayout">
                    {items.map(tp => (
                      <motion.div
                        key={tp.id}
                        layout
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="h-full"
                      >
                        <TPCard tp={tp} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
