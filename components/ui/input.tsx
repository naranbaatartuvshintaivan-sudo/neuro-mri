import * as React from "react";
import { cn } from "@/lib/utils";

const fieldStyles =
  "h-12 w-full rounded-xl border border-line-2 bg-ink-2/80 px-4 text-[0.95rem] text-fg placeholder:text-faint transition-colors duration-200 focus:border-blue/70 focus:bg-ink-2 focus:outline-none focus:ring-4 focus:ring-blue/15 disabled:opacity-50";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn(fieldStyles, className)} {...props} />;
}

function Select({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        fieldStyles,
        "appearance-none bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11",
        className
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2395a2bd' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
      }}
      {...props}
    />
  );
}

export { Input, Select, fieldStyles };
