import type { ReactNode } from "react";

import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  eyebrow,
  title,
  className,
}: {
  id: string;
  eyebrow: ReactNode;
  title: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("mx-auto max-w-[720px] text-center", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-4 text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.045em] text-balance text-[#12263f]"
      >
        {title}
      </h2>
    </header>
  );
}
