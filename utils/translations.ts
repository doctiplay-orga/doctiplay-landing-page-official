export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    navbar: {
      init: "INITIALISER SYSTÈME",
      sim: "Simulateur IA",
      expertise: "Noyau Cognitif",
      ranks: "Niveaux de Synchro",
      faq: "FAQ Système",
      beta: "BÊTA CORE"
    },
    hero: {
      badge: "MOTEUR NEURAL IA // OPÉRATIONNEL",
      headline: "Chaque seconde de simulation est",
      headline_highlight: "une optimisation clinique.",
      subtext: "Le premier simulateur d'urgence médicale haute fidélité propulsé par une IA générative multimodale en temps réel. Diagnostiquez, traitez et stabilisez des modèles de patients synthétiques à réactivité physiologique dynamique.",
      btn_start: "LANCER SIMULATION IA",
      btn_initializing: "SYNCHRONISATION...",
      btn_tutorial: "DÉMO SYSTÈME",
      social_proof: "Simulations cognitives exécutées par des professionnels & résidents",
      mode_title: "Vecteur de Simulation",
      cat_title: "Modèle de Pathologie IA"
    },
    modes: {
      geste: "Protocoles d'Urgence",
      ambulance: "Télémétrie Mobile (SMUR)",
      dechocage: "Soins Intensifs & Réanimation"
    },
    categories: {
      medical: "Urgences Médicales IA",
      surgical: "Scénarios Chirurgicaux",
      pediatric: "Urgences Pédiatriques"
    },
    monitor: {
      live: "MONITEUR DE TÉLÉMÉTRIE EN DIRECT",
      standby: "SYNC EN ATTENTE",
      waiting: "Génération du modèle de patient synthétique..."
    },
    features: {
      problem_title: "LE PARADOXE CLINIQUE",
      problem_text: "Les manuels statiques ne simulent pas le stress. Les QCM passifs ne font pas d'arrêt cardiaque.",
      solution_title: "L'ALTERNATIVE NUMÉRIQUE",
      solution_text: "Doctiplay intègre l'imprévisibilité biologique, le stress temporel et les fluctuations systémiques dans un environnement d'apprentissage sécurisé.",
      f1_title: "Moteur Physiologique Dynamique",
      f1_desc: "Les constantes vitales réagissent instantanément à chaque agent pharmacologique ou intervention. Aucun scénario pré-écrit, tout est modélisé par des algorithmes biologiques.",
      f2_title: "Génération de Cas Infinie",
      f2_desc: "Pas d'étiquettes de diagnostic. Utilisez la télémétrie en direct, l'imagerie générative et les dossiers biologiques pour décoder la pathologie.",
      f3_title: "Interface Vocale Cognitive",
      f3_desc: "Interagissez naturellement avec le patient virtuel grâce à notre module de reconnaissance vocale neuronale. Faites l'anamnèse en langage naturel.",
      f4_title: "Débriefing Analytique IA",
      f4_desc: "Chaque décision est tracée à la milliseconde près. Obtenez une évaluation quantitative de votre raisonnement clinique, de la gestion du temps et de la sécurité.",
      f1_items: [
        "Modélisation physiologique en temps réel",
        "Constantes dynamiques réactives",
        "Pharmacologie algorithmique",
        "Chocs et régulations systémiques"
      ],
      f2_items: [
        "Télémétrie & Analyse de données",
        "Examens cliniques générés",
        "Imagerie & Examens de laboratoire",
        "Raisonnement déductif assisté"
      ],
      f3_items: [
        "Dialogue en langage naturel",
        "Consultation de spécialistes IA",
        "Commandes vocales immersives",
        "Immersion sensorielle totale"
      ],
      f4_items: [
        "Priorisation algorithmique",
        "Vecteurs de diagnostic différentiel",
        "Chronologie d'intervention",
        "Score de sécurité clinique"
      ]
    },
    modes_section: {
      badge: "3 ENVIRONNEMENTS NEURONAUX",
      section_title_line1: "Configurez votre",
      section_title_line2: "matrice d'entraînement.",
      section_desc: "Trois environnements de simulation calibrés pour pousser les limites de votre raisonnement clinique. Précision algorithmique absolue.",
      cta: "Initialiser le mode",
      expand: "▾ Métriques du système",
      collapse: "▴ Fermer les métriques",
      cmd_beta: "ACCÉDER AU PROTOCOLE BÊTA",
      medical: {
        badge: "NOYAU DE SIMULATION CLINIQUE",
        subtitle: "Soins Critiques, Réanimation & Traumatologie",
        title: "Médecine\nIntensive IA",
        desc: "• Diagnostics dynamiques assistés par IA.\n• Télémétrie physiologique en temps réel.\n• Prise de décision clinique sous stress extrême.",
        tags: ["Réanimation", "Traumatologie", "Télémétrie", "IA Clinique"]
      },
      paramedical: {
        badge: "NOYAU DE SOINS PARAMÉDICAUX",
        subtitle: "Protocoles Infirmiers & Tri Algorithmique",
        title: "Triage & Soins\nde Première Ligne",
        desc: "• Algorithme intelligent de triage d'urgence.\n• Évaluation clinique rapide & protocoles infirmiers.\n• Retours de performance et score instantanés.",
        tags: ["Triage IA", "Soins Primaires", "Évaluation Rapide", "Protocoles"]
      },
      ecos: {
        badge: "NOYAU D'ÉVALUATION DE CERTIFICATION",
        subtitle: "Examens ECOS Standardisés",
        title: "Certification\nECOS / CFEU IA",
        desc: "• Scénarios calibrés sur les standards ECOS nationaux.\n• Notation IA automatisée selon la grille officielle CFEU.\n• Analyse prédictive des chances de réussite.",
        tags: ["ECOS IA", "Standard CFEU", "Simulation Officielle", "Score Prédictif"]
      }
    },
    gamification: {
      title: "Rangs & Marge de Performance",
      subtitle: "Du profil étudiant à l'expert clinique",
      rank_student: "Novice (Externe)",
      rank_intern: "Spécialiste (Interne)",
      rank_pro: "Expert (Praticien)",
      badges_title: "Distinctions Cliniques Déverrouillables",
      b1: "Stabilisateur Système",
      b2: "Analyseur Diagnostique",
      b3: "Contrôleur de Stress"
    },
    testimonials: {
      badge: "Validation Clinique & Technologique",
      title: "Recommandé par les Centres de Simulation",
      t1: "La réactivité des constantes physiologiques générées par l'IA est phénoménale. Elle pousse à l'analyse en temps réel plutôt qu'à la simple récitation.",
      t1_author: "Dr Sarah L.",
      t1_role: "Directrice de Simulation Clinique",
      t2: "Enfin un simulateur qui évalue le raisonnement clinique profond. Le rapport de débriefing automatisé par IA est incroyablement précis.",
      t2_author: "James M.",
      t2_role: "Interne en Médecine (Année 4)",
      t3: "L'intégration de Doctiplay dans notre programme de formation a augmenté les scores de sécurité clinique de 40%.",
      t3_author: "Elena R.",
      t3_role: "Simulation Program Director"
    },
    faq: {
      badge: "ARCHITECTURES CLINIQUES",
      title: "Protocoles & Vision",
      description: "Explorez l'infrastructure technologique qui permet à Doctiplay de générer des modèles physiologiques réalistes et interactifs par IA.",
      action: "VOIR LE LIVRE BLANC"
    },
    partnership: {
      badge: "RÉSEAU DE RECHERCHE & DÉVELOPPEMENT",
      title: "Écosystème Clinique",
      subtitle: "Collaboration avec des centres hospitalo-universitaires de pointe pour valider nos modèles d'IA générative.",
      cta: "Intégrer le Réseau"
    },
    imageGen: {
      title: "Générateur de Cas d'IA",
      subtitle: "Générez des visuels cliniques synthétiques haute fidélité pour enrichir vos scénarios de simulation.",
      promptPlaceholder: "Paramètres de génération (ex: patient polytraumatisé dans un box de déchocage...)",
      sizeLabel: "Résolution Matrix",
      billingNote: "Nécessite un jeton d'accès API Gemini actif.",
      loading: "Synthèse de l'image en cours...",
      generateBtn: "Synthétiser l'image",
      error: "Erreur de connexion API. Vérifiez votre clé d'authentification."
    },
    footer: {
      tagline: "Noyau de simulation médicale haute fidélité propulsé par l'intelligence artificielle générative. Optimisez les compétences cliniques sous stress extrême.",
      contact_label: "Support Technique",
      contact_action: "OUVRIR UN TICKET",
      partnership_label: "Recherche & R&D",
      partnership_action: "PROPOSER UN PARTENARIAT",
      disclaimer: "AVIS TECHNIQUE : Doctiplay est un système d'apprentissage basé sur l'IA destiné uniquement à l'entraînement clinique. Les données générées ne constituent pas des directives thérapeutiques pour des patients réels.",
      links: "Ressources Systèmes",
      privacy: "Protection des Données",
      contact: "Support",
      copyright: "© 2026 Doctiplay. Tous droits système réservés.",
      oath_title: "Cadre Éthique & Bio-Algorithmique",
      oath_principles: [
        "Intégrité des données d'entraînement (Primum non nocere)",
        "Maximisation de l'utilité clinique (Bienfaisance)",
        "Respect de la confidentialité clinique synthétique",
        "Équité des modèles d'évaluation IA",
        "Protection absolue des flux de données"
      ]
    },
    prompt: {
      system: "Vous êtes l'intelligence artificielle d'un moniteur médical d'urgence de nouvelle génération. Générez une séquence de journaux de télémétrie réalistes et à haute tension pour un patient synthétique dans un état de défaillance systémique aiguë (ex: arrêt cardiaque, choc anaphylactique, polytraumatisme). Sortez UNIQUEMENT les journaux. Pas de formatage markdown, pas de commentaires. Un journal par ligne. Format : '>> [HH:MM:SS] [SYS_TELEMETRY] Message'. Utilisez des termes cliniques hautement techniques en FRANÇAIS. Simulez une dégradation rapide des constantes vitales."
    },
    hero_extended: {
      subtext_full: "Doctiplay convertit la formation médicale en expériences de simulation immersives dirigées par IA. Testez vos capacités cognitives sur des cas complexes sans risque.",
      btn_command: "DÉPLOYER DOCTIPLAY",
      btn_play_demo: "SIMULER IMMÉDIATEMENT",
      btn_contact_us: "CONTACTER R&D",
      btn_start_now: "INITIALISER CORE",
      debrief: {
        title: "Débriefing Assisté par IA",
        subtitle: "Analyse quantitative et chronologique des décisions cliniques.",
        items: [
          "Sécurité et priorisation des gestes",
          "Raisonnement diagnostique différentiel",
          "Cinétique de prise en charge",
          "Coordination et timing des interventions"
        ]
      },
      sensor: {
        label: "Capteur Bio-Actif IA",
        status: "TELEMETRIE STABLE // SpO2"
      }
    },
    features_extended: {
      badge: "Innovation Algorithmique",
      main_title: "L'Infrastructure Doctiplay",
      main_desc: "Une suite technologique de pointe conçue pour simuler les moindres nuances de la physiologie humaine.",
      toggle: {
        show: "Déployer les détails",
        hide: "Réduire les détails"
      }
    },
    gamification_extended: {
      system_badge: "Matrice de Carrière",
      description: "Cumulez des crédits d'expérience clinique, optimisez votre profil et débloquez des distinctions cognitives.",
      rank_current: "RANG ACTUEL",
      gallery_btn: "GALERIE DE CERTIFICATS",
      gallery_modal: {
        title: "Répertoire de Succès",
        subtitle: "Vos distinctions et habilitations cliniques acquises sur la plateforme Doctiplay.",
        footer: "De nouveaux protocoles de distinction seront intégrés au prochain déploiement."
      },
      badges: {
        subtitle: "Accomplissez des défis cliniques précis pour valider votre score de performance",
        desc_zip: "RCR Réussie (100% de conformité aux directives)",
        desc_filesearch: "5 diagnostics de pathologies rares sans faux positif",
        desc_shield: "Stabilisation en situation de stress critique élevé",
        expert_reanim: "Expert en Réanimation",
        desc_expert_reanim: "10 arrêts cardiaques stabilisés sous le protocole de crise",
        oeil_lynx: "Détecteur de Signaux Faibles",
        desc_oeil_lynx: "Identification d'une pathologie complexe et dissimulée",
        vitesse_eclair: "Réactivité Critique",
        desc_vitesse_eclair: "Intervention invasive réussie en moins de 60 secondes",
        maitre_orateur: "Coordinateur de Crise",
        desc_maitre_orateur: "Communication équipe et gestion des ressources parfaites",
        major_promo: "Algorithme Parfait",
        desc_major_promo: "Score maximal de 100/100 lors du débriefing par IA",
        precision_chir: "Précision Micro-Invasive",
        desc_precision_chir: "Zéro erreur sur les gestes techniques invasifs"
      }
    },
    monitor_extended: {
      system_log_label: "Flux de données de télémétrie"
    },
    partnership_drawer: {
      title: "Partenariats Technologiques & CHU",
      success_title: "Transmission Réussie",
      success_message: "Vos données de contact ont été transmises à notre division R&D. Une réponse vous sera envoyée après validation.",
      header_badge: "Protocole de Liaison Core v1.0",
      labels: {
        name: "Nom complet du contact",
        email: "Email institutionnel",
        institution: "Institution / CHU de rattachement",
        role: "Fonction / Chaire clinique",
        message: "Projet de recherche ou de collaboration"
      },
      placeholders: {
        name: "Dr Alex Mercer",
        email: "alex.mercer@chu-recherche.fr",
        institution: "Centre Hospitalier Universitaire...",
        role: "Directeur du Département de Simulation...",
        message: "Détaillez vos besoins d'intégration de notre moteur de simulation IA..."
      },
      btn_submit: "Établir la Liaison",
      footer: "Division R&D Doctiplay // Protocole de Communication Sécurisé"
    },
    contact_drawer: {
      title: "Console de Support Technique",
      success_title: "Ticket Créé",
      success_message: "Votre rapport technique a été enregistré dans notre système de ticket.",
      header_badge: "Système de Support v1.0",
      labels: {
        name: "Nom d'utilisateur / Nom complet",
        email: "Email pour le suivi",
        message: "Description du bug ou de la requête"
      },
      placeholders: {
        name: "Dr Alex Mercer",
        email: "support@doctiplay.com",
        message: "Décrivez précisément le comportement attendu et le comportement constaté..."
      },
      btn_submit: "Soumettre le Ticket",
      footer: "Doctiplay System Support // Protocole de Diagnostic"
    }
  },
  en: {
    navbar: {
      init: "INITIALIZE SYSTEM",
      sim: "AI Simulator",
      expertise: "Cognitive Core",
      ranks: "Sync Levels",
      faq: "System FAQ",
      beta: "BETA CORE"
    },
    hero: {
      badge: "NEURAL AI ENGINE // OPERATIONAL",
      headline: "Every simulation second is",
      headline_highlight: "a clinical optimization.",
      subtext: "The first high-fidelity emergency medical simulator powered by real-time multimodal Generative AI. Diagnose, treat, and stabilize synthetic patient models with dynamic physiological responsiveness.",
      btn_start: "RUN AI SIMULATION",
      btn_initializing: "SYNCHRONIZING...",
      btn_tutorial: "SYSTEM DEMO",
      social_proof: "Cognitive simulations run by medical professionals & residents",
      mode_title: "Simulation Vector",
      cat_title: "AI Pathology Model"
    },
    modes: {
      geste: "Emergency Protocols",
      ambulance: "Mobile Telemetry (EMS)",
      dechocage: "Intensive Care & Resuscitation"
    },
    categories: {
      medical: "AI Medical Emergencies",
      surgical: "Surgical Scenarios",
      pediatric: "Pediatric Emergencies"
    },
    monitor: {
      live: "LIVE TELEMETRY MONITOR",
      standby: "SYNC STANDBY",
      waiting: "Synthesizing virtual patient model..."
    },
    features: {
      problem_title: "THE CLINICAL PARADOX",
      problem_text: "Static textbooks do not simulate stress. Passive MCQs do not suffer cardiac arrest.",
      solution_title: "THE DIGITAL SOLUTION",
      solution_text: "Doctiplay integrates biological unpredictability, time pressure, and systemic fluctuations into a secure training environment.",
      f1_title: "Dynamic Physiological Engine",
      f1_desc: "Vitals react instantly to every pharmacological agent or intervention. No pre-scripted paths, everything is modeled by biological algorithms.",
      f2_title: "Infinite Case Generation",
      f2_desc: "No diagnostic tags. Use live telemetry, generative imaging, and lab reports to decode the pathology.",
      f3_title: "Cognitive Voice Interface",
      f3_desc: "Interact naturally with the synthetic patient using our neural voice recognition module. Take histories in natural language.",
      f4_title: "AI Analytical Debriefing",
      f4_desc: "Every decision is tracked down to the millisecond. Get a quantitative evaluation of clinical reasoning, time management, and safety.",
      f1_items: [
        "Real-time physiological modeling",
        "Reactive dynamic vitals",
        "Algorithmic pharmacology",
        "Systemic shock & regulation"
      ],
      f2_items: [
        "Telemetry & Data analysis",
        "Generated clinical exams",
        "Imaging & Lab tests",
        "Assisted deductive reasoning"
      ],
      f3_items: [
        "Natural language dialogue",
        "AI specialist consultation",
        "Immersive voice commands",
        "Total sensory immersion"
      ],
      f4_items: [
        "Algorithmic prioritization",
        "Differential diagnosis vectors",
        "Intervention timeline",
        "Clinical safety score"
      ]
    },
    modes_section: {
      badge: "3 NEURAL ENVIRONMENTS",
      section_title_line1: "Configure your",
      section_title_line2: "training matrix.",
      section_desc: "Three simulation environments calibrated to push the boundaries of your clinical reasoning. Absolute algorithmic precision.",
      cta: "Initialize Mode",
      expand: "▾ System Metrics",
      collapse: "▴ Close Metrics",
      cmd_beta: "ACCESS BETA PROTOCOL",
      medical: {
        badge: "CLINICAL SIMULATION CORE",
        subtitle: "Critical Care, Resuscitation & Trauma",
        title: "AI Intensive\nMedicine",
        desc: "• Dynamic AI-assisted diagnostics.\n• Real-time physiological telemetry.\n• Clinical decision-making under extreme stress.",
        tags: ["Resuscitation", "Trauma", "Telemetry", "Clinical AI"]
      },
      paramedical: {
        badge: "PARAMEDICAL CARE CORE",
        subtitle: "Nursing Protocols & Algorithmic Triage",
        title: "Frontline Triage\n& Primary Care",
        desc: "• Intelligent emergency triage algorithm.\n• Rapid clinical assessment & nursing protocols.\n• Instant performance feedback and metrics.",
        tags: ["AI Triage", "Primary Care", "Rapid Assessment", "Protocols"]
      },
      ecos: {
        badge: "CERTIFICATION EVALUATION CORE",
        subtitle: "Standardized ECOS Exams",
        title: "AI ECOS / CFEU\nCertification",
        desc: "• Scenarios calibrated to national ECOS standards.\n• Automated AI scoring based on the official CFEU grid.\n• Predictive success analysis.",
        tags: ["AI ECOS", "CFEU Standard", "Official Simulation", "Predictive Score"]
      }
    },
    gamification: {
      title: "Ranks & Performance Margin",
      subtitle: "From student profile to clinical expert",
      rank_student: "Novice (Resident)",
      rank_intern: "Specialist (Registrar)",
      rank_pro: "Expert (Attending)",
      badges_title: "Unlockable Clinical Achievements",
      b1: "System Stabilizer",
      b2: "Diagnostic Analyzer",
      b3: "Stress Controller"
    },
    testimonials: {
      badge: "Clinical & Technological Validation",
      title: "Endorsed by Simulation Centers",
      t1: "The responsiveness of the AI-generated physiological vitals is phenomenal. It forces real-time analysis rather than simple rote memorization.",
      t1_author: "Dr. Sarah L.",
      t1_role: "Clinical Simulation Director",
      t2: "Finally a simulator that evaluates deep clinical reasoning. The AI-automated debriefing report is incredibly accurate.",
      t2_author: "James M.",
      t2_role: "Medical Resident (Year 4)",
      t3: "Integrating Doctiplay into our training program has increased clinical safety scores by 40%.",
      t3_author: "Elena R.",
      t3_role: "Simulation Program Director"
    },
    faq: {
      badge: "CLINICAL ARCHITECTURES",
      title: "Protocols & Vision",
      description: "Explore the technological infrastructure that enables Doctiplay to generate realistic, interactive physiological models using AI.",
      action: "READ WHITE PAPER"
    },
    partnership: {
      badge: "R&D RESEARCH NETWORK",
      title: "Clinical Ecosystem",
      subtitle: "Partnering with leading university hospitals to validate our generative AI models.",
      cta: "Join the Network"
    },
    imageGen: {
      title: "AI Case Generator",
      subtitle: "Generate high-fidelity synthetic clinical visuals to enrich your simulation scenarios.",
      promptPlaceholder: "Generation parameters (e.g., polytrauma patient in emergency bay...)",
      sizeLabel: "Resolution Matrix",
      billingNote: "Requires an active Gemini API access token.",
      loading: "Synthesizing image...",
      generateBtn: "Synthesize Image",
      error: "API connection error. Verify your authentication token."
    },
    footer: {
      tagline: "High-fidelity medical simulation core powered by generative artificial intelligence. Optimize clinical decision-making under extreme stress.",
      contact_label: "Technical Support",
      contact_action: "OPEN SUPPORT TICKET",
      partnership_label: "Research & R&D",
      partnership_action: "PROPOSE PARTNERSHIP",
      disclaimer: "TECHNICAL NOTICE: Doctiplay is an AI-powered learning system intended for clinical training only. Generated data does not constitute therapeutic guidelines for real patients.",
      links: "System Resources",
      privacy: "Data Protection",
      contact: "Support",
      copyright: "© 2026 Doctiplay. All system rights reserved.",
      oath_title: "Ethical & Bio-Algorithmic Framework",
      oath_principles: [
        "Training data integrity (Primum non nocere)",
        "Maximization of clinical utility (Beneficence)",
        "Respect for synthetic clinical confidentiality",
        "Fairness of AI evaluation models",
        "Absolute protection of data streams"
      ]
    },
    prompt: {
      system: "You are the artificial intelligence of a next-generation emergency medical monitor. Generate a sequence of realistic, high-tension telemetry logs for a synthetic patient in an acute systemic failure state (e.g., cardiac arrest, anaphylactic shock, polytrauma). Output ONLY the logs. No markdown formatting, no comments. One log per line. Format: '>> [HH:MM:SS] [SYS_TELEMETRY] Message'. Use highly technical clinical terms in ENGLISH. Simulate rapid vitals degradation."
    },
    hero_extended: {
      subtext_full: "Doctiplay converts medical training into AI-driven immersive simulation experiences. Test your cognitive capabilities on complex cases without risk.",
      btn_command: "DEPLOY DOCTIPLAY",
      btn_play_demo: "SIMULATE IMMEDIATELY",
      btn_contact_us: "CONTACT R&D",
      btn_start_now: "INITIALIZE CORE",
      debrief: {
        title: "AI-Assisted Debriefing",
        subtitle: "Quantitative and chronological analysis of clinical decisions.",
        items: [
          "Safety and priority of interventions",
          "Differential diagnostic reasoning",
          "Management kinetics",
          "Coordination and timing of procedures"
        ]
      },
      sensor: {
        label: "AI Bio-Active Sensor",
        status: "TELEMETRY STABLE // SpO2"
      }
    },
    features_extended: {
      badge: "Algorithmic Innovation",
      main_title: "The Doctiplay Infrastructure",
      main_desc: "A cutting-edge technological suite designed to simulate every nuance of human physiology.",
      toggle: {
        show: "Expand Details",
        hide: "Collapse Details"
      }
    },
    gamification_extended: {
      system_badge: "Career Matrix",
      description: "Accumulate clinical experience credits, optimize your profile, and unlock cognitive achievements.",
      rank_current: "CURRENT RANK",
      gallery_btn: "CERTIFICATE GALLERY",
      gallery_modal: {
        title: "Achievement Registry",
        subtitle: "Your clinical distinctions and credentials acquired on the Doctiplay platform.",
        footer: "New distinction protocols will be integrated in the next deployment."
      },
      badges: {
        subtitle: "Complete specific clinical challenges to validate your performance score",
        desc_zip: "Successful CPR (100% guideline compliance)",
        desc_filesearch: "5 rare pathology diagnoses without false positives",
        desc_shield: "Stabilization under high critical stress conditions",
        expert_reanim: "Resuscitation Expert",
        desc_expert_reanim: "10 cardiac arrests stabilized under crisis protocol",
        oeil_lynx: "Weak Signals Detector",
        desc_oeil_lynx: "Identification of a complex, hidden pathology",
        vitesse_eclair: "Critical Reactivity",
        desc_vitesse_eclair: "Successful invasive procedure in under 60 seconds",
        maitre_orateur: "Crisis Coordinator",
        desc_maitre_orateur: "Perfect team communication and resource management",
        major_promo: "Perfect Algorithm",
        desc_major_promo: "Maximum score of 100/100 during AI debriefing",
        precision_chir: "Micro-Invasive Precision",
        desc_precision_chir: "Zero errors on invasive technical procedures"
      }
    },
    monitor_extended: {
      system_log_label: "Telemetry Data Stream"
    },
    partnership_drawer: {
      title: "Technology & University Hospital Partnerships",
      success_title: "Transmission Successful",
      success_message: "Your contact details have been transmitted to our R&D division. A response will be sent to you after validation.",
      header_badge: "Core v1.0 Linkage Protocol",
      labels: {
        name: "Contact Full Name",
        email: "Institutional Email",
        institution: "Institution / University Hospital",
        role: "Function / Clinical Chair",
        message: "Research or Collaboration Project"
      },
      placeholders: {
        name: "Dr. Alex Mercer",
        email: "alex.mercer@hospital-research.org",
        institution: "University Hospital Center...",
        role: "Director of Clinical Simulation...",
        message: "Detail your needs for integrating our AI simulation engine..."
      },
      btn_submit: "Establish Link",
      footer: "Doctiplay R&D Division // Secure Communication Protocol"
    },
    contact_drawer: {
      title: "Technical Support Console",
      success_title: "Ticket Created",
      success_message: "Your technical report has been registered in our ticketing system.",
      header_badge: "Support System v1.0",
      labels: {
        name: "Username / Full Name",
        email: "Follow-up Email",
        message: "Description of bug or request"
      },
      placeholders: {
        name: "Dr. Alex Mercer",
        email: "support@doctiplay.com",
        message: "Describe the expected behavior and the observed behavior precisely..."
      },
      btn_submit: "Submit Ticket",
      footer: "Doctiplay System Support // Diagnostic Protocol"
    }
  },
  ar: {
    navbar: {
      init: "تهيئة النظام",
      sim: "محاكي الذكاء الاصطناعي",
      expertise: "النواة المعرفية",
      ranks: "مستويات المزامنة",
      faq: "الأسئلة الشائعة للنظام",
      beta: "النواة التجريبية"
    },
    hero: {
      badge: "محرك الذكاء الاصطناعي العصبي // نشط",
      headline: "كل ثانية محاكاة هي",
      headline_highlight: "تحسين سريري خوارزمي.",
      subtext: "أول محاكي طبي لطب الطوارئ عالي الدقة يعتمد على الذكاء الاصطناعي التوليدي متعدد الوسائط في الوقت الفعلي. قم بتحليل وعلاج وتحقيق استقرار المرضى الاصطناعيين مع استجابة فسيولوجية فورية وديناميكية.",
      btn_start: "تشغيل محاكاة الذكاء الاصطناعي",
      btn_initializing: "جاري المزامنة...",
      btn_tutorial: "عرض توضيحي للنظام",
      social_proof: "عمليات محاكاة معرفية يتم تشغيلها بواسطة الأطباء والمقيمين",
      mode_title: "متجه المحاكاة",
      cat_title: "نموذج علم الأمراض بالذكاء الاصطناعي"
    },
    modes: {
      geste: "بروتوكولات الطوارئ",
      ambulance: "القياس الذاتي المتنقل (SMUR)",
      dechocage: "العناية المركزة والإنعاش"
    },
    categories: {
      medical: "طوارئ طبية بالذكاء الاصطناعي",
      surgical: "سيناريوهات جراحية",
      pediatric: "طوارئ الأطفال"
    },
    monitor: {
      live: "شاشة مراقبة القياس عن بعد المباشر",
      standby: "استعداد المزامنة",
      waiting: "جاري تخليق نموذج المريض الافتراضي..."
    },
    features: {
      problem_title: "المفارقة السريرية",
      problem_text: "الكتب المدرسية الثابتة لا تحاكي التوتر. وأسئلة الاختيار من متعدد لا تتوقف قلوبها.",
      solution_title: "البديل الرقمي",
      solution_text: "تدمج Doctiplay عدم القدرة على التنبؤ البيولوجي، وضغط الوقت، والتقلبات النظامية في بيئة تدريب آمنة.",
      f1_title: "محرك فسيولوجي ديناميكي",
      f1_desc: "تتفاعل العلامات الحيوية فوراً مع كل تدخل أو وكيل صيدلاني. لا توجد مسارات محددة مسبقاً، بل محاكاة كاملة بخوارزميات بيولوجية.",
      f2_title: "توليد حالات غير محدود",
      f2_desc: "بدون ملصقات تشخيصية. استخدم القياس المباشر عن بعد، والتصوير التوليدي، وتقارير المختبر لكشف تفاصيل المرض.",
      f3_title: "واجهة صوتية معرفية",
      f3_desc: "تفاعل بشكل طبيعي مع المريض الاصطناعي بفضل وحدة التعرف على الصوت العصبية لدينا. قم بأخذ التاريخ المرضي بلغة طبيعية.",
      f4_title: "تحليل استخلاص معلومات بالذكاء الاصطناعي",
      f4_desc: "يتم تتبع كل قرار بدقة الملي ثانية. احصل على تقييم كمي للاستدلال السريري وإدارة الوقت والسلامة.",
      f1_items: [
        "نمذجة فسيولوجية في الوقت الفعلي",
        "علامات حيوية ديناميكية وتفاعلية",
        "علم الصيدلة الخوارزمي",
        "الصدمات والتنظيمات النظامية"
      ],
      f2_items: [
        "القياس عن بعد وتحليل البيانات",
        "فحوصات سريرية مولدة",
        "الأشعة والتحاليل المخبرية",
        "الاستدلال الاستنتاجي المدعوم"
      ],
      f3_items: [
        "حوار باللغة الطبيعية",
        "استشارة متخصصين بالذكاء الاصطناعي",
        "أوامر صوتية غامرة",
        "انغماس حسي كامل"
      ],
      f4_items: [
        "تحديد الأولويات الخوارزمية",
        "متجهات التشخيص التفريقي",
        "التسلسل الزمني للتدخلات",
        "مؤشر السلامة السريرية"
      ]
    },
    modes_section: {
      badge: "3 بيئات عصبية",
      section_title_line1: "قم بتهيئة",
      section_title_line2: "مصفوفة تدريبك.",
      section_desc: "ثلاث بيئات محاكاة معايرة لدفع حدود تفكيرك السريري. دقة خوارزمية مطلقة.",
      cta: "تهيئة الوضع",
      expand: "▾ قياسات النظام",
      collapse: "▴ إغلاق القياسات",
      cmd_beta: "الوصول إلى البروتوكول التجريبي",
      medical: {
        badge: "نواة المحاكاة السريرية",
        subtitle: "العناية الحرجة والإنعاش وطب الصدمات",
        title: "الطب المكثف\nبالذكاء الاصطناعي",
        desc: "• تشخيصات ديناميكية مدعومة بالذكاء الاصطناعي.\n• قياس فسيولوجي عن بعد في الوقت الفعلي.\n• اتخاذ القرارات السريرية تحت ضغط شديد.",
        tags: ["الإنعاش", "طب الصدمات", "القياس عن بعد", "الذكاء الاصطناعي السريري"]
      },
      paramedical: {
        badge: "نواة الرعاية الطبية المساعدة",
        subtitle: "بروتوكولات التمريض والفرز الخوارزمي",
        title: "فرز الخط الأول\nوالرعاية الأولية",
        desc: "• خوارزمية ذكية لفرز الحالات الطارئة.\n• تقييم سريري سريع وبروتوكولات التمريض.\n• تغذية راجعة وقياسات أداء فورية.",
        tags: ["الفرز بالذكاء الاصطناعي", "الرعاية الأولية", "التقييم السريع", "البروتوكولات"]
      },
      ecos: {
        badge: "نواة تقييم الشهادات",
        subtitle: "امتحانات ECOS الموحدة",
        title: "شهادة ECOS / CFEU\nبالذكاء الاصطناعي",
        desc: "• سيناريوهات معايرة وفق معايير ECOS الوطنية.\n• تقييم تلقائي بالذكاء الاصطناعي بناءً على شبكة CFEU الرسمية.\n• تحليل تنبؤي لفرص النجاح.",
        tags: ["ECOS بالذكاء الاصطناعي", "معيار CFEU", "المحاكاة الرسمية", "النتيجة التنبؤية"]
      }
    },
    gamification: {
      title: "الرتب وهامش الأداء",
      subtitle: "من الملف الشخصي للطالب إلى الخبير السريري",
      rank_student: "مبتدئ (مقيم)",
      rank_intern: "أخصائي (مسجل)",
      rank_pro: "خبير (استشاري)",
      badges_title: "الإنجازات السريرية القابلة للفتح",
      b1: "مثبت النظام",
      b2: "محلل التشخيص",
      b3: "متحكم التوتر"
    },
    testimonials: {
      badge: "الاعتماد السريري والتكنولوجي",
      title: "معتمد من مراكز المحاكاة",
      t1: "إن استجابة العلامات الفسيولوجية الحيوية المولدة بالذكاء الاصطناعي مذهلة. إنها تجبر على التحليل في الوقت الفعلي بدلاً من الحفظ عن ظهر قلب.",
      t1_author: "د. سارة ل.",
      t1_role: "مديرة المحاكاة السريرية",
      t2: "أخيراً محاكي يقيم التفكير السريري العميق. تقرير استخلاص المعلومات الآلي بالذكاء الاصطناعي دقيق للغاية.",
      t2_author: "جيمس م.",
      t2_role: "مقيم طبي (السنة الرابعة)",
      t3: "أدى دمج Doctiplay في برنامج التدريب الخاص بنا إلى زيادة درجات السلامة السريرية بنسبة 40%.",
      t3_author: "إيلينا ر.",
      t3_role: "مديرة برنامج المحاكاة"
    },
    faq: {
      badge: "البنى السريرية",
      title: "البروتوكولات والرؤية",
      description: "استكشف البنية التحتية التكنولوجية التي تمكن Doctiplay من إنشاء نماذج فسيولوجية واقعية وتفاعلية باستخدام الذكاء الاصطناعي.",
      action: "اقرأ الورقة البيضاء"
    },
    partnership: {
      badge: "شبكة أبحاث التطوير والابتكار",
      title: "النظام البيئي السريري",
      subtitle: "شراكات مع المستشفيات الجامعية الرائدة للتحقق من صحة نماذج الذكاء الاصطناعي التوليدي الخاصة بنا.",
      cta: "انضم إلى الشبكة"
    },
    imageGen: {
      title: "مولد الحالات بالذكاء الاصطناعي",
      subtitle: "أنشئ صوراً سريرية اصطناعية عالية الدقة لإثراء سيناريوهات المحاكاة الخاصة بك.",
      promptPlaceholder: "معلمات الإنشاء (مثال: مريض مصاب بصدمات متعددة في جناح الطوارئ...)",
      sizeLabel: "مصفوفة الدقة",
      billingNote: "يتطلب رمز وصول نشط إلى واجهة برمجة تطبيقات Gemini.",
      loading: "جاري تخليق الصورة...",
      generateBtn: "تخليق الصورة",
      error: "خطأ في الاتصال بالواجهة. تحقق من رمز المصادقة."
    },
    footer: {
      tagline: "نواة محاكاة طبية عالية الدقة مدعومة بالذكاء الاصطناعي التوليدي. تحسين اتخاذ القرارات السريرية تحت ظروف التوتر الشديد.",
      contact_label: "الدعم الفني",
      contact_action: "فتح تذكرة دعم",
      partnership_label: "الأبحاث والتطوير",
      partnership_action: "اقتراح شراكة",
      disclaimer: "إشعار فني: Doctiplay هو نظام تعليمي مدعوم بالذكاء الاصطناعي مخصص للتدريب السريري فقط. البيانات المولدة لا تشكل إرشادات علاجية للمرضى الحقيقيين.",
      links: "موارد النظام",
      privacy: "حماية البيانات",
      contact: "الدعم",
      copyright: "© 2026 Doctiplay. جميع حقوق النظام محفوظة.",
      oath_title: "الإطار الأخلاقي والبيولوجي الخوارزمي",
      oath_principles: [
        "سلامة بيانات التدريب (Primum non nocere)",
        "تعظيم الفائدة السريرية (المنفعة)",
        "احترام السرية السريرية الاصطناعية",
        "عدالة نماذج التقييم بالذكاء الاصطناعي",
        "الحماية المطلقة لتدفقات البيانات"
      ]
    },
    prompt: {
      system: "أنت الذكاء الاصطناعي لشاشة مراقبة طبية للحالات الطارئة من الجيل الجديد. قم بإنشاء سلسلة من سجلات القياس عن بعد الواقعية وعالية التوتر لمريض اصطناعي يعاني من حالة فشل نظامي حاد (مثل السكتة القلبية أو الصدمة الحساسية أو الصدمات المتعددة). أخرج السجلات فقط. لا تنسيق ماركداون، ولا تعليقات. سجل واحد في كل سطر. التنسيق: '>> [HH:MM:SS] [SYS_TELEMETRY] الرسالة'. استخدم مصطلحات سريرية تقنية للغاية باللغة العربية. قم بمحاكاة تدهور سريع للعلامات الحيوية."
    },
    hero_extended: {
      subtext_full: "تحول Doctiplay التدريب الطبي إلى تجارب محاكاة غامرة مدفوعة بالذكاء الاصطناعي. اختبر قدراتك المعرفية في الحالات المعقدة دون أي مخاطر.",
      btn_command: "نشر DOCTIPLAY",
      btn_play_demo: "بدء المحاكاة فوراً",
      btn_contact_us: "اتصال بالبحث والتطوير",
      btn_start_now: "تهيئة النواة",
      debrief: {
        title: "استخلاص المعلومات المدعوم بالذكاء الاصطناعي",
        subtitle: "تحليل كمي وزمني للقرارات السريرية.",
        items: [
          "سلامة التدخلات وتحديد أولوياتها",
          "الاستدلال التشخيصي التفريقي",
          "حركية إدارة الحالة",
          "تنسيق وتوقيت الإجراءات"
        ]
      },
      sensor: {
        label: "مستشعر الذكاء الاصطناعي النشط بيولوجياً",
        status: "القياس عن بعد مستقر // SpO2"
      }
    },
    features_extended: {
      badge: "الابتكار الخوارزمي",
      main_title: "البنية التحتية لـ Doctiplay",
      main_desc: "مجموعة تكنولوجية متطورة مصممة لمحاكاة كل فارق بسيط في الفسيولوجيا البشرية.",
      toggle: {
        show: "توسيع التفاصيل",
        hide: "طي التفاصيل"
      }
    },
    gamification_extended: {
      system_badge: "مصفوفة المسار المهني",
      description: "اجمع نقاط الخبرة السريرية، وحسّن ملفك الشخصي، وافتح إنجازات معرفية.",
      rank_current: "الرتبة الحالية",
      gallery_btn: "معرض الشهادات",
      gallery_modal: {
        title: "سجل الإنجازات",
        subtitle: "تميزك السريري وأوراق اعتمادك المكتسبة على منصة Doctiplay.",
        footer: "سيتم دمج بروتوكولات تميز جديدة في النشر القادم."
      },
      badges: {
        subtitle: "أكمل تحديات سريرية محددة للتحقق من درجة أدائك",
        desc_zip: "إنعاش قلبي رئوي ناجح (امتثال 100% للتوجيهات)",
        desc_filesearch: "5 تشخيصات لأمراض نادرة دون نتائج إيجابية كاذبة",
        desc_shield: "تحقيق الاستقرار تحت ظروف الضغط الشديد",
        expert_reanim: "خبير إنعاش",
        desc_expert_reanim: "10 حالات توقف قلبي تم استقرارها تحت بروتوكول الأزمات",
        oeil_lynx: "كاشف الإشارات الضعيفة",
        desc_oeil_lynx: "تحديد مرض معقد ومخفي",
        vitesse_eclair: "الاستجابة الحرجة",
        desc_vitesse_eclair: "إجراء تدخل جراحي ناجح في أقل من 60 ثانية",
        maitre_orateur: "منسق الأزمات",
        desc_maitre_orateur: "تواصل ممتاز بين الفريق وإدارة مثالية للموارد",
        major_promo: "خوارزمية مثالية",
        desc_major_promo: "الدرجة القصوى 100/100 أثناء استخلاص المعلومات بالذكاء الاصطناعي",
        precision_chir: "الدقة الجراحية الدقيقة",
        desc_precision_chir: "صفر أخطاء في الإجراءات التقنية التدخلية"
      }
    },
    monitor_extended: {
      system_log_label: "تدفق بيانات القياس عن بعد"
    },
    partnership_drawer: {
      title: "شراكات التكنولوجيا والمستشفيات الجامعية",
      success_title: "تم الإرسال بنجاح",
      success_message: "تم نقل بيانات الاتصال الخاصة بك إلى قسم البحث والتطوير لدينا. سيتم إرسال الرد إليك بعد التحقق.",
      header_badge: "بروتوكول ربط النواة v1.0",
      labels: {
        name: "الاسم الكامل لجهة الاتصال",
        email: "البريد الإلكتروني المؤسسي",
        institution: "المؤسسة / المستشفى الجامعي",
        role: "الوظيفة / الكرسي السريري",
        message: "مشروع البحث أو التعاون"
      },
      placeholders: {
        name: "د. أليكس ميرسر",
        email: "alex.mercer@hospital-research.org",
        institution: "المركز الاستشفائي الجامعي...",
        role: "مدير المحاكاة السريرية...",
        message: "فصّل احتياجاتك لدمج محرك المحاكاة بالذكاء الاصطناعي الخاص بنا..."
      },
      btn_submit: "إنشاء رابط الاتصال",
      footer: "قسم البحث والتطوير Doctiplay // بروتوكول اتصال آمن"
    },
    contact_drawer: {
      title: "وحدة التحكم بالدعم الفني",
      success_title: "تم إنشاء التذكرة",
      success_message: "تم تسجيل تقريرك الفني في نظام التذاكر لدينا.",
      header_badge: "نظام الدعم v1.0",
      labels: {
        name: "اسم المستخدم / الاسم الكامل",
        email: "البريد الإلكتروني للمتابعة",
        message: "وصف الخلل أو الطلب"
      },
      placeholders: {
        name: "د. أليكس ميرسر",
        email: "support@doctiplay.com",
        message: "صف السلوك المتوقع والسلوك الملاحظ بدقة..."
      },
      btn_submit: "إرسال التذكرة",
      footer: "دعم نظام Doctiplay // بروتوكول التشخيص"
    }
  }
};
