import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from "@mui/material";
import { Container } from "@mui/system";
const Articls = () => {
  return (
    <>
      <Container minWidth="sm" maxWidth="xxl">
        <Box sx={{ mt: "140px", display: "flex", mr:'14px' }}>
          <Box
            height={"22px"}
            sx={{
              height: "22px",
              backgroundColor: "colors.green",
              width: "8px",
            }}
          ></Box>
          <Box sx={{ mr: "10px" }}>
            <Typography sx={{fontSize:'16px'}}>مطالب وبلاگ</Typography>
          </Box>
          <Box sx={{ mr: "35px" }}>
            <Typography sx={{ color: "colors.green" }}>مشاهده همه</Typography>
          </Box>
        </Box>
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
                    <img
                      maxWidth="150px"
                      height="150px"
                      src="/images/245.png"
                    />
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
                    <img
                      maxWidth="150px"
                      height="150px"
                      src="/images/666.png"
                    />
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
                    <img
                      maxWidth="150px"
                      height="150px"
                      src="/images/485.png"
                    />
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
                    <img
                      maxWidth="150px"
                      height="150px"
                      src="/images/485.png"
                    />
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
                    <img
                      maxWidth="150px"
                      height="150px"
                      src="/images/485.png"
                    />
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
                    <img
                      maxWidth="150px"
                      height="150px"
                      src="/images/485.png"
                    />
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
      </Container>
    </>
  );
};
export default Articls;
