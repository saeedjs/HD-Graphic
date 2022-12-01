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
      <span style={{ marginRight: "190px", borderRight: "8px solid #4ECCA3 " }}>
        <span
          style={{ marginRight: "20px", fontSize: "12px", fontWeight: "500" }}
        >
          تصاویر استوک
        </span>
      </span>

      <Link href={"#"}>
        <span
          style={{
            fontWeight: "500",
            fontSize: "12px",
            color: "#4ECCA3",
            marginRight: "30px",
          }}
        >
          {" "}
          مشاهده همه{" "}
        </span>
        <span
          style={{
            fontWeight: "500",
            fontSize: "12px",
            marginRight: "230px",
            color: "#AAAAAA",
          }}
        >
          {" "}
          بیش از 4000 طرح{" "}
        </span>
      </Link>
      <Box
        sx={{
          padding: "10px",
        }}
      ></Box>

      <Grid container justifyContent={"center"}>
        <ProductmainBig />
        <Box
          sx={{
            display: {
              lg: "none",
              md: "none",
              sm: "none",
              xs: "block",
            },
          }}
        >
          <span
            style={{ marginRight: "110px", borderRight: "8px solid #4ECCA3 " }}
          >
            <span
              style={{
                marginRight: "20px",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
              تصاویر استوک
            </span>
          </span>

          <Link href={"#"}>
            <span
              style={{
                fontWeight: "500",
                fontSize: "12px",
                color: "#4ECCA3",
                marginRight: "30px",
              }}
            >
              {" "}
              مشاهده همه{" "}
            </span>
            <span
              style={{
                fontWeight: "500",
                fontSize: "12px",
                marginRight: "40px",
                color: "#AAAAAA",
              }}
            >
              {" "}
              بیش از 4000 طرح{" "}
            </span>
          </Link>
        </Box>
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
