import { Button, Grid, Box, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { useContext, useState } from "react";

import AuthContext from "../../context/AuthContext";
import Link from "next/link";
import { toast } from "react-toastify";

const Login = ({ setStep }) => {
  const [cellphone, setCellphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pepole, setPepole] = useState(true);
  const [checkFree, setCheckFree] = useState("none");

  const handleCheckNew = (check) => {
    setCheckFree(!check);
  };

  const { login } = useContext(AuthContext);

  async function handleSubmit() {
    if (cellphone == "") {
      console.log("شماره تلفن وارد کنید");
      return;
    }

    const mobileReg = new RegExp(
      "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
    );
    if (!mobileReg.test(cellphone)) {
      toast.error("فرمت شماره موبایل نادرست است");
      return;
    }

    // const emailReg = new RegExp("^[w-.]+@([w-]+.)+[w-]{2,4}$");
    // if (!emailReg.test(email)) {
    //   toast.error("فرمت ایمیل نادرست است");
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
          ساخت حساب کاربری
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
                width="13.991"
                height="18.655"
                viewBox="0 0 13.991 18.655"
              >
                <g
                  id="_01_align_center"
                  data-name="01 align center"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M16.991,21.773H15.437v-3.92a2.3,2.3,0,0,0-2.3-2.3H6.853a2.3,2.3,0,0,0-2.3,2.3v3.92H3v-3.92A3.858,3.858,0,0,1,6.853,14h6.285a3.858,3.858,0,0,1,3.853,3.853Z"
                    transform="translate(-3 -3.118)"
                    fill="#232931"
                  />
                  <path
                    id="Path_6"
                    data-name="Path 6"
                    d="M10.664,9.327a4.664,4.664,0,1,1,4.664-4.664A4.664,4.664,0,0,1,10.664,9.327Zm0-7.773a3.109,3.109,0,1,0,3.109,3.109A3.109,3.109,0,0,0,10.664,1.555Z"
                    transform="translate(-3.668 0)"
                    fill="#232931"
                  />
                </g>
              </svg>
            </Box>
            <Box sx={{ width: "100%", height: "100%", paddingRight: "10px" }}>
              <input
                style={{
                  width: "99%",
                  height: "100%",
                  backgroundColor: "#EEEEEE",
                  border: "none",
                  fontSize: "14px",
                  color: "#989898",
                  fontFamily: "iranYekan",
                }}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل..."
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
                placeholder="لطفا شماره تلفن خود را وارد کنید"
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
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                sx={{ fontFamily: "iranYekan" }}
                value="designer"
                control={
                  <Radio
                    sx={{
                      color: "#EEEEEE",

                      "&.Mui-checked": {
                        color: "#F6416C",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{ fontFamily: "iranYekan" }}
                    variant="body2"
                    color="textSecondary"
                  >
                    طراح یا عکاس
                  </Typography>
                }
              />
              <FormControlLabel
                sx={{ fontFamily: "iranYekan" }}
                value="pepole"
                control={
                  <Radio
                    sx={{
                      color: "#EEEEEE",

                      "&.Mui-checked": {
                        color: "#F6416C",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{ fontFamily: "iranYekan" }}
                    variant="body2"
                    color="textSecondary"
                  >
                    کاربر عادی
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>
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
            عضویت در خبرنامه
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{
              width: "100%",
              height: "51px",
              backgroundColor: "#F6416C",
              color: "white",
              fontFamily: "iranYekan",
              "&:hover": {
                backgroundColor: "#4ECCA3",
                color: "white",
              },
            }}
            onClick={() => handleSubmit()}
          >
            ورود
          </Button>
          <Link href={"/auth/login"}>
            <Typography
              component={"h1"}
              sx={{
                display: "flex",
                justifyContent: "center",

                fontFamily: "iranYekan",
                fontSize: "18px",
                mt: 7,
                mb: 7,
              }}
            >
              <span style={{ color: "#4ECCA3" }}>ورود</span>
              به حساب کاربری؟
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
