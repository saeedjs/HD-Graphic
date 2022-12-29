import { Button, Grid, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";

import AuthContext from "../../context/AuthContext";

const Login = ({ setStep }) => {
  const [cellphone, setCellphone] = useState();

  const { login } = useContext(AuthContext);

  async function handleSubmit() {
    if (cellphone == "") {
      console.log("شماره تلفن وارد کنید");
      return;
    }

    // const mobileReg =
    //   /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
    // if (!mobileReg.test(cellphone)) {
    //   console.log("فرمت شماره موبایل نادرست است");
    //   return;
    // }
    await login(cellphone);
    setStep(2);
  }

  return (
    <>
      <Grid item={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography component={"h1"}>صفحه ورود</Typography>
        <Grid item xs={12}>
          <input
            style={{
              fontFamily: "iranYekan",
              color: "black",
              border: "none",
              backgroundColor: "#eeeeee",
              padding: "0.5rem 0.8rem",
              outline: "none",
              borderRadius: "5px",
              width: "50vmin",
            }}
            type="text"
            onChange={(e) => setCellphone(e.target.value)}
            placeholder="شماره تلفن خودرا وارد کنید"
          />
          <Typograpy>
            <Box
              sx={{
                width: "18px",
                height: "18px",
                mr: {
                  xs: 0,
                  md: 2,
                },
                border: `${!checkFree && "1px solid #c2c2c2"}`,
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: `${checkFree && "#4ECCA3"}`,
              }}
              onClick={() => handleCheckNew(checkFree)}
            ></Box>
            عضویت در خبرنامه
          </Typograpy>
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{
              backgroundColor: "#F6416C",
              color: "white",
            }}
            onClick={() => handleSubmit()}
          >
            ورود
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
