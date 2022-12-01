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

      <Grid container>
        <Grid item xs={2}>
          <Box
            sx={{
              backgroundImage: 'url("/images/Rectangle124.png")',
              width: "490px",
              height: "179px",
            }}
          ></Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              backgroundImage:
                'url("/images/graphics-designing-course-karachi-digital-minds (1).png")',
              backgroundRepeat:'no-repeat',  
              width: "286.5px",
              height: "214px",
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <Box
            sx={{
              backgroundImage: 'url("/images/Rectangle 125.png")',
              width: "490px",
              height: "179px",
            }}
          ></Box>
        </Grid>
      </Grid>
      <Articls />
    </>
  );
};

export default Main;
