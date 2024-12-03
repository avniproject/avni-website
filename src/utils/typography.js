import Typography from "typography"
const typography = new Typography({
  baseFontSize: "14px",
  baseLineHeight: 1.666,
  googleFonts: [],
  headerFontFamily: [
    "Muli",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "sans-serif",
  ],
  bodyFontFamily: ["Helvetica Neue", "Segoe UI", "Helvetica", "sans-serif"],
})

typography.injectStyles()

export default typography
