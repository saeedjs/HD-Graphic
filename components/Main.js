import { Container, Grid, Typography } from "@mui/material";
import ProductMain from "./products/Productmain";
import Productmain3 from "./products/Productmain3";
import Landing from "./Header/Landing";
import Articls from "./Articls";
import "swiper/css";
import Mainimages from "./MainImages";

const Main = ({ instagram, category, mockup }) => {
  return (
    <>
      <Landing category={category} />
      <Container maxWidth="xl" Container>
        <ProductMain instagram={instagram} />
        <Productmain3 mockup={mockup} />
      </Container>
      <Mainimages />
      <Articls title="مطالب وبلاگ" />
    </>
  );
};

export default Main;
