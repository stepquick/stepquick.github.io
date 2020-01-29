import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
  scaleRatio: 2.25,
  bodyWeight: 400,
  headerWeight: 700,
  headerFontFamily: ['Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  boldWeight: "bold",
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: scale(4 / 4),
    h2: scale(3 / 4),
    h3: scale(2 / 4),
    h4: scale(1 / 6),
    h5: scale(-1 / 6),
    h6: scale(-2 / 6),
    blockquote: {
      ...scale(1 / 4),
      borderLeft: `${rhythm(1 / 6)} solid #eceeef`,
      paddingTop: rhythm(1 / 3),
      paddingBottom: rhythm(1 / 3),
      paddingLeft: rhythm(2 / 3),
      paddingRight: rhythm(2 / 3),
    },
    "blockquote > :last-child": {
      marginBottom: 0,
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      fontWeight: options.bodyWeight,
      fontStyle: "normal",
    },
    a: {
      boxShadow: "0 1px 0 0 currentColor",
      color: "#007acc",
      textDecoration: "none",
    },
    "a:hover,a:active": {
      boxShadow: "none",
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
