import { Container, Typography, Box, Grid } from "@mui/material";
import Link from "next/link";
const PersonDetail = ({username}) => {
  return (
    <>
      <Box>
        <Box
          component={"img"}
          src="/images/back.png"
          sx={{
            width: "100%",
            backgroundColor: "#efefef",
            pb: "45px",
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
              md: 2,
            },
            whiteSpace: "nowrap",
          }}
        >
          <Grid
            item
            sx={{
              pr: 2,
              pl: {
                sm: 2,
              },
            }}
          >
            <Box
              component={"img"}
              src="/images/person.png"
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
              mb: "3px",
              justifyContent: "space-between",
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
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                {username}
              </Typography>
              <Typography sx={{ mt: "20px", pl: 2, fontSize: "14px" }}>
                <img src="/images/download.png" style={{ verticalAlign: "bottom" }} /> دانلودها :
                6958
              </Typography>
            </Box>
            <Box
              sx={{
                pr: {
                  xs: 1,
                  md: 5,
                },
              }}
            >
              <Typography
                sx={{
                  color: "colors.pink",
                  backgroundColor: "white",
                  p: "8px 12px 8px 10px",
                  mr: {
                    xs: "-10px",
                    md: "0",
                  },

                  textAlign: "center",
                  borderRadius: "5px",
                  width: "max-content",
                  fontWeight: "bold",
                  display: {
                    xs: "block",
                    sm: "none",
                  },
                }}
              >
                {username}
              </Typography>
              <img
                src="/images/folder.png"
                style={{ verticalAlign: "middle", paddingLeft: "8px" }}
              />

              <Box sx={{ fontSize: "14px" }} component="span">
                فایل ها : 6958
              </Box>
            </Box>
            <Box
              sx={{
                pr: {
                  xs: 1,
                  md: 5,
                },
              }}
            >
              <img
                src="/images/info.png"
                style={{
                  verticalAlign: "middle",
                  paddingLeft: {
                    lg: "4px",
                  },
                }}
              />
              <Link href="#">
                <Box sx={{ fontSize: "14px" }} component="span">
                  درباره مدرس
                </Box>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PersonDetail;
