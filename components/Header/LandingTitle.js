import { Box, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
const LandingTitle = () => {
  const [logoImg, setLogoImg] = useState();
  axios
    .get("https://hdgraphic.ir/api/v1/settings/setting")
    .then((result) => {
      setLogoImg(result.data.logo);
    })
    .catch((err) => {
      console.log(err);
    });
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
        <Link href="#">
          <img src={"https://hdgraphic.ir"+logoImg} style={{ width: "300px" }} />
        </Link>
        <Typography
          variant="h4"
          components="h4"
          sx={{ color: "colors.green", textAlign: "center", p: 1 }}
        >
          سریع و آسان و{" "}
          <Typography
            sx={{ color: "colors.pink" }}
            component="span"
            variant="h4"
          >
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
