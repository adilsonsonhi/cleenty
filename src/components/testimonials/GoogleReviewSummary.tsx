import { GoogleG } from "@/components/logos/google";
import { ButtonArrow } from "@/components/ui/button-arrow";
import type { GoogleReviewSummaryData } from "@/data/testimonials";
import { useI18n } from "@/i18n/context";

import { StarRating } from "./StarRating";

export function GoogleReviewSummary({
  data,
}: {
  data: GoogleReviewSummaryData;
}) {
  const { locale, t } = useI18n();
  const ratingFormat = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:pt-2 lg:text-left">
      <GoogleG className="size-12" />
      <p className="sr-only">{t.testimonials.summaryLabel}</p>
      <p className="mt-5 flex items-baseline gap-2 text-[#12263f]">
        <span className="text-[4rem] leading-none font-semibold tracking-[-0.05em]">
          {ratingFormat.format(data.rating)}
        </span>
        <span className="text-[20px] text-muted-foreground">/ 5</span>
      </p>
      <StarRating
        rating={data.rating}
        className="mt-4 gap-1.5"
        starClassName="size-7"
      />
      <p className="mt-4 text-[14px] leading-snug text-muted-foreground lg:max-w-[13rem]">
        {t.testimonials.basedOn(data.reviewCount)}
      </p>
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-7 inline-flex min-h-11 items-center gap-2 border-b-2 border-[#12263f] text-[15px] font-medium text-[#12263f]"
      >
        {t.testimonials.viewAll}
        <ButtonArrow className="size-4" />
        <span className="sr-only">{t.common.opensNewTab}</span>
      </a>
    </div>
  );
}
