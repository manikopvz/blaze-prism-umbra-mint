import { useId } from "react";
import { cn } from "@/lib/utils";

type WatercolorBlotProps = {
  hex: string;
  className?: string;
  rounded?: "full" | "tray";
};

export function WatercolorBlot({
  hex,
  className,
  rounded = "full",
}: WatercolorBlotProps) {
  const uid = useId().replace(/:/g, "");
  const filterId = `wash-${uid}`;
  const edgeId = `edge-${uid}`;
  const gradId = `grad-${uid}`;

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        rounded === "full" ? "rounded-full" : "rounded-xl",
        className,
      )}
    >
      <svg
        viewBox="0 0 320 220"
        className="size-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <radialGradient id={gradId} cx="46%" cy="40%" r="70%">
            <stop offset="0%" stopColor={hex} stopOpacity="0.98" />
            <stop offset="62%" stopColor={hex} stopOpacity="0.82" />
            <stop offset="100%" stopColor={hex} stopOpacity="0.2" />
          </radialGradient>
          <filter id={filterId} x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.03"
              numOctaves="4"
              seed="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="28"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id={edgeId} x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="2"
              seed="11"
              result="n"
            />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="14" />
          </filter>
        </defs>
        <path
          d="M86 96c8-38 48-62 92-58 38 4 78 28 86 62 8 36-10 72-48 86-32 12-78 8-108-12-28-18-32-42-22-78z"
          fill={`url(#${gradId})`}
          filter={`url(#${filterId})`}
        />
        <path
          d="M108 102c6-24 34-40 64-36 28 4 52 22 56 44 5 26-12 50-38 58-26 8-60 2-80-16-16-14-16-30-2-50z"
          fill={hex}
          opacity="0.28"
          filter={`url(#${edgeId})`}
        />
      </svg>
    </div>
  );
}
