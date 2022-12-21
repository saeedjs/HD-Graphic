import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Paper, CardActionArea, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/system";
import ProductmainBig from "./ProductmainBig";
import TitleComponents from "../TitleComponents";
import { Masonry } from "@mui/lab";

const ProductMain = ({ instagram }) => {
  return (
    <>
      <Box sx={{ display: "flex", mb: 2 }}>
        <Box
          sx={{
            //
            height: "auto",
            mt: "140px",
            display: "flex",
            justifyContent: "space-between",
            mr: "14px",
          }}
        >
          <Box
            height={"22px"}
            sx={{
              marginRight: { lg: "110px", md: "20px", sm: "10px", xs: "5px" },
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
        </Box>
        <Box
          sx={{
            height: "auto",
            mt: "140px",
            display: {
              lg: "flex",
              md: "none",
              sm: "none",
              xs: "none",
            },
            marginRight: "200px",
            justifyContent: "space-between",
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
            <Typography
              sx={{
                fontSize: {
                  lg: "0px",
                  md: "18px",
                  sm: "12px",
                  xs: "10px",
                },
                fontSize: "16px",
              }}
            >
              مطالب وبلاگ
            </Typography>
          </Box>
          <Box sx={{ mr: "35px" }}>
            <Typography sx={{ color: "colors.green" }}>مشاهده همه</Typography>
          </Box>
          <Box
            sx={{
              marginRight: {
                lg: "370px",
                md: "0px",
                sm: "0px",
                xs: "0px",
              },
            }}
          >
            <Typography sx={{ color: "#AAAAAA", fontSize: "14px" }}>
              500 طرح آماده
            </Typography>
          </Box>
        </Box>
      </Box>

      <Grid container maxWidth="xl" justifyContent={"center"}>
        <ProductmainBig />
        <Box
          xs={12}
          sx={{
            display: {
              lg: "none",
              md: "none",
              sm: "flex",
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
          <Box sx={{ mr: "12" }}>
            <Typography sx={{ color: "#AAAAAA", fontSize: "16px" }}>
              500 طرح آماده
            </Typography>
          </Box>
        </Box>{" "}
        {instagram.map((item) => {
          return (
            <Grid justifyContent={"center"} item xs={4} sm={4} md={4} lg={2}>
              <Grid item sx={{ margin: "3px" }}>
                <Link href={`file/${item.slug}/${item.id}`}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "0",
                      marginRight: "10px",
                    }}
                    src={`https://hdgraphic.ir${item.image}`}
                  />
                </Link>
                <Link href={`file/${item.slug}/${item.id}`}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "0",
                      marginRight: "10px",
                    }}
                    src={`https://hdgraphic.ir${item.image}`}
                  />
                </Link>
              </Grid>
            </Grid>
          );
        })}
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
    </>
  );
};

export default ProductMain;
