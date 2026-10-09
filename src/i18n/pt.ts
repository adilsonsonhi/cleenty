// Textos do site em português europeu. Este ficheiro define a estrutura que
// os restantes idiomas (en.ts, es.ts) têm de seguir.
export const pt = {
  meta: {
    title: "Cleenty - Casa limpa. Roupa tratada.",
    description:
      "Cleenty — limpeza doméstica e tratamento de roupa com recolha e entrega na zona de Amora e Cruz de Pau.",
  },
  common: {
    quoteCta: "Pedir orçamento grátis",
    quoteMessage: "Olá! Gostaria de pedir um orçamento.",
    opensNewTab: "(abre num novo separador)",
    opensWhatsApp: "(abre o WhatsApp num novo separador)",
    backToTop: "Voltar ao topo",
    supportDays: "Segunda a sábado",
    supportNote: "Encerrado ao domingo",
    position: (index: number, total: number) => `${index} de ${total}`,
  },
  header: {
    nav: {
      home: "Início",
      services: "Serviços",
      howItWorks: "Como funciona",
      contact: "Contacto",
    },
    language: "Idioma:",
    mainNav: "Navegação principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    menuTitle: "Menu de navegação",
  },
  hero: {
    eyebrow: "Limpeza profissional em Portugal",
    title: ["A sua casa limpa.", "O seu tempo de volta."],
    text: "Limpeza para casas e apartamentos, com recolha e entrega da sua roupa. Equipa de confiança e todo o cuidado nos detalhes.",
  },
  testimonials: {
    eyebrow: "Testemunhos",
    title: "A experiência de quem escolhe a Cleenty",
    listLabel: "Testemunhos de clientes",
    prev: "Testemunho anterior",
    next: "Testemunho seguinte",
    goTo: (index: number) => `Ir para o testemunho ${index}`,
    rating: (rating: string) => `${rating} de 5 estrelas`,
    sources: { google: "Google", direct: "Cliente Cleenty" },
    summaryLabel: "Avaliações Google",
    basedOn: (count: number) =>
      `Com base em ${count === 1 ? "1 avaliação" : `${count} avaliações`} no Google`,
    viewAll: "Ver todas as avaliações",
  },
  laundry: {
    eyebrow: "Recolha e entrega de roupa",
    title: ["Entregue-nos a roupa.", "Receba-a pronta a usar."],
    text: "Recolhemos a roupa em sua casa, tratamos da lavagem e da engomadoria com as nossas lavandarias parceiras e devolvemo-la como preferir.",
    details: [
      { label: "Recolha e entrega", value: "Sem custo na nossa zona" },
      { label: "Prazo", value: "Devolução em 48 a 72 horas" },
      { label: "Preço", value: "Ao quilo" },
      { label: "Entrega", value: "Dobrada ou em cabide" },
    ],
    cta: "Marcar recolha",
    whatsappMessage: "Olá! Gostaria de marcar uma recolha de roupa.",
    imageAlt:
      "Cesto de corda com toalhas e roupa lavada e dobrada, numa entrada luminosa.",
  },
  services: {
    eyebrow: "Serviços",
    title: ["Serviços pensados", "para a sua casa."],
    listLabel: "Serviços",
    prev: "Serviço anterior",
    next: "Serviço seguinte",
    goTo: (index: number) => `Ir para a posição ${index}`,
    items: {
      domestic: {
        title: "Limpeza doméstica",
        description:
          "Limpeza regular ou pontual de casas e apartamentos, para manter o seu espaço sempre limpo e confortável.",
        alt: "Profissional da Cleenty, de uniforme azul e luvas pretas, a limpar uma mesa de madeira com um pano.",
      },
      deep: {
        title: "Limpeza profunda",
        description:
          "Uma intervenção mais completa, com atenção às áreas que exigem maior cuidado, como cozinhas, casas de banho e zonas difíceis de alcançar.",
        alt: "Profissional da Cleenty, de avental e luvas, a limpar o fogão de uma cozinha com um pulverizador.",
      },
      postConstruction: {
        title: "Limpeza pós-obra",
        description:
          "Remoção de pó, cimento, tinta e resíduos de obra, para que possa usufruir do seu novo espaço sem preocupações.",
        alt: "Aspirador industrial num corredor de um apartamento em remodelação.",
      },
      laundry: {
        title: "Lavagem e engomadoria",
        description:
          "Recolhemos e entregamos a sua roupa em casa. Tratamos da lavagem e da engomadoria através das nossas lavandarias parceiras, para a receber pronta a usar.",
        alt: "Ferro de engomar e uma pilha de roupa dobrada sobre uma tábua de engomar.",
      },
    },
  },
  howItWorks: {
    eyebrow: "Como funciona",
    title: ["Uma casa limpa,", "sem complicações."],
    steps: {
      quote: {
        title: "Peça um orçamento",
        description:
          "Diga-nos se precisa de limpeza, de recolha de roupa ou de ambos.",
        alt: "Mulher num sofá a usar o telemóvel, rodeada de plantas.",
      },
      details: {
        title: "Combine os detalhes",
        description:
          "Confirmamos o preço, a disponibilidade e o serviço pretendido.",
        alt: "Mulher a falar ao telefone num sofá, numa sala luminosa.",
      },
      cleaning: {
        title: "Deixe a limpeza connosco",
        description:
          "A nossa equipa realiza a limpeza ou recolhe e entrega a roupa na data combinada.",
        alt: "Duas profissionais de limpeza de uniforme a aspirar e a passar a esfregona numa sala de estar.",
      },
    },
  },
  finalCta: {
    title: ["A sua próxima", "limpeza começa aqui."],
    text: "Conte-nos o que precisa. Nós tratamos do resto.",
  },
  footer: {
    description:
      "Limpeza doméstica e tratamento de roupa em Amora e arredores. Mais tempo para o que realmente importa.",
    servicesTitle: "Serviços",
    companyTitle: "A Cleenty",
    contactTitle: "Contacto",
    hoursTitle: "Horário",
    email: "E-mail",
    whatsapp: "WhatsApp",
    opensMaps: "(abre o Google Maps)",
    social: "Redes sociais",
    rights: "Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    terms: "Termos e Condições",
  },
  legal: {
    updated: "Última atualização:",
    backHome: "Voltar ao início",
    privacyDescription:
      "Como a Cleenty recolhe, utiliza e protege os seus dados pessoais.",
    termsDescription:
      "Condições de utilização do site e de prestação dos serviços da Cleenty.",
  },
};

export type Dictionary = typeof pt;
