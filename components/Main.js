import { Container, Grid } from "@mui/material";
import ProductMain from "./products/Productmain";
import TitleProducts from "./products/title";
import Productmain3 from "./products/Productmain3";
import Landing from "./Header/Landing";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const Main = () => {
  return (
    <>
      <Landing />
      <Container Container>
        <Box
          sx={{
            display: {
              lg: "inline",
              md: "inline",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <span
            style={{ marginRight: "110px", borderRight: "8px solid #4ECCA3 " }}
          >
            <span
              style={{
                marginRight: "20px",
                fontSize: "12px",
                fontWeight: "500",
              }}
            >
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
          </Link>
        </Box>

        <ProductMain />

        <Productmain3 />
      </Container>
      <Box sx={{ mt: 5 }}>
        <Swiper
          spaceBetween={10}
          // slidesPerView={3.5}
          breakpoints={{
            0: {
              slidesPerView: 0.8,
            },
            500: {
              slidesPerView: 1.1,
            },
            640: {
              slidesPerView: 1.5,
            },
            930: {
              slidesPerView: 2.1,
            },
            1270: {
              slidesPerView: 2.9,
            },
            1536: {
              slidesPerView: 3.5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "181px",
                backgroundColor: "colors.white",
                borderRadius: "10px",
                mr: 1,
              }}
            >
              <Box sx={{ display: "flex", height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", m: 1.2 }}>
                  <img maxWidth="150px" height="150px" src="/images/245.png" />
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
                      sx={{ fontSize: "16px", fontWeight: "1000", pt: "30px" }}
                    >
                      اهمیت طراحی مناسب برای چاپ در تبلیغات
                    </Typography>
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
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "181px",
                backgroundColor: "colors.white",
                borderRadius: "10px",
                mr: 1,
              }}
            >
              <Box sx={{ display: "flex", height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", m: 1.2 }}>
                  <img maxWidth="150px" height="150px" src="/images/666.png" />
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
                      sx={{ fontSize: "16px", fontWeight: "1000", pt: "30px" }}
                    >
                      اهمیت طراحی مناسب برای چاپ در تبلیغات
                    </Typography>
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
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "181px",
                backgroundColor: "colors.white",
                borderRadius: "10px",
                mr: 1,
              }}
            >
              <Box sx={{ display: "flex", height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", m: 1.2 }}>
                  <img maxWidth="150px" height="150px" src="/images/485.png" />
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
                      sx={{ fontSize: "16px", fontWeight: "1000", pt: "30px" }}
                    >
                      اهمیت طراحی مناسب برای چاپ در تبلیغات
                    </Typography>
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
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "181px",
                backgroundColor: "colors.white",
                borderRadius: "10px",
                mr: 1,
              }}
            >
              <Box sx={{ display: "flex", height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", m: 1.2 }}>
                  <img maxWidth="150px" height="150px" src="/images/485.png" />
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
                      sx={{ fontSize: "16px", fontWeight: "1000", pt: "30px" }}
                    >
                      اهمیت طراحی مناسب برای چاپ در تبلیغات
                    </Typography>
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
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "181px",
                backgroundColor: "colors.white",
                borderRadius: "10px",
                mr: 1,
              }}
            >
              <Box sx={{ display: "flex", height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", m: 1.2 }}>
                  <img maxWidth="150px" height="150px" src="/images/485.png" />
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
                      sx={{ fontSize: "16px", fontWeight: "1000", pt: "30px" }}
                    >
                      اهمیت طراحی مناسب برای چاپ در تبلیغات
                    </Typography>
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
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                width: "100%",
                height: "181px",
                backgroundColor: "colors.white",
                borderRadius: "10px",
                mr: 1,
              }}
            >
              <Box sx={{ display: "flex", height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", m: 1.2 }}>
                  <img maxWidth="150px" height="150px" src="/images/485.png" />
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
                      sx={{ fontSize: "16px", fontWeight: "1000", pt: "30px" }}
                    >
                      اهمیت طراحی مناسب برای چاپ در تبلیغات
                    </Typography>
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
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است.{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
};

export default Main;
