export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    research: {
      badge: "Recherche & validation",
      title: "Une plateforme en phase de recherche clinique",
      desc: "Doctiplay est développé avec des équipes pédagogiques et cliniques afin d'évaluer son apport à la formation par simulation. Nous ouvrons des collaborations avec des centres de simulation et des institutions académiques.",
      points_label: "Axes de recherche",
      points: [
        "Évaluation de l'apport pédagogique de la simulation assistée par IA",
        "Collaboration avec des centres de simulation et des universités",
        "Valorisation scientifique des résultats"
      ],
      cta: "Proposer une collaboration"
    },
    navbar: {
      research: "Recherche",
      modes: "Modes",
      init: "INITIALISER SYSTÈME",
      sim: "Plateforme",
      expertise: "Technologie",
      ranks: "Niveaux de Synchro",
      faq: "FAQ Système",
      beta: "BÊTA CORE"
    },
    hero: {
      badge: "Simulation médicale assistée par IA",
      headline: "La simulation médicale,",
      headline_highlight: "réinventée par l'IA.",
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
      f1_title: "Moteur physiologique",
      f1_desc: "Les constantes vitales réagissent instantanément à chaque agent pharmacologique ou intervention. Aucun scénario pré-écrit, tout est modélisé par des algorithmes biologiques.",
      f2_title: "Génération de cas",
      f2_desc: "Pas d'étiquettes de diagnostic. Utilisez la télémétrie en direct, l'imagerie générative et les dossiers biologiques pour décoder la pathologie.",
      f3_title: "Interface vocale",
      f3_desc: "Interagissez naturellement avec le patient virtuel grâce à notre module de reconnaissance vocale neuronale. Faites l'anamnèse en langage naturel.",
      f4_title: "Débriefing analytique",
      f4_desc: "Chaque décision est tracée à la milliseconde près. Obtenez une évaluation quantitative de votre raisonnement clinique, de la gestion du temps et de la sécurité.",
      f1_items: [
        "Modélisation physiologique en temps réel",
        "Constantes réactives aux interventions",
        "Pharmacologie simulée",
        "États de choc et régulation systémique"
      ],
      f2_items: [
        "Large bibliothèque de scénarios",
        "Examens cliniques et biologiques",
        "Imagerie et résultats de laboratoire",
        "Raisonnement diagnostique guidé"
      ],
      f3_items: [
        "Dialogue en langage naturel",
        "Anamnèse en français, arabe et darija",
        "Commandes vocales",
        "Mise en situation de consultation"
      ],
      f4_items: [
        "Priorisation des actions",
        "Diagnostic différentiel",
        "Chronologie des interventions",
        "Score de sécurité clinique"
      ]
    },
    modes_section: {
      badge: "Modes de simulation",
      section_title_line1: "Trois modes,",
      section_title_line2: "un seul moteur clinique.",
      section_desc: "Des scénarios adaptés à chaque niveau de formation, de la prise en charge critique à la préparation aux examens.",
      cta: "Demander l'accès bêta",
      expand: "Voir le détail",
      collapse: "Réduire",
      cmd_beta: "ACCÉDER AU PROTOCOLE BÊTA",
      medical: {
        badge: "Médecine",
        subtitle: "Soins critiques, réanimation & traumatologie",
        title: "Médecine intensive",
        desc: "• Diagnostic dynamique assisté par IA.\n• Constantes physiologiques en temps réel.\n• Décision clinique sous contrainte de temps.",
        tags: ["Réanimation", "Traumatologie", "Télémétrie"]
      },
      paramedical: {
        badge: "Paramédical",
        subtitle: "Protocoles infirmiers & tri des patients",
        title: "Triage & soins de première ligne",
        desc: "• Tri d'urgence guidé par algorithme.\n• Évaluation clinique rapide et protocoles infirmiers.\n• Retour de performance immédiat.",
        tags: ["Triage", "Soins primaires", "Protocoles"]
      },
      ecos: {
        badge: "Examens",
        subtitle: "Examens cliniques objectifs structurés",
        title: "Préparation ECOS / CFEU",
        desc: "• Scénarios structurés selon les standards ECOS.\n• Grille d'évaluation standardisée et notation automatisée.\n• Analyse de performance et axes de progression.",
        tags: ["ECOS", "CFEU", "Évaluation"]
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
      tagline: "Plateforme de simulation médicale assistée par l'intelligence artificielle, au service de la formation, de l'évaluation et de la recherche.",
      contact_label: "Support",
      contact_action: "Nous contacter",
      partnership_label: "Recherche",
      partnership_action: "Proposer un partenariat",
      disclaimer: "Doctiplay est un outil de formation par simulation. Les données générées ne constituent pas des recommandations thérapeutiques pour de vrais patients.",
      links: "Ressources Systèmes",
      privacy: "Protection des Données",
      contact: "Support",
      copyright: "© 2026 Doctiplay. Tous droits réservés.",
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
      points: ["Patients virtuels interactifs", "Retour pédagogique immédiat", "Français, arabe et darija"],
      subtext_full: "Doctiplay est une plateforme de simulation clinique à patients virtuels interactifs, conçue pour la formation, l'évaluation et la recherche en sciences de la santé.",
      btn_command: "DÉPLOYER DOCTIPLAY",
      btn_play_demo: "Essayer la démo",
      btn_contact_us: "Nous contacter",
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
      badge: "Technologie",
      main_title: "Une infrastructure conçue pour le réalisme clinique",
      main_desc: "Quatre briques technologiques qui reproduisent la physiologie, le raisonnement et la prise de décision en situation réelle.",
      toggle: {
        show: "En savoir plus",
        hide: "Réduire"
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
    research: {
      badge: "Research & validation",
      title: "A platform in its clinical research phase",
      desc: "Doctiplay is developed with educational and clinical teams to evaluate its contribution to simulation-based training. We are opening collaborations with simulation centers and academic institutions.",
      points_label: "Research focus",
      points: [
        "Assessing the educational value of AI-assisted simulation",
        "Collaboration with simulation centers and universities",
        "Scientific dissemination of results"
      ],
      cta: "Propose a collaboration"
    },
    navbar: {
      research: "Research",
      modes: "Modes",
      init: "INITIALIZE SYSTEM",
      sim: "Platform",
      expertise: "Technology",
      ranks: "Sync Levels",
      faq: "System FAQ",
      beta: "BETA CORE"
    },
    hero: {
      badge: "AI-assisted medical simulation",
      headline: "Medical simulation,",
      headline_highlight: "reinvented by AI.",
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
      f1_title: "Physiological engine",
      f1_desc: "Vitals react instantly to every pharmacological agent or intervention. No pre-scripted paths, everything is modeled by biological algorithms.",
      f2_title: "Case generation",
      f2_desc: "No diagnostic tags. Use live telemetry, generative imaging, and lab reports to decode the pathology.",
      f3_title: "Voice interface",
      f3_desc: "Interact naturally with the synthetic patient using our neural voice recognition module. Take histories in natural language.",
      f4_title: "Analytical debriefing",
      f4_desc: "Every decision is tracked down to the millisecond. Get a quantitative evaluation of clinical reasoning, time management, and safety.",
      f1_items: [
        "Real-time physiological modeling",
        "Vitals that react to interventions",
        "Simulated pharmacology",
        "Shock states and systemic regulation"
      ],
      f2_items: [
        "Broad library of scenarios",
        "Clinical and laboratory exams",
        "Imaging and lab results",
        "Guided diagnostic reasoning"
      ],
      f3_items: [
        "Natural language dialogue",
        "History-taking in French, Arabic and Darija",
        "Voice commands",
        "Realistic consultation setting"
      ],
      f4_items: ["Action prioritization", "Differential diagnosis", "Intervention timeline", "Clinical safety score"]
    },
    modes_section: {
      badge: "Simulation modes",
      section_title_line1: "Three modes,",
      section_title_line2: "one clinical engine.",
      section_desc: "Scenarios tailored to every level of training, from critical care management to exam preparation.",
      cta: "Request beta access",
      expand: "View details",
      collapse: "Collapse",
      cmd_beta: "ACCESS BETA PROTOCOL",
      medical: {
        badge: "Medicine",
        subtitle: "Critical care, resuscitation & trauma",
        title: "Intensive medicine",
        desc: "• AI-assisted dynamic diagnosis.\n• Real-time physiological vitals.\n• Clinical decision-making under time pressure.",
        tags: ["Resuscitation", "Trauma", "Telemetry"]
      },
      paramedical: {
        badge: "Paramedical",
        subtitle: "Nursing protocols & patient triage",
        title: "Frontline triage & care",
        desc: "• Algorithm-guided emergency triage.\n• Rapid clinical assessment and nursing protocols.\n• Immediate performance feedback.",
        tags: ["Triage", "Primary care", "Protocols"]
      },
      ecos: {
        badge: "Exams",
        subtitle: "Objective structured clinical examinations",
        title: "ECOS / CFEU preparation",
        desc: "• Scenarios structured to ECOS standards.\n• Standardized assessment grid with automated scoring.\n• Performance analysis and areas for improvement.",
        tags: ["ECOS", "CFEU", "Assessment"]
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
      tagline: "AI-assisted medical simulation platform for training, assessment and research.",
      contact_label: "Support",
      contact_action: "Contact us",
      partnership_label: "Research",
      partnership_action: "Propose a partnership",
      disclaimer: "Doctiplay is a simulation-based training tool. Generated data does not constitute therapeutic recommendations for real patients.",
      links: "System Resources",
      privacy: "Data Protection",
      contact: "Support",
      copyright: "© 2026 Doctiplay. All rights reserved.",
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
      points: ["Interactive virtual patients", "Immediate educational feedback", "French, Arabic and Darija"],
      subtext_full: "Doctiplay is a clinical simulation platform with interactive virtual patients, built for training, assessment and research in health sciences.",
      btn_command: "DEPLOY DOCTIPLAY",
      btn_play_demo: "Try the demo",
      btn_contact_us: "Contact us",
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
      badge: "Technology",
      main_title: "An infrastructure built for clinical realism",
      main_desc: "Four technology building blocks that reproduce physiology, reasoning and decision-making in real-world conditions.",
      toggle: {
        show: "Learn more",
        hide: "Collapse"
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
    research: {
      badge: "البحث والتحقق",
      title: "منصة في مرحلة البحث السريري",
      desc: "يتم تطوير Doctiplay بالتعاون مع فرق بيداغوجية وسريرية لتقييم مساهمته في التكوين بالمحاكاة. نفتح باب التعاون مع مراكز المحاكاة والمؤسسات الأكاديمية.",
      points_label: "محاور البحث",
      points: [
        "تقييم القيمة التعليمية للمحاكاة بدعم الذكاء الاصطناعي",
        "التعاون مع مراكز المحاكاة والجامعات",
        "نشر النتائج علمياً"
      ],
      cta: "اقتراح تعاون"
    },
    navbar: {
      research: "البحث",
      modes: "الأنماط",
      init: "تهيئة النظام",
      sim: "المنصة",
      expertise: "التقنية",
      ranks: "مستويات المزامنة",
      faq: "الأسئلة الشائعة للنظام",
      beta: "النواة التجريبية"
    },
    hero: {
      badge: "محاكاة طبية بدعم الذكاء الاصطناعي",
      headline: "المحاكاة الطبية،",
      headline_highlight: "بتصور جديد بالذكاء الاصطناعي.",
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
      f1_title: "المحرك الفيزيولوجي",
      f1_desc: "تتفاعل العلامات الحيوية فوراً مع كل تدخل أو وكيل صيدلاني. لا توجد مسارات محددة مسبقاً، بل محاكاة كاملة بخوارزميات بيولوجية.",
      f2_title: "توليد الحالات",
      f2_desc: "بدون ملصقات تشخيصية. استخدم القياس المباشر عن بعد، والتصوير التوليدي، وتقارير المختبر لكشف تفاصيل المرض.",
      f3_title: "الواجهة الصوتية",
      f3_desc: "تفاعل بشكل طبيعي مع المريض الاصطناعي بفضل وحدة التعرف على الصوت العصبية لدينا. قم بأخذ التاريخ المرضي بلغة طبيعية.",
      f4_title: "التحليل والتغذية الراجعة",
      f4_desc: "يتم تتبع كل قرار بدقة الملي ثانية. احصل على تقييم كمي للاستدلال السريري وإدارة الوقت والسلامة.",
      f1_items: [
        "نمذجة فيزيولوجية في الوقت الفعلي",
        "علامات حيوية تتفاعل مع التدخلات",
        "علم أدوية محاكى",
        "حالات الصدمة والتنظيم الجهازي"
      ],
      f2_items: [
        "مكتبة واسعة من السيناريوهات",
        "فحوصات سريرية ومخبرية",
        "الأشعة ونتائج التحاليل",
        "استدلال تشخيصي موجَّه"
      ],
      f3_items: ["حوار بلغة طبيعية", "أخذ السوابق بالفرنسية والعربية والدارجة", "أوامر صوتية", "أجواء استشارة واقعية"],
      f4_items: ["ترتيب أولويات الإجراءات", "التشخيص التفريقي", "التسلسل الزمني للتدخلات", "مؤشر السلامة السريرية"]
    },
    modes_section: {
      badge: "أنماط المحاكاة",
      section_title_line1: "ثلاثة أنماط،",
      section_title_line2: "محرك سريري واحد.",
      section_desc: "سيناريوهات ملائمة لكل مستوى تكويني، من التكفل بالحالات الحرجة إلى التحضير للامتحانات.",
      cta: "اطلب الوصول التجريبي",
      expand: "عرض التفاصيل",
      collapse: "إخفاء",
      cmd_beta: "الوصول إلى البروتوكول التجريبي",
      medical: {
        badge: "الطب",
        subtitle: "العناية الحرجة والإنعاش والصدمات",
        title: "الطب المكثف",
        desc: "• تشخيص ديناميكي بمساعدة الذكاء الاصطناعي.\n• علامات فيزيولوجية حيوية في الوقت الفعلي.\n• اتخاذ القرار السريري تحت ضغط الوقت.",
        tags: ["الإنعاش", "الصدمات", "القياس عن بعد"]
      },
      paramedical: {
        badge: "شبه الطبي",
        subtitle: "بروتوكولات التمريض وفرز المرضى",
        title: "الفرز والرعاية في الخط الأول",
        desc: "• فرز الحالات الطارئة بتوجيه خوارزمي.\n• تقييم سريري سريع وبروتوكولات التمريض.\n• تغذية راجعة فورية حول الأداء.",
        tags: ["الفرز", "الرعاية الأولية", "البروتوكولات"]
      },
      ecos: {
        badge: "الامتحانات",
        subtitle: "الامتحانات السريرية الموضوعية المهيكلة",
        title: "التحضير لـ ECOS / CFEU",
        desc: "• سيناريوهات مهيكلة وفق معايير ECOS.\n• شبكة تقييم موحدة وتنقيط آلي.\n• تحليل الأداء ومحاور التحسن.",
        tags: ["ECOS", "CFEU", "التقييم"]
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
      tagline: "منصة محاكاة طبية بدعم الذكاء الاصطناعي للتكوين والتقييم والبحث.",
      contact_label: "الدعم",
      contact_action: "اتصل بنا",
      partnership_label: "البحث",
      partnership_action: "اقتراح شراكة",
      disclaimer: "Doctiplay أداة تكوين بالمحاكاة. البيانات المولدة لا تشكل توصيات علاجية لمرضى حقيقيين.",
      links: "موارد النظام",
      privacy: "حماية البيانات",
      contact: "الدعم",
      copyright: "© 2026 Doctiplay. جميع الحقوق محفوظة.",
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
      points: ["مرضى افتراضيون تفاعليون", "تغذية راجعة تعليمية فورية", "الفرنسية والعربية والدارجة"],
      subtext_full: "Doctiplay منصة محاكاة سريرية بمرضى افتراضيين تفاعليين، مصممة للتكوين والتقييم والبحث في العلوم الصحية.",
      btn_command: "نشر DOCTIPLAY",
      btn_play_demo: "جرّب العرض التوضيحي",
      btn_contact_us: "اتصل بنا",
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
      badge: "التقنية",
      main_title: "بنية تقنية مصممة للواقعية السريرية",
      main_desc: "أربع ركائز تقنية تحاكي الفيزيولوجيا والاستدلال واتخاذ القرار في ظروف واقعية.",
      toggle: {
        show: "اعرف المزيد",
        hide: "إخفاء"
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
