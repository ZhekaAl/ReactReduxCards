import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    useNextVariants: true,
    fontFamily: ["Roboto", "serif"].join(","),
    //fontSize: '14px',
    color: "#444",
    body1: { color: "#444", fontSize: "18px" }
  },
  fontSize: "13px",

  subTitle: {
    fontSize: "14px",
    fontFamily: "Roboto",
    fontWeight: "500",
    lineHeight: "1.57"
  },
  /*
      color: #fff;
      background-color: #ee6e73;
  */
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#25a59a"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      // contrastText: "fff"
    },
    secondary: {
      //light: "#af4448",
      main: "#e57373"
      // dark: will be calculated from palette.secondary.main,
      // contrastText: "#ffcc00"
    }

    // error: will use the default color
  }

  // MuiTable: {
});
