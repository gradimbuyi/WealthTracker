interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
        <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <rect width="128" height="128" rx="24" fill="#2563EB" />
        <rect x="24" y="38" width="80" height="52" rx="10" fill="white"/>
        <rect x="74" y="54" width="24" height="20" rx="6" fill="#2563EB"/>
        <circle cx="86" cy="64" r="3" fill="white"/>
      </svg>
      </span>
      <span className="text-2xl font-bold tracking-tight">
        <span className="text-slate-900">Wealth</span>
        <span className="text-blue-600">Tracker</span>
      </span>
    </div>
  );
}
