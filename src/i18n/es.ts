import type { Dictionary } from "./pt";

// Español (España).
export const es: Dictionary = {
  meta: {
    title: "Cleenty - Casa limpia. Ropa cuidada.",
    description:
      "Cleenty — limpieza doméstica y cuidado de la ropa con recogida y entrega en la zona de Amora y Cruz de Pau.",
  },
  common: {
    quoteCta: "Pedir presupuesto gratis",
    quoteMessage: "¡Hola! Me gustaría pedir un presupuesto.",
    opensNewTab: "(se abre en una pestaña nueva)",
    opensWhatsApp: "(abre WhatsApp en una pestaña nueva)",
    backToTop: "Volver arriba",
    supportDays: "De lunes a sábado",
    supportNote: "Cerrado los domingos",
    position: (index: number, total: number) => `${index} de ${total}`,
  },
  header: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      howItWorks: "Cómo funciona",
      contact: "Contacto",
    },
    language: "Idioma:",
    mainNav: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menuTitle: "Menú de navegación",
  },
  hero: {
    eyebrow: "Limpieza profesional en Portugal",
    title: ["Su casa, limpia.", "Su tiempo, de vuelta."],
    text: "Limpieza de casas y pisos, con recogida y entrega de su ropa. Un equipo de confianza y todo el cuidado en los detalles.",
  },
  testimonials: {
    eyebrow: "Opiniones",
    title: "La experiencia de quienes eligen Cleenty",
    listLabel: "Opiniones de clientes",
    prev: "Opinión anterior",
    next: "Opinión siguiente",
    goTo: (index: number) => `Ir a la opinión ${index}`,
    rating: (rating: string) => `${rating} de 5 estrellas`,
    sources: { google: "Google", direct: "Cliente de Cleenty" },
    summaryLabel: "Reseñas de Google",
    basedOn: (count: number) =>
      `Basado en ${count === 1 ? "1 reseña" : `${count} reseñas`} en Google`,
    viewAll: "Ver todas las reseñas",
  },
  laundry: {
    eyebrow: "Recogida y entrega de ropa",
    title: ["Entréguenos su ropa.", "Recíbala lista para usar."],
    text: "Recogemos la ropa en su casa, nos encargamos del lavado y el planchado con nuestras lavanderías asociadas y se la devolvemos como prefiera.",
    details: [
      { label: "Recogida y entrega", value: "Sin coste en nuestra zona" },
      { label: "Plazo", value: "Devolución en 48 a 72 horas" },
      { label: "Precio", value: "Por kilo" },
      { label: "Entrega", value: "Doblada o en percha" },
    ],
    cta: "Reservar recogida",
    whatsappMessage: "¡Hola! Me gustaría reservar una recogida de ropa.",
    imageAlt:
      "Cesto de cuerda con toallas y ropa limpia y doblada, en una entrada luminosa.",
  },
  services: {
    eyebrow: "Servicios",
    title: ["Servicios pensados", "para su hogar."],
    listLabel: "Servicios",
    prev: "Servicio anterior",
    next: "Servicio siguiente",
    goTo: (index: number) => `Ir a la posición ${index}`,
    items: {
      domestic: {
        title: "Limpieza doméstica",
        description:
          "Limpieza periódica o puntual de casas y pisos, para mantener su espacio siempre limpio y confortable.",
        alt: "Profesional de Cleenty, con uniforme azul y guantes negros, limpiando una mesa de madera con un paño.",
      },
      deep: {
        title: "Limpieza a fondo",
        description:
          "Una limpieza más completa, con atención a las zonas que requieren más cuidado, como cocinas, baños y rincones de difícil acceso.",
        alt: "Profesional de Cleenty, con delantal y guantes, limpiando la placa de una cocina con un pulverizador.",
      },
      postConstruction: {
        title: "Limpieza de fin de obra",
        description:
          "Eliminación de polvo, cemento, pintura y restos de obra, para que pueda disfrutar de su nuevo espacio sin preocupaciones.",
        alt: "Aspiradora industrial en el pasillo de un piso en reforma.",
      },
      laundry: {
        title: "Lavado y planchado",
        description:
          "Recogemos y entregamos su ropa en casa. Nuestras lavanderías asociadas se encargan del lavado y el planchado, para que la reciba lista para usar.",
        alt: "Plancha y una pila de ropa doblada sobre una tabla de planchar.",
      },
    },
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: ["Una casa limpia,", "sin complicaciones."],
    steps: {
      quote: {
        title: "Pida un presupuesto",
        description:
          "Díganos si necesita limpieza, recogida de ropa o ambas cosas.",
        alt: "Mujer en un sofá usando el móvil, rodeada de plantas.",
      },
      details: {
        title: "Acordamos los detalles",
        description:
          "Confirmamos el precio, la disponibilidad y el servicio que necesita.",
        alt: "Mujer hablando por teléfono en un sofá, en un salón luminoso.",
      },
      cleaning: {
        title: "Déjenos la limpieza",
        description:
          "Nuestro equipo realiza la limpieza o recoge y entrega la ropa en la fecha acordada.",
        alt: "Dos profesionales de limpieza con uniforme aspirando y fregando el suelo de un salón.",
      },
    },
  },
  finalCta: {
    title: ["Su próxima limpieza", "empieza aquí."],
    text: "Cuéntenos qué necesita. Nosotros nos encargamos del resto.",
  },
  footer: {
    description:
      "Limpieza doméstica y cuidado de la ropa en Amora y alrededores. Más tiempo para lo que realmente importa.",
    servicesTitle: "Servicios",
    companyTitle: "Cleenty",
    contactTitle: "Contacto",
    hoursTitle: "Horario",
    email: "Correo electrónico",
    whatsapp: "WhatsApp",
    opensMaps: "(abre Google Maps)",
    social: "Redes sociales",
    rights: "Todos los derechos reservados.",
    privacy: "Política de privacidad",
    terms: "Términos y condiciones",
  },
  legal: {
    updated: "Última actualización:",
    backHome: "Volver al inicio",
    privacyDescription:
      "Cómo Cleenty recoge, utiliza y protege sus datos personales.",
    termsDescription:
      "Condiciones de uso del sitio web y de prestación de los servicios de Cleenty.",
  },
};
