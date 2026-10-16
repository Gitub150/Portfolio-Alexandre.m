import React from 'react';
import { Rss, Shield, ExternalLink, Link2, Scale, Calendar } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const axes = [
  {
    icon: <Link2 size={20} strokeWidth={1.5} />,
    title: 'Fonctionnement',
    color: 'sky',
    points: [
      'Registre partagé : chaque bloc contient l\'empreinte (SHA-256) du précédent, toute modification casse la chaîne',
      'Réseau pair-à-pair de nœuds (Bitcoin : port TCP 8333), sans serveur central',
      'Consensus : preuve de travail (Bitcoin) ou preuve d\'enjeu (Ethereum, -99,95 % d\'énergie depuis 2022)',
      'Clé privée = propriété des fonds, même principe que l\'authentification SSH par clé',
    ],
  },
  {
    icon: <Shield size={20} strokeWidth={1.5} />,
    title: 'Menaces & défense',
    color: 'violet',
    points: [
      '3,4 Md$ de cryptos volés en 2025, dont 2,02 Md$ par la Corée du Nord (Bybit : 1,5 Md$)',
      'Cryptojacking : minage caché sur serveurs et postes (Monero), rançons payées en crypto',
      'Défense SISR : supervision CPU (Zabbix), filtrage des pools de minage sur le pare-feu et en DNS, blocage des scripts .vbs par GPO',
      'Sauvegardes 3-2-1 hors ligne, MFA, moindre privilège, segmentation VLAN',
    ],
  },
  {
    icon: <Scale size={20} strokeWidth={1.5} />,
    title: 'Réglementation',
    color: 'sky',
    points: [
      'MiCA : agrément européen obligatoire en France depuis le 2 juillet 2026 (fin du statut PSAN)',
      'DORA (janvier 2025) : continuité, sauvegardes testées et déclaration des incidents',
      'TFR (règle de voyage) et DAC8 : traçabilité des transferts et déclaration au fisc',
      'Euro numérique : position du Parlement européen adoptée en juillet 2026, émission possible dès 2029',
    ],
  },
];

const actus = [
  { date: '7 oct. 2026', text: 'Le botnet PoeLLM infecte plus de 3 400 serveurs d\'IA exposés (Ollama, LiteLLM) pour miner des cryptos', url: 'https://www.bleepingcomputer.com/news/security/poellm-malware-infects-exposed-ai-servers-in-cryptomining-attacks/' },
  { date: '6 août 2026', text: 'La France devient le pays le plus touché par les enlèvements liés aux cryptos (30 cas à mi-2026)', url: 'https://www.chainalysis.com/blog/violent-crypto-wrench-attacks-2026/' },
  { date: '1er juil. 2026', text: 'Fin de la période transitoire MiCA : les prestataires non agréés doivent cesser leur activité', url: 'https://www.amf-france.org/en/news-publications/news-releases/crypto-assets-end-pacte-law-and-european-mica-regulation-transitional-period-establishes-new-role' },
  { date: 'Avril 2026', text: 'Kelp DAO (≈ 293 M$) et Drift (285 M$) : les deux plus gros vols de la finance décentralisée de l\'année', url: 'https://www.pymnts.com/cryptocurrency/2026/kelp-dao-293-million-hack-largest-defi-theft-of-2026/' },
  { date: '26 mars 2026', text: 'FAUX#ELEVATE : faux CV envoyés aux RH françaises, vol d\'identifiants et minage de Monero', url: 'https://www.lemagit.fr/actualites/366640702/Cryptojacking-infostealer-une-campagne-proteiforme-contre-les-entreprises-francaises' },
  { date: '21 fév. 2025', text: 'Piratage de Bybit : environ 1,5 Md$ volés, attribués par le FBI à la Corée du Nord', url: 'https://www.ic3.gov/PSA/2025/PSA250226' },
];

const sources = [
  { label: 'CERT-FR (Bulletins ANSSI)', url: 'https://www.cert.ssi.gouv.fr/' },
  { label: 'AMF (Crypto-actifs & MiCA)', url: 'https://www.amf-france.org/' },
  { label: 'Chainalysis (Rapports crypto-crime)', url: 'https://www.chainalysis.com/blog/' },
  { label: 'LeMagIT (Actu IT entreprise)', url: 'https://www.lemagit.fr/' },
  { label: 'BleepingComputer (Actu cyber)', url: 'https://www.bleepingcomputer.com/' },
  { label: 'Cryptoast (Actu crypto FR)', url: 'https://cryptoast.fr/' },
  { label: 'ZATAZ (Veille Actu Cyber)', url: 'https://www.zataz.com/' },
  { label: 'IT Connect (Tutos & News)', url: 'https://www.it-connect.fr/' },
];

const colors: Record<string, { text: string; bg: string; border: string; hover: string }> = {
  sky: { text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/30', hover: 'hover:border-primary/40' },
  violet: { text: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/30', hover: 'hover:border-secondary/40' },
};

export const VeilleSection: React.FC = () => {
  return (
    <section id="veille" className="section-padding relative z-10">
      <SectionHeading subtitle="Information_Gathering">Veille Technologique</SectionHeading>

      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-950/40 p-6 md:p-10 rounded-2xl border border-primary/20 mb-10 transition-colors hover:border-primary/40">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="p-4 bg-primary/10 text-primary rounded-2xl shrink-0 border border-primary/30 hw-accelerated">
              <Link2 size={32} strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-wider">Sujet de veille</span>
              <h3 className="text-xl font-medium mt-1 mb-3 text-slate-100 font-sans">Blockchain & cryptomonnaies : quels enjeux pour la sécurité des infrastructures ?</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                <strong className="text-slate-200 font-medium">Problématique :</strong> en quoi la blockchain et les cryptomonnaies changent-elles les menaces et les infrastructures qu'un administrateur systèmes et réseaux doit gérer ?
                Le sujet touche directement l'option SISR : réseau pair-à-pair, cryptographie, serveurs à maintenir disponibles, et nouvelles attaques contre le SI (cryptojacking, rançongiciels, vols de clés).
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {axes.map((axe) => {
            const c = colors[axe.color];
            return (
              <div key={axe.title} className={`bg-slate-950/40 p-6 rounded-2xl border border-slate-800/50 transition-colors ${c.hover}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${c.bg} ${c.text} rounded-lg border ${c.border} hw-accelerated`}>{axe.icon}</div>
                  <h4 className="text-lg font-medium text-slate-100 font-sans">{axe.title}</h4>
                </div>
                <ul className="space-y-3">
                  {axe.points.map((point) => (
                    <li key={point} className="flex gap-2 text-slate-400 text-sm leading-relaxed font-light">
                      <span className={`${c.text} shrink-0`}>›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 text-secondary rounded-lg border border-secondary/30 hw-accelerated">
                <Calendar size={20} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-medium text-slate-100 font-sans">Fil d'actualité</h4>
            </div>
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/50 space-y-1">
              {actus.map((actu) => (
                <a key={actu.date} href={actu.url} target="_blank" rel="noopener noreferrer" className="flex gap-4 p-3 hover:bg-secondary/10 border border-transparent hover:border-secondary/30 rounded-lg transition-colors group">
                  <span className="text-xs font-mono text-secondary shrink-0 w-24 pt-0.5">{actu.date}</span>
                  <span className="text-sm text-slate-300 font-light leading-relaxed group-hover:text-slate-100">{actu.text}</span>
                  <ExternalLink size={14} className="text-slate-600 group-hover:text-secondary shrink-0 mt-1 ml-auto" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 text-primary rounded-lg border border-primary/30 hw-accelerated">
                <Rss size={20} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-medium text-slate-100 font-sans">Démarche & sources</h4>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              J'agrège mes flux RSS avec <strong className="text-primary font-medium">Feedly</strong>, je reçois des <strong className="text-primary font-medium">Google Alertes</strong> (« cryptojacking », « MiCA », « blockchain sécurité ») et je vérifie chaque information sur une deuxième source, de préférence officielle.
            </p>
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/50 space-y-1">
              {sources.map((source) => (
                <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 hover:bg-primary/10 border border-transparent hover:border-primary/30 rounded-lg transition-colors group">
                  <span className="text-xs font-mono text-slate-300 group-hover:text-primary">{source.label}</span>
                  <ExternalLink size={14} className="text-slate-600 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
