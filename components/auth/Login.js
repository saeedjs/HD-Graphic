import { Button, Grid, TextField } from "@mui/material";
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
      <Grid item={12}>
        <h1>صفحه ورود</h1>
        <Grid item xs={12}>
          <TextField
            type="text"
            onChange={(e) => setCellphone(e.target.value)}
            name=""
            id=""
            placeholder="شماره تلفن خودرا وارد کنید"
          />
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
