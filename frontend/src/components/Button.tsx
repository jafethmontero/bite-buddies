import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-colors",
          {
            "bg-primary text-white hover:bg-primary-dark":
              variant === "primary",
            "bg-gray-100 text-gray-900 hover:bg-gray-200":
              variant === "secondary",
            "border border-gray-200 bg-white hover:bg-gray-100":
              variant === "outline",
            "h-9 px-4 text-sm": size === "sm",
            "h-10 px-6 text-base": size === "md",
            "h-11 px-8 text-lg": size === "lg",
            "opacity-50 cursor-default": props.disabled,
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
