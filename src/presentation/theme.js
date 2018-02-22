import createTheme from "spectacle/lib/themes/default";

export default createTheme(
  {
    primary: "#222222",
    secondary: "#FFFFFF",
    tertiary: "#00CDBE",
    quarternary: "#333",
    fifth: "#FF426F"
  },
  {
    primary: {
      name: "Lato",
      googleFont: true,
      styles: ["400", "700i"]
    },
    secondary: {
      name: "Droid Serif",
      googleFont: true,
      styles: ["400", "700i"]
    },
    tertiary: {
      name: "Inconsolata",
      googleFont: true,
      styles: ["400", "700"]
    }
  }
);
