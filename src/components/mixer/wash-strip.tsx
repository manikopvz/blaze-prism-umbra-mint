import { mixHex, type MixInput, type MixMode } from "@/lib/color/mix";
import { Label } from "@/components/ui/label";

type WashStripProps = {
  inputs: MixInput[];
  mode: MixMode;
};

export function WashStrip({ inputs, mode }: WashStripProps) {
  const stops = Array.from({ length: 10 }, (_, i) => {
    const t = 0.1 + (0.9 * i) / 9;
    return mixHex(inputs, t, mode);
  });
  const gradient = `linear-gradient(90deg, ${stops
    .map((c, i) => `${c} ${(i / (stops.length - 1)) * 100}%`)
    .join(", ")})`;

  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <Label>Vệt loãng → đặc</Label>
        <span className="text-[11px] text-muted-foreground">Thang độ nước</span>
      </div>
      <div
        className="h-12 overflow-hidden rounded-md ring-1 ring-foreground/8"
        style={{
          backgroundImage: `${gradient}, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2  0 0 0 0 0.17  0 0 0 0 0.12  0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundBlendMode: "multiply",
        }}
        role="img"
        aria-label="Thang màu từ loãng đến đặc"
      />
      <div className="flex justify-between text-[11px] text-muted-foreground">
        <span>Loãng</span>
        <span>Đặc</span>
      </div>
    </div>
  );
}
