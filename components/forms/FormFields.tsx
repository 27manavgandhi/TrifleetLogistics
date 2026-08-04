'use client';

import { forwardRef } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
};

export const TextField = forwardRef<HTMLInputElement, FieldProps>(
  ({ label, error, hint, required, id, className, ...props }, ref) => {
    const inputId = id ?? props.name;
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm font-medium text-foreground">
          {label} {required && <span className="text-accent-bright">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-err` : hint ? `${inputId}-hint` : undefined}
          className={cn(
            'h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20',
            error && 'border-destructive focus:border-destructive focus:ring-destructive/20',
            className
          )}
          {...props}
        />
        {hint && !error && <p id={`${inputId}-hint`} className="text-xs text-muted-foreground">{hint}</p>}
        {error && (
          <p id={`${inputId}-err`} role="alert" className="text-xs font-medium text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);
TextField.displayName = 'TextField';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  required?: boolean;
};

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, required, id, className, ...props }, ref) => {
    const inputId = id ?? props.name;
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm font-medium text-foreground">
          {label} {required && <span className="text-accent-bright">*</span>}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-err` : undefined}
          className={cn(
            'min-h-[120px] w-full rounded-lg border border-border bg-background p-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:ring-2 focus:ring-accent/20',
            error && 'border-destructive focus:border-destructive focus:ring-destructive/20',
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${inputId}-err`} role="alert" className="text-xs font-medium text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);
TextAreaField.displayName = 'TextAreaField';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  required?: boolean;
  placeholder?: string;
};

export const SelectField = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, required, placeholder, id, className, ...props }, ref) => {
    const inputId = id ?? props.name;
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm font-medium text-foreground">
          {label} {required && <span className="text-accent-bright">*</span>}
        </label>
        <select
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-err` : undefined}
          className={cn(
            'h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20',
            error && 'border-destructive focus:border-destructive focus:ring-destructive/20',
            className
          )}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        {error && (
          <p id={`${inputId}-err`} role="alert" className="text-xs font-medium text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  }
);
SelectField.displayName = 'SelectField';

export function CheckboxField({
  label,
  error,
  required,
  id,
  ...props
}: { label: React.ReactNode; error?: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="flex items-start gap-2.5 text-sm text-muted-foreground">
        <input
          id={id}
          type="checkbox"
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          className="mt-0.5 h-4 w-4 rounded border-border text-accent focus:ring-accent"
          {...props}
        />
        <span>{label}</span>
      </label>
      {error && (
        <p id={`${id}-err`} role="alert" className="text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function FormStatus({ status }: { status: 'idle' | 'loading' | 'success' | 'error' }) {
  if (status === 'idle' || status === 'loading') return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className={
        status === 'success'
          ? 'flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4 text-sm'
          : 'flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm'
      }
    >
      {status === 'success' ? (
        <>
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
          <div>
            <p className="font-semibold text-foreground">Message sent successfully.</p>
            <p className="mt-0.5 text-muted-foreground">Our team will get back to you within a few business hours.</p>
          </div>
        </>
      ) : (
        <>
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <div>
            <p className="font-semibold text-foreground">Something went wrong.</p>
            <p className="mt-0.5 text-muted-foreground">Please try again, or call us directly.</p>
          </div>
        </>
      )}
    </div>
  );
}
