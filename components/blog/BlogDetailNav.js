import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";

const BlogDetailNav = () => {
  const [cOCheck, setCOCheck] = useState(false);
  const [display, setDisplay] = useState("none");

  const checkFalse = () => {
    setCOCheck(false);
    setDisplay("none");
  };

  const checkTrue = () => {
    setCOCheck(true);
    setDisplay("block");
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "169px", backgroundColor: "#EEEE" }}>
        <Container sx={{ height: "100%" }}>
          <Grid
            container
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "100%",
            }}
          >
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Box>
                <Box sx={{ mb: "20px" }}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#393E46",
                    }}
                  >
                    وبلاگ اچ دی گرافیک
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "14px", color: "#393E46" }}>
                    جدیدترین و مفیدترین مطالب مرتبط با عکاسی، گرافیک، و هنر
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={5} sm={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#FFFF",
                  borderRadius: "5px",
                  marginBottom: {
                    md: "0px",
                    xs: "25px",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "25px",
                    display: "flex",
                    alignItems: "center",
                    mr: "15px",
                  }}
                >
                  <img src="/images/icon/search.png" />
                </Box>
                <Box sx={{ width: "275px", height: "43px" }}>
                  <input
                    placeholder="جستجو در وبلاگ..."
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "5px 0px 0px 5px",
                      border: "none",
                      outline: "none",
                      color: "#A5A5A5",
                      fontSize: "14px",
                      fontFamily: "iranYekan",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                width: "100%",
                height: "48px",
                backgroundColor: "#FFFF",
                mt: "-24px",
                border: "1px solid #EEEEEE",
                boxShadow: "3px #EEEEEE",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  px: 2,
                  justifyContent: "space-between",
                }}
              >
                <Breadcrumbs>
                  <Link href="#">MUI</Link>
                  <Link href="#">Core</Link>
                  <Link href="#">sasd</Link>
                </Breadcrumbs>
                <Box
                  sx={{
                    "&.MuiBox-root img": {
                      padding: 1,
                      verticalAlign: "bottom",
                    },
                  }}
                >
                  <Link href={"#"}>
                    <img src="/images/facebook.png" />
                  </Link>
                  <Link href={"#"}>
                    <img src="/images/instagram.png" />
                  </Link>
                  <Link href={"#"}>
                    <img src="/images/telegram.png" />
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "200px",
                backgroundColor: "#FFFF",
                mt: "0px",
                border: "1px solid #EEEEEE",
                borderTop: "none",
                boxShadow: "3px #EEEEEE",
                position: "absolute",
                display: display,
              }}
            ></Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default BlogDetailNav;
