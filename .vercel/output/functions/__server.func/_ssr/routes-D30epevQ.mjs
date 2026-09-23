import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Droplets, c as Bookmark, i as RotateCcw, o as Copy, r as Shuffle, s as Check, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D30epevQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-[var(--ease-smooth-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-92",
			secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
			outline: "border border-border bg-transparent text-foreground hover:bg-secondary",
			ghost: "text-foreground hover:bg-secondary",
			destructive: "bg-destructive text-destructive-foreground hover:opacity-92"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11",
			"icon-sm": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "label",
		className: cn("text-xs font-medium tracking-wide text-muted-foreground", className),
		...props
	});
}
function Slider({ className, value, defaultValue, min = 0, max = 100, ...props }) {
	const [mounted, setMounted] = import_react.useState(false);
	import_react.useEffect(() => setMounted(true), []);
	const current = value?.[0] ?? defaultValue?.[0] ?? min;
	const pct = (Number(current) - Number(min)) / (Number(max) - Number(min)) * 100;
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative flex w-full items-center py-3", className),
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute h-full rounded-full bg-primary",
				style: { width: `${Math.max(0, Math.min(100, pct))}%` }
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		"data-slot": "slider",
		className: cn("relative flex w-full touch-none select-none items-center py-3", className),
		value,
		defaultValue,
		min,
		max,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-5 rounded-full border border-primary/30 bg-popover shadow-sm ring-offset-background transition-[box-shadow,transform] duration-150 ease-[var(--ease-smooth-out)] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none" })]
	});
}
function HistoryStrip({ items, onRestore, onRemove }) {
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-card/60 px-4 py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Sắc đã lưu" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: "Lưu màu hỗn hợp để gọi lại công thức tỷ lệ."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Sắc đã lưu" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onRestore(item.id),
					className: cn("size-14 rounded-full ring-1 ring-foreground/10 transition-transform duration-150 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none"),
					style: { background: `radial-gradient(circle at 35% 30%, color-mix(in oklab, ${item.hex} 70%, white), ${item.hex})` },
					"aria-label": `Khôi phục ${item.hex}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon-sm",
					className: "absolute -top-1 -right-1 size-6 rounded-full bg-popover text-muted-foreground shadow-sm",
					"aria-label": "Xóa sắc đã lưu",
					onClick: (e) => {
						e.stopPropagation();
						onRemove(item.id);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
				})]
			}, item.id))
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-foreground/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed z-50 grid w-full gap-4 border border-border bg-popover p-5 text-popover-foreground shadow-tray duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", "inset-x-0 bottom-0 max-h-[88dvh] overflow-y-auto rounded-t-xl", "sm:inset-auto sm:top-1/2 sm:left-1/2 sm:max-h-[85vh] sm:w-full sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 rounded-sm p-2 text-muted-foreground opacity-80 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Đóng"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1 pr-8 text-left", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-xl font-medium tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		"data-slot": "input",
		className: cn("flex h-11 w-full rounded-md border border-input bg-popover px-3 text-sm text-foreground shadow-none transition-[border-color,box-shadow] duration-150 ease-[var(--ease-smooth-out)] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function clamp(n, min = 0, max = 1) {
	return Math.min(max, Math.max(min, n));
}
function parseHex(hex) {
	let h = hex.trim().replace("#", "");
	if (h.length === 3) h = h.split("").map((c) => c + c).join("");
	if (!/^[0-9a-fA-F]{6}$/.test(h)) return [
		244,
		241,
		234
	];
	const n = Number.parseInt(h, 16);
	return [
		n >> 16 & 255,
		n >> 8 & 255,
		n & 255
	];
}
function toHex(rgb) {
	const [r, g, b] = rgb.map((c) => Math.round(clamp(c, 0, 255)).toString(16).padStart(2, "0"));
	return `#${r}${g}${b}`.toUpperCase();
}
function srgbToLinear(c) {
	const x = clamp(c / 255);
	return x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4;
}
function linearToSrgb(c) {
	const x = clamp(c);
	return clamp(x <= .0031308 ? 12.92 * x : 1.055 * x ** (1 / 2.4) - .055) * 255;
}
function hexToLinear(hex) {
	const [r, g, b] = parseHex(hex);
	return [
		srgbToLinear(r),
		srgbToLinear(g),
		srgbToLinear(b)
	];
}
function relativeLuminance(hex) {
	const [r, g, b] = hexToLinear(hex);
	return .2126 * r + .7152 * g + .0722 * b;
}
function inkOn(hex) {
	return relativeLuminance(hex) > .42 ? "dark" : "light";
}
function rgbToXyz(lin) {
	const [r, g, b] = lin;
	return [
		.4124564 * r + .3575761 * g + .1804375 * b,
		.2126729 * r + .7151522 * g + .072175 * b,
		.0193339 * r + .119192 * g + .9503041 * b
	];
}
function labF(t) {
	return t > 216 / 24389 ? Math.cbrt(t) : 841 / 108 * t + 4 / 29;
}
function hexToLab(hex) {
	const [x, y, z] = rgbToXyz(hexToLinear(hex));
	const fx = labF(x / .95047);
	const fy = labF(y / 1);
	const fz = labF(z / 1.08883);
	return {
		L: 116 * fy - 16,
		a: 500 * (fx - fy),
		b: 200 * (fy - fz)
	};
}
function deltaE(a, b) {
	return Math.hypot(a.L - b.L, a.a - b.a, a.b - b.b);
}
function hexToHsl(hex) {
	const [r0, g0, b0] = parseHex(hex);
	const r = r0 / 255;
	const g = g0 / 255;
	const b = b0 / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	const l = (max + min) / 2;
	if (max === min) return {
		h: 0,
		s: 0,
		l
	};
	const d = max - min;
	const s = l > .5 ? d / (2 - max - min) : d / (max + min);
	let h = 0;
	if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
	else if (max === g) h = (b - r) / d + 2;
	else h = (r - g) / d + 4;
	return {
		h: h * 60,
		s,
		l
	};
}
var sizeClass = {
	sm: "size-11",
	md: "size-[4.35rem] sm:size-24",
	lg: "size-28 sm:size-32"
};
function PaintPan({ hex, size = "md", active = false, onClick, label, className }) {
	const ink = inkOn(hex);
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("relative block overflow-hidden rounded-full", sizeClass[size], "ring-1 ring-foreground/10", active && "ring-2 ring-primary"),
		style: {
			background: `radial-gradient(circle at 34% 28%, color-mix(in oklab, ${hex} 72%, white), ${hex} 52%, color-mix(in oklab, ${hex} 72%, black))`,
			boxShadow: "inset 0 -10px 18px rgba(0,0,0,0.22), inset 0 8px 12px rgba(255,255,255,0.22), 0 6px 14px rgba(40,30,18,0.16)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "absolute top-[16%] left-[20%] size-[28%] rounded-full opacity-50",
			style: { background: "radial-gradient(circle, rgba(255,255,255,0.55), transparent 70%)" }
		})
	});
	if (!onClick) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex", className),
		title: label,
		children: inner
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		"aria-label": label ?? "Chọn màu",
		className: cn("inline-flex rounded-full bg-popover p-1.5 shadow-pan transition-transform duration-150 ease-[var(--ease-smooth-out)] hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none", className),
		children: [inner, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: ink === "dark" ? "màu sáng" : "màu tối"
		})]
	});
}
var PIGMENT_GROUPS = [
	{
		id: "warm",
		label: "Vàng & cam"
	},
	{
		id: "red",
		label: "Đỏ & hồng"
	},
	{
		id: "cool",
		label: "Xanh & lục"
	},
	{
		id: "earth",
		label: "Đất & trung tính"
	}
];
var PIGMENTS = [
	{
		id: "lemon",
		nameVi: "Vàng chanh",
		nameEn: "Cadmium Lemon",
		hex: "#F4E14A",
		group: "warm"
	},
	{
		id: "cad-yellow",
		nameVi: "Vàng cadmium",
		nameEn: "Cadmium Yellow",
		hex: "#F0C01A",
		group: "warm"
	},
	{
		id: "ochre",
		nameVi: "Vàng đất",
		nameEn: "Yellow Ochre",
		hex: "#C99336",
		group: "warm"
	},
	{
		id: "cad-orange",
		nameVi: "Cam cadmium",
		nameEn: "Cadmium Orange",
		hex: "#E56F24",
		group: "warm"
	},
	{
		id: "cad-red",
		nameVi: "Đỏ cadmium",
		nameEn: "Cadmium Red",
		hex: "#D13C28",
		group: "red"
	},
	{
		id: "alizarin",
		nameVi: "Đỏ alizarin",
		nameEn: "Alizarin Crimson",
		hex: "#9A2434",
		group: "red"
	},
	{
		id: "quin-rose",
		nameVi: "Hồng quinacridone",
		nameEn: "Quinacridone Rose",
		hex: "#C24768",
		group: "red"
	},
	{
		id: "opera",
		nameVi: "Hồng opera",
		nameEn: "Opera Pink",
		hex: "#E45A86",
		group: "red"
	},
	{
		id: "cobalt-violet",
		nameVi: "Tím cobalt",
		nameEn: "Cobalt Violet",
		hex: "#7A4C86",
		group: "red"
	},
	{
		id: "ultramarine",
		nameVi: "Xanh ultramarine",
		nameEn: "Ultramarine",
		hex: "#2F4C96",
		group: "cool"
	},
	{
		id: "cobalt",
		nameVi: "Xanh cobalt",
		nameEn: "Cobalt Blue",
		hex: "#2C6AAF",
		group: "cool"
	},
	{
		id: "cerulean",
		nameVi: "Xanh cerulean",
		nameEn: "Cerulean",
		hex: "#348BB8",
		group: "cool"
	},
	{
		id: "prussian",
		nameVi: "Xanh Phổ",
		nameEn: "Prussian Blue",
		hex: "#1B3A5C",
		group: "cool"
	},
	{
		id: "phthalo-b",
		nameVi: "Xanh phthalo",
		nameEn: "Phthalo Blue",
		hex: "#0D4A7C",
		group: "cool"
	},
	{
		id: "phthalo-g",
		nameVi: "Lục phthalo",
		nameEn: "Phthalo Green",
		hex: "#0E6758",
		group: "cool"
	},
	{
		id: "viridian",
		nameVi: "Lục viridian",
		nameEn: "Viridian",
		hex: "#287864",
		group: "cool"
	},
	{
		id: "sap",
		nameVi: "Lục sap",
		nameEn: "Sap Green",
		hex: "#48763A",
		group: "cool"
	},
	{
		id: "olive",
		nameVi: "Lục olive",
		nameEn: "Olive Green",
		hex: "#6A7838",
		group: "cool"
	},
	{
		id: "sienna",
		nameVi: "Nâu sienna",
		nameEn: "Burnt Sienna",
		hex: "#A65630",
		group: "earth"
	},
	{
		id: "umber",
		nameVi: "Nâu umber",
		nameEn: "Burnt Umber",
		hex: "#683E2A",
		group: "earth"
	},
	{
		id: "sepia",
		nameVi: "Nâu sepia",
		nameEn: "Sepia",
		hex: "#5A3928",
		group: "earth"
	},
	{
		id: "paynes",
		nameVi: "Xám Payne",
		nameEn: "Payne's Gray",
		hex: "#3C4954",
		group: "earth"
	},
	{
		id: "ivory",
		nameVi: "Đen ngà",
		nameEn: "Ivory Black",
		hex: "#2A2A2A",
		group: "earth"
	},
	{
		id: "titanium",
		nameVi: "Trắng titan",
		nameEn: "Titanium White",
		hex: "#F3F0E8",
		group: "earth"
	}
];
function pigmentById(id) {
	if (!id) return void 0;
	return PIGMENTS.find((p) => p.id === id);
}
var DEFAULT_WELLS = [
	{
		pigmentId: "ultramarine",
		parts: 2
	},
	{
		pigmentId: "cad-yellow",
		parts: 2
	},
	{
		pigmentId: "alizarin",
		parts: 0
	}
];
function normalizeHex(value) {
	const v = value.trim().replace("#", "");
	if (/^[0-9a-fA-F]{3}$/.test(v)) return toHex(parseHex(`#${v}`));
	if (/^[0-9a-fA-F]{6}$/.test(v)) return `#${v.toUpperCase()}`;
	return null;
}
function PigmentPicker({ open, hex, onOpenChange, onSelect }) {
	const [draft, setDraft] = (0, import_react.useState)(hex);
	(0, import_react.useEffect)(() => {
		if (open) setDraft(hex);
	}, [open, hex]);
	const applyHex = (value, pigmentId) => {
		const next = normalizeHex(value);
		if (!next) return;
		onSelect(next, pigmentId);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Chọn sắc tố" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Màu từ hộp màu nước cổ điển, hoặc tự pha mã hex." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5",
			children: [PIGMENT_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-medium tracking-wide text-muted-foreground uppercase",
					children: group.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-4 gap-2 sm:grid-cols-6",
					children: PIGMENTS.filter((p) => p.group === group.id).map((p) => {
						const selected = p.hex.toUpperCase() === hex.toUpperCase();
						const ink = inkOn(p.hex);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								applyHex(p.hex, p.id);
								onOpenChange(false);
							},
							className: cn("flex flex-col items-center gap-1.5 rounded-md p-2 text-center transition-colors duration-150 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none", selected && "bg-secondary"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaintPan, {
									hex: p.hex,
									size: "sm"
								}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("absolute -right-0.5 -bottom-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-2.5",
										strokeWidth: 3
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("line-clamp-2 text-[11px] leading-tight text-foreground", ink === "light" ? "" : ""),
								children: p.nameVi
							})]
						}, p.id);
					})
				})]
			}, group.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-2 border-t border-border pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "custom-hex",
					children: "Tùy chỉnh"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "relative size-11 shrink-0 overflow-hidden rounded-md border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-0",
								style: { background: normalizeHex(draft) ?? hex }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "color",
								value: (normalizeHex(draft) ?? hex).slice(0, 7),
								onChange: (e) => {
									setDraft(e.target.value);
									applyHex(e.target.value, null);
								},
								className: "absolute inset-0 cursor-pointer opacity-0",
								"aria-label": "Chọn màu tùy chỉnh"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "custom-hex",
							value: draft,
							onChange: (e) => setDraft(e.target.value),
							onBlur: () => {
								const next = normalizeHex(draft);
								if (next) {
									setDraft(next);
									applyHex(next, null);
								} else setDraft(hex);
							},
							onKeyDown: (e) => {
								if (e.key === "Enter") {
									const next = normalizeHex(draft);
									if (next) {
										setDraft(next);
										applyHex(next, null);
										onOpenChange(false);
									}
								}
							},
							spellCheck: false,
							className: "font-mono uppercase",
							placeholder: "#2F4C96"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: () => {
								const next = normalizeHex(draft);
								if (next) {
									applyHex(next, null);
									onOpenChange(false);
								}
							},
							children: "Xong"
						})
					]
				})]
			})]
		})] })
	});
}
function PigmentWell({ index, well, percent, onOpenPicker, onParts }) {
	const name = pigmentById(well.pigmentId)?.nameVi ?? `Màu ${index + 1}`;
	const unused = well.parts <= 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("flex flex-col items-center gap-2 rounded-lg bg-card/70 px-1.5 py-3 sm:gap-3 sm:px-3 sm:py-4", unused && "opacity-55"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaintPan, {
				hex: well.hex,
				size: "md",
				onClick: onOpenPicker,
				label: `Đổi ${name}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full min-w-0 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-medium text-foreground",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] text-muted-foreground tabular-nums",
					children: well.hex
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full min-w-0 flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-center",
						children: "Tỷ lệ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						inputMode: "numeric",
						value: well.parts,
						onChange: (e) => {
							const n = Number.parseInt(e.target.value.replace(/\D/g, ""), 10);
							if (Number.isNaN(n)) onParts(0);
							else onParts(n);
						},
						className: "h-11 px-1 text-center font-mono tabular-nums",
						"aria-label": `Tỷ lệ màu ${index + 1}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: 0,
						max: 20,
						step: 1,
						value: [well.parts],
						onValueChange: (v) => onParts(v[0] ?? 0),
						"aria-label": `Thanh tỷ lệ màu ${index + 1}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center font-mono text-xs text-muted-foreground tabular-nums",
						children: unused ? "Không dùng" : `${percent}%`
					})
				]
			})
		]
	});
}
var KS_MIN = 1e-5;
var R_MIN = 1e-4;
var R_MAX = .9999;
function reflectanceToKS(r) {
	const R = clamp(r, R_MIN, R_MAX);
	return (1 - R) * (1 - R) / (2 * R);
}
function ksToReflectance(ks) {
	const a = Math.max(ks, 0);
	return clamp(1 + a - Math.sqrt(a * (a + 2)));
}
function weighted(inputs) {
	return inputs.filter((p) => p.parts > 0 && Number.isFinite(p.parts));
}
function mixPhysicalLinear(active, strength) {
	const total = active.reduce((s, p) => s + p.parts, 0);
	const ks = [
		0,
		0,
		0
	];
	for (const p of active) {
		const w = p.parts / total * strength;
		const lin = hexToLinear(p.hex);
		ks[0] += w * reflectanceToKS(lin[0]);
		ks[1] += w * reflectanceToKS(lin[1]);
		ks[2] += w * reflectanceToKS(lin[2]);
	}
	return [
		ksToReflectance(ks[0] || KS_MIN),
		ksToReflectance(ks[1] || KS_MIN),
		ksToReflectance(ks[2] || KS_MIN)
	];
}
function mixDigitalLinear(active, strength) {
	const total = active.reduce((s, p) => s + p.parts, 0);
	const acc = [
		0,
		0,
		0
	];
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
		acc[2] * strength + (1 - strength)
	];
}
function mixColors(inputs, strength, mode) {
	const active = weighted(inputs);
	const s = clamp(strength, .02, 1);
	if (active.length === 0) return {
		hex: "#F4F1EA",
		rgb: [
			244,
			241,
			234
		]
	};
	const lin = mode === "physical" ? mixPhysicalLinear(active, s) : mixDigitalLinear(active, s);
	const rgb = [
		linearToSrgb(lin[0]),
		linearToSrgb(lin[1]),
		linearToSrgb(lin[2])
	];
	return {
		hex: toHex(rgb),
		rgb
	};
}
function mixHex(inputs, strength, mode) {
	return mixColors(inputs, strength, mode).hex;
}
function rgbCss(hex) {
	const [r, g, b] = parseHex(hex);
	return `${r}  ${g}  ${b}`;
}
function WashStrip({ inputs, mode }) {
	const stops = Array.from({ length: 10 }, (_, i) => {
		return mixHex(inputs, .1 + .9 * i / 9, mode);
	});
	const gradient = `linear-gradient(90deg, ${stops.map((c, i) => `${c} ${i / (stops.length - 1) * 100}%`).join(", ")})`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Vệt loãng → đặc" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] text-muted-foreground",
					children: "Thang độ nước"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-12 overflow-hidden rounded-md ring-1 ring-foreground/8",
				style: {
					backgroundImage: `${gradient}, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2  0 0 0 0 0.17  0 0 0 0 0.12  0 0 0 0.18 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
					backgroundBlendMode: "multiply"
				},
				role: "img",
				"aria-label": "Thang màu từ loãng đến đặc"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between text-[11px] text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loãng" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Đặc" })]
			})
		]
	});
}
function WatercolorBlot({ hex, className, rounded = "full" }) {
	const uid = (0, import_react.useId)().replace(/:/g, "");
	const filterId = `wash-${uid}`;
	const edgeId = `edge-${uid}`;
	const gradId = `grad-${uid}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden", rounded === "full" ? "rounded-full" : "rounded-xl", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 320 220",
			className: "size-full",
			preserveAspectRatio: "xMidYMid slice",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
						id: gradId,
						cx: "46%",
						cy: "40%",
						r: "70%",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: hex,
								stopOpacity: "0.98"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "62%",
								stopColor: hex,
								stopOpacity: "0.82"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: hex,
								stopOpacity: "0.2"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
						id: filterId,
						x: "-25%",
						y: "-25%",
						width: "150%",
						height: "150%",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feTurbulence", {
							type: "fractalNoise",
							baseFrequency: "0.018 0.03",
							numOctaves: "4",
							seed: "4",
							result: "noise"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDisplacementMap", {
							in: "SourceGraphic",
							in2: "noise",
							scale: "28",
							xChannelSelector: "R",
							yChannelSelector: "G"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
						id: edgeId,
						x: "-25%",
						y: "-25%",
						width: "150%",
						height: "150%",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feTurbulence", {
							type: "fractalNoise",
							baseFrequency: "0.04",
							numOctaves: "2",
							seed: "11",
							result: "n"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDisplacementMap", {
							in: "SourceGraphic",
							in2: "n",
							scale: "14"
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M86 96c8-38 48-62 92-58 38 4 78 28 86 62 8 36-10 72-48 86-32 12-78 8-108-12-28-18-32-42-22-78z",
					fill: `url(#${gradId})`,
					filter: `url(#${filterId})`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M108 102c6-24 34-40 64-36 28 4 52 22 56 44 5 26-12 50-38 58-26 8-60 2-80-16-16-14-16-30-2-50z",
					fill: hex,
					opacity: "0.28",
					filter: `url(#${edgeId})`
				})
			]
		})
	});
}
function hueName(h) {
	if (h < 14 || h >= 345) return "Đỏ";
	if (h < 38) return "Cam";
	if (h < 68) return "Vàng";
	if (h < 155) return "Lục";
	if (h < 188) return "Ngọc";
	if (h < 255) return "Xanh";
	if (h < 290) return "Chàm";
	return "Tím";
}
function describeColor(hex) {
	const { h, s, l } = hexToHsl(hex);
	if (s < .07) {
		if (l < .12) return "Đen";
		if (l < .32) return "Xám đậm";
		if (l < .62) return "Xám";
		if (l < .9) return "Xám nhạt";
		return "Trắng giấy";
	}
	let base = h >= 12 && h <= 52 && l < .48 && s < .72 && s > .12 ? "Nâu" : h >= 55 && h <= 95 && l < .45 && s < .55 ? "Lục olive" : hueName(h);
	if (h >= 250 && h < 310 && l < .38 && s < .4) base = "Xám xanh";
	return [
		base,
		s < .22 ? "xỉn" : "",
		l < .18 ? "rất đậm" : l < .34 ? "đậm" : l > .86 ? "rất nhạt" : l > .72 ? "nhạt" : ""
	].filter(Boolean).join(" ");
}
function colorTitle(hex) {
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
function wellFromPigment(pigmentId, parts) {
	return {
		pigmentId,
		hex: pigmentById(pigmentId)?.hex ?? "#808080",
		parts
	};
}
var defaultWells = () => DEFAULT_WELLS.map((w) => wellFromPigment(w.pigmentId, w.parts));
var STORAGE_KEY = "sac-nuoc-v1";
var useMixerStore = create((set, get) => ({
	wells: defaultWells(),
	strength: .72,
	history: [],
	setHex: (index, hex, pigmentId = null) => set((s) => ({ wells: s.wells.map((w, i) => i === index ? {
		...w,
		hex: hex.toUpperCase(),
		pigmentId
	} : w) })),
	setParts: (index, parts) => set((s) => ({ wells: s.wells.map((w, i) => i === index ? {
		...w,
		parts: Math.max(0, Math.min(20, parts))
	} : w) })),
	setStrength: (strength) => set({ strength: Math.max(.06, Math.min(1, strength)) }),
	applyPreset: (parts) => set((s) => ({ wells: s.wells.map((w, i) => ({
		...w,
		parts: parts[i] ?? w.parts
	})) })),
	randomize: () => {
		const pool = [...PIGMENTS];
		const pick = [];
		for (let i = 0; i < 3; i++) {
			const idx = Math.floor(Math.random() * pool.length);
			const p = pool.splice(idx, 1)[0];
			pick.push({
				pigmentId: p.id,
				hex: p.hex,
				parts: 1 + Math.floor(Math.random() * 3)
			});
		}
		set({
			wells: pick,
			strength: .55 + Math.random() * .35
		});
	},
	reset: () => set({
		wells: defaultWells(),
		strength: .72
	}),
	saveMix: (hex) => {
		const { wells, strength, history } = get();
		set({ history: [{
			id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
			hex,
			wells: wells.map((w) => ({ ...w })),
			strength,
			savedAt: Date.now()
		}, ...history.filter((h) => h.hex !== hex)].slice(0, 16) });
	},
	restoreMix: (id) => {
		const found = get().history.find((h) => h.id === id);
		if (!found) return;
		set({
			wells: found.wells.map((w) => ({ ...w })),
			strength: found.strength
		});
	},
	removeMix: (id) => set((s) => ({ history: s.history.filter((h) => h.id !== id) })),
	hydrate: (payload) => set((s) => ({
		wells: payload.wells?.length === 3 ? payload.wells : s.wells,
		strength: payload.strength ?? s.strength,
		history: payload.history ?? s.history
	}))
}));
var PRESETS = [
	{
		label: "1:1:1",
		parts: [
			1,
			1,
			1
		]
	},
	{
		label: "2:1:1",
		parts: [
			2,
			1,
			1
		]
	},
	{
		label: "1:2:1",
		parts: [
			1,
			2,
			1
		]
	},
	{
		label: "1:1:2",
		parts: [
			1,
			1,
			2
		]
	},
	{
		label: "2:1:0",
		parts: [
			2,
			1,
			0
		]
	},
	{
		label: "1:2:0",
		parts: [
			1,
			2,
			0
		]
	}
];
function Studio() {
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
	const [mode, setMode] = (0, import_react.useState)("physical");
	const [picker, setPicker] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				hydrate({
					wells: Array.isArray(parsed.wells) ? parsed.wells : void 0,
					strength: parsed.strength,
					history: Array.isArray(parsed.history) ? parsed.history : void 0
				});
			}
		} catch {}
		return useMixerStore.subscribe((s) => {
			localStorage.setItem(STORAGE_KEY, JSON.stringify({
				wells: s.wells,
				strength: s.strength,
				history: s.history
			}));
		});
	}, [hydrate]);
	const inputs = wells.map((w) => ({
		hex: w.hex,
		parts: w.parts
	}));
	const totalParts = wells.reduce((s, w) => s + w.parts, 0);
	const physical = (0, import_react.useMemo)(() => mixColors(inputs, strength, "physical"), [wells, strength]);
	const digital = (0, import_react.useMemo)(() => mixColors(inputs, strength, "digital"), [wells, strength]);
	const active = mode === "physical" ? physical : digital;
	const title = colorTitle(active.hex);
	const recipe = wells.map((w) => w.parts).join(" : ");
	const copyHex = async () => {
		const value = active.hex;
		try {
			if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(value);
			else throw new Error("clipboard");
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 pt-6 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-6 sm:pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "mb-6 flex items-start justify-between gap-4 sm:mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-1 flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "size-3.5 text-primary" }), "Studio màu nước"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl font-medium tracking-tight italic sm:text-5xl",
						children: "Sắc Nước"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-md text-sm leading-relaxed text-muted-foreground",
						children: "Ba ô sắc tố, nhập tỷ lệ, xem màu thật khi bột màu hấp thụ ánh sáng trên giấy."
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-card p-4 shadow-tray sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-lg bg-background/80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WatercolorBlot, {
							hex: active.hex,
							rounded: "tray",
							className: "mx-auto h-56 w-full sm:h-72"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-medium tracking-tight text-foreground",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex flex-wrap items-center gap-x-3 gap-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: copyHex,
									className: "font-mono text-sm text-foreground tabular-nums underline-offset-4 hover:underline",
									children: active.hex
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-muted-foreground tabular-nums",
									children: ["RGB ", rgbCss(active.hex)]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-muted-foreground tabular-nums",
									children: recipe
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								onClick: copyHex,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), "Sao chép"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								onClick: () => {
									saveMix(active.hex);
									toast("Đã lưu công thức");
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" }), "Lưu sắc"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareSwatch, {
							label: "Trộn vật lý",
							hex: physical.hex,
							active: mode === "physical",
							onClick: () => setMode("physical")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompareSwatch, {
							label: "Trung bình RGB",
							hex: digital.hex,
							active: mode === "digital",
							onClick: () => setMode("digital")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs leading-relaxed text-muted-foreground",
						children: "Trộn vật lý dùng Kubelka–Munk (hấp thụ ánh sáng như bột màu). Trung bình RGB là cách màn hình cộng màu — vàng với xanh thường ra xám thay vì lục."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WashStrip, {
							inputs,
							mode
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-5 rounded-xl bg-card/80 p-3 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-medium",
							children: "Ba ô sắc tố"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								onClick: randomize,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, { className: "size-3.5" }), "Ngẫu nhiên"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								onClick: reset,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), "Đặt lại"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-2 sm:gap-3",
						children: wells.map((well, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PigmentWell, {
							index: i,
							well,
							percent: totalParts === 0 ? 0 : Math.round(well.parts / totalParts * 100),
							onOpenPicker: () => setPicker(i),
							onParts: (parts) => setParts(i, parts)
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Công thức nhanh" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => applyPreset(p.parts),
								className: "h-9 rounded-full border border-border bg-background px-3 font-mono text-xs text-foreground tabular-nums transition-colors duration-150 hover:bg-secondary",
								children: p.label
							}, p.label))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-5 rounded-xl bg-card/80 p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "strength",
							children: "Lượng nước"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-muted-foreground tabular-nums",
							children: [Math.round(strength * 100), "% đặc"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						id: "strength",
						min: 6,
						max: 100,
						step: 1,
						value: [Math.round(strength * 100)],
						onValueChange: (v) => setStrength((v[0] ?? 72) / 100)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-[11px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rất loãng" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sệt" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryStrip, {
					items: history,
					onRestore: restoreMix,
					onRemove: removeMix
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-8 mb-4 text-center text-xs leading-relaxed text-muted-foreground",
				children: "Màu hiển thị gần với bột màu trên giấy, không phải cộng ánh sáng RGB."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PigmentPicker, {
				open: picker !== null,
				hex: picker !== null ? wells[picker]?.hex ?? "#888888" : "#888888",
				onOpenChange: (open) => {
					if (!open) setPicker(null);
				},
				onSelect: (hex, pigmentId) => {
					if (picker === null) return;
					const known = pigmentById(pigmentId ?? void 0);
					setHex(picker, hex, known?.id ?? null);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "bottom-center",
				toastOptions: {
					className: "font-sans",
					style: {
						background: "var(--popover)",
						color: "var(--popover-foreground)",
						border: "1px solid var(--border)"
					}
				}
			})
		]
	});
}
function CompareSwatch({ label, hex, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("flex items-center gap-3 rounded-md border px-3 py-2.5 text-left transition-colors duration-150", active ? "border-primary bg-background" : "border-border bg-background/50 hover:bg-background"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "size-8 shrink-0 rounded-full ring-1 ring-foreground/10",
			style: { background: hex },
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-xs font-medium text-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[11px] text-muted-foreground tabular-nums",
			children: hex
		})] })]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {}) });
}
//#endregion
export { Home as component };
