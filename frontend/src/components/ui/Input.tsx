import type { InputHTMLAttributes } from "react";
import { useState } from "react";

import { MailIcon } from "../icons/MailIcon";
import { LockIcon } from "../icons/LockIcon";
import { EyeIcon } from "../icons/EyeIcon";
import { EyeOffIcon } from "../icons/EyeOffIcon";

const icons = { mail: MailIcon, lock: LockIcon };

type IconName = keyof typeof icons;

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  icon?: IconName;
  type?: string;
  isPassword?: boolean;
}

export default function Input({ label, icon, type = "text", isPassword = false, className = "", ...props}: InputProps) {
  const [visible, setVisible] = useState(false);
  const Icon = icon ? icons[icon] : null;
  const resolvedType = isPassword ? (visible ? "text" : "password") : type;

  return (
    <div className={className}>
      {label && (<label className="mb-1.5 block text-sm font-medium text-slate-700"> {label} </label>)}
      <div className="relative">
        {Icon && (<Icon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />)}
        
        <input 
          type={resolvedType}
          className={`w-full rounded-lg border border-slate-300 bg-white py-2.5 text-sm text-slate-900 
                      placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 
                      focus:ring-blue-500/20 ${Icon ? "pl-10" : "pl-3.5"} ${isPassword ? "pr-10" : "pr-3.5"}`} {...props}/>

        {isPassword && (
          <button type="button" onClick={() => setVisible((v) => !v)} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label={visible ? "Hide password" : "Show password"}>
                             {visible ? (<EyeOffIcon className="h-5 w-5" />) : (<EyeIcon className="h-5 w-5" />)}
          </button>
        )}
      </div>
    </div>
  );
}
