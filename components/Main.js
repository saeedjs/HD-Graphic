import { Container, Grid, Typography } from "@mui/material";
import ProductMain from "./products/Productmain";
import Productmain3 from "./products/Productmain3";
import Landing from "./Header/Landing";
import Articls from "./Articls";
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
      <Articls title="مطالب وبلاگ" />
    </>
  );
};

export default Main;
