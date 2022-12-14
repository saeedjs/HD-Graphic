import { Box, Typography } from "@mui/material";
const CollectionBanner = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(images/back-img-c.png)",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 20 }}>
          <Typography>کلکسیون</Typography>
          <Typography sx={{ my: 1, textAlign: "center" }}>
            مجموعه ای از بهترین طرح های منتخب
          </Typography>
          <Typography
            sx={{
              backgroundColor: "white",
              p: 1,
              borderRadius: "3px",
              width: {
                xs: "100%",
                md: "35%",
              },
              fontSize: "12px",
              textAlign: "center",
              lineHeight: "2",
            }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
            است. چاپگرها و متون بلکه روزنامه و مجله
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CollectionBanner;
