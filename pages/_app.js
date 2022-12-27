import "../styles/globals.css";
import Footer from "../components/layout/Footer";
import NavbarTop from "../components/layout/Navbar/NavbarTop";
import { CssBaseline, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import nProgress from "nprogress";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../context/AuthContext";
import axios from "axios";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    direction: "rtl",
    palette: {
      light: {
        main: "#FFFFFF",
      },
      colors: {
        black: "#232931",
        gray: "#393E46",
        green: "#4ECCA3",
        white: "#EEEEEE",
        pink: "#F6416C",
        greenHover: "#3C9B7C",
      },
    },
    typography: {
      fontFamily: "iranYekan, dana",
      fontSize: "14px",
    },
  });

  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavbarTop />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
export default MyApp;
