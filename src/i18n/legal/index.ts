import type { Language } from "../context";
import { legalEn } from "./en";
import { legalEs } from "./es";
import { legalPt } from "./pt";
import type { LegalContent } from "./types";

export const legal: Record<Language, LegalContent> = {
  pt: legalPt,
  en: legalEn,
  es: legalEs,
};

export { LEGAL_UPDATED } from "./types";
export type { LegalContext } from "./types";
