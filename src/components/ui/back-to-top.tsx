import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import { useI18n } from "@/i18n/context";
import { cn } from "@/lib/utils";

const RADIUS = 21;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
// Surge depois de passar o ecrã inicial.
const SHOW_AFTER = 480;

// Botão "voltar ao topo": vidro fosco como o Header, com um anel que mostra o
// progresso de leitura da página.
export function BackToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > SHOW_AFTER);
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goToTop = () => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  };

  return (
    <button
      type="button"
      onClick={goToTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={visible ? undefined : true}
      className={cn(
        "group fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 grid size-12 place-items-center rounded-full bg-white/70 text-[#12263f] shadow-[0_8px_24px_-8px_rgb(18_38_63/0.35),inset_0_0_0_1px_rgb(18_38_63/0.08)] backdrop-blur-xl backdrop-saturate-150 transition-[opacity,translate,background-color,color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#12263f] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2a7aa0] md:right-8 md:bottom-8 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="absolute inset-0 size-full -rotate-90"
      >
        <circle
          cx="24"
          cy="24"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          className="opacity-70 transition-colors group-hover:text-white"
        />
      </svg>
      <ArrowUp
        aria-hidden="true"
        strokeWidth={1.75}
        className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      />
      <span className="sr-only">{t.common.backToTop}</span>
    </button>
  );
}
