import { Typography, Box, Button, Grid, Checkbox } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
const ProfileFileManager = () => {
  const [check, setCheck] = useState("check");

  return (
    <>
      {/* create and Edit */}
      <Box>
        <Typography component={"h3"} variant="h3" sx={{ fontWeight: "bold", mb: "2.2rem" }}>
          ایجاد و ویرایش فایل
        </Typography>
        <Grid container>
          <Grid item lg={9}>
            <Box sx={{ display: "flex" }}>
              <Box item sx={{ display: "flex", alignItems: "end", ml: 2 }}>
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
                    sx={{ display: "flex", pt: 2, alignItems: "center", fontSize: "12px" }}
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
              <Box item sx={{ display: "flex", alignItems: "end" }}>
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
                    sx={{ display: "flex", pt: 2, alignItems: "center", fontSize: "12px" }}
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
            <Box sx={{ display: "flex" }}>
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
                  margin: "0 15px",
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
              <Box>
                <Box
                  sx={{
                    width: "18px",
                    height: "18px",
                    border: `${check && "1px solid #c2c2c2"}`,
                    borderRadius: "5px",
                    cursor: "pointer",
                    backgroundColor: "colors.green",
                  }}
                  //   onClick={() => }
                ></Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProfileFileManager;
