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
      <Container maxWidth={"xl"}>
        <Box>
          <Grid
            item
            xs={11}
            sm={11}
            md={8.5}
            lg={4}
            xl={4}
            sx={{ marginBottom: "20px" }}
          >
            <Box sx={{ display: "flex", pb: 1 }}>
              <Box
                height={"22px"}
                sx={{
                  height: "22px",
                  backgroundColor: "colors.green",
                  width: "8px",
                }}
              ></Box>
              <Typography sx={{ mx: 2 }}>تصاویر استوک</Typography>
              <Link href={"#"} style={{ color: "#4ECCA3", fontWeight: "bold" }}>
                مشاهده همه
              </Link>
            </Box>
          </Grid>
        </Box>
        <Box>
          <Grid
            container
            sx={{ justifyContent: { lg: "start", xs: "center" } }}
          >
            <Grid item xl={3.5} lg={4} md={6} sm={8}>
              <Box sx={{ height: "100%" }}>
                <img
                  width={"100%"}
                  height={"98%"}
                  style={{ marginTop: "5px", objectFit: "cover" }}
                  src="./images/65454.png"
                />
              </Box>
            </Grid>
            <Grid item xl={8.5} lg={8} md={12} sm={12}>
              <Box>
                <Grid
                  container
                  sx={{ justifyContent: { lg: "start", xs: "center" } }}
                >
                  {instagram.map((item) => (
                    <Grid item xl={3} lg={4} md={3} sm={5} xs={8}>
                      <Link href={`file/${item.slug}/${item.id}`}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            m: "5px",
                          }}
                        >
                          <img
                            style={{
                              width: "95%",
                              height: "95%",
                            }}
                            src={`https://hdgraphic.ir${item.image}`}
                          />
                        </Box>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ProductMain;
