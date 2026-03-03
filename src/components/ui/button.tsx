import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-cream hover:bg-accent border-2 border-ink hover:border-accent",
  secondary:
    "bg-cream text-ink border-2 border-ink hover:bg-ink hover:text-cream",
  ghost:
    "bg-transparent text-ink hover:text-accent underline underline-offset-4",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider",
          "transition-all duration-200 cursor-pointer",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          "disabled:opacity-50 disabled:pointer-events-none",
          styles[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };
