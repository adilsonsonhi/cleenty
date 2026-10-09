// Contactos comerciais da Cleenty. Enquanto um valor for null, o respetivo CTA
// não é publicado (em desenvolvimento aparece apenas como pré-visualização).

// Número comercial em formato internacional, só dígitos (ex.: "351...").
export const whatsappNumber: string | null = "351961799523";

// Todos os pedidos de orçamento seguem para o WhatsApp, com a mensagem já escrita.
// Sem número definido, o link leva à secção de contacto.
export function whatsappLink(message?: string) {
  if (!whatsappNumber) return { href: "/#contacto" };
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return {
    href: `https://wa.me/${whatsappNumber}${text}`,
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

// Identificação legal (Política de Privacidade e Termos). Preencher quando
// estiver disponível; até lá as páginas legais usam apenas "Cleenty".
export const legalName: string | null = null;
export const nif: string | null = null;

// Os valores abaixo só são publicados no Footer depois de confirmados.
export const email: string | null = "geral@cleenty.pt";

// Telefone comercial em formato internacional, só dígitos (ex.: "351...").
export const phoneNumber: string | null = "351961799523";

// Morada em linhas separadas (rua; localidade e código postal).
export const address: { street: string; locality: string } | null = {
  street: "Avenida 25 de Abril, 93",
  locality: "2845-137 Amora",
};

export const socialLinks: {
  instagram: string | null;
  facebook: string | null;
} = {
  instagram: "https://www.instagram.com/cleenty.pt/",
  facebook: "https://www.facebook.com/profile.php?id=61595207071035",
};

// Horário de atendimento (contacto), não o horário de realização dos serviços.
// Os dias e a nota (ex.: "Encerrado ao domingo") estão em src/i18n (common).
export const supportHours: { hours: string } | null = {
  hours: "09:00 – 18:00",
};

export const legalPages: { privacy: string | null; terms: string | null } = {
  privacy: "/politica-de-privacidade/",
  terms: "/termos-e-condicoes/",
};
