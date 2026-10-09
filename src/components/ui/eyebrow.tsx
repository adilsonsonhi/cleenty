import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const eyebrowVariants = cva("", {
  variants: {
    tone: {
      section:
        "text-[13px] font-semibold uppercase tracking-[0.15em] text-[#2a7aa0]",
      hero: "text-[0.875rem] font-medium text-white/85 md:text-[0.9375rem]",
    },
  },
  defaultVariants: { tone: "section" },
});

export function Eyebrow({
  tone,
  className,
  ...props
}: ComponentProps<"p"> & VariantProps<typeof eyebrowVariants>) {
  return <p className={cn(eyebrowVariants({ tone }), className)} {...props} />;
}
