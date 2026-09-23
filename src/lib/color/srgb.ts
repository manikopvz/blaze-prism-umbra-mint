export type RGB = [number, number, number];
export type Lab = { L: number; a: number; b: number };

export function clamp(n: number, min = 0, max = 1): number {
  return Math.min(max, Math.max(min, n));
}

export function parseHex(hex: string): RGB {
  let h = hex.trim().replace("#", "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return [244, 241, 234];
  const n = Number.parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function toHex(rgb: RGB): string {
  const [r, g, b] = rgb.map((c) =>
    Math.round(clamp(c, 0, 255)).toString(16).padStart(2, "0"),
  );
  return `#${r}${g}${b}`.toUpperCase();
}

export function srgbToLinear(c: number): number {
  const x = clamp(c / 255);
  return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
}

export function linearToSrgb(c: number): number {
  const x = clamp(c);
  const s = x <= 0.0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - 0.055;
  return clamp(s) * 255;
}

export function hexToLinear(hex: string): RGB {
  const [r, g, b] = parseHex(hex);
  return [srgbToLinear(r), srgbToLinear(g), srgbToLinear(b)];
}

export function linearToHex(lin: RGB): string {
  return toHex([linearToSrgb(lin[0]), linearToSrgb(lin[1]), linearToSrgb(lin[2])]);
}

export function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToLinear(hex);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function inkOn(hex: string): "dark" | "light" {
  return relativeLuminance(hex) > 0.42 ? "dark" : "light";
}

export function rgbToXyz(lin: RGB): RGB {
  const [r, g, b] = lin;
  return [
    0.4124564 * r + 0.3575761 * g + 0.1804375 * b,
    0.2126729 * r + 0.7151522 * g + 0.072175 * b,
    0.0193339 * r + 0.119192 * g + 0.9503041 * b,
  ];
}

function labF(t: number): number {
  return t > 216 / 24389 ? Math.cbrt(t) : (841 / 108) * t + 4 / 29;
}

export function hexToLab(hex: string): Lab {
  const [x, y, z] = rgbToXyz(hexToLinear(hex));
  const fx = labF(x / 0.95047);
  const fy = labF(y / 1);
  const fz = labF(z / 1.08883);
  return { L: 116 * fy - 16, a: 500 * (fx - fy), b: 200 * (fy - fz) };
}

export function deltaE(a: Lab, b: Lab): number {
  return Math.hypot(a.L - b.L, a.a - b.a, a.b - b.b);
}

export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const [r0, g0, b0] = parseHex(hex);
  const r = r0 / 255;
  const g = g0 / 255;
  const b = b0 / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return { h: h * 60, s, l };
}
