import {
  clamp,
  hexToLinear,
  linearToHex,
  linearToSrgb,
  parseHex,
  toHex,
  type RGB,
} from "./srgb";

export type MixMode = "physical" | "digital";

export type MixInput = {
  hex: string;
  parts: number;
};

export type MixResult = {
  hex: string;
  rgb: RGB;
};

const KS_MIN = 1e-5;
const R_MIN = 1e-4;
const R_MAX = 1 - 1e-4;

function reflectanceToKS(r: number): number {
  const R = clamp(r, R_MIN, R_MAX);
  return ((1 - R) * (1 - R)) / (2 * R);
}

function ksToReflectance(ks: number): number {
  const a = Math.max(ks, 0);
  return clamp(1 + a - Math.sqrt(a * (a + 2)));
}

function weighted(inputs: MixInput[]): MixInput[] {
  return inputs.filter((p) => p.parts > 0 && Number.isFinite(p.parts));
}

function mixPhysicalLinear(active: MixInput[], strength: number): RGB {
  const total = active.reduce((s, p) => s + p.parts, 0);
  const ks: RGB = [0, 0, 0];
  for (const p of active) {
    const w = (p.parts / total) * strength;
    const lin = hexToLinear(p.hex);
    ks[0] += w * reflectanceToKS(lin[0]);
    ks[1] += w * reflectanceToKS(lin[1]);
    ks[2] += w * reflectanceToKS(lin[2]);
  }
  return [
    ksToReflectance(ks[0] || KS_MIN),
    ksToReflectance(ks[1] || KS_MIN),
    ksToReflectance(ks[2] || KS_MIN),
  ];
}

function mixDigitalLinear(active: MixInput[], strength: number): RGB {
  const total = active.reduce((s, p) => s + p.parts, 0);
  const acc: RGB = [0, 0, 0];
  for (const p of active) {
    const w = p.parts / total;
    const lin = hexToLinear(p.hex);
    acc[0] += w * lin[0];
    acc[1] += w * lin[1];
    acc[2] += w * lin[2];
  }
  return [
    acc[0] * strength + (1 - strength),
    acc[1] * strength + (1 - strength),
    acc[2] * strength + (1 - strength),
  ];
}

export function mixColors(
  inputs: MixInput[],
  strength: number,
  mode: MixMode,
): MixResult {
  const active = weighted(inputs);
  const s = clamp(strength, 0.02, 1);
  if (active.length === 0) {
    return { hex: "#F4F1EA", rgb: [244, 241, 234] };
  }
  const lin = mode === "physical" ? mixPhysicalLinear(active, s) : mixDigitalLinear(active, s);
  const rgb: RGB = [linearToSrgb(lin[0]), linearToSrgb(lin[1]), linearToSrgb(lin[2])];
  return { hex: toHex(rgb), rgb };
}

export function mixHex(inputs: MixInput[], strength: number, mode: MixMode): string {
  return mixColors(inputs, strength, mode).hex;
}

export function washStops(
  inputs: MixInput[],
  mode: MixMode,
  count = 12,
): string[] {
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    const t = 0.08 + (0.92 * i) / Math.max(1, count - 1);
    out.push(mixHex(inputs, t, mode));
  }
  return out;
}

export function rgbCss(hex: string): string {
  const [r, g, b] = parseHex(hex);
  return `${r}  ${g}  ${b}`;
}

export function linearToHexSafe(lin: RGB): string {
  return linearToHex(lin);
}
