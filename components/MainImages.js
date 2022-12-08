import { Box, Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
const Mainimages = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img style={{ maxWidth: "100%" }} src="/images/Group20.png" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            borderRadius: "5px",
            backgroundImage:
              " linear-gradient(93deg, rgba(255,238,148,1) 0%, rgba(251,255,194,1) 49%, rgba(223,255,245,1) 50%, rgba(112,253,255,1) 100%) ",
            width: "980px",
            height: "179px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container>
            <Grid item xs={6} md={4.3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "24px", mb: "13px" }}
                  >
                    عضویت کاربر عادی
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    width="119px"
                    height="32px"
                    sx={{
                      backgroundColor: "colors.green",
                      borderRadius: "10px",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "colors.green",
                      },
                    }}
                  >
                    عضویت کاربر عادی
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box
                sx={{
                  mt: "-20px",
                  display: {
                    md: "block",
                    xs: "none",
                  },
                }}
              >
                <img
                  height={"214px"}
                  sx={{ width: "286.5px" }}
                  src="/images/graphics-designing-course-karachi-digital-minds (1).png"
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={3.7}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "24px", mb: "13px" }}
                  >
                    عضویت طراح یا عکاس
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    width="119px"
                    height="32px"
                    sx={{
                      backgroundColor: "colors.pink",
                      borderRadius: "10px",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "colors.pink",
                      },
                    }}
                  >
                    عضویت طراح یا عکاس
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Mainimages;
