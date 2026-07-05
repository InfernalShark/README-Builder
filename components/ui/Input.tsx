import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  hint?: string;
}

export function Input({ label, icon, hint, className, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
            {icon}
          </span>
        )}
        <input
          id={id}
          className={cn(
            'w-full bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-100 placeholder-neutral-600',
            'focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30',
            'transition-all duration-200',
            icon ? 'pl-9 pr-3 py-2' : 'px-3 py-2',
            className
          )}
          {...props}
        />
      </div>
      {hint && <p className="text-xs text-neutral-600">{hint}</p>}
    </div>
  );
}
