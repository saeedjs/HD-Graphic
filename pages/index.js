import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import ProductMain from "../components/products/Productmain";
import Productmain2 from "../components/products/Productmain2";
import styles from "../styles/Home.module.css";
import Productmain3 from "../components/products/Productmain3";
import TitleProducts from "../components/products/title";
import Landing from "../components/Header/Landing";

export default function Home() {
  return (
    <Container Container>
      <Landing />
      {/* <Grid container>
        <Grid item lg={4}>
          <TitleProducts />
        </Grid>
        <Grid item lg={8}>
          <TitleProducts />
        </Grid>
      </Grid> */}

      {/* <ProductMain /> */}
      {/* <Grid container>
        <Grid item lg={6}>
          <TitleProducts />
        </Grid>
        <Grid item lg={6}>
          <TitleProducts />
        </Grid>
      </Grid> */}
      {/* <Productmain3 /> */}
    </Container>
  );
}
