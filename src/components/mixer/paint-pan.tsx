import { inkOn } from "@/lib/color/srgb";
import { cn } from "@/lib/utils";

type PaintPanProps = {
  hex: string;
  size?: "sm" | "md" | "lg";
  active?: boolean;
  onClick?: () => void;
  label?: string;
  className?: string;
};

const sizeClass = {
  sm: "size-11",
  md: "size-[4.35rem] sm:size-24",
  lg: "size-28 sm:size-32",
};

export function PaintPan({
  hex,
  size = "md",
  active = false,
  onClick,
  label,
  className,
}: PaintPanProps) {
  const ink = inkOn(hex);
  const inner = (
    <span
      className={cn(
        "relative block overflow-hidden rounded-full",
        sizeClass[size],
        "ring-1 ring-foreground/10",
        active && "ring-2 ring-primary",
      )}
      style={{
        background: `radial-gradient(circle at 34% 28%, color-mix(in oklab, ${hex} 72%, white), ${hex} 52%, color-mix(in oklab, ${hex} 72%, black))`,
        boxShadow:
          "inset 0 -10px 18px rgba(0,0,0,0.22), inset 0 8px 12px rgba(255,255,255,0.22), 0 6px 14px rgba(40,30,18,0.16)",
      }}
    >
      <span
        aria-hidden
        className="absolute top-[16%] left-[20%] size-[28%] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.55), transparent 70%)",
        }}
      />
    </span>
  );

  if (!onClick) {
    return (
      <span className={cn("inline-flex", className)} title={label}>
        {inner}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label ?? "Chọn màu"}
      className={cn(
        "inline-flex rounded-full bg-popover p-1.5 shadow-pan transition-transform duration-150 ease-[var(--ease-smooth-out)] hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none",
        className,
      )}
    >
      {inner}
      <span className="sr-only">{ink === "dark" ? "màu sáng" : "màu tối"}</span>
    </button>
  );
}
