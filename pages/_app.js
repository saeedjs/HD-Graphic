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
import { ToastContainer } from "react-toastify";
import Head from "next/head";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps }) {
  // const [setting, setSetting] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://hdgraphic.ir/api/v1/settings/setting")
  //     .then((res) => {
  //       setSetting(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [setting]);

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
      // fontSize: "14px",
    },
  });

  return (
    <>
      <AuthProvider>
        <ToastContainer
          toastClassName={css({ fontFamily: "Times New Roman, Serif" })}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Head>
            {/* <link rel="shortcut icon" href={"https://hdgraphic.ir" + setting.fav} /> */}
          </Head>
          <NavbarTop />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default MyApp;
