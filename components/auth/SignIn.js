import { Button, Grid, Box, Typography } from "@mui/material";

import { useContext, useState } from "react";

import AuthContext from "../../context/AuthContext";

const SignIn = ({ setStep }) => {
  const [cellphone, setCellphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [checkFree, setCheckFree] = useState(true);
  const handleCheckNew = (check) => {
    setCheckFree(!check);
  };

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
      <Grid
        item={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItmes: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          component={"h1"}
          sx={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "iranYekan",
            fontSize: "18px",
            mb: 4,
          }}
        >
          صفحه ورود
        </Typography>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "#EEEEEE",
              width: "362px",
              height: "42px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              paddingRight: "10px",
              mt: 1,
            }}
          >
            <Box sx={{ pt: "5px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12.475"
                height="18.713"
                viewBox="0 0 12.475 18.713"
              >
                <path
                  id="_8034759"
                  data-name="8034759"
                  d="M12.577,18.713H7.9a3.9,3.9,0,0,1-3.9-3.9V3.9A3.9,3.9,0,0,1,7.9,0h4.678a3.9,3.9,0,0,1,3.9,3.9V14.814A3.9,3.9,0,0,1,12.577,18.713ZM7.9,1.559A2.342,2.342,0,0,0,5.559,3.9V14.814A2.342,2.342,0,0,0,7.9,17.154h4.678a2.342,2.342,0,0,0,2.339-2.339V3.9a2.342,2.342,0,0,0-2.339-2.339Zm3.9,13.255h0a.78.78,0,0,0-.78-.78H9.458a.78.78,0,0,0-.78.78h0a.78.78,0,0,0,.78.78h1.559A.78.78,0,0,0,11.8,14.814Z"
                  transform="translate(-4)"
                />
              </svg>
            </Box>
            <Box sx={{ width: "100%", height: "100%", paddingRight: "10px" }}>
              <input
                type="txt"
                style={{
                  width: "99%",
                  height: "100%",
                  backgroundColor: "#EEEEEE",
                  border: "none",
                  fontSize: "14px",
                  color: "#989898",
                  fontFamily: "iranYekan",
                }}
                onChange={(e) => setCellphone(e.target.value)}
                placeholder="لطفا شماره تلفن یا ایمیل خودرا وارد نمایید"
              />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#EEEEEE",
              width: "362px",
              height: "42px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              paddingRight: "10px",
              mt: 1,
            }}
          >
            <Box sx={{ pt: "5px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16.8"
                viewBox="0 0 14 16.8"
              >
                <g id="lock" transform="translate(0 0)">
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M13.9,5.9v-1a4.9,4.9,0,1,0-9.8,0v1A3.5,3.5,0,0,0,2,9.1v4.2a3.5,3.5,0,0,0,3.5,3.5h7A3.5,3.5,0,0,0,16,13.3V9.1A3.5,3.5,0,0,0,13.9,5.9Zm-8.4-1a3.5,3.5,0,1,1,7,0v.7h-7Zm9.1,8.4a2.1,2.1,0,0,1-2.1,2.1h-7a2.1,2.1,0,0,1-2.1-2.1V9.1A2.1,2.1,0,0,1,5.5,7h7a2.1,2.1,0,0,1,2.1,2.1Z"
                    transform="translate(-2 0)"
                  />
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M11.7,14a.7.7,0,0,0-.7.7v1.4a.7.7,0,1,0,1.4,0V14.7A.7.7,0,0,0,11.7,14Z"
                    transform="translate(-4.7 -4.2)"
                  />
                </g>
              </svg>
            </Box>
            <Box sx={{ width: "100%", height: "100%", paddingRight: "10px" }}>
              <input
                type="txt"
                style={{
                  width: "99%",
                  height: "100%",
                  backgroundColor: "#EEEEEE",
                  border: "none",
                  fontSize: "14px",
                  color: "#989898",
                  fontFamily: "iranYekan",
                }}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="گذرواژه"
              />
            </Box>
          </Box>
          <Typography
            sx={{ fontSize: "18px", fontFamily: "iranYekan", mt: 5, mb: 2 }}
          >
            <Box
              sx={{
                width: "18px",
                height: "18px",
                display: "inline-block",

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
            یادآوری برای دفعات بعدی
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{
              width: "100%",
              height: "51px",
              backgroundColor: "#4ECCA3",
              color: "white",
              fontFamily: "iranYekan",
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

export default SignIn;
