import type { ReactNode } from "react";

interface FeatureItemProps {
  icon: ReactNode;
  children: ReactNode;
}

export default function FeatureItem({ icon, children }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600"> {icon} </span>
      <span className="text-slate-700">{children}</span>
    </div>
  );
}
