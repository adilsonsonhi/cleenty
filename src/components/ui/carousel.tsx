import type { ComponentProps } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CarouselTrack({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "relative flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12263f] [&::-webkit-scrollbar]:hidden",
        className,
      )}
      {...props}
    />
  );
}

export function CarouselItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li className={cn("flex shrink-0 snap-start", className)} {...props} />
  );
}

export function CarouselArrow({
  direction,
  label,
  className,
  ...props
}: Omit<ComponentProps<typeof Button>, "children"> & {
  direction: "prev" | "next";
  label: string;
}) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <Button variant="subtle" size="icon-round" className={className} {...props}>
      <Icon aria-hidden="true" strokeWidth={1.75} />
      <span className="sr-only">{label}</span>
    </Button>
  );
}

export function CarouselDots({
  count,
  active,
  onSelect,
  itemLabel,
  controls,
  shape = "dot",
  className,
}: {
  count: number;
  active: number;
  onSelect: (index: number) => void;
  itemLabel: (index: number) => string;
  controls?: string;
  shape?: "dot" | "bar";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={itemLabel(index)}
          aria-current={index === active ? "true" : undefined}
          aria-controls={controls}
          className={cn(
            "flex items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-[#12263f]",
            shape === "dot" ? "size-6" : "h-6 px-1",
          )}
        >
          <span
            className={cn(
              "rounded-full transition-colors",
              shape === "dot" ? "size-2" : "h-[3px] w-8",
              index !== active
                ? "bg-border"
                : shape === "dot"
                  ? "bg-[#12263f]"
                  : "bg-[#2a7aa0]",
            )}
          />
        </button>
      ))}
    </div>
  );
}
