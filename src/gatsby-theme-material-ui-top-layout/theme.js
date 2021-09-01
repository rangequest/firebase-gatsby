import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
  palette: {
    // type: "dark",
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#4285f4",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

export default theme;
