import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Paper, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/system";
import ProductmainBig from "./ProductmainBig";

const ProductMain = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          padding: "30px",
        }}
      >
        <span
          style={{
            marginRight: "10px",
            borderRight: "8px solid #4ECCA3 ",
          }}
        >
          تصاویر استوک
        </span>
        <Link href={"#"}>
          <span
            style={{
              marginRight: "30px",
              color: "#4ECCA3",
              marginRight: "70px",
            }}
          >
            مشاهده همه
          </span>
        </Link>
      </Box>

      <Grid container justifyContent={"center"}>
        <ProductmainBig />

        <Grid justifyContent={"center"} item xs={4} sm={2} md={2} lg={2}>
          <Grid item sx={{ margin: "3px" }}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                marginRight: "10px",
              }}
              src="./images/www.png"
            />
          </Grid>
          <Grid item sx={{ margin: "3px" }}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                marginRight: "10px",
              }}
              src="./images/www.png"
            />
          </Grid>
        </Grid>

        <Grid justifyContent={"center"} item xs={4} sm={2} md={2} lg={2}>
          <Grid item sx={{ margin: "3px" }} xs={12}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                marginRight: "10px",
              }}
              src="./images/www.png"
            />
          </Grid>
          <Grid item sx={{ margin: "3px" }} xs={12}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                marginRight: "10px",
              }}
              src="./images/www.png"
            />
          </Grid>
        </Grid>
        <Grid justifyContent={"center"} item xs={4} sm={2} md={2} lg={2}>
          <Grid item sx={{ margin: "3px" }} xs={12}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                marginRight: "10px",
              }}
              src="./images/www.png"
            />
          </Grid>
          <Grid item sx={{ margin: "3px" }} xs={12}>
            <img
              style={{
                width: "100%",
                height: "auto",
                padding: "0",
                marginRight: "10px",
              }}
              src="./images/www.png"
            />
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <img
            src="/images/group.png"
            style={{
              maxWidth: "100%",
              height: "auto",
              padding: "0",
              marginRight: "10px",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductMain;
