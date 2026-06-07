import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// shadcn Button, restyled for the Neuro Scan palette — exported as
// `buttonVariants` too so links / motion wrappers can borrow the look.
const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-blue text-white shadow-[0_10px_40px_-12px_rgba(47,109,255,0.9)] hover:shadow-[0_16px_50px_-10px_rgba(47,109,255,1)] hover:bg-blue-bright hover:-translate-y-0.5",
        ghost:
          "border border-line-2 bg-white/[0.02] text-fg backdrop-blur-sm hover:bg-white/[0.06] hover:border-blue/50 hover:-translate-y-0.5",
        outline:
          "border border-line-2 text-fg hover:border-cyan/60 hover:text-white",
        soft: "bg-blue/12 text-blue-bright hover:bg-blue/20",
        link: "text-blue-bright underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 text-[0.95rem]",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
