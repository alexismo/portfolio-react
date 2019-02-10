import { darken, lighten } from "polished";

const brand = {
  primary: "#444449",
  secondary: "#7b8acc"
};

const colors = {
  grey: "#444449",
  black: "#000",
  white: "#FFF",
  bg_color: "#f3f3f3",
  body_color: "#222",
  link_color: brand.primary,
  link_color_hover: `${lighten(0.46, brand.primary)}`
};

export const overlay = {
  jaguar: "#E0231F",
  bombardier: "#D19000",
  classroom: "#1a7fff",
  englishlive: "#38ddb9",
  ampup: "#f60"
};

const theme = {
  brand,
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
