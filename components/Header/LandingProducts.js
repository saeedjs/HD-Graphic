import { Box, Grid, Typography, Container } from "@mui/material";
import { display } from "@mui/system";
import Divider from "@mui/material/Divider";
import Link from "next/link";

const LandingProducts = () => {
  return (
    <>
      <Container>
        <Box sx={{ my: 16 }}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              mt: 5,
              color: "colors.black",
            }}
          >
            <Grid
              item
              xs={12}
              sm={5}
              lg={2}
              sx={{
                my: {
                  xs: 2,
                  lg: 0,
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  border: "3px solid",
                  borderColor: "colors.green",
                  display: "inline-block",
                  borderRadius: "100%",
                }}
              >
                <Link href="#">
                  <img src="/images/dv.png" />
                </Link>
              </Box>
              <Box component="span">
                <Link href="#">
                  <Typography variant="h5" component="h5" sx={{ p: 1 }}>
                    فایل لایه باز
                  </Typography>
                </Link>
                <Typography
                  variant="p"
                  component="p"
                  sx={{ width: "75%", display: "flex", textAlign: "center", m: "auto" }}
                >
                  منبع عظیمی از فایل های لایه باز مناسب برای اینستاگرام و غیره
                </Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                display: {
                  xs: "none",
                  lg: "block",
                },
              }}
            >
              <img src="/images/line1.png" />
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              lg={2}
              sx={{
                my: {
                  xs: 2,
                  lg: 0,
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  border: "3px solid",
                  borderColor: "colors.green",
                  display: "inline-block",
                  borderRadius: "100%",
                }}
              >
                <Link href="#">
                  <img src="/images/icons.png" />
                </Link>
              </Box>
              <Box component="span">
                <Link href="#">
                  <Typography variant="h5" component="h5" sx={{ p: 1 }}>
                    آیکون
                  </Typography>
                </Link>
                <Typography
                  variant="p"
                  component="p"
                  sx={{ width: "75%", display: "flex", textAlign: "center", m: "auto" }}
                >
                  منبع عظیمی از آیکون های مناسب برای طراحی صفحات وب{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                display: {
                  xs: "none",
                  lg: "block",
                },
              }}
            >
              <img src="/images/line1.png" />
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              lg={2}
              sx={{
                my: {
                  xs: 2,
                  lg: 0,
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  border: "3px solid",
                  borderColor: "colors.green",
                  display: "inline-block",
                  borderRadius: "100%",
                }}
              >
                <Link href="#">
                  <img src="/images/zsd.png" />
                </Link>
              </Box>
              <Link href="#">
                <Typography variant="h5" component="h5" sx={{ p: 1 }}>
                  تصویر{" "}
                </Typography>
              </Link>
              <Typography
                variant="p"
                component="p"
                sx={{
                  width: "75%",
                  display: "flex",
                  textAlign: "center",
                  m: "auto",
                }}
              >
                منبع عظیمی از تصاویر با کیفیت برای استفاده در طرح های گرافیکی
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: {
                  xs: "none",
                  lg: "block",
                },
              }}
            >
              <img src="/images/line1.png" />
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              lg={2}
              sx={{
                my: {
                  xs: 2,
                  lg: 0,
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  border: "3px solid",
                  borderColor: "colors.green",
                  display: "inline-block",
                  borderRadius: "100%",
                }}
              >
                <Link href="#">
                  <img src="/images/mokop.png" />
                </Link>
              </Box>
              <Link href="#">
                <Typography variant="h5" component="h5" sx={{ p: 1 }}>
                  موکاپ
                </Typography>
              </Link>
              <Typography
                variant="p"
                component="p"
                sx={{
                  width: "75%",
                  display: "flex",
                  textAlign: "center",
                  m: "auto",
                }}
              >
                منبع عظیمی از موکاپ های آماده مناسب برای نمایش نمونه کار
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default LandingProducts;
