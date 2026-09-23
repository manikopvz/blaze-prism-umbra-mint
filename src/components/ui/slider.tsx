import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

function Slider({
  className,
  value,
  defaultValue,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const current = value?.[0] ?? defaultValue?.[0] ?? min;
  const pct = ((Number(current) - Number(min)) / (Number(max) - Number(min))) * 100;

  if (!mounted) {
    return (
      <div
        className={cn("relative flex w-full items-center py-3", className)}
        aria-hidden
      >
        <div className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary">
          <div
            className="absolute h-full rounded-full bg-primary"
            style={{ width: `${Math.max(0, Math.min(100, pct))}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn(
        "relative flex w-full touch-none select-none items-center py-3",
        className,
      )}
      value={value}
      defaultValue={defaultValue}
      min={min}
      max={max}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block size-5 rounded-full border border-primary/30 bg-popover shadow-sm ring-offset-background transition-[box-shadow,transform] duration-150 ease-[var(--ease-smooth-out)] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none" />
    </SliderPrimitive.Root>
  );
}

export { Slider };
