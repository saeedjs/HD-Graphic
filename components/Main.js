import { Container, Grid, Typography } from "@mui/material";
import ProductMain from "./products/Productmain";
// import TitleProducts from "./products/title";
import Productmain3 from "./products/Productmain3";
import Landing from "./Header/Landing";
import Articls from "./Articls";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Mainimages from "./MainImages";

const Main = () => {
  return (
    <>
      <Landing />
      <Container maxWidth="xl" Container>
        <ProductMain />
        <Productmain3 />
      </Container>
      <Mainimages />
      <Articls />
    </>
  );
};

export default Main;
