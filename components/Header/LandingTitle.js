import { Box, Typography } from "@mui/material";

const LandingTitle = () => {
  return (
    <>
      <Box
        component="span"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 5,
        }}
      >
        <img src="images/hd-g.png" style={{ width: "300px" }} />
        <Typography
          variant="h4"
          components="h4"
          sx={{ color: "colors.green", textAlign: "center", p: 1 }}
        >
          سریع و آسان و{" "}
          <Typography sx={{ color: "colors.pink" }} component="span" variant="h4">
            حرفه ای{" "}
          </Typography>{" "}
          طراحی کنید
        </Typography>
        <Typography sx={{ color: "colors.black", p: 1 }}>
          بهترین منبع فایل های گرافیکی آماده با کیفیت
        </Typography>
      </Box>
    </>
  );
};

export default LandingTitle;
