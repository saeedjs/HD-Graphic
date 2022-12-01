import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Paper, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";
import { Box } from "@mui/system";

const Productmain2 = () => {
  return (
    <>
      <Container justifyContent="center">
        <Grid container>
          <Box height={"40px"}>
            <span
              style={{ marginRight: "10px", borderRight: "8px solid #4ECCA3 " }}
            >
              تصاویر استوک
            </span>
            <span
              style={{
                marginRight: "10px",
                color: "#4ECCA3",
                marginRight: "70px",
              }}
            >
              مشاهده همه
            </span>
          </Box>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                marginLeft: "10px",
                margin: "0",
              }}
              src="./images/123.png"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                marginLeft: "10px",
                margin: "0",
              }}
              src="./images/1234.png"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                marginLeft: "10px",
                margin: "0",
              }}
              src="./images/12345.png"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <img
              style={{
                maxWidth: "100%",
                height: "auto",
                padding: "0",
                marginLeft: "10px",
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
