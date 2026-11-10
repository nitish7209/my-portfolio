// lib/theme.js
// Design tokens — matches your original dark aesthetic (zinc-950 base)

export const DARK = {
  bg:      "#09090b",
  surface: "#111113",
  card:    "#18181b",
  border:  "rgba(255,255,255,.07)",
  text:    "#fafafa",
  muted:   "#a1a1aa",
  dim:     "#84848d", // ≥ 4.5:1 on bg/surface/card (was #3f3f46, 1.9:1)
  inv:     "#09090b",
  accent:  "#4cc38a", // signal green — only for things that are live
};

export const LIGHT = {
  bg:      "#ffffff",
  surface: "#fafafa",
  card:    "#f4f4f5",
  border:  "rgba(0,0,0,.08)",
  text:    "#09090b",
  muted:   "#52525b",
  dim:     "#71717a", // ≥ 4.5:1 on white (was #d4d4d8, 1.4:1)
  inv:     "#ffffff",
  accent:  "#16a34a",
};
