import { Container, Grid, Typography } from "@mui/material";
import ProductMain from "./products/Productmain";
// import TitleProducts from "./products/title";
import Productmain3 from "./products/Productmain3";
import Landing from "./Header/Landing";
import Articls from "./Articls";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <Landing />
      <Container Container>
        <Box
          sx={{
            display: {
              lg: "inline",
              md: "inline",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <span
            style={{ marginRight: "110px", borderRight: "8px solid #4ECCA3 " }}
          >
            <span
              style={{
                marginRight: "20px",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              تصاویر استوک
            </span>
          </span>

          <Link href={"#"}>
            <span
              style={{
                fontWeight: "500",
                fontSize: "12px",
                color: "#4ECCA3",
                marginRight: "30px",
              }}
            >
              {" "}
              مشاهده همه{" "}
            </span>
          </Link>
        </Box>

        <ProductMain />
        <Productmain3 />
      </Container>

      <Box>
        <img style={{ maxWidth: "100%" }} src="/images/Group20.png" />
      </Box>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to right, #FBFFC2 50%, #DFFFF5 50%)",
          width: "980px",
          height: "215px",
        }}
      ></Box>
      <Articls />
    </>
  );
};

export default Main;
