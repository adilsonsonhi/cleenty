export type ReviewSource = "google" | "direct";

export type ReviewRating = 1 | 2 | 3 | 4 | 5;

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating: ReviewRating;
  /** Data da avaliação em ISO 8601 (AAAA-MM-DD). */
  date: string;
  source: ReviewSource;
  /** Só preencher com autorização expressa do cliente. */
  photo?: { src: string; authorized: true };
}

export interface GoogleReviewSummaryData {
  rating: number;
  reviewCount: number;
  url: string;
}

// Apenas avaliações reais e confirmadas. Com a lista vazia a secção não é renderizada.
export const testimonials: Testimonial[] = [];

// Preencher apenas com dados públicos confirmados do perfil Google.
export const googleReviewSummary: GoogleReviewSummaryData | null = null;
