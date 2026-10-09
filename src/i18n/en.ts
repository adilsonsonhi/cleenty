import type { Dictionary } from "./pt";

// English (British).
export const en: Dictionary = {
  meta: {
    title: "Cleenty - A clean home. Laundry taken care of.",
    description:
      "Cleenty — home cleaning and laundry care with collection and delivery in Amora and Cruz de Pau.",
  },
  common: {
    quoteCta: "Get a free quote",
    quoteMessage: "Hello! I'd like to request a quote.",
    opensNewTab: "(opens in a new tab)",
    opensWhatsApp: "(opens WhatsApp in a new tab)",
    backToTop: "Back to top",
    supportDays: "Monday to Saturday",
    supportNote: "Closed on Sundays",
    position: (index: number, total: number) => `${index} of ${total}`,
  },
  header: {
    nav: {
      home: "Home",
      services: "Services",
      howItWorks: "How it works",
      contact: "Contact",
    },
    language: "Language:",
    mainNav: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuTitle: "Navigation menu",
  },
  hero: {
    eyebrow: "Professional cleaning in Portugal",
    title: ["Your home, clean.", "Your time, back."],
    text: "Cleaning for houses and flats, with collection and delivery of your laundry. A team you can trust, with care in every detail.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What our clients say about Cleenty",
    listLabel: "Client testimonials",
    prev: "Previous testimonial",
    next: "Next testimonial",
    goTo: (index: number) => `Go to testimonial ${index}`,
    rating: (rating: string) => `${rating} out of 5 stars`,
    sources: { google: "Google", direct: "Cleenty client" },
    summaryLabel: "Google reviews",
    basedOn: (count: number) =>
      `Based on ${count === 1 ? "1 review" : `${count} reviews`} on Google`,
    viewAll: "See all reviews",
  },
  laundry: {
    eyebrow: "Laundry collection and delivery",
    title: ["Hand us your laundry.", "Get it back ready to wear."],
    text: "We collect your laundry from your home, have it washed and ironed by our partner laundries and return it just the way you like it.",
    details: [
      { label: "Collection and delivery", value: "Free within our area" },
      { label: "Turnaround", value: "Returned in 48 to 72 hours" },
      { label: "Price", value: "Charged by the kilo" },
      { label: "Delivery", value: "Folded or on hangers" },
    ],
    cta: "Book a collection",
    whatsappMessage: "Hello! I'd like to book a laundry collection.",
    imageAlt:
      "Rope basket with towels and freshly washed, folded laundry in a bright hallway.",
  },
  services: {
    eyebrow: "Services",
    title: ["Services designed", "around your home."],
    listLabel: "Services",
    prev: "Previous service",
    next: "Next service",
    goTo: (index: number) => `Go to position ${index}`,
    items: {
      domestic: {
        title: "Home cleaning",
        description:
          "Regular or one-off cleaning for houses and flats, to keep your space clean and comfortable.",
        alt: "Cleenty professional in a blue uniform and black gloves wiping a wooden table with a cloth.",
      },
      deep: {
        title: "Deep cleaning",
        description:
          "A more thorough clean, focusing on the areas that need extra care, such as kitchens, bathrooms and hard-to-reach spots.",
        alt: "Cleenty professional in an apron and gloves cleaning a kitchen hob with a spray bottle.",
      },
      postConstruction: {
        title: "After-builders cleaning",
        description:
          "Removal of dust, cement, paint and building debris, so you can enjoy your new space without the hassle.",
        alt: "Industrial vacuum cleaner in the hallway of a flat being renovated.",
      },
      laundry: {
        title: "Washing and ironing",
        description:
          "We collect your laundry and bring it back to your door. Our partner laundries take care of the washing and ironing, so it arrives ready to wear.",
        alt: "Iron and a stack of folded clothes on an ironing board.",
      },
    },
  },
  howItWorks: {
    eyebrow: "How it works",
    title: ["A clean home,", "without the hassle."],
    steps: {
      quote: {
        title: "Request a quote",
        description:
          "Tell us whether you need cleaning, a laundry collection or both.",
        alt: "Woman on a sofa using her mobile phone, surrounded by plants.",
      },
      details: {
        title: "Agree the details",
        description:
          "We confirm the price, availability and the service you need.",
        alt: "Woman talking on the phone on a sofa in a bright living room.",
      },
      cleaning: {
        title: "Leave the cleaning to us",
        description:
          "Our team carries out the cleaning, or collects and delivers your laundry, on the agreed date.",
        alt: "Two uniformed cleaning professionals vacuuming and mopping a living room.",
      },
    },
  },
  finalCta: {
    title: ["Your next clean", "starts here."],
    text: "Tell us what you need. We'll take care of the rest.",
  },
  footer: {
    description:
      "Home cleaning and laundry care in Amora and the surrounding area. More time for what really matters.",
    servicesTitle: "Services",
    companyTitle: "Cleenty",
    contactTitle: "Contact",
    hoursTitle: "Opening hours",
    email: "Email",
    whatsapp: "WhatsApp",
    opensMaps: "(opens Google Maps)",
    social: "Social media",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
  },
  legal: {
    updated: "Last updated:",
    backHome: "Back to home",
    privacyDescription:
      "How Cleenty collects, uses and protects your personal data.",
    termsDescription:
      "Terms of use of the website and of the services provided by Cleenty.",
  },
};
