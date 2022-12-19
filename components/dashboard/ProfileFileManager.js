import { Typography, Box, Button, Grid, Checkbox } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
const ProfileFileManager = () => {
  const [checkFree, setCheckFree] = useState(true);
  const [checkRule, setCheckRule] = useState(true);

  const handleCheckFree = (check) => {
    setCheckFree(!check);
  };
  const handleCheckRule = (check) => {
    setCheckRule(!check);
  };
  return (
    <>
      {/* create and Edit */}
      <Box>
        <Typography component={"h3"} variant="h3" sx={{ fontWeight: "bold", mb: "2.2rem" }}>
          ایجاد و ویرایش فایل
        </Typography>
        <Grid container>
          <Grid item xs={12} lg={9} order={{ xs: 2, lg: 1 }}>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box
                item
                sx={{
                  display: "flex",
                  alignItems: "end",
                  ml: 2,
                }}
              >
                <input type="file" id="files" style={{ display: "none" }} />
                <label htmlFor="files">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      border: "1px solid",
                      borderColor: "colors.green",
                      borderRadius: "5px",
                      width: "120px",
                      height: "120px",
                      justifyContent: "center",
                    }}
                  >
                    <img src="/images/upload-img.png" />
                    <Typography component={"p"} sx={{ mt: 1 }}>
                      انتخاب کاور
                    </Typography>
                  </Box>
                </label>
                <Box sx={{ display: "flex", flexDirection: "column", pr: "1.2rem" }}>
                  <Typography
                    sx={{ fontWeight: "bold", pr: "0.5rem", fontSize: "14px" }}
                    variant="h4"
                    component={"h4"}
                  >
                    تصویر نمایش محصول
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      pt: 2,
                      alignItems: "center",
                      fontSize: "12px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Box
                      width="16px"
                      height="16px"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "100%",
                        backgroundColor: "#c2c2c2",
                        mx: 1,
                      }}
                      fontSize="12px"
                    >
                      <CheckIcon
                        sx={{
                          color: "#FFFFFF",
                        }}
                      />
                    </Box>
                    اندازه تصویر 120 در 120 پیکسل
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      pt: 1,
                      alignItems: "center",
                      fontSize: "12px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Box
                      width="16px"
                      height="16px"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "100%",
                        backgroundColor: "#c2c2c2",
                        mx: 1,
                        whiteSpace: "nowrap",
                      }}
                      fontSize="12px"
                    >
                      <CheckIcon
                        sx={{
                          color: "#FFFFFF",
                        }}
                      />
                    </Box>
                    حداکثر حجم تصویر 1024 کیلوبایت
                  </Typography>
                </Box>
              </Box>
              <Box
                item
                sx={{
                  display: "flex",
                  alignItems: "end",
                  mt: 2,
                }}
              >
                <input type="file" id="files" style={{ display: "none" }} />
                <label htmlFor="files">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      border: "1px solid",
                      borderColor: "colors.green",
                      borderRadius: "5px",
                      width: "120px",
                      height: "120px",
                      justifyContent: "center",
                    }}
                  >
                    <img src="/images/cloude.png" />
                    <Typography component={"p"} sx={{ mt: 1 }}>
                      انتخاب فایل
                    </Typography>
                  </Box>
                </label>
                <Box sx={{ display: "flex", flexDirection: "column", pr: "1.2rem" }}>
                  <Typography
                    sx={{ fontWeight: "bold", pr: "0.5rem", fontSize: "14px" }}
                    variant="h4"
                    component={"h4"}
                  >
                    فایل های اصلی
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      pt: 2,
                      alignItems: "center",
                      fontSize: "12px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Box
                      width="16px"
                      height="16px"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "100%",
                        backgroundColor: "#c2c2c2",
                        mx: 1,
                      }}
                      fontSize="12px"
                    >
                      <CheckIcon
                        sx={{
                          color: "#FFFFFF",
                        }}
                      />
                    </Box>
                    آپلود بصورت فایل فشرده با پسوند های مجاز
                  </Typography>
                  <Typography
                    sx={{ display: "flex", pt: 1, alignItems: "center", fontSize: "12px" }}
                  >
                    <Box
                      width="16px"
                      height="16px"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "100%",
                        backgroundColor: "#c2c2c2",
                        mx: 1,
                        whiteSpace: "nowrap",
                      }}
                      fontSize="12px"
                    >
                      <CheckIcon
                        sx={{
                          color: "#FFFFFF",
                        }}
                      />
                    </Box>
                    حداکثر حجم فایل 5048 کیلوبایت
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", mt: "45px", flexWrap: "wrap" }}>
              <input
                placeholder="عنوان"
                style={{
                  width: "414px",
                  height: "42px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#eeeeee",
                  borderRadius: "5px",
                  fontFamily: "iranYekan",
                  marginLeft: "15px",
                  padding: "10px",
                }}
              />
              <input
                placeholder="قیمت به تومان"
                style={{
                  width: "237px",
                  height: "42px",
                  border: "none",
                  outline: "none",
                  padding: "10px",
                  backgroundColor: "#eeeeee",
                  borderRadius: "5px",
                  fontFamily: "iranYekan",
                }}
              />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "18px",
                    height: "18px",
                    mr: 2,
                    border: `${!checkFree && "1px solid #c2c2c2"}`,
                    borderRadius: "5px",
                    cursor: "pointer",
                    backgroundColor: `${checkFree && "colors.green"}`,
                  }}
                  onClick={() => handleCheckFree(checkFree)}
                ></Box>
                <Typography sx={{ fontSize: "14px", px: 1 }}>رایگان</Typography>
              </Box>
            </Box>
            <Box sx={{ mt: "12px" }}>
              <textarea
                style={{
                  width: "100%",
                  height: "83px",
                  backgroundColor: "#eeeeee",
                  resize: "none",
                  border: "none",
                  outline: "none",
                  fontFamily: "iranYekan",
                  borderRadius: "5px",
                  padding: "10px",
                }}
                placeholder="توضیح مختصر درباره طرح"
              ></textarea>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "18px",
                    height: "18px",
                    border: `${!checkRule && "1px solid #c2c2c2"}`,
                    borderRadius: "5px",
                    cursor: "pointer",
                    backgroundColor: `${checkRule && "colors.green"}`,
                  }}
                  onClick={() => handleCheckRule(checkRule)}
                ></Box>
                <Typography sx={{ fontSize: "14px", p: 1 }}>پذیرش قوانین فروش فایل</Typography>
              </Box>
              <Button
                sx={{
                  backgroundColor: "colors.green",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "colors.greenHover",
                  },
                }}
              >
                آپلود و ثبت
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={3}
            sx={{
              pr: 6,
              mt: "-10px",
            }}
            order={{
              xs: 1,
              lg: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
              <Typography
                sx={{
                  p: "5px",
                  alignSelf: {
                    lg: "start",
                  },
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                پیشنمایش کاور
              </Typography>
              <Box
                sx={{
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  boxShadow:
                    "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                  borderRadius: "5px",
                }}
              >
                <img src="/images/zsds.png" />
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography>فایل اصلی بارگذاری</Typography>
                <Typography sx={{ mt: 1.5 }}>
                  <img src="/images/cloude-s.png" style={{ verticalAlign: "middle" }} />
                  <span style={{ padding: "5px" }}> فایل ضمیمه {}</span>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProfileFileManager;
