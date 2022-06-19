import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
      },
    },
  },
  palette: {
    primary: { main: "#FFFDFD" },
    secondary: { main: "#B0B0B0" },
    background: {
      default: "#022140",
    }
  },
});
