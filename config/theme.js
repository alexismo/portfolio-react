import { darken, lighten } from "polished";

const brand = {
  primary: "#41D3BD",
  secondary: "#32A190",
  text: "#3CC2AE"
};

const colors = {
  grey: "#444449",
  black: "#000",
  white: "#FFF",
  cardSurface: "#FFFFF7",
  body_color: "#222",
  link_color: brand.primary,
  link_color_hover: `${lighten(0.46, brand.primary)}`
};

const overlay = {
  jaguar: "#E0231F",
  bombardier: "#D19000",
  classroom: "#1a7fff",
  englishlive: "#38ddb9",
  ampup: "#f60"
};

const theme = {
  brand,
  overlay,
  colors,
  breakpoints: {
    xs: "400px",
    s: "600px",
    m: "900px",
    l: "1200px"
  },
  container: {
    base: "100rem",
    text: "55rem"
  },
  duration: {
    short: "0.225s"
  },
  spacer: {
    horizontal: "2rem",
    vertical: "3rem"
  }
};

export default theme;
