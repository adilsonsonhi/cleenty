import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LegalPage, type LegalPageKind } from "./components/legal/LegalPage";
import { LanguageProvider } from "./i18n/LanguageProvider";
import type { Dictionary } from "./i18n/pt";
import "./index.css";

// Entrada das páginas legais (politica-de-privacidade/ e termos-e-condicoes/).
const root = document.getElementById("root")!;
const page: LegalPageKind = root.dataset.page === "terms" ? "terms" : "privacy";

const meta = (t: Dictionary) => ({
  title: `${t.footer[page]} — Cleenty`,
  description:
    page === "terms" ? t.legal.termsDescription : t.legal.privacyDescription,
});

createRoot(root).render(
  <StrictMode>
    <LanguageProvider meta={meta}>
      <LegalPage page={page} />
    </LanguageProvider>
  </StrictMode>,
);
