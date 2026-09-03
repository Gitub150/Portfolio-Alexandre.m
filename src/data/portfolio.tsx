import React from 'react';
import { Shield, ShieldCheck } from 'lucide-react';

export interface Project {
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

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
}

// Helper pour les chemins de documents compatibles GitHub Pages
export const getDocPath = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL; // Sera "/portfolio-bts-sio-sisr/"
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return baseUrl.endsWith('/') ? `${baseUrl}${cleanPath}` : `${baseUrl}/${cleanPath}`;
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

export const certifications: Certification[] = [
  { name: "Sécurité des terminaux", issuer: "Cisco Networking Academy", date: "En cours", icon: <ShieldCheck className="text-blue-500" /> },
  { name: "SecNumAcadémie", issuer: "ANSSI", date: "Obtenu 2026", icon: <Shield className="text-emerald-500" /> }
];
