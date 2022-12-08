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
          width: "40%",
          mt: "140px",
          display: "flex",
          justifyContent: "space-between",
          mr: "14px",
        }}
      >
        <Box
          height={"22px"}
          sx={{
            marginRight: "90px",
            height: "22px",
            backgroundColor: "colors.green",
            width: "8px",
          }}
        ></Box>
        <Box sx={{ mr: "10px" }}>
          <Typography sx={{ fontSize: "16px" }}>مطالب وبلاگ</Typography>
        </Box>
        <Box sx={{ mr: "35px" }}>
          <Typography sx={{ color: "colors.green" }}>مشاهده همه</Typography>
        </Box>
        <Box sx={{ mr: "50px" }}>
          <Typography sx={{ color: "#EEEEE", fontSize: "16px" }}>
            500 طرح آماده
          </Typography>
        </Box>
      </Box>

      <Grid container maxWidth="xl" justifyContent={"center"}>
        <ProductmainBig />
        <Box
          sx={{
            display: {
              lg: "none",
              md: "none",
              sm: "none",
              xs: "flex",
            },
          }}
        >
          <Box
            height={"22px"}
            sx={{
              height: "22px",
              backgroundColor: "colors.green",
              width: "8px",
            }}
          ></Box>
          <Box sx={{ mr: "10px" }}>
            <Typography sx={{ fontSize: "16px" }}>تصاویر استوک</Typography>
          </Box>
          <Box sx={{ mr: "35px" }}>
            <Typography sx={{ color: "colors.green" }}>مشاهده همه</Typography>
          </Box>
          <Box sx={{ mr: "10px" }}>
            <Typography sx={{ fontSize: "16px" }}>500 طرح آماده</Typography>
          </Box>
        </Box>

        <Grid justifyContent={"center"} item xs={4} sm={2} md={2} lg={2}>
          <Grid item sx={{ margin: "3px" }}>
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

        <Grid
          alignItems={"center"}
          justifyContent={"center"}
          item
          xs={4}
          sm={2}
          md={2}
          lg={2}
        >
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
        <Grid item xs={12} sm={12} md={12} lg={10}>
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
