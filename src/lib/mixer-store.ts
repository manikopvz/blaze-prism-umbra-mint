import { create } from "zustand";
import { DEFAULT_WELLS, PIGMENTS, pigmentById } from "@/lib/color/pigments";

export type Well = {
  pigmentId: string | null;
  hex: string;
  parts: number;
};

export type SavedMix = {
  id: string;
  hex: string;
  wells: Well[];
  strength: number;
  savedAt: number;
};

type MixerState = {
  wells: Well[];
  strength: number;
  history: SavedMix[];
  setHex: (index: number, hex: string, pigmentId?: string | null) => void;
  setParts: (index: number, parts: number) => void;
  setStrength: (strength: number) => void;
  applyPreset: (parts: [number, number, number]) => void;
  randomize: () => void;
  reset: () => void;
  saveMix: (hex: string) => void;
  restoreMix: (id: string) => void;
  removeMix: (id: string) => void;
  hydrate: (payload: Partial<Pick<MixerState, "wells" | "strength" | "history">>) => void;
};

function wellFromPigment(pigmentId: string, parts: number): Well {
  const p = pigmentById(pigmentId);
  return {
    pigmentId,
    hex: p?.hex ?? "#808080",
    parts,
  };
}

export const defaultWells = (): Well[] =>
  DEFAULT_WELLS.map((w) => wellFromPigment(w.pigmentId, w.parts));

export const STORAGE_KEY = "sac-nuoc-v1";

export const useMixerStore = create<MixerState>((set, get) => ({
  wells: defaultWells(),
  strength: 0.72,
  history: [],
  setHex: (index, hex, pigmentId = null) =>
    set((s) => ({
      wells: s.wells.map((w, i) =>
        i === index ? { ...w, hex: hex.toUpperCase(), pigmentId } : w,
      ),
    })),
  setParts: (index, parts) =>
    set((s) => ({
      wells: s.wells.map((w, i) =>
        i === index ? { ...w, parts: Math.max(0, Math.min(20, parts)) } : w,
      ),
    })),
  setStrength: (strength) => set({ strength: Math.max(0.06, Math.min(1, strength)) }),
  applyPreset: (parts) =>
    set((s) => ({
      wells: s.wells.map((w, i) => ({ ...w, parts: parts[i] ?? w.parts })),
    })),
  randomize: () => {
    const pool = [...PIGMENTS];
    const pick: Well[] = [];
    for (let i = 0; i < 3; i++) {
      const idx = Math.floor(Math.random() * pool.length);
      const p = pool.splice(idx, 1)[0]!;
      pick.push({
        pigmentId: p.id,
        hex: p.hex,
        parts: 1 + Math.floor(Math.random() * 3),
      });
    }
    set({ wells: pick, strength: 0.55 + Math.random() * 0.35 });
  },
  reset: () => set({ wells: defaultWells(), strength: 0.72 }),
  saveMix: (hex) => {
    const { wells, strength, history } = get();
    const next: SavedMix = {
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
      hex,
      wells: wells.map((w) => ({ ...w })),
      strength,
      savedAt: Date.now(),
    };
    set({
      history: [next, ...history.filter((h) => h.hex !== hex)].slice(0, 16),
    });
  },
  restoreMix: (id) => {
    const found = get().history.find((h) => h.id === id);
    if (!found) return;
    set({ wells: found.wells.map((w) => ({ ...w })), strength: found.strength });
  },
  removeMix: (id) =>
    set((s) => ({ history: s.history.filter((h) => h.id !== id) })),
  hydrate: (payload) =>
    set((s) => ({
      wells: payload.wells?.length === 3 ? payload.wells : s.wells,
      strength: payload.strength ?? s.strength,
      history: payload.history ?? s.history,
    })),
}));
