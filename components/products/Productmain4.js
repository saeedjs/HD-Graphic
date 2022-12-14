import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Paper, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";
import Link from "next/link";
import TitleComponents from "../TitleComponents";

const Productmain4 = () => {
  return (
    <>
      <Container justifyContent="center">
        {/* <Box
          sx={{
            padding: "40px",
          }}
        ></Box>
        <span style={{ borderRight: "8px solid #4ECCA3 " }}>
          <span style={{ margin: "20px" }}>تصاویر استوک</span>
        </span>

        <Link href={"#"}>
          <span
            style={{
              color: "#4ECCA3",
              marginRight: "30px",
            }}
          >
            {" "}
            مشاهده همه{" "}
          </span>
          <span
            style={{
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
        ></Box> */}
        <TitleComponents
          title={"موکاپ"}
          mount={"400 طرح  آماده"}
          mcolor={"#AAAAAA"}
        />
        <Box
          sx={{
            mt: 2,
          }}
        ></Box>
        <Grid container>
          <Grid item xs={3} sm={3} md={3} lg={6}>
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
          <Grid item xs={3} sm={3} md={3} lg={6}>
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
          <Grid item xs={3} sm={3} md={3} lg={6}>
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
          <Grid item xs={3} sm={3} md={3} lg={6}>
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
