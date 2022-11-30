import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Paper, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import TitleProducts from "./title";
import Link from "next/link";

const ProductMain = () => {
  return (
    <Container sx={{ maxWidth: "1280px" }}>
      <Grid container justifyContent={"center"}>
        <Grid
          sx={{
            padding: "3px",
          }}
          item
          xs={11}
          sm={4}
          md={4}
          lg={4}
          xl={4}
        >
          <Box
            sx={{
              justifyContent: "center",
              alignItem: {
                md: "center",
                sm: "center",
              },
            }}
          >
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                margin: "0",
              }}
              src="./images/654.png"
            />
          </Box>
        </Grid>

        <Grid justifyContent={"center"} item xs={4} sm={3} md={3} lg={2}>
          <Grid item sx={{ margin: "4px" }}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                margin: "0",
              }}
              src="./images/www.png"
            />
          </Grid>
          <Grid item sx={{ margin: "4px" }}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                margin: "0",
              }}
              src="./images/asds.png"
            />
          </Grid>
        </Grid>
        <Grid justifyContent={"center"} item xs={4} sm={3} md={3} lg={2}>
          <Grid item sx={{ margin: "4px" }} xs={12}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                margin: "0",
              }}
              src="./images/www.png"
            />
          </Grid>
          <Grid item sx={{ margin: "4px" }} xs={12}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                margin: "0",
              }}
              src="./images/564.png"
            />
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: {
              lg: "block",
              md: "none",
              sm: "none",
            },
          }}
          item
          xs={4}
          sm={2}
          md={2}
          lg={2}
        >
          <Grid
            item
            sx={{
              margin: "4px",
              display: {
                lg: "block",
                md: "none",
                sm: "none",
              },
            }}
            xs={12}
          >
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                margin: "0",
              }}
              src="./images/www.png"
            />
          </Grid>
          <Grid
            item
            sx={{
              margin: "4px",
              display: {
                lg: "block",
                md: "none",
                sm: "none",
              },
            }}
            xs={12}
          >
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                margin: "0",
              }}
              src="./images/www.png"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Box>
          <Link href={"#"}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                margin: "0",
              }}
              src="./images/group.png"
            />
          </Link>
        </Box>
      </Grid>
    </Container>
  );
};

export default ProductMain;
