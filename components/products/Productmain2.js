import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Paper, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";

const Productmain2 = () => {
  return (
    <>
      <Container>
        <Grid container sx={{ maxWidth: "100%" }}>
          <Grid item lg={6}>
            <Image width={280} height={310} src={"/images/1234.png"} />
          </Grid>
          <Grid item lg={6}>
            <Image width={280} height={317} src={"/images/123.png"} />
          </Grid>
          <Grid item lg={6}>
            <Image width={280} height={317} src={"/images/12345.png"} />
          </Grid>
          <Grid item lg={6}>
            <Image width={280} height={317} src={"/images/99996.png"} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Productmain2;
