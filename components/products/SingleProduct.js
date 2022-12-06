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
        <Grid
          container
          style={{ borderBottom: "1px solid #E5E5E5", paddingBottom: "50px" }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "33px",
              marginLeft: "90px",
            }}
            xs={12}
            sm={12}
            md={12}
            lg={5.5}
          >
            <img
              style={{
                maxWidth: "100%",
                height: "100%",
                padding: "0",
                marginRight: "0px",
              }}
              src="./images/www.png"
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: {
                lg: "start",
                md: "center",
                sm: "center",
                xs: "center",
              },
              flexDirection: "column",
              padding: "20px",
            }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={4.8}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
                widht: "100%",
                marginBottom: "25px",
              }}
            >
              <Typography
                xs={4}
                sm={6}
                md={4}
                lg={5}
                variant={"h1"}
                sx={{
                  marginTop: "15px",
                  marginBottom: "20px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                بهترین قالب های اینستاگرام
              </Typography>
              <Typography
                sx={{ width: "100%", fontSize: "15px", marginBottom: "30px" }}
                variant="h6"
                color="initial"
              >
                رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها واستفاده از طراحان
                گرافاستفاده از طراحان
              </Typography>
              <Typography
                sx={{
                  marginBottom: "32px",
                }}
              >
                <svg
                  id="_3917317"
                  data-name="3917317"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  style={{
                    marginBottom: "-5px",
                  }}
                >
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M17.417,0H4.583A4.589,4.589,0,0,0,0,4.583V17.417A4.589,4.589,0,0,0,4.583,22H17.417A4.589,4.589,0,0,0,22,17.417V4.583A4.589,4.589,0,0,0,17.417,0ZM4.583,1.833H17.417a2.75,2.75,0,0,1,2.75,2.75V17.417a2.705,2.705,0,0,1-.275,1.178l-8.4-8.4a4.583,4.583,0,0,0-6.483,0L1.833,13.37V4.583a2.75,2.75,0,0,1,2.75-2.75Zm0,18.333a2.75,2.75,0,0,1-2.75-2.75V15.963L6.3,11.491a2.75,2.75,0,0,1,3.89,0l8.4,8.4a2.705,2.705,0,0,1-1.178.275Z"
                  />
                  <path
                    id="Path_17"
                    data-name="Path 17"
                    d="M16,10.5A3.5,3.5,0,1,0,12.5,7,3.5,3.5,0,0,0,16,10.5Zm0-5A1.5,1.5,0,1,1,14.5,7,1.5,1.5,0,0,1,16,5.5Z"
                    transform="translate(-1.471 0.538)"
                  />
                </svg>
                <span style={{ margin: "10px" }}>فرمت فایل:Eps,PSD</span>
              </Typography>

              <Box
                sx={{
                  border: 1,
                  borderColor: "#E2E2E2",
                  width: "90%",
                  height: "130px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  mr: 1,
                  padding: "5px",
                }}
              >
                <Box sx={{ display: "flex", height: "100%" }}>
                  <Box
                    xs={12}
                    sm={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      m: 1.5,
                    }}
                  >
                    <Box>
                      <img
                        maxWidth="84px"
                        height="84px"
                        src="/images/545.png"
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                      }}
                      color={"#CBCBCB"}
                    >
                      تعداد طرح:654
                    </Typography>
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",

                        height: "25%",
                      }}
                    >
                      <Typography
                        xs={12}
                        sm={6}
                        md={12}
                        sx={{
                          display: "flex",

                          fontSize: "16px",
                          fontWeight: "1000",
                          pt: "10px",
                          color: "colors.green",
                        }}
                      >
                        طراح: فریبا حسینی
                        <button
                          style={{
                            background: "#EEEEEE",
                            width: "57px",
                            height: "30px",
                            marginRight: "90px",
                            borderRadius: "10px",
                            border: "0",
                          }}
                        >
                          مشاهده
                        </button>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        height: "75%",
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "start",
                      }}
                    >
                      <Typography
                        sx={{
                          marginTop: "10px",
                          maxWidth: "255px",
                          p: "8px",
                          fontSize: "17px",
                        }}
                      >
                        لورم ایپسوم متن ساختگی با تولید نامه و مجله در ستون و
                        سطرآنچنان که لازم{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Button
              sx={{
                width: "90%",
                height: "50px",
                backgroundColor: "#EEEEEE",
                color: "colors.black",
                fontWeight: "bold",
                marginRight: "10px",
                m: 1,
              }}
            >
              <span
                style={{
                  marginLeft: "16px",
                }}
              >
                {" "}
                افزودن به کلکسیون
              </span>
              <svg
                id="_01_align_center"
                data-name="01 align center"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="21"
                viewBox="0 0 22 21"
              >
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M0,2.727V10H10V0H2.727A2.727,2.727,0,0,0,0,2.727ZM8.182,8.182H1.818V2.727a.909.909,0,0,1,.909-.909H8.182Z"
                  fill="#393e46"
                />
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M0,20.273A2.727,2.727,0,0,0,2.727,23H10V13H0Zm1.818-5.455H8.182v6.364H2.727a.909.909,0,0,1-.909-.909Z"
                  transform="translate(0 -2)"
                  fill="#393e46"
                />
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M13,13V23h7.273A2.727,2.727,0,0,0,23,20.273V13Zm8.182,7.273a.909.909,0,0,1-.909.909H14.818V14.818h6.364Z"
                  transform="translate(-1 -2)"
                  fill="#393e46"
                />
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M17,11h2V7h4V5H19V1H17V5H13V7h4Z"
                  transform="translate(-1 -1)"
                  fill="#393e46"
                />
              </svg>
            </Button>
            <Button
              sx={{
                width: "90%",
                height: "50px",
                backgroundColor: "colors.pink",
                color: "white",
                fontWeight: "bold",
                marginRight: "10px",
                m: 1,
                "&:hover ": {
                  border: "1px solid ",
                  color: "colors.pink",
                  backgroundColor: "white",
                  "&:hover svg": {
                    color: "colors.pink",
                  },
                },
              }}
            >
              <span
                style={{
                  marginLeft: "16px",
                }}
              >
                {" "}
                دانلود فایل با کیفیت بالا
              </span>
              <svg
                id="_3917330"
                data-name="3917330"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M9.878,16.215a3.255,3.255,0,0,0,4.244,0l3.211-2.873a.828.828,0,0,0-.035-1.233,1.087,1.087,0,0,0-1.379-.029L12.993,14.7,13,.895A.952.952,0,0,0,12,0h0a.952.952,0,0,0-1,.895l-.009,13.786-2.91-2.6a1.085,1.085,0,0,0-1.415,0,.83.83,0,0,0,0,1.266Z"
                  transform="translate(-0.997)"
                  fill="#fff"
                />
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M21.083,16h0a.961.961,0,0,0-.917,1v4a.961.961,0,0,1-.917,1H2.75a.961.961,0,0,1-.917-1V17a.961.961,0,0,0-.917-1h0A.961.961,0,0,0,0,17v4a2.883,2.883,0,0,0,2.75,3h16.5A2.883,2.883,0,0,0,22,21V17A.961.961,0,0,0,21.083,16Z"
                  transform="translate(0 -4)"
                  fill="#fff"
                />
              </svg>
            </Button>
            <Box
              sx={{
                display: "flex",
                width: "90%",
                justifyContent: "space-between",
                alignItems: "space-between",
                marginTop: "40px",
                m: 1,
                marginBottom: "20px",
              }}
            >
              <Typography>
                <svg
                  id="_3916699"
                  data-name="3916699"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  style={{
                    marginBottom: "-5px",
                  }}
                >
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0Zm0,20.167A9.167,9.167,0,1,1,20.167,11,9.167,9.167,0,0,1,11,20.167Z"
                  />
                  <path
                    id="Path_9"
                    data-name="Path 9"
                    d="M12,10H11a1,1,0,0,0,0,2h1v6a1,1,0,0,0,2,0V12A2,2,0,0,0,12,10Z"
                    transform="translate(-1 -1.333)"
                  />
                  <circle
                    id="Ellipse_20"
                    data-name="Ellipse 20"
                    cx="1.5"
                    cy="1.5"
                    r="1.5"
                    transform="translate(9.5 4.524)"
                  />
                </svg>
                <span> گزارش مشکلات دانلود فایل</span>
              </Typography>
              <Typography>تعداد دانلود:865</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Button
                sx={{
                  width: "30%",
                  height: "43px",
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "10px",
                  border: "1px solid #C2C2C2",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    id="_3917574"
                    data-name="3917574"
                    d="M16.088,12.222a3.878,3.878,0,0,0-3.2,1.687L7.474,11.459a3.815,3.815,0,0,0,0-2.906l5.41-2.461a3.884,3.884,0,1,0-.688-2.2,3.865,3.865,0,0,0,.067.655L6.516,7.16A3.888,3.888,0,1,0,6.5,12.849l5.767,2.606a3.951,3.951,0,0,0-.066.654,3.885,3.885,0,1,0,3.884-3.888Zm0-10.555a2.222,2.222,0,1,1-2.219,2.222,2.221,2.221,0,0,1,2.219-2.222ZM3.88,12.222A2.222,2.222,0,1,1,6.1,10,2.221,2.221,0,0,1,3.88,12.222Zm12.208,6.11a2.222,2.222,0,1,1,2.22-2.222,2.221,2.221,0,0,1-2.22,2.222Z"
                    transform="translate(0.027 0.001)"
                  />
                </svg>{" "}
                <span
                  style={{
                    marginRight: "10px",
                  }}
                >
                  {" "}
                  اشتراک گذاری
                </span>
              </Button>
              <Button
                sx={{
                  width: "30%",
                  height: "43px",
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "10px",
                  border: "1px solid #C2C2C2",
                }}
              >
                <svg
                  id="_01_align_center"
                  data-name="01 align center"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                >
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M14.577.917A5.318,5.318,0,0,0,10,3.717,5.318,5.318,0,0,0,5.414.917,5.728,5.728,0,0,0,0,6.9C0,12.648,9.125,19.288,9.514,19.57l.481.347.481-.347c.388-.28,9.514-6.922,9.514-12.671A5.728,5.728,0,0,0,14.577.917ZM10,17.828C7.285,15.766,1.665,10.7,1.665,6.9A4.047,4.047,0,0,1,5.414,2.614,4.047,4.047,0,0,1,9.162,6.9h1.666a4.047,4.047,0,0,1,3.748-4.285A4.047,4.047,0,0,1,18.325,6.9C18.325,10.7,12.7,15.766,10,17.828Z"
                    transform="translate(0.005 -0.917)"
                    fill="#232931"
                  />
                </svg>{" "}
                <span
                  style={{
                    marginRight: "10px",
                  }}
                >
                  {" "}
                  پسندیدم
                </span>
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Typography
          sx={{
            padding: "10px",
          }}
        >
          <span
            style={{
              marginLeft: "13px",
            }}
          >
            برچسب های مرتبط
          </span>

          <Button
            variant="contained"
            width="48px"
            height="30px"
            sx={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #4ECCA3",
              borderRadius: "10px",
              boxShadow: "none",
              m: 1,
              "&:hover ": {
                color: "white",
                backgroundColor: "colors.green",
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <path
                id="_3917132"
                data-name="3917132"
                d="M15.773,14.832,11.8,10.857a6.668,6.668,0,1,0-.941.941l3.974,3.974a.666.666,0,1,0,.941-.941ZM6.647,11.973a5.326,5.326,0,1,1,5.326-5.326,5.326,5.326,0,0,1-5.326,5.326Z"
                transform="translate(0.032 0.032)"
                fill="#4ecca3"
              />
            </svg>
            <span
              style={{
                marginRight: "10px",
              }}
            >
              {" "}
              قالب اینستاگرام
            </span>
          </Button>
          <Button
            variant="contained"
            width="48px"
            height="30px"
            sx={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #4ECCA3",
              borderRadius: "10px",
              boxShadow: "none",
              m: 1,
              "&:hover ": {
                color: "white",
                backgroundColor: "colors.green",
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <path
                id="_3917132"
                data-name="3917132"
                d="M15.773,14.832,11.8,10.857a6.668,6.668,0,1,0-.941.941l3.974,3.974a.666.666,0,1,0,.941-.941ZM6.647,11.973a5.326,5.326,0,1,1,5.326-5.326,5.326,5.326,0,0,1-5.326,5.326Z"
                transform="translate(0.032 0.032)"
                fill="#4ecca3"
              />
            </svg>
            <span
              style={{
                marginRight: "10px",
              }}
            >
              {" "}
              قالب اینستاگرام
            </span>
          </Button>
          <Button
            variant="contained"
            width="48px"
            height="30px"
            sx={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #4ECCA3",
              borderRadius: "10px",
              boxShadow: "none",
              m: 1,
              "&:hover ": {
                color: "white",
                backgroundColor: "colors.green",
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <path
                id="_3917132"
                data-name="3917132"
                d="M15.773,14.832,11.8,10.857a6.668,6.668,0,1,0-.941.941l3.974,3.974a.666.666,0,1,0,.941-.941ZM6.647,11.973a5.326,5.326,0,1,1,5.326-5.326,5.326,5.326,0,0,1-5.326,5.326Z"
                transform="translate(0.032 0.032)"
                fill="#4ecca3"
              />
            </svg>
            <span
              style={{
                marginRight: "10px",
              }}
            >
              {" "}
              قالب اینستاگرام
            </span>
          </Button>
          <Button
            variant="contained"
            width="48px"
            height="30px"
            sx={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid #4ECCA3",
              borderRadius: "10px",
              boxShadow: "none",
              m: 1,
              "&:hover ": {
                color: "white",
                backgroundColor: "colors.green",
              },
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <path
                id="_3917132"
                data-name="3917132"
                d="M15.773,14.832,11.8,10.857a6.668,6.668,0,1,0-.941.941l3.974,3.974a.666.666,0,1,0,.941-.941ZM6.647,11.973a5.326,5.326,0,1,1,5.326-5.326,5.326,5.326,0,0,1-5.326,5.326Z"
                transform="translate(0.032 0.032)"
                fill="#4ecca3"
              />
            </svg>
            <span
              style={{
                marginRight: "10px",
              }}
            >
              {" "}
              قالب اینستاگرام
            </span>
          </Button>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "65%",
            }}
          >
            <span style={{ borderRight: "8px solid #4ECCA3 " }}>
              <span
                style={{ margin: "20px", fontSize: "12px", fontWeight: "500" }}
              >
                بیشتر با فریبا حسنی
              </span>
            </span>

            <span
              style={{
                borderRight: "8px solid #4ECCA3",
              }}
            >
              <span
                style={{ margin: "20px", fontSize: "12px", fontWeight: "500" }}
              >
                طرح های مشابه دیگر
              </span>
            </span>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                padding: "10px",
              }}
            ></Box>
            <Grid
              container
              sx={{
                width: "90%",
              }}
            >
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    padding: "4px",

                    margin: "0",
                  }}
                  src="./images/qqq.png"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    padding: "4px",

                    margin: "0",
                  }}
                  src="./images/dwad.png"
                />
              </Grid>
            </Grid>

            <Grid
              container
              sx={{
                width: "90%",
              }}
            >
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    padding: "4px",

                    margin: "0",
                  }}
                  src="./images/ewe.png"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    padding: "4px",

                    margin: "0",
                  }}
                  src="./images/qqq.png"
                />
              </Grid>
              <Grid
                sx={{
                  display: {
                    lg: "block",
                    md: "none",
                    sm: "none",
                    xs: "none",
                  },
                }}
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
              >
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    padding: "4px",

                    margin: "0",
                  }}
                  src="./images/dwad.png"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SingleProduct;
