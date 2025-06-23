// Centralized image path constants for consistent asset management
export const IMAGE_PATHS = {
  // Hero Section
  HERO_MAIN: "/PajaritoMetalico.png?height=400",

  // Mathematics Section
  MATH_GEOMETRIC_DESIGN: "/MateGeometria.png?height=200&width=400",
  MATH_DATA_VISUALIZATION: "/MateEstadistica.png?height=200&width=400",

  // Psychology Section
  PSYCHOLOGY_COLLAGE: "/PsicologiaCollage.jpg?height=300&width=600",
  PSYCHOLOGY_PRENATAL: "/PsicoPrenatal.png?height=120&width=200",
  PSYCHOLOGY_NEONATAL: "/PsicoNeonatal.png?height=120&width=200",
  PSYCHOLOGY_LACTATION: "/PsicoLactancia.png?height=120&width=200",

  // Economy Section
  ECONOMY_SAVINGS_CHART: "/Economia.png?height=200&width=400",
  ECONOMY_FINANCIAL_TOOLS: "/EconomiaAhorros.jpg?height=300&width=800",

  // Ecology Section
  ECOLOGY_FIELD_RESEARCH: "/EcologiaAntes.jpg?height=200&width=600",
  ECOLOGY_ECOSYSTEM_RECOVERY: "/EcologiaDespues.jpg?height=300&width=800",

  // Digital Design Section
  DESIGN_CREATIVE_SPACE:
    "https://player.vimeo.com/video/1095488095?h=585db8a507&amp;",
} as const;

// Subject configuration with standardized naming
export const SUBJECTS = {
  MATEMATICAS: {
    id: "matematicas",
    title: "Matemáticas",
    description: "Relación entre matemáticas y desarrollo web",
    subtitle: "La ciencia exacta detrás del código",
  },
  PSICOLOGIA: {
    id: "psicologia",
    title: "Psicología",
    description: "Etapas del desarrollo humano",
    subtitle: "Etapas del ciclo vital humano",
  },
  ECONOMIA: {
    id: "economia",
    title: "Economía",
    description: "Gestión financiera y ahorro",
    subtitle: "Gestión financiera y hábitos de ahorro",
  },
  ECOLOGIA: {
    id: "ecologia",
    title: "Ecología",
    description: "Impacto ambiental y conservación",
    subtitle: "Conservación de ecosistemas locales",
  },
  DERECHO: {
    id: "derecho",
    title: "Derecho",
    description: "Derechos humanos y amparo",
    subtitle: "Protección legal y juicio de amparo",
  },
  DISENO_DIGITAL: {
    id: "diseno-digital",
    title: "Diseño Digital",
    description: "Narrativa visual y creatividad",
    subtitle: "Narrativa visual y creatividad",
  },
  HISTORIA: {
    id: "historia",
    title: "Historia",
    description: "Potencias del siglo XXI",
    subtitle: "Potencias mundiales contemporáneas",
  },
} as const;

// Navigation items derived from subjects for consistency
export const NAV_ITEMS = Object.values(SUBJECTS).map((subject) => ({
  name: subject.title,
  href: `#${subject.id}`,
}));
