import { Star } from "lucide-react";

import { useI18n } from "@/i18n/context";
import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  className,
  starClassName,
}: {
  rating: number;
  className?: string;
  starClassName?: string;
}) {
  const { locale, t } = useI18n();
  const filled = Math.round(rating);
  const formatted = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 1,
  }).format(rating);

  return (
    <div
      role="img"
      aria-label={t.testimonials.rating(formatted)}
      className={cn("flex items-center gap-1", className)}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          strokeWidth={1}
          className={cn(
            "size-5 shrink-0",
            index < filled
              ? "fill-[#f6b40e] text-[#f6b40e]"
              : "fill-border text-border",
            starClassName,
          )}
        />
      ))}
    </div>
  );
}
