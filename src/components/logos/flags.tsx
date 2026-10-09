import { useId } from "react";
import type { SVGProps } from "react";

export function FlagPT(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      {...props}
    >
      <rect width="240" height="400" fill="#046A38" />
      <rect x="240" width="360" height="400" fill="#DA291C" />
      <circle
        cx="240"
        cy="200"
        r="78"
        fill="none"
        stroke="#FFE900"
        strokeWidth="16"
      />
      <path d="M192 150h96v62a48 48 0 0 1-96 0z" fill="#fff" />
      <path d="M204 162h72v50a36 36 0 0 1-72 0z" fill="#DA291C" />
      <path d="M222 178h36v30a18 18 0 0 1-36 0z" fill="#fff" />
      <path d="M232 190h16v18a8 8 0 0 1-16 0z" fill="#003399" />
    </svg>
  );
}

export function FlagGB(props: SVGProps<SVGSVGElement>) {
  const id = useId();
  const clipFlag = `${id}-flag`;
  const clipDiagonal = `${id}-diagonal`;

  return (
    <svg
      viewBox="0 0 60 30"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <clipPath id={clipFlag}>
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <clipPath id={clipDiagonal}>
          <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipFlag})`}>
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0 0l60 30m0-30L0 30"
          clipPath={`url(#${clipDiagonal})`}
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

export function FlagES(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 750 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      {...props}
    >
      <rect width="750" height="500" fill="#AA151B" />
      <rect y="125" width="750" height="250" fill="#F1BF00" />
    </svg>
  );
}
