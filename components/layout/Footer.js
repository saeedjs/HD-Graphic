import { Button, Grid, ListItem, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import { List } from "@mui/material";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
const Footer = () => {
  const [footerSocials, setFooterSocials] = useState([]);
  axios
    .get("https://hdgraphic.ir/api/v1/settings/social")
    .then((result) => {
      setFooterSocials(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  const [footerCol2, setFooterCol2] = useState("");
  axios
    .get("https://hdgraphic.ir/api/v1/settings/footer")
    .then((result) => {
      setFooterCol2(result.data.col_2);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
      <Box color={"white"} sx={{ mt: 20}}>
        <Box
          sx={{
            width: "100%",
            minHeight: "281px",
            backgroundColor: "colors.black",
            direction:'rtl'
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
                        <Link href={"#"}>
                          <img src="/images/logo.png" />
                        </Link>
                      </Box>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Box>
                        <Typography sx={{ fontSize: "14px", lineHeight: "2" }}>
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
                            fontFamily: "dana",
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
                        <Typography sx={{ fontSize: "14px" }}>
                          خدمات مشتریان
                        </Typography>
                      </Box>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Link href={"#"}>
                        <Typography sx={{ fontSize: "14px" }}>
                          حساب کاربری من
                        </Typography>
                      </Link>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Link href={"#"}>
                        <Typography sx={{ fontSize: "14px" }}>
                          پاسخ به سوالات متداول
                        </Typography>
                      </Link>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Link href={"#"}>
                        <Typography sx={{ fontSize: "14px" }}>
                          حریم خصوصی
                        </Typography>
                      </Link>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Link href={"#"}>
                        <Typography sx={{ fontSize: "14px" }}>
                          قوانین استفاده
                        </Typography>
                      </Link>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={10} sm={6} lg={2} xl={2}>
                  <List>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Link href={"#"}>
                        <Typography
                          sx={{ fontSize: "14px" }}
                          dangerouslySetInnerHTML={{ __html: footerCol2 }}
                        />
                      </Link>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={10} sm={6} lg={4} xl={3.5}>
                  <List>
                    <ListItem sx={{ py: 1, pb: 3 }}>
                      <Box>
                        <Typography sx={{ fontSize: "14px" }}>
                          نماد ها و افتخارات
                        </Typography>
                      </Box>
                    </ListItem>
                    <ListItem sx={{ pb: 0.6 }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: {
                            xl: "nowrap",
                            xs: "wrap",
                          },
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
                            mt: 1,
                          }}
                        >
                          <Link href={"#"}>
                            <img src="/images/samandehi.png" />
                          </Link>
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
                            mt: 1,
                          }}
                        >
                          <Link href={"#"}>
                            <img src="/images/enemad.png" />
                          </Link>
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
                            mt: 1,
                          }}
                        >
                          <Link href={"#"}>
                            <img src="/images/jmobiliraan.png" />
                          </Link>
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
            <Typography sx={{ fontSize: "14px" }}>
              کلیه حقوق این سایت متعلق به مجموعه ریحانی میباشد
            </Typography>
          </Box>
          <Box sx={{ display: "flex", ml: 7 }}>
            {footerSocials.map((item) => (
              <Link href={item.url}>
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
                    <img width={'100%'} height={"100%"} src={"https://hdgraphic.ir/"+item.file} />
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
