export type Pigment = {
  id: string;
  nameVi: string;
  nameEn: string;
  hex: string;
  group: "warm" | "red" | "cool" | "earth";
};

export const PIGMENT_GROUPS: { id: Pigment["group"]; label: string }[] = [
  { id: "warm", label: "Vàng & cam" },
  { id: "red", label: "Đỏ & hồng" },
  { id: "cool", label: "Xanh & lục" },
  { id: "earth", label: "Đất & trung tính" },
];

export const PIGMENTS: Pigment[] = [
  { id: "lemon", nameVi: "Vàng chanh", nameEn: "Cadmium Lemon", hex: "#F4E14A", group: "warm" },
  { id: "cad-yellow", nameVi: "Vàng cadmium", nameEn: "Cadmium Yellow", hex: "#F0C01A", group: "warm" },
  { id: "ochre", nameVi: "Vàng đất", nameEn: "Yellow Ochre", hex: "#C99336", group: "warm" },
  { id: "cad-orange", nameVi: "Cam cadmium", nameEn: "Cadmium Orange", hex: "#E56F24", group: "warm" },
  { id: "cad-red", nameVi: "Đỏ cadmium", nameEn: "Cadmium Red", hex: "#D13C28", group: "red" },
  { id: "alizarin", nameVi: "Đỏ alizarin", nameEn: "Alizarin Crimson", hex: "#9A2434", group: "red" },
  { id: "quin-rose", nameVi: "Hồng quinacridone", nameEn: "Quinacridone Rose", hex: "#C24768", group: "red" },
  { id: "opera", nameVi: "Hồng opera", nameEn: "Opera Pink", hex: "#E45A86", group: "red" },
  { id: "cobalt-violet", nameVi: "Tím cobalt", nameEn: "Cobalt Violet", hex: "#7A4C86", group: "red" },
  { id: "ultramarine", nameVi: "Xanh ultramarine", nameEn: "Ultramarine", hex: "#2F4C96", group: "cool" },
  { id: "cobalt", nameVi: "Xanh cobalt", nameEn: "Cobalt Blue", hex: "#2C6AAF", group: "cool" },
  { id: "cerulean", nameVi: "Xanh cerulean", nameEn: "Cerulean", hex: "#348BB8", group: "cool" },
  { id: "prussian", nameVi: "Xanh Phổ", nameEn: "Prussian Blue", hex: "#1B3A5C", group: "cool" },
  { id: "phthalo-b", nameVi: "Xanh phthalo", nameEn: "Phthalo Blue", hex: "#0D4A7C", group: "cool" },
  { id: "phthalo-g", nameVi: "Lục phthalo", nameEn: "Phthalo Green", hex: "#0E6758", group: "cool" },
  { id: "viridian", nameVi: "Lục viridian", nameEn: "Viridian", hex: "#287864", group: "cool" },
  { id: "sap", nameVi: "Lục sap", nameEn: "Sap Green", hex: "#48763A", group: "cool" },
  { id: "olive", nameVi: "Lục olive", nameEn: "Olive Green", hex: "#6A7838", group: "cool" },
  { id: "sienna", nameVi: "Nâu sienna", nameEn: "Burnt Sienna", hex: "#A65630", group: "earth" },
  { id: "umber", nameVi: "Nâu umber", nameEn: "Burnt Umber", hex: "#683E2A", group: "earth" },
  { id: "sepia", nameVi: "Nâu sepia", nameEn: "Sepia", hex: "#5A3928", group: "earth" },
  { id: "paynes", nameVi: "Xám Payne", nameEn: "Payne's Gray", hex: "#3C4954", group: "earth" },
  { id: "ivory", nameVi: "Đen ngà", nameEn: "Ivory Black", hex: "#2A2A2A", group: "earth" },
  { id: "titanium", nameVi: "Trắng titan", nameEn: "Titanium White", hex: "#F3F0E8", group: "earth" },
];

export function pigmentById(id: string | null | undefined): Pigment | undefined {
  if (!id) return undefined;
  return PIGMENTS.find((p) => p.id === id);
}

export function nearestPigment(hex: string): Pigment | undefined {
  const target = hex.replace("#", "").toUpperCase();
  return PIGMENTS.find((p) => p.hex.replace("#", "").toUpperCase() === target);
}

export const DEFAULT_WELLS: { pigmentId: string; parts: number }[] = [
  { pigmentId: "ultramarine", parts: 2 },
  { pigmentId: "cad-yellow", parts: 2 },
  { pigmentId: "alizarin", parts: 0 },
];
