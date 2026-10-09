import {
  createElement,
  useCallback,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

// Animação de entrada: o bloco surge (fade + subida suave) uma única vez, ao
// entrar no ecrã. Com "reduzir movimento" ativo, aparece sem animação.
export function Reveal({
  as = "div",
  delay = 0,
  className,
  style,
  children,
}: {
  as?: "div" | "li" | "header" | "ul";
  // Atraso em ms, para escalonar blocos irmãos.
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined",
  );
  const ref = useCallback((node: HTMLElement | null) => setElement(node), []);

  useEffect(() => {
    if (!element || visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [element, visible]);

  return createElement(
    as,
    {
      ref,
      className: cn(
        "transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0",
        className,
      ),
      style: delay ? { transitionDelay: `${delay}ms`, ...style } : style,
    },
    children,
  );
}
