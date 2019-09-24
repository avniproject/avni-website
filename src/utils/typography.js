import Typography from "typography"
const typography = new Typography({
  baseFontSize: "14px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Muli',
      styles: [
        '900',
        '900i',
        '400',
        '200',
      ]
    }
  ],
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
