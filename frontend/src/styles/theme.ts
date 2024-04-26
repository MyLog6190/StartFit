import { DefaultTheme } from "styled-components";
import logoLightImg from "@asset/png/logo/LogoStart_Fit_Light.png";
import logoDarkImg from "@asset/png/logo/LogoStart_Fit_Dark.png";

export const light: DefaultTheme = {
  body: "#f0f2f5",
  main: "#ffffff",
  text: "#343a40",
  second: "#6c757d",
  border: "rgba(0, 0, 0, 0.1)",
  caleandar_hover: "#edf0f5",
  btnBg: "#b59369",
  selected_button_bg_color: "#1976D2",
  toggleBg: "#141529",
  login_form_bg: "#f0f0f0",
  logImg: logoLightImg,
  num_pad_btn: "##e0e0e0",
};

export const dark: DefaultTheme = {
  body: "#4d4c5a",
  main: "#141529",
  second: "#adb5bd",
  text: "#f8fbff",
  border: "#42434c",
  caleandar_hover: "#323048",
  btnBg: "#3b5998",
  selected_button_bg_color: "#2962FF",
  toggleBg: "#f3f8fe",
  login_form_bg: "#2c2c2c",
  logImg: logoDarkImg,
  num_pad_btn: "#525252",
};

export const color = {
  orange: "#FF8C00",
  yellow: "#FFA500",
  purple: "#7112ff",
};
