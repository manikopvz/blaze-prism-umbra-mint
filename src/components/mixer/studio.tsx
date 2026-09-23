import { useEffect, useMemo, useState } from "react";
import { Copy, Droplets, RotateCcw, Shuffle, Bookmark } from "lucide-react";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { HistoryStrip } from "@/components/mixer/history-strip";
import { PigmentPicker } from "@/components/mixer/pigment-picker";
import { PigmentWell } from "@/components/mixer/pigment-well";
import { WashStrip } from "@/components/mixer/wash-strip";
import { WatercolorBlot } from "@/components/mixer/watercolor-blot";
import { mixColors, rgbCss, type MixMode } from "@/lib/color/mix";
import { colorTitle } from "@/lib/color/names";
import { pigmentById } from "@/lib/color/pigments";
import { STORAGE_KEY, useMixerStore } from "@/lib/mixer-store";
import { cn } from "@/lib/utils";

const PRESETS: { label: string; parts: [number, number, number] }[] = [
  { label: "1:1:1", parts: [1, 1, 1] },
  { label: "2:1:1", parts: [2, 1, 1] },
  { label: "1:2:1", parts: [1, 2, 1] },
  { label: "1:1:2", parts: [1, 1, 2] },
  { label: "2:1:0", parts: [2, 1, 0] },
  { label: "1:2:0", parts: [1, 2, 0] },
];

export function Studio() {
  const wells = useMixerStore((s) => s.wells);
  const strength = useMixerStore((s) => s.strength);
  const history = useMixerStore((s) => s.history);
  const setHex = useMixerStore((s) => s.setHex);
  const setParts = useMixerStore((s) => s.setParts);
  const setStrength = useMixerStore((s) => s.setStrength);
  const applyPreset = useMixerStore((s) => s.applyPreset);
  const randomize = useMixerStore((s) => s.randomize);
  const reset = useMixerStore((s) => s.reset);
  const saveMix = useMixerStore((s) => s.saveMix);
  const restoreMix = useMixerStore((s) => s.restoreMix);
  const removeMix = useMixerStore((s) => s.removeMix);
  const hydrate = useMixerStore((s) => s.hydrate);

  const [mode, setMode] = useState<MixMode>("physical");
  const [picker, setPicker] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as {
          wells?: unknown;
          strength?: number;
          history?: unknown;
        };
        hydrate({
          wells: Array.isArray(parsed.wells) ? (parsed.wells as never) : undefined,
          strength: parsed.strength,
          history: Array.isArray(parsed.history) ? (parsed.history as never) : undefined,
        });
      }
    } catch {
      /* ignore corrupt storage */
    }

    return useMixerStore.subscribe((s) => {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          wells: s.wells,
          strength: s.strength,
          history: s.history,
        }),
      );
    });
  }, [hydrate]);

  const inputs = wells.map((w) => ({ hex: w.hex, parts: w.parts }));
  const totalParts = wells.reduce((s, w) => s + w.parts, 0);
  const physical = useMemo(
    () => mixColors(inputs, strength, "physical"),
    [wells, strength],
  );
  const digital = useMemo(
    () => mixColors(inputs, strength, "digital"),
    [wells, strength],
  );
  const active = mode === "physical" ? physical : digital;
  const title = colorTitle(active.hex);
  const recipe = wells
    .map((w) => w.parts)
    .join(" : ");

  const copyHex = async () => {
    const value = active.hex;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        throw new Error("clipboard");
      }
      toast(`Đã sao chép ${value}`);
    } catch {
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      field.remove();
      toast(ok ? `Đã sao chép ${value}` : value);
    }
  };

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 pt-6 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-6 sm:pt-10">
      <header className="mb-6 flex items-start justify-between gap-4 sm:mb-8">
        <div>
          <p className="mb-1 flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            <Droplets className="size-3.5 text-primary" />
            Studio màu nước
          </p>
          <h1 className="font-display text-4xl font-medium tracking-tight italic sm:text-5xl">
            Sắc Nước
          </h1>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Ba ô sắc tố, nhập tỷ lệ, xem màu thật khi bột màu hấp thụ ánh sáng trên giấy.
          </p>
        </div>
      </header>

      <section className="rounded-xl bg-card p-4 shadow-tray sm:p-6">
        <div className="relative overflow-hidden rounded-lg bg-background/80">
          <WatercolorBlot
            hex={active.hex}
            rounded="tray"
            className="mx-auto h-56 w-full sm:h-72"
          />
        </div>

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-medium tracking-tight text-foreground">
              {title}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
              <button
                type="button"
                onClick={copyHex}
                className="font-mono text-sm text-foreground tabular-nums underline-offset-4 hover:underline"
              >
                {active.hex}
              </button>
              <span className="font-mono text-xs text-muted-foreground tabular-nums">
                RGB {rgbCss(active.hex)}
              </span>
              <span className="font-mono text-xs text-muted-foreground tabular-nums">
                {recipe}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="outline" onClick={copyHex}>
              <Copy className="size-4" />
              Sao chép
            </Button>
            <Button
              type="button"
              onClick={() => {
                saveMix(active.hex);
                toast("Đã lưu công thức");
              }}
            >
              <Bookmark className="size-4" />
              Lưu sắc
            </Button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <CompareSwatch
            label="Trộn vật lý"
            hex={physical.hex}
            active={mode === "physical"}
            onClick={() => setMode("physical")}
          />
          <CompareSwatch
            label="Trung bình RGB"
            hex={digital.hex}
            active={mode === "digital"}
            onClick={() => setMode("digital")}
          />
        </div>

        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Trộn vật lý dùng Kubelka–Munk (hấp thụ ánh sáng như bột màu). Trung bình RGB
          là cách màn hình cộng màu — vàng với xanh thường ra xám thay vì lục.
        </p>

        <div className="mt-5">
          <WashStrip inputs={inputs} mode={mode} />
        </div>
      </section>

      <section className="mt-5 rounded-xl bg-card/80 p-3 sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <h2 className="font-display text-lg font-medium">Ba ô sắc tố</h2>
          <div className="flex gap-1">
            <Button type="button" variant="ghost" size="sm" onClick={randomize}>
              <Shuffle className="size-3.5" />
              Ngẫu nhiên
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={reset}>
              <RotateCcw className="size-3.5" />
              Đặt lại
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {wells.map((well, i) => (
            <PigmentWell
              key={i}
              index={i}
              well={well}
              percent={totalParts === 0 ? 0 : Math.round((well.parts / totalParts) * 100)}
              onOpenPicker={() => setPicker(i)}
              onParts={(parts) => setParts(i, parts)}
            />
          ))}
        </div>

        <div className="mt-4 space-y-2">
          <Label>Công thức nhanh</Label>
          <div className="flex flex-wrap gap-1.5">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => applyPreset(p.parts)}
                className="h-9 rounded-full border border-border bg-background px-3 font-mono text-xs text-foreground tabular-nums transition-colors duration-150 hover:bg-secondary"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-5 rounded-xl bg-card/80 p-4 sm:p-5">
        <div className="flex items-baseline justify-between">
          <Label htmlFor="strength">Lượng nước</Label>
          <span className="font-mono text-xs text-muted-foreground tabular-nums">
            {Math.round(strength * 100)}% đặc
          </span>
        </div>
        <Slider
          id="strength"
          min={6}
          max={100}
          step={1}
          value={[Math.round(strength * 100)]}
          onValueChange={(v) => setStrength((v[0] ?? 72) / 100)}
        />
        <div className="flex justify-between text-[11px] text-muted-foreground">
          <span>Rất loãng</span>
          <span>Sệt</span>
        </div>
      </section>

      <section className="mt-5">
        <HistoryStrip items={history} onRestore={restoreMix} onRemove={removeMix} />
      </section>

      <footer className="mt-8 mb-4 text-center text-xs leading-relaxed text-muted-foreground">
        Màu hiển thị gần với bột màu trên giấy, không phải cộng ánh sáng RGB.
      </footer>

      <PigmentPicker
        open={picker !== null}
        hex={picker !== null ? wells[picker]?.hex ?? "#888888" : "#888888"}
        onOpenChange={(open) => {
          if (!open) setPicker(null);
        }}
        onSelect={(hex, pigmentId) => {
          if (picker === null) return;
          const known = pigmentById(pigmentId ?? undefined);
          setHex(picker, hex, known?.id ?? null);
        }}
      />

      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "font-sans",
          style: {
            background: "var(--popover)",
            color: "var(--popover-foreground)",
            border: "1px solid var(--border)",
          },
        }}
      />
    </div>
  );
}

function CompareSwatch({
  label,
  hex,
  active,
  onClick,
}: {
  label: string;
  hex: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-md border px-3 py-2.5 text-left transition-colors duration-150",
        active
          ? "border-primary bg-background"
          : "border-border bg-background/50 hover:bg-background",
      )}
    >
      <span
        className="size-8 shrink-0 rounded-full ring-1 ring-foreground/10"
        style={{ background: hex }}
        aria-hidden
      />
      <span>
        <span className="block text-xs font-medium text-foreground">{label}</span>
        <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
          {hex}
        </span>
      </span>
    </button>
  );
}
