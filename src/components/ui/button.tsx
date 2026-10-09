import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        ghost: "hover:bg-accent hover:text-accent-foreground",
        white: "bg-white text-[#12263f]",
        navy: "bg-[#12263f] text-white hover:bg-[#12263f]/90",
        subtle: "border border-border bg-white text-[#12263f] hover:bg-muted",
      },
      size: {
        icon: "size-9",
        medium: "h-11 rounded-full px-6 text-[14px] font-medium",
        "icon-round": "size-12 rounded-full [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "navy",
      size: "medium",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
