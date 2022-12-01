import { Container, Grid } from "@mui/material";
import ProductMain from "./products/Productmain";
// import TitleProducts from "./products/title";
import Productmain3 from "./products/Productmain3";
import Landing from "./Header/Landing";
import Articls from "./Articls";
import { Box } from "@mui/material";
import "swiper/css";

const Main = () => {
  return (
    <>
      <Landing />
      <Container Container>
        <ProductMain />
        <Productmain3 />
      </Container>
      <Box>
        <img style={{ maxWidth: "100%" }} src="/images/Group20.png" />
      </Box>

      <Box sx={{ backgroundImage:'linear-gradient(to right, #FBFFC2 50%, #DFFFF5 50%)', width:'980px', height:'215px'}}>
      </Box>
      <Articls />
    </>
  );
};

export default Main;
