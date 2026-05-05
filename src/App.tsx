import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  User, 
  Briefcase, 
  Terminal, 
  FileText, 
  Award, 
  Search, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  ChevronRight,
  Shield,
  ShieldCheck,
  Cpu,
  Network,
  Server,
  Globe,
  Download,
  Calendar,
  Lock,
  Rss,
  BookOpen,
  Activity
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  context?: string;
  objectives?: string[];
  technologies: string[];
  tasks?: string[];
  results?: string;
  tags: string[];
  type: 'project' | 'tp';
  downloadUrl?: string;
  steps?: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
}

// --- Components ---

const Navbar = ({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (s: string) => void }) => {
  const menuItems = [
    { id: 'accueil', label: 'Accueil', icon: <Home size={18} /> },
    { id: 'presentation', label: 'Présentation', icon: <User size={18} /> },
    { id: 'projets', label: 'Projets', icon: <Briefcase size={18} /> },
    { id: 'tps', label: 'Mes TPs', icon: <Terminal size={18} /> },
    { id: 'cv', label: 'CV & Lettre', icon: <FileText size={18} /> },
    { id: 'certs', label: 'Certifications', icon: <Award size={18} /> },
    { id: 'veille', label: 'Veille', icon: <Search size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass rounded-full px-6 py-3 flex gap-2 md:gap-4 overflow-x-auto no-scrollbar max-w-full">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all text-sm font-medium whitespace-nowrap ${
              activeSection === item.id 
                ? 'bg-neutral-900 text-white shadow-lg' 
                : 'hover:bg-neutral-200 text-neutral-600'
            }`}
          >
            {item.icon}
            <span className="hidden md:inline">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl font-bold tracking-tight text-neutral-900"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-neutral-500 mt-2 text-lg max-w-2xl font-mono text-sm uppercase tracking-widest"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ children, className = "", ...props }: { children: React.ReactNode, className?: string } & any) => (
  <motion.div 
    {...props}
    whileHover={{ y: -5 }}
    className={`bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'presentation', 'projets', 'tps', 'cv', 'certs', 'veille', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper pour les chemins de documents compatibles GitHub Pages
  const getDocPath = (path: string) => {
    const baseUrl = import.meta.env.BASE_URL; // Sera "/portfolio-bts-sio-sisr/"
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Si baseUrl finit par /, on ne rajoute pas de /
    return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Architecture & Programmation d'une Infrastructure SI Virtualisée",
      description: "Dossier technique complet retraçant la conception, le déploiement et la sécurisation d'un système d'information complet (Virtualisation, Réseaux, Services Web, Cloud).",
      technologies: ["VirtualBox", "Ubuntu", "Cisco/VLAN", "NextCloud", "Suricata"],
      tags: ["Projet Central", "SISR", "Infrastructure"],
      type: 'project',
      downloadUrl: getDocPath("documents/projet.pdf"),
      steps: [
        "Phase 1 : Mise en place de l'hyperviseur (VirtualBox, Addons Invités)",
        "Phase 2 : Déploiement des OS (Ubuntu LTS, Xubuntu, Partitionnement)",
        "Phase 3 : Administration & Scripting (Bash, Gestion Droits/Sudoers)",
        "Phase 4 : Ingénierie Réseau (Calcul VLSM Expert, Diagnostic ICMP)",
        "Phase 5 : Gestion de Projet (Planification Gantt Vidéosurveillance)",
        "Phase 6 : Services de Données (Modélisation SQL, MariaDB, phpMyAdmin)",
        "Phase 7 : Architecture Web & Cloud (Pile LAMP, Déploiement NextCloud)",
        "Phase 8 : Sécurisation & Audit (HTTPS, IDS Suricata, Nmap, Wireshark)"
      ]
    }
  ];

  const tps: Project[] = [
    {
      id: 2,
      title: "Commandes CMD Essentielles",
      description: "Diagnostic système, dépannage réseau et gestion des utilisateurs via l'invite de commandes Windows.",
      technologies: ["Windows", "CMD", "Support"],
      tags: ["TP", "Support"],
      type: 'tp',
      downloadUrl: getDocPath("documents/cmd.pdf")
    },
    {
      id: 3,
      title: "Diagnostic & Réparation Réseau",
      description: "Méthodologie de diagnostic de panne réseau (ipconfig, ping, tracert, nslookup) et procédures de réparation.",
      technologies: ["Réseau", "TCP/IP", "Diagnostic"],
      tags: ["TP", "Réseau"],
      type: 'tp',
      downloadUrl: getDocPath("documents/diagnostic.pdf")
    },
    {
      id: 4,
      title: "IoT & Maison Intelligente",
      description: "Création et sécurisation d'une maison intelligente avec contrôle distant et automatisation sur Packet Tracer.",
      technologies: ["Packet Tracer", "IoT", "Sécurité Wi-Fi"],
      tags: ["TP", "IoT"],
      type: 'tp',
      downloadUrl: getDocPath("documents/lab_cisco.pdf")
    },
    {
      id: 5,
      title: "Fondamentaux Linux & Bash",
      description: "Apprentissage des commandes de base du shell Bash et manipulation d'arborescences de fichiers.",
      technologies: ["Linux", "Bash", "CLI"],
      tags: ["TP", "Linux"],
      type: 'tp',
      downloadUrl: getDocPath("documents/linux.pdf")
    },
    {
      id: 6,
      title: "Ingénierie Réseau : VLSM",
      description: "Segmentation de réseaux IP complexes par le calcul de masques de sous-réseaux à longueur variable.",
      technologies: ["Réseau", "IP", "VLSM"],
      tags: ["TP", "Réseau"],
      type: 'tp',
      downloadUrl: getDocPath("documents/td01_vlsm.pdf")
    },
    {
      id: 7,
      title: "Architecture Réseau Multi-sites",
      description: "Conception d'un plan d'adressage expert pour une multinationale avec interconnexions WAN (GlobalTech Industries).",
      technologies: ["VLSM", "WAN", "Architecture"],
      tags: ["TP", "Expert"],
      type: 'tp',
      downloadUrl: getDocPath("documents/td02_vlsm.pdf")
    },
    {
      id: 8,
      title: "Gestion de Projet : Vidéosurveillance",
      description: "Planification (Gantt), budgétisation et analyse des risques pour le déploiement d'un système de sécurité IP.",
      technologies: ["Gantt", "Gestion de projet", "Sécurité"],
      tags: ["TP", "Management"],
      type: 'tp',
      downloadUrl: getDocPath("documents/td_ordon.pdf")
    },
    {
      id: 9,
      title: "Architecture & Permissions Linux",
      description: "Gestion avancée des droits, groupes et arborescence du système de fichiers sous environnement GNU/Linux.",
      technologies: ["Linux", "Bash", "Sécurité"],
      tags: ["TP", "Linux"],
      type: 'tp',
      downloadUrl: getDocPath("documents/Linux_Permissions_Architecture.pdf")
    },
    {
      id: 10,
      title: "Initiation CMD & PowerShell (TP05)",
      description: "Prise en main des interfaces en ligne de commande Microsoft, scripting et administration basique.",
      technologies: ["Windows", "PowerShell", "CMD"],
      tags: ["TP", "Windows"],
      type: 'tp',
      downloadUrl: getDocPath("documents/TP05_Initiation_CMD_PS.pdf")
    },
    {
      id: 11,
      title: "Commandes Windows & Linux (Partie 1)",
      description: "Comparatif et utilisation pratique des commandes essentielles de diagnostic sur les deux écosystèmes.",
      technologies: ["Multi-OS", "CLI", "Admin"],
      tags: ["TP", "Système"],
      type: 'tp',
      downloadUrl: getDocPath("documents/TP_Commandes_Windows_Linux (1).pdf")
    },
    {
      id: 12,
      title: "Commandes Windows & Linux (Partie 2)",
      description: "Approfondissement des commandes de gestion réseau et processus en environnement hétérogène.",
      technologies: ["Réseau", "Processus", "CLI"],
      tags: ["TP", "Système"],
      type: 'tp',
      downloadUrl: getDocPath("documents/TP_Commandes_Windows_Linux (2).pdf")
    },
    {
      id: 13,
      title: "TP2 : Fondamentaux Système",
      description: "Déploiement initial, configuration des interfaces et gestion locale des utilisateurs.",
      technologies: ["Système", "Configuration", "Déploiement"],
      tags: ["TP", "Admin"],
      type: 'tp',
      downloadUrl: getDocPath("documents/tp2.pdf")
    },
    {
      id: 14,
      title: "TP4.2 : Administration Réseau Avancée",
      description: "Routage inter-VLANs, implémentation de services DHCP/DNS et sécurisation des accès virtuels.",
      technologies: ["VLAN", "Routage", "DHCP"],
      tags: ["TP", "Réseau"],
      type: 'tp',
      downloadUrl: getDocPath("documents/tp4.2.pdf")
    },
    {
      id: 15,
      title: "TP5.1 : Services d'Infrastructure",
      description: "Déploiement et sécurisation de services Web (LAMP) et annuaire au sein du réseau local.",
      technologies: ["LAMP", "Services", "Web"],
      tags: ["TP", "Services"],
      type: 'tp',
      downloadUrl: getDocPath("documents/tp5.1.pdf")
    },
    {
      id: 16,
      title: "TP5.2 : Configuration Avancée",
      description: "Mise en place de redondance, sauvegardes automatisées et supervision des services déployés.",
      technologies: ["Backup", "Supervision", "HA"],
      tags: ["TP", "Expertise"],
      type: 'tp',
      downloadUrl: getDocPath("documents/tp5.2.pdf")
    },
    {
      id: 17,
      title: "TP5 : Synthèse Déploiement & Services",
      description: "Dossier global résumant l'intégration complète des services et l'architecture finale.",
      technologies: ["Synthèse", "Architecture", "SISR"],
      tags: ["TP", "Projet"],
      type: 'tp',
      downloadUrl: getDocPath("documents/tp5.pdf")
    }
  ];

  const certifications: Certification[] = [
    { name: "Sécurité des terminaux", issuer: "Cisco Networking Academy", date: "En cours", icon: <ShieldCheck className="text-blue-500" /> },
    { name: "SecNumAcadémie", issuer: "ANSSI", date: "Obtenu 2026", icon: <Shield className="text-emerald-500" /> }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* --- ACCUEIL --- */}
      <header id="accueil" className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.05)_0%,transparent_50%)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-1 rounded-full bg-neutral-200"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden bg-neutral-300 flex items-center justify-center">
             <User size={64} className="text-neutral-500" />
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 mb-4"
        >
          Alexandre <span className="text-neutral-400">Marquant</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed"
        >
          Étudiant en <span className="text-neutral-900 font-medium">BTS SIO option SISR</span>. 
          Passionné par les infrastructures systèmes, le réseau et la cybersécurité.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex gap-4"
        >
          <button 
            onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-neutral-900 text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors shadow-lg flex items-center gap-2"
          >
            Voir mes projets <ChevronRight size={18} />
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-neutral-300 text-neutral-600 px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-colors"
          >
            Me contacter
          </button>
        </motion.div>
      </header>

      {/* --- PRÉSENTATION --- */}
      <section id="presentation" className="section-padding overflow-hidden">
        <SectionHeading subtitle="Qui suis-je ?">Présentation</SectionHeading>
        
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Bio & Skills (Main Column) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-neutral-800 leading-snug font-medium">
                Futur technicien <span className="text-neutral-400">SISR</span>, je construis les infrastructures qui porteront les services de demain.
              </p>
              <p className="text-neutral-500 leading-relaxed max-w-2xl">
                Actuellement en première année de BTS SIO au Lycée Saint Remi à Amiens, je me passionne pour l'administration système et la sécurité offensive. 
                Rigoureux et autodidacte, j'expérimente quotidiennement sur des environnements virtualisés complexes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white border border-neutral-100 rounded-3xl shadow-sm hover:border-neutral-200 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-neutral-900 text-white rounded-xl"><Lock size={18}/></div>
                   <h4 className="font-bold text-sm uppercase tracking-wider">Expertise Système</h4>
                </div>
                <ul className="space-y-2 text-sm text-neutral-500 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neutral-300 rounded-full"/> Windows Server & Active Directory</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neutral-300 rounded-full"/> Administration GNU/Linux</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neutral-300 rounded-full"/> Scripting Automatisé (Bash)</li>
                </ul>
              </div>
              
              <div className="p-6 bg-white border border-neutral-100 rounded-3xl shadow-sm hover:border-neutral-200 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-neutral-900 text-white rounded-xl"><Network size={18}/></div>
                   <h4 className="font-bold text-sm uppercase tracking-wider">Réseaux & Sécu</h4>
                </div>
                <ul className="space-y-2 text-sm text-neutral-500 font-medium">
                   <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neutral-300 rounded-full"/> Routage & VLANs (Cisco)</li>
                   <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neutral-300 rounded-full"/> Pare-feux & Détection d'Intrusion</li>
                   <li className="flex items-center gap-2"><div className="w-1 h-1 bg-neutral-300 rounded-full"/> Supervision & Audit (Nmap)</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-8">
               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 px-1">Langues</h4>
                  <div className="flex gap-2">
                     <span className="px-3 py-1.5 bg-neutral-100 rounded-xl text-xs font-bold text-neutral-700">Français</span>
                     <span className="px-3 py-1.5 bg-neutral-100 rounded-xl text-xs font-bold text-neutral-700">Anglais</span>
                     <span className="px-3 py-1.5 bg-neutral-100 rounded-xl text-xs font-bold text-neutral-700">Russe</span>
                  </div>
               </div>
               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 px-1">Soft Skills</h4>
                  <div className="flex gap-2">
                     <span className="px-3 py-1.5 bg-neutral-900 text-white rounded-xl text-xs font-bold">Autonome</span>
                     <span className="px-3 py-1.5 bg-neutral-900 text-white rounded-xl text-xs font-bold">Curieux</span>
                     <span className="px-3 py-1.5 bg-neutral-900 text-white rounded-xl text-xs font-bold">Analytique</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Identity Card (Side Column) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-neutral-100 rounded-[2.5rem] rotate-2 scale-95 opacity-50"></div>
            <div className="relative bg-white border border-neutral-200 rounded-[2.5rem] p-1 shadow-2xl overflow-hidden">
               <div className="bg-neutral-900 rounded-[2.2rem] p-8 text-white min-h-[500px] flex flex-col">
                  <div className="flex justify-between items-start mb-12">
                     <div className="w-12 h-1 h-1 bg-emerald-500 rounded-full"></div>
                     <Terminal size={24} className="text-neutral-700" />
                  </div>

                  <div className="flex-grow space-y-10">
                     <section>
                        <h4 className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest mb-4">01 // Parcours Académique</h4>
                        <div className="space-y-4">
                           <div className="flex gap-4">
                              <span className="text-emerald-400 font-mono text-xs">25-27</span>
                              <div>
                                 <p className="text-sm font-bold">BTS SIO SISR</p>
                                 <p className="text-[11px] text-neutral-500">Lycée Saint Remi, Amiens</p>
                              </div>
                           </div>
                           <div className="flex gap-4">
                              <span className="text-neutral-600 font-mono text-xs">2026</span>
                              <div>
                                 <p className="text-sm font-bold">Bac Pro MELEC</p>
                                 <p className="text-[11px] text-neutral-500">Mention Très Bien</p>
                              </div>
                           </div>
                        </div>
                     </section>

                     <section>
                        <h4 className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest mb-4">02 // Terrains d'expérimentation</h4>
                        <div className="space-y-4">
                           <div className="flex gap-4">
                              <span className="text-blue-400 font-mono text-xs">Intern</span>
                              <div>
                                 <p className="text-sm font-bold truncate">Tech2V (Virtualisation)</p>
                                 <p className="text-[11px] text-neutral-500 italic">6 semaines de stage</p>
                              </div>
                           </div>
                           <div className="flex gap-4">
                              <span className="text-neutral-600 font-mono text-xs">Lab</span>
                              <div>
                                 <p className="text-sm font-bold">Home-Lab ESXi/Proxmox</p>
                                 <p className="text-[11px] text-neutral-500 italic">Environnement de test personnel</p>
                              </div>
                           </div>
                        </div>
                     </section>
                  </div>

                  <div className="mt-auto pt-8 border-t border-neutral-800 flex justify-between items-end">
                     <div>
                        <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest">Localisation</p>
                        <p className="text-sm font-medium">Amiens, France</p>
                     </div>
                     <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center"><Cpu size={14} /></div>
                        <div className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-neutral-800 flex items-center justify-center"><Globe size={14} /></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJETS --- */}
      <section id="projets" className="section-padding bg-neutral-100/50">
        <SectionHeading subtitle="Un seul projet complet, plusieurs étapes clés">Mon Projet Majeur</SectionHeading>
        <div className="max-w-4xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col gap-8 overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-neutral-900 text-white rounded-xl">
                      <Briefcase size={28} />
                    </div>
                    <h3 className="text-3xl font-bold text-neutral-900 leading-tight">{project.title}</h3>
                  </div>
                  <div className="flex gap-2">
                     {project.tags.map(tag => (
                       <span key={tag} className="text-[10px] font-mono uppercase bg-neutral-200 text-neutral-600 px-3 py-1 rounded-md">
                         {tag}
                       </span>
                     ))}
                  </div>
                </div>
                
                <p className="text-neutral-500 text-lg mb-8">{project.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8 bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 px-2">Étapes de Programmation & Déploiement</h4>
                    <ul className="space-y-3">
                      {project.steps?.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-neutral-100 shadow-sm transition-transform hover:translate-x-1">
                          <div className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                            {i+1}
                          </div>
                          <span className="text-sm font-medium text-neutral-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 px-2">Technologies Mobilisées</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                       {project.technologies.map(tech => (
                         <span key={tech} className="bg-white border border-neutral-200 px-3 py-1 rounded-lg text-xs font-bold text-neutral-600 shadow-sm">
                           {tech}
                         </span>
                       ))}
                    </div>
                    
                    <div className="mt-auto">
                      <a 
                        href={project.downloadUrl} 
                        download
                        className="w-full flex items-center justify-center gap-3 bg-neutral-900 text-white py-4 rounded-2xl font-bold hover:bg-neutral-800 transition-all shadow-lg group hover:scale-[1.02]"
                      >
                        <Download size={20} /> Dossier Technique (PDF)
                      </a>
                      <p className="text-[10px] text-neutral-400 text-center mt-3 font-medium">Contient l'intégralité du projet NextCloud et Admin VM</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* --- TPs --- */}
      <section id="tps" className="section-padding">
        <SectionHeading subtitle="Comptes-rendus techniques">Mes Travaux Pratiques</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tps.map((tp) => (
            <Card key={tp.id} className="flex flex-col group border-neutral-100 hover:border-neutral-300">
               <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 bg-neutral-100 text-neutral-600 rounded-lg group-hover:bg-neutral-900 group-hover:text-white transition-colors shrink-0">
                    <Terminal size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-base leading-snug group-hover:text-neutral-950">{tp.title}</h3>
                    <p className="text-neutral-400 text-xs mt-1">{tp.description}</p>
                  </div>
               </div>
               
               <div className="mt-auto pt-4 flex items-center justify-between border-t border-neutral-50">
                  <div className="flex gap-1.5 font-mono text-[9px] text-neutral-400">
                     {tp.technologies.slice(0, 2).map(tech => (
                       <span key={tech} className="bg-neutral-50 px-1.5 py-0.5 rounded">#{tech}</span>
                     ))}
                  </div>
                  <a 
                    href={tp.downloadUrl} 
                    download
                    className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-neutral-600 underline underline-offset-4 decoration-2"
                  >
                    <Download size={14} /> PDF
                  </a>
               </div>
            </Card>
          ))}
        </div>
      </section>

      {/* --- CV & LM --- */}
      <section id="cv" className="section-padding bg-neutral-900 text-white rounded-[3rem] mx-4 md:mx-10 my-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-grow">
            <h2 className="text-4xl font-bold mb-4">Candidature Professionnelle</h2>
            <p className="text-neutral-400 text-lg max-w-xl">
              Retrouvez mon Curriculum Vitae ainsi que ma lettre de motivation mise à jour pour mes recherches d'alternance ou de stage.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <a href={getDocPath("documents/cv.pdf")} download className="bg-white text-neutral-900 px-8 py-4 rounded-2xl font-bold hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 shadow-lg">
                <Download size={20} /> Mon CV (PDF)
             </a>
             <a href={getDocPath("documents/lm.pdf")} download className="bg-neutral-800 text-white border border-neutral-700 px-8 py-4 rounded-2xl font-bold hover:bg-neutral-700 transition-all flex items-center justify-center gap-3">
                <FileText size={20} /> Lettre de Motivation (PDF)
             </a>
          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS --- */}
      <section id="certs" className="section-padding">
        <SectionHeading subtitle="Reconnaissances techniques">Mes Certifications</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-center gap-4 p-6 glass rounded-3xl">
              <div className="p-3 bg-white shadow-sm rounded-2xl">{cert.icon}</div>
              <div>
                <h4 className="font-bold text-neutral-900 leading-tight">{cert.name}</h4>
                <div className="flex items-center gap-2 text-sm text-neutral-500 mt-1">
                   <span>{cert.issuer}</span>
                   <span className="opacity-30">•</span>
                   <span className="flex items-center gap-1"><Calendar size={12}/> {cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- VEILLE --- */}
      <section id="veille" className="section-padding bg-neutral-100/50">
        <SectionHeading subtitle="Méthode & Sujets de Veille">Veille Technologique</SectionHeading>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-neutral-200 mb-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="p-4 bg-orange-100 text-orange-600 rounded-2xl">
                <Rss size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Ma démarche de veille</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Pour mon parcours SISR, je réalise une veille constante sur l'évolution des menaces et des solutions d'infrastructure. 
                  J'utilise <strong>Feedly</strong> pour agréger mes flux RSS et je consulte les bulletins officiels pour anticiper les failles de sécurité.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                  <Shield size={20} />
                </div>
                <h4 className="text-lg font-bold">Cybersécurité</h4>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Je surveille les alertes du <strong>CERT-FR</strong> et de l'<strong>ANSSI</strong>. Mon focus actuel porte sur le modèle <strong>Zero Trust</strong> et la protection contre les ransomwares.
              </p>
              <div className="bg-white p-4 rounded-2xl border border-neutral-100 space-y-2">
                <a href="https://www.cert.ssi.gouv.fr/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-xl transition-colors group">
                  <span className="text-sm font-bold text-neutral-700">CERT-FR (Bulletins ANSSI)</span>
                  <ExternalLink size={14} className="text-neutral-400 group-hover:text-red-500" />
                </a>
                <a href="https://www.zataz.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-xl transition-colors group">
                  <span className="text-sm font-bold text-neutral-700">ZATAZ (Veille Actu Cyber)</span>
                  <ExternalLink size={14} className="text-neutral-400 group-hover:text-red-500" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <Cpu size={20} />
                </div>
                <h4 className="text-lg font-bold">IA & Automatisation</h4>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Veille sur l'utilisation des LLM pour l'<strong>automatisation réseau</strong> (Ansible, PowerShell) et l'analyse intelligente des logs pour la détection d'anomalies.
              </p>
              <div className="bg-white p-4 rounded-2xl border border-neutral-100 space-y-2">
                <a href="https://www.it-connect.fr/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-xl transition-colors group">
                  <span className="text-sm font-bold text-neutral-700">IT Connect (Tutos & News)</span>
                  <ExternalLink size={14} className="text-neutral-400 group-hover:text-blue-500" />
                </a>
                <a href="https://korben.info/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-xl transition-colors group">
                  <span className="text-sm font-bold text-neutral-700">Korben.info (Outils & Sécu)</span>
                  <ExternalLink size={14} className="text-neutral-400 group-hover:text-blue-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <footer id="contact" className="section-padding bg-neutral-900 text-white border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl md:text-5xl font-bold mb-6">Travaillons ensemble.</h2>
           <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
              Je suis actuellement à l'écoute d'opportunités en alternance ou stage de fin d'étude pour 2026. 
              N'hésitez pas à me contacter via mes réseaux professionnels ou par email.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="mailto:alexandre.marquant@saint-remi.net" className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-neutral-900 px-8 py-4 rounded-2xl font-bold hover:bg-neutral-200 transition-all shadow-lg group">
                 <Mail size={22} className="text-neutral-900" />
                 <span>Me contacter par Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/alexandre-marquant-61149a3a0/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto flex items-center justify-center gap-4 bg-[#0077B5] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#005a87] transition-all shadow-lg group"
              >
                 <Linkedin size={22} />
                 <span>Mon profil LinkedIn</span>
              </a>
           </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 uppercase tracking-widest font-medium">
           <p>© {new Date().getFullYear()} Alexandre Marquant - BTS SIO SISR Portfolio. Tous droits réservés.</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-neutral-900 transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-neutral-900 transition-colors">Plan du site</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
