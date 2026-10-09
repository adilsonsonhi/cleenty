// Estrutura das páginas legais (Política de Privacidade e Termos e Condições).
// Cada parágrafo é um texto; um array de textos é apresentado como lista.
export type LegalSection = { heading: string; body: (string | string[])[] };
export type LegalDoc = { intro: string; sections: LegalSection[] };

// Dados da empresa injetados nos textos (definidos em src/data/contact.ts).
export type LegalContext = {
  entity: string;
  address: string;
  email: string;
  phone: string;
};

export type LegalContent = {
  privacy: (c: LegalContext) => LegalDoc;
  terms: (c: LegalContext) => LegalDoc;
};

// Data da última revisão dos textos legais (AAAA-MM-DD).
export const LEGAL_UPDATED = "2026-10-09";
