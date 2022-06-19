import React from "react";
import { ThemeProvider } from "@emotion/react";

import { theme } from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Home } from "./components";
import { SocketContext, socket } from "./context/socket";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SocketContext.Provider value={socket}>
          <CssBaseline />
          <Home />
        </SocketContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
