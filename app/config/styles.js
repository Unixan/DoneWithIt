import { Platform } from "react-native";

export default {
  color: {
    primary: "#fc5c65",
    secondary: "#4ecdc4",
    white: "#fff",
    light: "#f8f4f4",
    medium: "#6e6969",
    dark: "#0c0c0c",
    black: "#000",
    danger: "#ff5252",
    warning: "#ffe66d",
  },
  text: {
    color: color.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
