import { useState } from "react";
import CheckOtp from "../../components/auth/CheckOtp";
import Login from "../../components/auth/Login";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

const LoginPage = ({ setting }) => {
  const [step, setStep] = useState(1);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          component={Paper}
          elevation={6}
          square
        >
          <img
            src={`https://hdgraphic.ir/${setting.logo}`}
            style={{ marginBottom: "20px" }}
            alt=""
          />
          <Box>
            {step == 1 && <Login setStep={setStep} />}
            {step == 2 && <CheckOtp />}
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(/images/0901630.png)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sx={{ backgroundColor: "#EEEEEE", p: 1, height: "50px", pr: 20 }}
        >
          <Typography
            sx={{
              fontFamily: "iranYekan",
              display: "flex",

              alignItmes: "center",
            }}
          >
            <svg
              style={{ marginLeft: "3px" }}
              id="_3916699"
              data-name="3916699"
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 22 22"
            >
              <path
                id="Path_8"
                data-name="Path 8"
                d="M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm0,20.167A9.167,9.167,0,1,1,20.167,11,9.167,9.167,0,0,1,11,20.167Z"
                transform="translate(0 0)"
                fill="#4ecca3"
              />
              <path
                id="Path_9"
                data-name="Path 9"
                d="M12,10H11a1,1,0,0,0,0,2h1v6a1,1,0,0,0,2,0V12A2,2,0,0,0,12,10Z"
                transform="translate(-1 -1.333)"
                fill="#4ecca3"
              />
              <circle
                id="Ellipse_20"
                data-name="Ellipse 20"
                cx="1.5"
                cy="1.5"
                r="1.5"
                transform="translate(9.5 4.524)"
                fill="#4ecca3"
              />
            </svg>
            با عضویت در سایت از قوانین استفاده از سایت موافقت می نمایید
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default LoginPage;

export async function getServerSideProps(context) {
  const resSetting = await axios.get(
    "https://hdgraphic.ir/api/v1/settings/setting"
  );

  return {
    props: {
      setting: resSetting.data,
    }, // will be passed to the page component as props
  };
}
