import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

// Seta dos CTAs. Desliza ligeiramente quando o elemento pai tem `group` e recebe hover/foco.
export function ButtonArrow({ className }: { className?: string }) {
  return (
    <ArrowRight
      aria-hidden="true"
      strokeWidth={1.75}
      className={cn(
        "transition-transform duration-200 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-visible:translate-x-0",
        className,
      )}
    />
  );
}
