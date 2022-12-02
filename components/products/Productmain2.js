import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Paper, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import Link from "next/link";

const Productmain2 = () => {
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
              marginRight: "123px",
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
                height: "auto",
                padding: "4px",

                margin: "0",
              }}
              src="./images/123.png"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <img
              style={{
                width: "100%",
                height: "auto",
                padding: "4px",

                margin: "0",
              }}
              src="./images/1234.png"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <img
              style={{
                width: "100%",
                height: "auto",
                padding: "4px",

                margin: "0",
              }}
              src="./images/12345.png"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <img
              style={{
                width: "100%",
                height: "auto",
                padding: "4px",

                margin: "0",
              }}
              src="./images/99996.png"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Productmain2;
