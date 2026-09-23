import { PIGMENTS } from "./pigments";
import { deltaE, hexToHsl, hexToLab } from "./srgb";

function hueName(h: number): string {
  if (h < 14 || h >= 345) return "Đỏ";
  if (h < 38) return "Cam";
  if (h < 68) return "Vàng";
  if (h < 155) return "Lục";
  if (h < 188) return "Ngọc";
  if (h < 255) return "Xanh";
  if (h < 290) return "Chàm";
  return "Tím";
}

export function describeColor(hex: string): string {
  const { h, s, l } = hexToHsl(hex);

  if (s < 0.07) {
    if (l < 0.12) return "Đen";
    if (l < 0.32) return "Xám đậm";
    if (l < 0.62) return "Xám";
    if (l < 0.9) return "Xám nhạt";
    return "Trắng giấy";
  }

  const isBrown =
    h >= 12 && h <= 52 && l < 0.48 && s < 0.72 && s > 0.12;
  const isOlive = h >= 55 && h <= 95 && l < 0.45 && s < 0.55;

  let base = isBrown ? "Nâu" : isOlive ? "Lục olive" : hueName(h);

  if (h >= 250 && h < 310 && l < 0.38 && s < 0.4) base = "Xám xanh";

  const light =
    l < 0.18 ? "rất đậm" : l < 0.34 ? "đậm" : l > 0.86 ? "rất nhạt" : l > 0.72 ? "nhạt" : "";
  const dull = s < 0.22 ? "xỉn" : "";

  return [base, dull, light].filter(Boolean).join(" ");
}

export function colorTitle(hex: string): string {
  const lab = hexToLab(hex);
  let best = PIGMENTS[0];
  let bestD = Infinity;
  for (const p of PIGMENTS) {
    const d = deltaE(lab, hexToLab(p.hex));
    if (d < bestD) {
      bestD = d;
      best = p;
    }
  }
  if (best && bestD < 9) return best.nameVi;
  if (best && bestD < 16) return `Gần ${best.nameVi.toLowerCase()}`;
  return describeColor(hex);
}
