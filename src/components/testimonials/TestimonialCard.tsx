import { GoogleG } from "@/components/logos/google";
import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/data/testimonials";
import { useI18n } from "@/i18n/context";
import { cn } from "@/lib/utils";

import { StarRating } from "./StarRating";

function timeAgo(iso: string, locale: string) {
  const relative = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const days = Math.max(
    0,
    Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000),
  );
  const text =
    days < 7
      ? relative.format(days === 0 ? 0 : -days, "day")
      : days < 30
        ? relative.format(-Math.round(days / 7), "week")
        : days < 365
          ? relative.format(-Math.round(days / 30), "month")
          : relative.format(-Math.round(days / 365), "year");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (
    parts[0][0] + (parts.length > 1 ? parts.at(-1)![0] : "")
  ).toUpperCase();
}

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const { quote, author, rating, date, source, photo } = testimonial;
  const { locale, t } = useI18n();
  const fullDate = new Intl.DateTimeFormat(locale, { dateStyle: "long" });

  return (
    <Card className={cn("h-full rounded-2xl p-6", className)}>
      <figure className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <StarRating rating={rating} />
          <span
            aria-hidden="true"
            className="text-[13px] text-muted-foreground"
          >
            {rating}/5
          </span>
        </div>

        {/* As avaliações mantêm-se na língua original. */}
        <blockquote
          lang="pt-PT"
          className="mt-5 mb-6 text-[16px] leading-[1.6] text-[#12263f]"
        >
          <p>“{quote}”</p>
        </blockquote>

        <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-5">
          {photo?.authorized ? (
            <img
              src={photo.src}
              alt=""
              width={44}
              height={44}
              loading="lazy"
              className="size-11 shrink-0 rounded-full object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted text-[14px] font-semibold text-[#12263f]"
            >
              {initials(author)}
            </span>
          )}
          <div className="min-w-0">
            <p className="truncate text-[15px] font-semibold text-[#12263f]">
              {author}
            </p>
            <p className="text-[13px] text-muted-foreground">
              <time dateTime={date} title={fullDate.format(new Date(date))}>
                {timeAgo(date, locale)}
              </time>
              <span className="sr-only">
                {" "}
                · {t.testimonials.sources[source]}
              </span>
            </p>
          </div>
          {source === "google" && (
            <GoogleG className="ml-auto size-6 shrink-0" />
          )}
        </figcaption>
      </figure>
    </Card>
  );
}
