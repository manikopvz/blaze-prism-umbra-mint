import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { SavedMix } from "@/lib/mixer-store";
import { cn } from "@/lib/utils";

type HistoryStripProps = {
  items: SavedMix[];
  onRestore: (id: string) => void;
  onRemove: (id: string) => void;
};

export function HistoryStrip({ items, onRestore, onRemove }: HistoryStripProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-lg bg-card/60 px-4 py-5">
        <Label>Sắc đã lưu</Label>
        <p className="mt-1 text-sm text-muted-foreground">
          Lưu màu hỗn hợp để gọi lại công thức tỷ lệ.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Label>Sắc đã lưu</Label>
      <ul className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <li key={item.id} className="relative shrink-0">
            <button
              type="button"
              onClick={() => onRestore(item.id)}
              className={cn(
                "size-14 rounded-full ring-1 ring-foreground/10 transition-transform duration-150 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none",
              )}
              style={{
                background: `radial-gradient(circle at 35% 30%, color-mix(in oklab, ${item.hex} 70%, white), ${item.hex})`,
              }}
              aria-label={`Khôi phục ${item.hex}`}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="absolute -top-1 -right-1 size-6 rounded-full bg-popover text-muted-foreground shadow-sm"
              aria-label="Xóa sắc đã lưu"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(item.id);
              }}
            >
              <X className="size-3" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
