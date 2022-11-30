import * as React from "react";
import { Button, Grid, ListItem, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import { List } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box color={"white"} sx={{ mt: 7 }}>
        <Box
          sx={{
            width: "100%",
            minHeight: "281px",
            backgroundColor: "colors.black",
          }}
        >
          <Box sx={{ maxWidth: "100%" }}>
            <Container style={{ padding: 0 }}>
              <Grid
                container
                rowSpacing={1}
                sx={{ justifyContent: "center" }}
                // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={10} sm={6} lg={4} xl={4.5}>
                  <List>
                    <ListItem sx={{ py: 1, pb: 2 }}>
                      <Box>
                        <img src="/images/logo.png" />
                      </Box>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Box>
                        <Typography sx={{ fontSize: "15px", fontWeight: 1000 }}>
                          برای دریافت جدیدترین تخفیف ها و تغییرات اچ دی گرافیک
                          در ایمیل با وارد کردن ایمیل خود در خبرنامه اچ دی
                          گرافیک عضو شوید
                        </Typography>
                      </Box>
                    </ListItem>
                    <ListItem>
                      <Box>
                        <TextField
                          size="small"
                          color="light"
                          sx={{
                            maxWidth: "323px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "0px 3px 3px 0px",
                          }}
                          placeholder={"آدرس ایمیل خود را وارد کنید"}
                        ></TextField>
                      </Box>
                      <Box>
                        <Button
                          variant="contained"
                          sx={{
                            maxWidth: "60px",
                            height: "40px",
                            boxShadow: "none",
                            borderRadius: "3px 0px 0px 3px",
                            backgroundColor: "colors.green",
                          }}
                        >
                          ارسال
                        </Button>
                      </Box>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={10} sm={6} lg={2} xl={2}>
                  <List>
                    <ListItem sx={{ py: 1, pb: 3 }}>
                      <Box>
                        <Typography sx={{ fontWeight: 1000, fontSize: "17px" }}>
                          خدمات مشتریان
                        </Typography>
                      </Box>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Typography sx={{ fontSize: "15px", fontWeight: 800 }}>
                        حساب کاربری من
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Typography sx={{ fontSize: "15px", fontWeight: 800 }}>
                        پاسخ به سوالات متداول
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Typography sx={{ fontSize: "15px", fontWeight: 800 }}>
                        حریم خصوصی
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Typography sx={{ fontSize: "15px", fontWeight: 800 }}>
                        قوانین استفاده
                      </Typography>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={10} sm={6} lg={2} xl={2}>
                  <List>
                    <ListItem sx={{ py: 1, pb: 3 }}>
                      <Box>
                        <Typography sx={{ fontWeight: 1000, fontSize: "17px" }}>
                          اچ دی گرافیک
                        </Typography>
                      </Box>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Typography sx={{ fontSize: "15px", fontWeight: 800 }}>
                        درباره ما
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Typography sx={{ fontSize: "15px", fontWeight: 800 }}>
                        راهنمای خرید محصول
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Typography sx={{ fontSize: "15px", fontWeight: 800 }}>
                        راهنمای پرداخت
                      </Typography>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Typography sx={{ fontSize: "15px", fontWeight: 800 }}>
                        تماس با ما
                      </Typography>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={10} sm={6} lg={4} xl={3.5}>
                  <List>
                    <ListItem sx={{ py: 1, pb: 3 }}>
                      <Box>
                        <Typography sx={{ fontWeight: 1000, fontSize: "17px" }}>
                          نماد ها و افتخارات
                        </Typography>
                      </Box>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap:{
                            xl:'nowrap',
                            xs:'wrap'
                          }
                        }}
                      >
                        <Box
                          width={100}
                          height={104}
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                            mr: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 1,
                            mt: 1
                          }}
                        >
                          <img src="/images/samandehi.png" />
                        </Box>
                        <Box
                          width={100}
                          height={104}
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                            mr: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 1,
                            mt: 1
                          }}
                        >
                          <img src="/images/enemad.png" />
                        </Box>
                        <Box
                          width={100}
                          height={104}
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                            mr: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 1,
                            mt: 1
                          }}
                        >
                          <img src="/images/jmobiliraan.png" />
                        </Box>
                      </Box>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid #393E46",
            width: "100%",
            height: "45px",
            backgroundColor: "colors.black",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mr: 7 }}>
            <Typography sx={{ fontSize: "15px", fontWeight: 800 }}>
              کلیه حقوق این سایت متعلق به مجموعه ریحانی میباشد
            </Typography>
          </Box>
          <Box sx={{ display: "flex", ml: 7 }}>
            <Box
              width={24}
              height={24}
              sx={{
                backgroundColor: "colors.white",
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: 2,
              }}
            >
              <Box height={20}>
                <img src="/images/icon/717392.png" />
              </Box>
            </Box>
            <Box
              width={24}
              height={24}
              sx={{
                backgroundColor: "colors.white",
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: 2,
              }}
            >
              <Box height={20}>
                <img src="/images/icon/739260.png" />
              </Box>
            </Box>
            <Box
              width={24}
              height={24}
              sx={{
                backgroundColor: "colors.white",
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: 2,
              }}
            >
              <Box height={20}>
                <img src="/images/icon/1384023.png" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
