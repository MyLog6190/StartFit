import { DefaultTheme } from "styled-components";
import logoLightImg from "@asset/png/logo/LogoStart_Fit_Light.png";
import logoDarkImg from "@asset/png/logo/LogoStart_Fit_Dark.png";

export const light: DefaultTheme = {
  body: "#f3f8fe",
  main: "#fdfdfd",
  second: "#c3c2c8",
  text: "#151426",
  border: "rgba(0, 0, 0, 0.1)",
  hover: "#edf0f5",
  circle: "#e9ecef",
  barBg: "#b59369",
  toggleBg: "#141529",
  logImg: logoLightImg,
};

export const dark: DefaultTheme = {
  body: "#4d4c5a",
  main: "#141529",
  second: "#79788c",
  text: "#f8fbff",
  border: "#42434c",
  hover: "#323048",
  circle: "#0000ff",
  circle2: "#3b5998",
  barBg: "#3b5998",
  toggleBg: "#f3f8fe",
  logImg: logoDarkImg,
};
