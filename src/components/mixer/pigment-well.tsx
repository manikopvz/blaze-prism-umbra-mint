import { PaintPan } from "@/components/mixer/paint-pan";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { pigmentById } from "@/lib/color/pigments";
import type { Well } from "@/lib/mixer-store";
import { cn } from "@/lib/utils";

type PigmentWellProps = {
  index: number;
  well: Well;
  percent: number;
  onOpenPicker: () => void;
  onParts: (parts: number) => void;
};

export function PigmentWell({
  index,
  well,
  percent,
  onOpenPicker,
  onParts,
}: PigmentWellProps) {
  const pigment = pigmentById(well.pigmentId);
  const name = pigment?.nameVi ?? `Màu ${index + 1}`;
  const unused = well.parts <= 0;

  return (
    <article
      className={cn(
        "flex flex-col items-center gap-2 rounded-lg bg-card/70 px-1.5 py-3 sm:gap-3 sm:px-3 sm:py-4",
        unused && "opacity-55",
      )}
    >
      <PaintPan
        hex={well.hex}
        size="md"
        onClick={onOpenPicker}
        label={`Đổi ${name}`}
      />
      <div className="w-full min-w-0 text-center">
        <p className="truncate text-sm font-medium text-foreground">{name}</p>
        <p className="font-mono text-[11px] text-muted-foreground tabular-nums">
          {well.hex}
        </p>
      </div>

      <div className="flex w-full min-w-0 flex-col gap-1">
        <Label className="text-center">Tỷ lệ</Label>
        <Input
          inputMode="numeric"
          value={well.parts}
          onChange={(e) => {
            const n = Number.parseInt(e.target.value.replace(/\D/g, ""), 10);
            if (Number.isNaN(n)) onParts(0);
            else onParts(n);
          }}
          className="h-11 px-1 text-center font-mono tabular-nums"
          aria-label={`Tỷ lệ màu ${index + 1}`}
        />
        <Slider
          min={0}
          max={20}
          step={1}
          value={[well.parts]}
          onValueChange={(v) => onParts(v[0] ?? 0)}
          aria-label={`Thanh tỷ lệ màu ${index + 1}`}
        />
        <p className="text-center font-mono text-xs text-muted-foreground tabular-nums">
          {unused ? "Không dùng" : `${percent}%`}
        </p>
      </div>
    </article>
  );
}
