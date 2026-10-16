import React from 'react';
import { Shield, ShieldCheck } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  category?: 'reseau' | 'linux' | 'virtualisation' | 'windows' | 'services';
  year?: 1 | 2;
  categoryLabel?: string;
  level?: string;
  duration?: string;
  context?: string;
  objectives?: string[];
  technologies: string[];
  tasks?: string[];
  results?: string;
  tags: string[];
  type: 'project' | 'tp';
  downloadUrl?: string;
  fileName?: string;
  fileSize?: string;
  steps?: string[];
  featured?: boolean;
  notions?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
}

// Helper pour les chemins de documents compatibles GitHub Pages et base Vite
export const getDocPath = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL || './';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Encode URI tout en préservant les slashes
  const encodedPath = cleanPath.split('/').map(segment => encodeURIComponent(segment)).join('/');
  return baseUrl.endsWith('/') ? `${baseUrl}${encodedPath}` : `${baseUrl}/${encodedPath}`;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Architecture & Programmation d'une Infrastructure SI Virtualisée",
    description: "Dossier technique complet retraçant la conception, le déploiement et la sécurisation d'un système d'information complet (Virtualisation, Réseaux, Services Web, Cloud).",
    technologies: ["VirtualBox", "Ubuntu", "Cisco/VLAN", "NextCloud", "Suricata"],
    tags: ["Projet Central", "SISR", "Infrastructure"],
    type: 'project',
    downloadUrl: getDocPath("documents/projet.pdf"),
    fileName: "projet.pdf",
    fileSize: "12.6 Mo",
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

export const tps: Project[] = [
  // --- NOUVEAUX LABS BTS SIO SISR (MIS EN AVANT) ---
  {
    id: 101,
    title: "LAB 1 CISCO — Fondations, Sécurité de Base, VLAN & SSH v2",
    subtitle: "Sécurisation & durcissement d'un Switch Cisco Catalyst 2960 (NetCorp)",
    description: "Transformation d'un switch usine en équipement de production sécurisé : durcissement console/VTY, chiffrement des accès, clés RSA, SSH v2 exclusif, segmentation VLAN 10/20 et protection physique Port-Security.",
    category: 'reseau',
    year: 2,
    categoryLabel: 'Réseau / Cisco',
    level: 'BTS SIO SISR — 2ᵉ année',
    duration: '2h – 3h',
    technologies: ["Cisco Catalyst 2960", "Cisco IOS", "SSH v2", "VLAN 10/20", "Port-Security", "Packet Tracer", "RSA"],
    tags: ["Cisco", "Réseau", "Sécurité", "VLAN", "SSH"],
    type: 'tp',
    featured: true,
    notions: [
      "Sécurisation console 0 et VTY 0-15 (exec-timeout 10:30, logging synchronous)",
      "Authentification locale nominative chiffrée & activation SSH v2 (interdiction Telnet)",
      "Segmentation du domaine de broadcast en VLANs (10 SALES, 20 ADMIN, SVI VLAN 1)",
      "Port-Security anti-intrusion (mac sticky, violation shutdown, gestion err-disabled)"
    ],
    downloadUrl: getDocPath("tp/LAB 1 CISCO FSVS.pdf"),
    fileName: "LAB 1 CISCO FSVS.pdf",
    fileSize: "905 Ko"
  },
  {
    id: 102,
    title: "LAB 1 LINUX — Commandes Fondamentales & Scripting Shell",
    subtitle: "Administration système Linux Ubuntu 24.04 LTS & Script MOTD",
    description: "Apprentissage approfondi du shell Linux : navigation arborescente, flux d'entrées/sorties et redirections (> vs >>), gestion des liens (symboliques vs physiques), intégrité système et création d'un script d'accueil MOTD.",
    category: 'linux',
    year: 2,
    categoryLabel: 'Systèmes / Linux',
    level: 'BTS SIO SISR — Niveau Débutant/Révision',
    duration: '2h – 2h30',
    technologies: ["Ubuntu 24.04 LTS", "Bash Shell", "CLI Linux", "Nano", "GNU Coreutils", "Scripting MOTD"],
    tags: ["Linux", "Système", "Bash", "Shell", "Administration"],
    type: 'tp',
    featured: true,
    notions: [
      "Interrogation système et métriques en CLI (uname, whoami, hostname, who, date, cal)",
      "Gestion de l'arborescence et chemins absolus/relatifs (pwd, cd ~, cd ../.., mkdir -p)",
      "Création de fichiers, flux de redirections et gestion des fichiers cachés (touch, cat, >)",
      "Différenciation technique des liens symboliques (ln -s) et physiques (ln dur, inodes)",
      "Automatisation via script Bash personnalisé d'accueil serveur (motd.sh avec figlet/banner)"
    ],
    downloadUrl: getDocPath("tp/LAB1 LINUX.pdf"),
    fileName: "LAB1 LINUX.pdf",
    fileSize: "6.4 Mo"
  },
  {
    id: 104,
    title: "LAB 2 LINUX — Gestion des Utilisateurs, Groupes & Politiques de Mots de Passe",
    subtitle: "Cycle de vie des comptes sous Ubuntu : /etc/passwd, /etc/shadow, chage & verrouillage",
    description: "Administration complète des identités sous Linux : création de groupes et d'utilisateurs avec UID/GID fixes, analyse des fichiers /etc/passwd et /etc/shadow (hachage yescrypt), politique d'expiration avec chage testée en avançant la date système, puis modification, verrouillage et suppression des comptes.",
    category: 'linux',
    year: 2,
    categoryLabel: 'Systèmes / Linux',
    level: 'BTS SIO SISR — Niveau Débutant/Révision',
    duration: '1h30 – 2h',
    technologies: ["Ubuntu 24.04 LTS", "useradd / usermod / userdel", "groupadd", "passwd", "chage", "/etc/shadow", "yescrypt"],
    tags: ["Linux", "Système", "Utilisateurs", "Groupes", "Sécurité", "Administration"],
    type: 'tp',
    featured: true,
    notions: [
      "Création de groupes et d'utilisateurs avec UID/GID, shell et groupes secondaires (groupadd -g, useradd -u -g -G -s -m)",
      "Lecture des 7 champs de /etc/passwd et des 9 champs de /etc/shadow (droits 644 vs 640)",
      "Hachage des mots de passe : SHA-512 ($6$) et yescrypt ($y$), état des comptes (!, *, L/P/NP)",
      "Politique d'expiration avec chage (-I, -E, -M, -W, -d 0) testée en avançant la date système",
      "Compte système spécial « shut » dont le shell est /sbin/shutdown",
      "Modification, verrouillage et suppression de comptes (usermod -s / -L / -U / -aG, userdel -r)"
    ],
    downloadUrl: getDocPath("tp/LAB2 LINUX.pdf"),
    fileName: "LAB2 LINUX.pdf",
    fileSize: "3.7 Mo"
  },
  {
    id: 103,
    title: "LAB PROXMOX VE — Hyperviseur Type 1 & Virtualisation Imbriquée",
    subtitle: "Déploiement Proxmox VE, VM Debian imbriquée, réseau vmbr0 & sécurité RBAC",
    description: "Mise en place d'une infrastructure de virtualisation imbriquée complète : configuration VT-x/AMD-V (nested virtualization), déploiement de Proxmox VE en machine virtuelle, configuration réseau en mode pont (vmbr0), gestion des dépôts No-Subscription, installation d'une VM Debian 12 avec agent QEMU et sécurisation par permissions RBAC.",
    category: 'virtualisation',
    year: 2,
    categoryLabel: 'Virtualisation / Proxmox VE',
    level: 'BTS SIO SISR — 2ᵉ année',
    duration: '6h – 8h',
    technologies: ["Proxmox VE", "KVM", "LXC", "Virtualisation Imbriquée", "Debian 12", "vmbr0 (Bridge)", "RBAC", "QEMU Agent"],
    tags: ["Proxmox", "Virtualisation", "Hyperviseur", "KVM", "Linux", "SISR", "RBAC"],
    type: 'tp',
    featured: true,
    notions: [
      "Architecture hyperviseur Type 1 (bare-metal) vs Type 2 et activation de la virtualisation imbriquée (nested-hw-virt)",
      "Installation de Proxmox VE, adressage statique et configuration du commutateur virtuel (pont vmbr0)",
      "Bascule des dépôts APT Enterprise vers No-Subscription et mise à niveau système",
      "Déploiement d'une VM Linux Debian 12 (ISO netinst, disque local-lvm, QEMU Agent, console noVNC)",
      "Gestion granulaire de la sécurité RBAC : utilisateurs (adm_etu), chemins (/) et rôles (PVEVMAdmin / Administrator)",
      "Diagnostic et synthèse des limites techniques de l'imbrication face au bare-metal (I/O, passthrough matériel)"
    ],
    downloadUrl: getDocPath("tp/TP PROXMOX VE.pdf"),
    fileName: "TP PROXMOX VE.pdf",
    fileSize: "1.2 Mo"
  },

  // --- CATÉGORIE RÉSEAU / CISCO ---
  {
    id: 6,
    title: "Ingénierie Réseau : VLSM",
    subtitle: "Découpage et segmentation IP de sous-réseaux",
    description: "Segmentation de réseaux IP complexes par le calcul de masques de sous-réseaux à longueur variable (VLSM).",
    category: 'reseau',
    year: 1,
    categoryLabel: 'Réseau / Cisco',
    technologies: ["Réseau", "IPv4", "VLSM", "Calcul Binaire"],
    tags: ["TP", "Réseau", "VLSM"],
    type: 'tp',
    downloadUrl: getDocPath("documents/td01_vlsm.pdf"),
    fileName: "td01_vlsm.pdf",
    fileSize: "121 Ko"
  },
  {
    id: 7,
    title: "Architecture Réseau Multi-sites (GlobalTech)",
    subtitle: "Interconnexions WAN et plan d'adressage global",
    description: "Conception d'un plan d'adressage expert pour une multinationale avec interconnexions WAN et liaisons point-à-point.",
    category: 'reseau',
    year: 1,
    categoryLabel: 'Réseau / Cisco',
    technologies: ["VLSM", "WAN", "Architecture IP", "Routage"],
    tags: ["TP", "Réseau", "Architecture"],
    type: 'tp',
    downloadUrl: getDocPath("documents/td02_vlsm.pdf"),
    fileName: "td02_vlsm.pdf",
    fileSize: "91 Ko"
  },
  {
    id: 14,
    title: "Administration Réseau Avancée (TP4.2)",
    subtitle: "Routage inter-VLAN et services d'infrastructure",
    description: "Routage inter-VLANs, implémentation des services d'attribution DHCP/DNS et sécurisation des accès réseau.",
    category: 'reseau',
    year: 1,
    categoryLabel: 'Réseau / Cisco',
    technologies: ["VLAN", "Routage Inter-VLAN", "DHCP", "DNS", "Cisco"],
    tags: ["TP", "Réseau", "VLAN"],
    type: 'tp',
    downloadUrl: getDocPath("documents/tp4.2.pdf"),
    fileName: "tp4.2.pdf",
    fileSize: "381 Ko"
  },
  {
    id: 4,
    title: "IoT & Maison Intelligente sur Packet Tracer",
    subtitle: "Topologie domotique et passerelle sécurisée",
    description: "Création et sécurisation d'une maison intelligente avec passerelle domotique, contrôle distant et automatisation Packet Tracer.",
    category: 'reseau',
    year: 1,
    categoryLabel: 'Réseau / Cisco',
    technologies: ["Packet Tracer", "IoT", "Sécurité Wi-Fi", "Passerelle"],
    tags: ["TP", "IoT", "Cisco"],
    type: 'tp',
    downloadUrl: getDocPath("documents/lab_cisco.pdf"),
    fileName: "lab_cisco.pdf",
    fileSize: "200 Ko"
  },

  // --- CATÉGORIE SYSTÈMES / LINUX ---
  {
    id: 9,
    title: "Architecture & Permissions Linux Avancées",
    subtitle: "Droits POSIX, groupes et hiérarchie FHS",
    description: "Gestion avancée des droits d'accès (chmod, chown, umask), comptes utilisateurs, groupes et arborescence FHS sous GNU/Linux.",
    category: 'linux',
    year: 1,
    categoryLabel: 'Systèmes / Linux',
    technologies: ["Linux", "Bash", "Permissions POSIX", "FHS", "Sécurité"],
    tags: ["TP", "Linux", "Sécurité"],
    type: 'tp',
    downloadUrl: getDocPath("documents/Linux_Permissions_Architecture.pdf"),
    fileName: "Linux_Permissions_Architecture.pdf",
    fileSize: "18.3 Mo"
  },
  {
    id: 5,
    title: "Fondamentaux Linux & Shell Bash",
    subtitle: "Premiers pas et commandes usuelles",
    description: "Prise en main de l'environnement Linux, manipulation des flux de données et exploration de l'arborescence.",
    category: 'linux',
    year: 1,
    categoryLabel: 'Systèmes / Linux',
    technologies: ["Linux", "Bash", "CLI", "Shell"],
    tags: ["TP", "Linux"],
    type: 'tp',
    downloadUrl: getDocPath("documents/linux.pdf"),
    fileName: "linux.pdf",
    fileSize: "2.5 Mo"
  },
  {
    id: 11,
    title: "Commandes Système Windows & Linux (Vol. 1)",
    subtitle: "Comparatif et commandes de diagnostic croisées",
    description: "Étude comparative des commandes essentielles d'analyse et de diagnostic système entre environnements Microsoft et Unix.",
    category: 'windows',
    year: 1,
    categoryLabel: 'Windows & Dépannage',
    technologies: ["Multi-OS", "CLI", "Diagnostic", "Windows", "Linux"],
    tags: ["TP", "Système"],
    type: 'tp',
    downloadUrl: getDocPath("documents/TP_Commandes_Windows_Linux (1).pdf"),
    fileName: "TP_Commandes_Windows_Linux (1).pdf",
    fileSize: "195 Ko"
  },
  {
    id: 12,
    title: "Commandes Système Windows & Linux (Vol. 2)",
    subtitle: "Gestion approfondie des processus et ressources",
    description: "Surveillance avancée des processus, gestion de la mémoire, des flux réseau et automatisation en environnement mixte.",
    category: 'windows',
    year: 1,
    categoryLabel: 'Windows & Dépannage',
    technologies: ["Processus", "Réseau", "Gestion Mémoire", "CLI"],
    tags: ["TP", "Système"],
    type: 'tp',
    downloadUrl: getDocPath("documents/TP_Commandes_Windows_Linux (2).pdf"),
    fileName: "TP_Commandes_Windows_Linux (2).pdf",
    fileSize: "192 Ko"
  },
  {
    id: 13,
    title: "Fondamentaux Système & Déploiement (TP2)",
    subtitle: "Configuration des interfaces et comptes locaux",
    description: "Déploiement initial de machine, configuration des interfaces de communication et gestion locale des utilisateurs.",
    category: 'linux',
    year: 1,
    categoryLabel: 'Systèmes / Linux',
    technologies: ["Système", "Déploiement", "Configuration", "Admin"],
    tags: ["TP", "Admin"],
    type: 'tp',
    downloadUrl: getDocPath("documents/tp2.pdf"),
    fileName: "tp2.pdf",
    fileSize: "4.0 Mo"
  },

  // --- CATÉGORIE SUPPORT & SERVICES ---
  {
    id: 15,
    title: "Services d'Infrastructure Web (TP5.1)",
    subtitle: "Pile LAMP et services d'annuaire local",
    description: "Déploiement et sécurisation de serveurs Web (Apache, MySQL, PHP) et mise en place de services d'annuaire d'entreprise.",
    category: 'services',
    year: 1,
    categoryLabel: 'Services & Gestion de projet',
    technologies: ["LAMP", "Apache", "MariaDB", "PHP", "Services Web"],
    tags: ["TP", "Services", "Web"],
    type: 'tp',
    downloadUrl: getDocPath("documents/tp5.1.pdf"),
    fileName: "tp5.1.pdf",
    fileSize: "364 Ko"
  },
  {
    id: 16,
    title: "Haute Disponibilité & Sauvegardes (TP5.2)",
    subtitle: "Supervision et stratégies de backup",
    description: "Mise en place de mécanismes de redondance, scripts de sauvegarde automatisée et supervision des services critiques.",
    category: 'services',
    year: 1,
    categoryLabel: 'Services & Gestion de projet',
    technologies: ["Backup", "Supervision", "Redondance", "Scripting"],
    tags: ["TP", "Expertise"],
    type: 'tp',
    downloadUrl: getDocPath("documents/tp5.2.pdf"),
    fileName: "tp5.2.pdf",
    fileSize: "170 Ko"
  },
  {
    id: 17,
    title: "Synthèse Déploiement & Services SISR (TP5)",
    subtitle: "Intégration d'infrastructure d'entreprise",
    description: "Dossier de synthèse articulant l'interconnexion complète des services réseaux, systèmes et applicatifs déployés.",
    category: 'services',
    year: 1,
    categoryLabel: 'Services & Gestion de projet',
    technologies: ["Synthèse", "Architecture SISR", "Sécurité", "Services"],
    tags: ["TP", "Projet"],
    type: 'tp',
    downloadUrl: getDocPath("documents/tp5.pdf"),
    fileName: "tp5.pdf",
    fileSize: "131 Ko"
  },
  {
    id: 2,
    title: "Commandes CMD Windows Essentielles",
    subtitle: "Support utilisateur et diagnostic local",
    description: "Diagnostic système, dépannage réseau de premier niveau et administration des utilisateurs via le prompt Windows.",
    category: 'windows',
    year: 1,
    categoryLabel: 'Windows & Dépannage',
    technologies: ["Windows", "CMD", "Support Helpdesk", "Diagnostic"],
    tags: ["TP", "Support"],
    type: 'tp',
    downloadUrl: getDocPath("documents/cmd.pdf"),
    fileName: "cmd.pdf",
    fileSize: "12 Ko"
  },
  {
    id: 3,
    title: "Diagnostic & Dépannage Réseau",
    subtitle: "Méthodologie d'investigation TCP/IP",
    description: "Méthodologie standardisée de résolution d'incidents (ipconfig, ping, tracert, nslookup, netstat) et procédures de remise en service.",
    category: 'windows',
    year: 1,
    categoryLabel: 'Windows & Dépannage',
    technologies: ["Réseau", "TCP/IP", "Diagnostic", "ICMP"],
    tags: ["TP", "Réseau"],
    type: 'tp',
    downloadUrl: getDocPath("documents/diagnostic.pdf"),
    fileName: "diagnostic.pdf",
    fileSize: "17 Ko"
  },
  {
    id: 10,
    title: "Initiation CMD & PowerShell (TP05)",
    subtitle: "Scripting d'administration Microsoft",
    description: "Prise en main de PowerShell et de l'invite de commande, automatisation de tâches récurrentes et administration Windows.",
    category: 'windows',
    year: 1,
    categoryLabel: 'Windows & Dépannage',
    technologies: ["PowerShell", "CMD", "Scripting", "Windows"],
    tags: ["TP", "Windows"],
    type: 'tp',
    downloadUrl: getDocPath("documents/TP05_Initiation_CMD_PS.pdf"),
    fileName: "TP05_Initiation_CMD_PS.pdf",
    fileSize: "109 Ko"
  },
  {
    id: 8,
    title: "Gestion de Projet & Ordonnancement",
    subtitle: "Planification Gantt pour vidéosurveillance IP",
    description: "Méthodologie de conduite de projet : diagramme de Gantt, chemin critique, budgétisation et cartographie des risques.",
    category: 'services',
    year: 1,
    categoryLabel: 'Services & Gestion de projet',
    technologies: ["Gantt", "Gestion de Projet", "Méthodologie", "Budget"],
    tags: ["TP", "Management"],
    type: 'tp',
    downloadUrl: getDocPath("documents/td_ordon.pdf"),
    fileName: "td_ordon.pdf",
    fileSize: "253 Ko"
  }
];

export const certifications: Certification[] = [
  { name: "Sécurité des terminaux", issuer: "Cisco Networking Academy", date: "En cours", icon: <ShieldCheck className="text-blue-500" /> },
  { name: "SecNumAcadémie", issuer: "ANSSI", date: "Obtenu 2026", icon: <Shield className="text-emerald-500" /> }
];
