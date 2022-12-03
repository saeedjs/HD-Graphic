import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Paper, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import Link from "next/link";

const Productmain4 = () => {
  return (
    <>
      <Container justifyContent="center">
        <Box
          sx={{
            padding: "40px",
          }}
        ></Box>
        <span style={{ borderRight: "8px solid #4ECCA3 " }}>
          <span style={{ margin: "20px", fontSize: "12px", fontWeight: "500" }}>
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
              marginRight: "160px",
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

        <Grid container>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <img
              style={{
                width: "100%",
                height: "100%",
                padding: "4px",
                marginLeft: "10px",
                margin: "0",
              }}
              src="./images/dcxz.png"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <img
              style={{
                width: "100%",
                height: "100%",
                padding: "4px",
                marginLeft: "10px",
                margin: "0",
              }}
              src="./images/qwqwszx.png"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <img
              style={{
                width: "100%",
                height: "100%",
                padding: "4px",
                marginLeft: "10px",
                margin: "0",
              }}
              src="./images/vfx.png"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <img
              style={{
                width: "100%",
                height: "100%",
                padding: "4px",
                marginLeft: "10px",
                margin: "0",
              }}
              src="./images/xcvxcv.png"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Productmain4;
