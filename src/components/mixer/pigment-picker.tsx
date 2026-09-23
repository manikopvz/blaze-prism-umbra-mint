import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PaintPan } from "@/components/mixer/paint-pan";
import { PIGMENT_GROUPS, PIGMENTS } from "@/lib/color/pigments";
import { inkOn, parseHex, toHex } from "@/lib/color/srgb";
import { cn } from "@/lib/utils";

type PigmentPickerProps = {
  open: boolean;
  hex: string;
  onOpenChange: (open: boolean) => void;
  onSelect: (hex: string, pigmentId: string | null) => void;
};

function normalizeHex(value: string): string | null {
  const v = value.trim().replace("#", "");
  if (/^[0-9a-fA-F]{3}$/.test(v)) {
    return toHex(parseHex(`#${v}`));
  }
  if (/^[0-9a-fA-F]{6}$/.test(v)) {
    return `#${v.toUpperCase()}`;
  }
  return null;
}

export function PigmentPicker({
  open,
  hex,
  onOpenChange,
  onSelect,
}: PigmentPickerProps) {
  const [draft, setDraft] = useState(hex);

  useEffect(() => {
    if (open) setDraft(hex);
  }, [open, hex]);

  const applyHex = (value: string, pigmentId: string | null) => {
    const next = normalizeHex(value);
    if (!next) return;
    onSelect(next, pigmentId);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chọn sắc tố</DialogTitle>
          <DialogDescription>
            Màu từ hộp màu nước cổ điển, hoặc tự pha mã hex.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          {PIGMENT_GROUPS.map((group) => (
            <section key={group.id} className="space-y-2">
              <h3 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {group.label}
              </h3>
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
                {PIGMENTS.filter((p) => p.group === group.id).map((p) => {
                  const selected = p.hex.toUpperCase() === hex.toUpperCase();
                  const ink = inkOn(p.hex);
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        applyHex(p.hex, p.id);
                        onOpenChange(false);
                      }}
                      className={cn(
                        "flex flex-col items-center gap-1.5 rounded-md p-2 text-center transition-colors duration-150 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none",
                        selected && "bg-secondary",
                      )}
                    >
                      <span className="relative">
                        <PaintPan hex={p.hex} size="sm" />
                        {selected && (
                          <span
                            className={cn(
                              "absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground",
                            )}
                          >
                            <Check className="size-2.5" strokeWidth={3} />
                          </span>
                        )}
                      </span>
                      <span
                        className={cn(
                          "line-clamp-2 text-[11px] leading-tight text-foreground",
                          ink === "light" ? "" : "",
                        )}
                      >
                        {p.nameVi}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}

          <section className="space-y-2 border-t border-border pt-4">
            <Label htmlFor="custom-hex">Tùy chỉnh</Label>
            <div className="flex items-center gap-2">
              <label className="relative size-11 shrink-0 overflow-hidden rounded-md border border-border">
                <span
                  className="absolute inset-0"
                  style={{ background: normalizeHex(draft) ?? hex }}
                />
                <input
                  type="color"
                  value={(normalizeHex(draft) ?? hex).slice(0, 7)}
                  onChange={(e) => {
                    setDraft(e.target.value);
                    applyHex(e.target.value, null);
                  }}
                  className="absolute inset-0 cursor-pointer opacity-0"
                  aria-label="Chọn màu tùy chỉnh"
                />
              </label>
              <Input
                id="custom-hex"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onBlur={() => {
                  const next = normalizeHex(draft);
                  if (next) {
                    setDraft(next);
                    applyHex(next, null);
                  } else setDraft(hex);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const next = normalizeHex(draft);
                    if (next) {
                      setDraft(next);
                      applyHex(next, null);
                      onOpenChange(false);
                    }
                  }
                }}
                spellCheck={false}
                className="font-mono uppercase"
                placeholder="#2F4C96"
              />
              <Button
                type="button"
                onClick={() => {
                  const next = normalizeHex(draft);
                  if (next) {
                    applyHex(next, null);
                    onOpenChange(false);
                  }
                }}
              >
                Xong
              </Button>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
