import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AppRoutes from "./Routes/AppRoutes.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    button: {
      fontFamily: "'Poppins', sans-serif",
    },
  },
  palette: {
    primary: {
      main: "#0A1F3D",
    },
    secondary: {
      main: "#E8813A",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          fontFamily: "'Poppins', sans-serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        a: {
          fontFamily: "'Poppins', sans-serif",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif",
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Box component="main" sx={{ flex: 1 }}>
          <ScrollToTop />
          <AppRoutes />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
