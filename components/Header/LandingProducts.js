import { Box, Grid, Typography } from "@mui/material";
import { display } from "@mui/system";
import Divider from "@mui/material/Divider";

const LandingProducts = () => {
  return (
    <>
      <Box>
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
            sm={6}
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
                border: "5px solid red",
                borderColor: "colors.green",
                display: "inline-block",
                borderRadius: "100%",
              }}
            >
              <img src="images/dv.png" />
            </Box>
            <Box component="span">
              <Typography variant="h5" component="h5" sx={{ p: 1 }}>
                فایل لایه باز
              </Typography>
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
            <img src="images/line1.png" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
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
                border: "5px solid red",
                borderColor: "colors.green",
                display: "inline-block",
                borderRadius: "100%",
              }}
            >
              <img src="images/icons.png" />
            </Box>
            <Box component="span">
              <Typography variant="h5" component="h5" sx={{ p: 1 }}>
                آیکون
              </Typography>
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
            <img src="images/line1.png" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
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
                border: "5px solid red",
                borderColor: "colors.green",
                display: "inline-block",
                borderRadius: "100%",
              }}
            >
              <img src="images/zsd.png" />
            </Box>
            <Typography variant="h5" component="h5" sx={{ p: 1 }}>
              تصویر{" "}
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ width: "75%", display: "flex", textAlign: "center", m: "auto" }}
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
            <img src="images/line1.png" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
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
                border: "5px solid red",
                borderColor: "colors.green",
                display: "inline-block",
                borderRadius: "100%",
              }}
            >
              <img src="images/mokop.png" />
            </Box>
            <Typography variant="h5" component="h5" sx={{ p: 1 }}>
              موکاپ
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ width: "75%", display: "flex", textAlign: "center", m: "auto" }}
            >
              منبع عظیمی از موکاپ های آماده مناسب برای نمایش نمونه کار
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LandingProducts;
