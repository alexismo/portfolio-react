import Typography from "typography";

const config = require("../../config/website");

const typography = new Typography({
  title: "AlexisMorin",
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.5,
  headerFontFamily: [config.headerFontFamily, "sans-serif"],
  bodyFontFamily: [config.bodyFontFamily, "sans-serif"],
  scaleRatio: 2.5,
  headerWeight: 700
});

export default typography;
