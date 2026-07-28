
import type { SVGProps } from "react";

export const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="none" {...props}>
    <rect x="4" y="9" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6.5 9V6.5a3.5 3.5 0 1 1 7 0V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);