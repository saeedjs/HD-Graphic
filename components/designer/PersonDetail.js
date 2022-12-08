import { Container, Typography, Box, Grid } from "@mui/material";
import { width } from "@mui/system";
import Link from "next/link";
const PersonDetail = () => {
  return (
    <>
      {/* <Box
        sx={{
          marginTop: "-100px",
          backgroundColor: "#efefef",
          marginBottom: "60px",
          position: "relative ",
          pb: 6,
        }}
      >
        <img src="images/back.png" style={{ width: "100%", maxHeight: "196px" }} />
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            component={"img"}
            sx={{
              position: "absolute",
              bottom: "-35px",
              right: "40px",
              width: {
                xs: "90px",
                md: "120px",
              },
            }}
            src="images/21.png"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: {
              xs: "16px",
              md: "20px",
            },
            right: {
              xs: "125px",
              md: "170px",
            },
            width: "max-content",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography
                sx={{
                  color: "colors.pink",
                  px: 2,
                  py: "4px",
                  mb: 2,
                  mx: 2,
                  backgroundColor: "white",
                  borderRadius: "5px",
                  fontWeight: "bold",
                }}
              >
                مهرانه شریفی
              </Typography>
              <Typography sx={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}>
                <img src="images/download.png" style={{ position: "relative", padding: "0 6px" }} />
                دانلود ها:625
              </Typography>
            </Box>
            <Box sx={{ display: "flex", pt: 6, flexWrap: "wrap" }}>
              <Typography sx={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}>
                <img
                  src="images/folder.png"
                  style={{
                    position: "relative",
                    padding: "0 6px",
                  }}
                />
                فایل ها:456
              </Typography>
              <Typography sx={{ display: "flex", justifyContent: "center", fontWeight: "bold" }}>
                <img src="images/info.png" style={{ position: "relative", padding: "0 6px" }} />
                <Link href="#">درباره مدرس</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box> */}
      <Box>
        <Box
          component={"img"}
          src="images/back.png"
          sx={{
            width: "100%",
            backgroundColor: "#efefef",
            pb: "40px",
          }}
        ></Box>
        <Grid
          container
          sx={{
            position: "relative",
            bottom: {
              xs: "105px",
              sm: "140px",
            },
            justifyContent: {
              xs: "center",
              md: "start",
            },

            pr: {
              xs: 2,
              md: 4,
            },
            whiteSpace: "nowrap",
          }}
        >
          <Grid item sx={{ px: 2 }}>
            <Box
              component={"img"}
              src="images/person.png"
              sx={{
                width: {
                  // xs: "50%",
                  md: "120px",
                },
              }}
            ></Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              px: {
                md: 3,
                xl: 2,
              },
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  color: "colors.pink",
                  backgroundColor: "white",
                  p: "2px 12px 2px 10px",
                  mr: {
                    xs: "-10px",
                    md: "0",
                  },
                  textAlign: "center",
                  borderRadius: "5px",
                  width: "max-content",
                  fontWeight: "bold",
                }}
              >
                مهرانه شریفی
              </Typography>
              <Typography sx={{ mt: "15px", pr: 1, fontSize: "14px" }}>
                <img src="images/download.png" style={{ verticalAlign: "bottom" }} /> دانلودها:6958
              </Typography>
            </Box>
            <Box
              sx={{
                pl: {
                  xs: 1,
                  md: 2,
                },
              }}
            >
              <img
                src="images/folder.png"
                style={{ verticalAlign: "middle", paddingLeft: "8px" }}
              />
              <span style={{ fontSize: "14px" }}>فایل ها:6958</span>
            </Box>
            <Box
              sx={{
                pl: {
                  xs: 1,
                  md: 4,
                },
              }}
            >
              <img src="images/info.png" style={{ verticalAlign: "middle", paddingLeft: "4px" }} />
              <span style={{ fontSize: "14px" }}>درباره مدرس</span>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PersonDetail;
