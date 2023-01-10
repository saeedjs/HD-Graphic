import { Container, Grid, Typography } from "@mui/material";
import ProductMain from "./products/Productmain";
import Productmain3 from "./products/Productmain3";
import Landing from "./Header/Landing";
import Articls from "./Articls";
import "swiper/css";
import Mainimages from "./MainImages";

const Main = ({ instagram, mockup, stock }) => {
  return (
    <>
      <Landing />
      <Container maxWidth="xl" Container>
        <ProductMain instagram={instagram} stock={stock} />
        <Productmain3 mockup={mockup} />
      </Container>
      <Mainimages />
      <Articls title="مطالب وبلاگ" />
    </>
  );
};

export default Main;
