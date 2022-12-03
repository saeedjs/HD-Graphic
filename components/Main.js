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
        <Box>
          <img style={{ maxWidth: "100%" }} src="/images/Group20.png" />
        </Box>
        <Box sx={{display:'flex', justifyContent:'center'}}>
          <Box
            sx={{
              borderRadius:'10px',
              backgroundImage:
                "linear-gradient(to right, #FBFFC2 50%, #DFFFF5 50%)",
              width: "980px",
              height: "215px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img sx={{maxWidth:'980px'}} src="/images/graphics-designing-course-karachi-digital-minds (1).png" />
          </Box>
        </Box>
      </Container>
      <Articls />
    </>
  );
};

export default Main;
