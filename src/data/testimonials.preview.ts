// DADOS FICTÍCIOS (mocks) — apenas para pré-visualização em `npm run dev`.
// Nunca são incluídos no build de produção (ver App.tsx). Não usar como conteúdo real.
import type { GoogleReviewSummaryData, Testimonial } from "./testimonials";

export const previewTestimonials: Testimonial[] = [
  {
    id: "mock-1",
    quote:
      "Serviço excelente! Equipa muito profissional, pontual e de confiança. A casa ficou impecável. Vou continuar a utilizar.",
    author: "Mariana Silva",
    rating: 5,
    date: "2026-09-24",
    source: "google",
  },
  {
    id: "mock-2",
    quote:
      "Fiquei muito satisfeito com a limpeza do meu apartamento. A equipa é atenciosa e cuida de todos os detalhes. Recomendo a Cleenty sem hesitação.",
    author: "Ricardo Mendes",
    rating: 5,
    date: "2026-09-08",
    source: "google",
  },
  {
    id: "mock-3",
    quote:
      "Serviço de grande qualidade. Comunicação fácil, horários flexíveis e resultados impecáveis. É ótimo poder contar com uma equipa tão profissional.",
    author: "Ana Fernandes",
    rating: 5,
    date: "2026-09-17",
    source: "google",
  },
  {
    id: "mock-4",
    quote:
      "Trataram da roupa com muito cuidado. Recolha e entrega dentro do combinado.",
    author: "João Pereira",
    rating: 5,
    date: "2026-08-20",
    source: "google",
  },
  {
    id: "mock-5",
    quote:
      "Limpeza pós-obra muito bem feita. A casa ficou pronta a habitar no próprio dia.",
    author: "Sofia Costa",
    rating: 5,
    date: "2026-07-30",
    source: "google",
  },
];

export const previewGoogleReviewSummary: GoogleReviewSummaryData = {
  rating: 4.9,
  reviewCount: 50,
  url: "#testemunhos",
};
