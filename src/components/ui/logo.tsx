import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const logoUrl = "url(/cleenty.png)";

// O logótipo (/cleenty.png, branco com fundo transparente) é usado como
// máscara, para assumir a cor do texto (`currentColor`) em fundos claros e escuros.
export function Logo({ className, style, ...props }: ComponentProps<"span">) {
  return (
    <span
      role="img"
      aria-label="Cleenty"
      className={cn("block aspect-[542/151] h-5 bg-current md:h-6", className)}
      style={{
        maskImage: logoUrl,
        WebkitMaskImage: logoUrl,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "left center",
        WebkitMaskPosition: "left center",
        ...style,
      }}
      {...props}
    />
  );
}
