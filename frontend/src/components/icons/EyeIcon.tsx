import type { SVGProps } from "react";

export const EyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M1.5 10S4.5 4.5 10 4.5 18.5 10 18.5 10 15.5 15.5 10 15.5 1.5 10 1.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="10" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);