import { Button, ButtonBase, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/system";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import Link from "next/link";

const SingleProduct = () => {
  return (
    <>
      <Container
        sx={{
          marginBottom: "30px",
        }}
      >
        <Grid container>
          <Grid item sx={{ margin: "33px" }} lg={5}>
            <img
              style={{
                maxWidth: "90%",
                height: "auto",
                padding: "0",
                marginRight: "0px",
              }}
              src="./images/eee.png"
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
            item
            lg={6}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant={"h4"} sx={{ marginBottom: "10px" }}>
                بهترین قالب های اینستاگرام
              </Typography>
              <Typography
                sx={{ width: "50%", fontSize: "15px" }}
                variant="h6"
                color="initial"
              >
                رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
              </Typography>
              <Typography variant="6" color="initial">
                <ImageSearchIcon />
                فرمت فایل:Eps,PSD
              </Typography>
              <Box
                sx={{
                  border: 1,
                  borderColor: "grey.500",
                  width: "100%",
                  height: "181px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  mr: 1,
                }}
              >
                <Box sx={{ display: "flex", height: "100%" }}>
                  <Box sx={{ display: "flex", alignItems: "center", m: 1.2 }}>
                    <img maxWidth="84px" height="84px" src="/images/545.png" />
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "25%",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "1000",
                          pt: "30px",
                        }}
                      >
                        طراح: فریبا حسینی
                      </Typography>
                      <button
                        style={{
                          background: "#EEEEEE",
                          width: "57px",
                          height: "30px",
                        }}
                      >
                        مشاهده
                      </button>
                    </Box>
                    <Box
                      sx={{
                        height: "75%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          maxWidth: "272px",
                          height: "103px",
                          borderRadius: "10px",
                          backgroundColor: "#FFFFFF",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{ maxWidth: "255px", p: "8px", fontSize: "17px" }}
                        >
                          لورم ایپسوم متن ساختگی با تولید نامه و مجله در ستون و
                          سطرآنچنان که لازم{" "}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Button
              sx={{
                width: "90%",
                height: "50px",
                backgroundColor: "colors.pink",
              }}
            >
              افزودن کلکسیون
            </Button>
            <Button
              sx={{
                width: "90%",
                height: "50px",
                backgroundColor: "colors.pink",
              }}
            >
              افزودن کلکسیون
            </Button>
            <Typography>گزارش مشکلات دانلود فایل</Typography>
            <Typography>تعداد دانلودفایل»:865</Typography>
            <Button
              variant="contained"
              width="119px"
              height="32px"
              sx={{
                backgroundColor: "colors.pink",
                borderRadius: "10px",
                boxShadow: "none",
              }}
            >
              پسندیدم
            </Button>
            <Button
              variant="contained"
              width="48px"
              height="32px"
              sx={{
                backgroundColor: "colors.pink",
                borderRadius: "10px",
                boxShadow: "none",
              }}
            >
              اشتراک گذاری
            </Button>
          </Grid>
        </Grid>
        <Typography>برچسب های مرتبط</Typography>
        <Button
          variant="contained"
          width="48px"
          height="32px"
          sx={{
            backgroundColor: "colors.green",
            borderRadius: "10px",
            boxShadow: "none",
          }}
        >
          قالب اینستاگرام
        </Button>
        <Button
          variant="contained"
          width="48px"
          height="32px"
          sx={{
            backgroundColor: "colors.green",
            borderRadius: "10px",
            boxShadow: "none",
          }}
        >
          قالب اینستاگرام
        </Button>
        <Button
          variant="contained"
          width="48px"
          height="32px"
          sx={{
            backgroundColor: "colors.green",
            borderRadius: "10px",
            boxShadow: "none",
          }}
        >
          قالب اینستاگرام
        </Button>
        <Button
          variant="contained"
          width="48px"
          height="32px"
          sx={{
            backgroundColor: "colors.green",
            borderRadius: "10px",
            boxShadow: "none",
          }}
        >
          قالب اینستاگرام
        </Button>
        <Box
          sx={{
            padding: "40px",
          }}
        ></Box>
        <span style={{ borderRight: "8px solid #4ECCA3 " }}>
          <span style={{ margin: "20px", fontSize: "12px", fontWeight: "500" }}>
            بیشتر با فریبا حسنی
          </span>
        </span>

        <Box
          sx={{
            padding: "10px",
          }}
        ></Box>
        <Grid container>
          <Grid item xs={6} sm={6} md={6} lg={3}>
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
          <Grid item xs={6} sm={6} md={6} lg={3}>
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
        </Grid>
      </Container>
    </>
  );
};

export default SingleProduct;
