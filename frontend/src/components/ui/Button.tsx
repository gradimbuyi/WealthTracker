import type { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: ReactNode;
}

export default function Button({ children, variant = "primary", type = "button", icon, className = "", ...props}: ButtonProps) {
  const base = `inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold 
                transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
                disabled:cursor-not-allowed disabled:opacity-60`;

  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900",
    secondary: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-400",
  };

  return (<button type={type} className={`${base} ${variants[variant]} ${className}`} {...props}> {icon} {children}</button>);
}
