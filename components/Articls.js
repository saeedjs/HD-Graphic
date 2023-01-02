import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const Articls = (prop) => {
  const [articls, setArticls] = useState([]);
  useEffect(() => {
    axios
      .get("https://hdgraphic.ir/api/v1/blog/posts/list")
      .then((result) => {
        setArticls(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(articls)
  }, []);
  return (
    <>
      <Container minWidth="sm" maxWidth="xxl">
        <Box sx={{ mt: "140px", display: "flex", mr: "14px" }}>
          <Box
            height={"22px"}
            sx={{
              height: "22px",
              backgroundColor: "colors.green",
              width: "8px",
            }}
          ></Box>
          <Box sx={{ mr: "10px" }}>
            <Typography sx={{ fontSize: "16px" }}>{prop.title}</Typography>
          </Box>
          <Box sx={{ mr: "35px" }}>
            <Link href="/blog">
              <Typography sx={{ color: "colors.green", fontSize: "14px" }}>
                مشاهده همه
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Swiper
            spaceBetween={10}
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
          >
            {articls.map((item) => (
              <SwiperSlide>
                <Link href={"/blog/" + item.slug}>
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
                      <Box
                        sx={{ display: "flex", alignItems: "center", m: 1.2 }}
                      >
                        <img
                          maxWidth="150px"
                          height="150px"
                          style={{ borderRadius: "10px" }}
                          src={"https://hdgraphic.ir" + item.banner}
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
                              fontSize: "14px",
                              fontWeight: "1000",
                              pt: "30px",
                            }}
                          >
                            {item.title}
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
                              maxWidth: "233px",
                              height: "103px",
                              borderRadius: "10px",
                              backgroundColor: "#FFFFFF",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                width: "255px",
                                p: "8px",
                                fontSize: "14px",
                                fontWeight: "normal",
                                height: "100%",
                                overflow: "hidden",
                                mb: "23px",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            ></Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </>
  );
};
export default Articls;
