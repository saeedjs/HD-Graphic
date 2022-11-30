import { Container, Grid } from "@mui/material";
import ProductMain from "./products/Productmain";
import TitleProducts from "./products/title";
import Productmain3 from "./products/Productmain3";
import Landing from "./Header/Landing";
const Main = () => {
  return (
    <>
      <Landing />
      <Container Container>
        <Grid container>
          <Grid item lg={4}>
            <TitleProducts />
          </Grid>
        </Grid>

        <ProductMain />
        <Grid container>
          <Grid item lg={6}>
            <TitleProducts />
          </Grid>
          <Grid item lg={6}>
            <TitleProducts />
          </Grid>
        </Grid>
        <Productmain3 />
      </Container>
    </>
  );
};

export default Main;
