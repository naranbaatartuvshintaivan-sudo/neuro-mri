import * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "mb-2 block font-mono text-[0.7rem] uppercase tracking-[0.18em] text-text-2",
        className
      )}
      {...props}
    />
  );
}

export { Label };
