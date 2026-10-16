import React, { useState } from 'react';
import {
  Rss, Shield, ShieldAlert, ShieldCheck, Building2, ExternalLink,
  Link2, Scale, Calendar, Bug,
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

type Tone = 'primary' | 'secondary';

interface Axis {
  icon: React.ReactNode;
  title: string;
  tone: Tone;
  points: string[];
}

interface Actu {
  date: string;
  text: string;
  url: string;
}

interface Source {
  label: string;
  url: string;
}

interface Subject {
  id: string;
  tab: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  problematique: React.ReactNode;
  axes: Axis[];
  actus: Actu[];
  demarche: React.ReactNode;
  sources: Source[];
}

const subjects: Subject[] = [
  {
    id: 'cyber',
    tab: 'Cybersécurité',
    icon: <ShieldAlert size={32} strokeWidth={1.5} />,
    badge: 'Sujet n°1 — Cybersécurité',
    title: 'Les rançongiciels (ransomwares) : comment protéger le système d\'information ?',
    problematique: (
      <>
        <strong className="text-slate-200 font-medium">Problématique :</strong> comment un administrateur systèmes et réseaux
        peut-il réduire le risque de rançongiciel et garantir la continuité du système d'information face à une attaque ?
        C'est la menace n°1 pour les organisations, au cœur de l'option SISR : sauvegardes, segmentation réseau,
        supervision, gestion des correctifs et plan de reprise d'activité.
      </>
    ),
    axes: [
      {
        icon: <Bug size={20} strokeWidth={1.5} />,
        title: 'La menace',
        tone: 'primary',
        points: [
          'Un rançongiciel chiffre les données et exige une rançon ; la « double extorsion » y ajoute le vol et la menace de publication',
          'Souches les plus actives en France en 2025 : Qilin (21 %, 700+ victimes), Akira (9 %), LockBit 3.0 (5 %)',
          '81 % des incidents de cybercriminalité contre les organisations de l\'UE sont des rançongiciels (ENISA 2025)',
          'Vecteurs d\'entrée : hameçonnage, identifiants volés, VPN et services exposés non corrigés',
        ],
      },
      {
        icon: <Building2 size={20} strokeWidth={1.5} />,
        title: 'Victimes & impact',
        tone: 'secondary',
        points: [
          'PME, TPE et ETI = 48 % des victimes en France (ANSSI 2025) ; collectivités 11 %, établissements de santé 8 %',
          'Vol de données en forte hausse : +51 % en un an (196 cas contre 130)',
          'Environ 820 M$ de rançons payées dans le monde en 2025, mais seules ≈ 28 % des victimes paient (Chainalysis)',
          'Conséquences : paralysie des services, perte de données, continuité d\'activité menacée (hôpitaux, mairies)',
        ],
      },
      {
        icon: <ShieldCheck size={20} strokeWidth={1.5} />,
        title: 'Défense & cadre SISR',
        tone: 'primary',
        points: [
          'Sauvegardes 3-2-1 dont une copie hors ligne / immuable, testées régulièrement',
          'Segmentation VLAN, cloisonnement de l\'Active Directory, moindre privilège, MFA et EDR',
          'Supervision (SIEM, Zabbix) et correctifs rapides : 29 % des failles exploitées dès leur publication en 2025',
          'Cadre réglementaire : directive NIS2 (projet de loi « Résilience »), DORA, notification des incidents au CERT-FR',
        ],
      },
    ],
    actus: [
      { date: '8 juil. 2026', text: 'La France renvoyée devant la Cour de justice de l\'UE pour le retard de transposition de la directive NIS2', url: 'https://www.legiscope.com/blog/transposition-nis2-france.html' },
      { date: '2 juil. 2026', text: 'Centre hospitalier de Chaumont : cyberattaque, l\'hôpital se déconnecte d\'Internet, soins maintenus', url: 'https://www.lemagit.fr/actualites/366645798/Cyberhebdo-du-10-juillet-2026-le-centre-hospitalier-de-Chaumont-echappe-au-pire' },
      { date: '26 mars 2026', text: 'Cybermalveillance.gouv.fr : plus de 504 000 demandes d\'assistance via 17Cyber en 2025, hameçonnage en tête', url: 'https://www.cybermalveillance.gouv.fr/medias/2026/03/CP-RA2026.pdf' },
      { date: '17 mars 2026', text: 'L\'ANSSI publie le référentiel ReCyF et le guichet MonEspaceNIS2 pour préparer la mise en conformité NIS2', url: 'https://monespacenis2.cyber.gouv.fr/' },
      { date: '11 mars 2026', text: 'ANSSI — Panorama de la cybermenace 2025 : 1 366 incidents, 128 rançongiciels, exfiltrations de données +51 %', url: 'https://cert.cyber.gouv.fr/uploads/CERTFR-2026-CTI-002.pdf' },
      { date: 'Oct. 2025', text: 'ENISA — Threat Landscape 2025 : le rançongiciel représente 81 % des incidents de cybercriminalité dans l\'UE', url: 'https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025' },
    ],
    demarche: (
      <>
        J'agrège mes flux RSS avec <strong className="text-primary font-medium">Feedly</strong>, je reçois des{' '}
        <strong className="text-primary font-medium">Google Alertes</strong> (« rançongiciel », « NIS2 », « alerte ANSSI »)
        et je suis les bulletins du CERT-FR. Je vérifie chaque information sur une deuxième source, de préférence officielle.
      </>
    ),
    sources: [
      { label: 'CERT-FR (Bulletins ANSSI)', url: 'https://www.cert.ssi.gouv.fr/' },
      { label: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr/' },
      { label: 'ENISA (Threat Landscape)', url: 'https://www.enisa.europa.eu/' },
      { label: 'LeMagIT (Cyberhebdo)', url: 'https://www.lemagit.fr/' },
      { label: 'BleepingComputer', url: 'https://www.bleepingcomputer.com/' },
      { label: 'The Hacker News', url: 'https://thehackernews.com/' },
      { label: 'ZATAZ (Veille Actu Cyber)', url: 'https://www.zataz.com/' },
      { label: 'IT Connect (Tutos & News)', url: 'https://www.it-connect.fr/' },
    ],
  },
  {
    id: 'blockchain',
    tab: 'Blockchain & crypto',
    icon: <Link2 size={32} strokeWidth={1.5} />,
    badge: 'Sujet n°2 — Blockchain',
    title: 'Blockchain & cryptomonnaies : quels enjeux pour la sécurité des infrastructures ?',
    problematique: (
      <>
        <strong className="text-slate-200 font-medium">Problématique :</strong> en quoi la blockchain et les cryptomonnaies
        changent-elles les menaces et les infrastructures qu'un administrateur systèmes et réseaux doit gérer ?
        Le sujet touche directement l'option SISR : réseau pair-à-pair, cryptographie, serveurs à maintenir disponibles,
        et nouvelles attaques contre le SI (cryptojacking, rançongiciels, vols de clés).
      </>
    ),
    axes: [
      {
        icon: <Link2 size={20} strokeWidth={1.5} />,
        title: 'Fonctionnement',
        tone: 'primary',
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
        tone: 'secondary',
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
        tone: 'primary',
        points: [
          'MiCA : agrément européen obligatoire en France depuis le 2 juillet 2026 (fin du statut PSAN)',
          'DORA (janvier 2025) : continuité, sauvegardes testées et déclaration des incidents',
          'TFR (règle de voyage) et DAC8 : traçabilité des transferts et déclaration au fisc',
          'Euro numérique : position du Parlement européen adoptée en juillet 2026, émission possible dès 2029',
        ],
      },
    ],
    actus: [
      { date: '7 oct. 2026', text: 'Le botnet PoeLLM infecte plus de 3 400 serveurs d\'IA exposés (Ollama, LiteLLM) pour miner des cryptos', url: 'https://www.bleepingcomputer.com/news/security/poellm-malware-infects-exposed-ai-servers-in-cryptomining-attacks/' },
      { date: '6 août 2026', text: 'La France devient le pays le plus touché par les enlèvements liés aux cryptos (30 cas à mi-2026)', url: 'https://www.chainalysis.com/blog/violent-crypto-wrench-attacks-2026/' },
      { date: '1er juil. 2026', text: 'Fin de la période transitoire MiCA : les prestataires non agréés doivent cesser leur activité', url: 'https://www.amf-france.org/en/news-publications/news-releases/crypto-assets-end-pacte-law-and-european-mica-regulation-transitional-period-establishes-new-role' },
      { date: 'Avril 2026', text: 'Kelp DAO (≈ 293 M$) et Drift (285 M$) : les deux plus gros vols de la finance décentralisée de l\'année', url: 'https://www.pymnts.com/cryptocurrency/2026/kelp-dao-293-million-hack-largest-defi-theft-of-2026/' },
      { date: '26 mars 2026', text: 'FAUX#ELEVATE : faux CV envoyés aux RH françaises, vol d\'identifiants et minage de Monero', url: 'https://www.lemagit.fr/actualites/366640702/Cryptojacking-infostealer-une-campagne-proteiforme-contre-les-entreprises-francaises' },
      { date: '21 fév. 2025', text: 'Piratage de Bybit : environ 1,5 Md$ volés, attribués par le FBI à la Corée du Nord', url: 'https://www.ic3.gov/PSA/2025/PSA250226' },
    ],
    demarche: (
      <>
        J'agrège mes flux RSS avec <strong className="text-primary font-medium">Feedly</strong>, je reçois des{' '}
        <strong className="text-primary font-medium">Google Alertes</strong> (« cryptojacking », « MiCA », « blockchain sécurité »)
        et je vérifie chaque information sur une deuxième source, de préférence officielle.
      </>
    ),
    sources: [
      { label: 'CERT-FR (Bulletins ANSSI)', url: 'https://www.cert.ssi.gouv.fr/' },
      { label: 'AMF (Crypto-actifs & MiCA)', url: 'https://www.amf-france.org/' },
      { label: 'Chainalysis (Rapports crypto-crime)', url: 'https://www.chainalysis.com/blog/' },
      { label: 'LeMagIT (Actu IT entreprise)', url: 'https://www.lemagit.fr/' },
      { label: 'BleepingComputer (Actu cyber)', url: 'https://www.bleepingcomputer.com/' },
      { label: 'Cryptoast (Actu crypto FR)', url: 'https://cryptoast.fr/' },
      { label: 'ZATAZ (Veille Actu Cyber)', url: 'https://www.zataz.com/' },
      { label: 'IT Connect (Tutos & News)', url: 'https://www.it-connect.fr/' },
    ],
  },
];

const toneClasses: Record<Tone, { text: string; bg: string; border: string; hover: string }> = {
  primary: { text: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/30', hover: 'hover:border-primary/40' },
  secondary: { text: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/30', hover: 'hover:border-secondary/40' },
};

export const VeilleSection: React.FC = () => {
  const [active, setActive] = useState(subjects[0].id);
  const subject = subjects.find((s) => s.id === active) ?? subjects[0];

  return (
    <section id="veille" className="section-padding relative z-10">
      <SectionHeading subtitle="Information_Gathering">Veille Technologique</SectionHeading>

      <div className="max-w-5xl mx-auto">
        {/* Sélecteur de sujet */}
        <div className="inline-flex p-1 rounded-xl bg-slate-950 border border-slate-800 mb-8">
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === s.id ? 'bg-primary text-white' : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {React.cloneElement(s.icon as React.ReactElement, { size: 16 })}
              <span>{s.tab}</span>
            </button>
          ))}
        </div>

        {/* En-tête du sujet */}
        <div className="bg-slate-950/40 p-6 md:p-10 rounded-2xl border border-primary/20 mb-10 transition-colors hover:border-primary/40">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="p-4 bg-primary/10 text-primary rounded-2xl shrink-0 border border-primary/30 hw-accelerated">
              {subject.icon}
            </div>
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-wider">{subject.badge}</span>
              <h3 className="text-xl font-medium mt-1 mb-3 text-slate-100 font-sans">{subject.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">{subject.problematique}</p>
            </div>
          </div>
        </div>

        {/* Axes */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {subject.axes.map((axe) => {
            const c = toneClasses[axe.tone];
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

        {/* Fil d'actualité + démarche */}
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 text-secondary rounded-lg border border-secondary/30 hw-accelerated">
                <Calendar size={20} strokeWidth={1.5} />
              </div>
              <h4 className="text-lg font-medium text-slate-100 font-sans">Fil d'actualité</h4>
            </div>
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/50 space-y-1">
              {subject.actus.map((actu) => (
                <a key={actu.date + actu.text} href={actu.url} target="_blank" rel="noopener noreferrer" className="flex gap-4 p-3 hover:bg-secondary/10 border border-transparent hover:border-secondary/30 rounded-lg transition-colors group">
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
            <p className="text-slate-400 text-sm leading-relaxed font-light">{subject.demarche}</p>
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/50 space-y-1">
              {subject.sources.map((source) => (
                <a key={source.url + source.label} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 hover:bg-primary/10 border border-transparent hover:border-primary/30 rounded-lg transition-colors group">
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
