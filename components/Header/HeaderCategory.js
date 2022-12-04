import { Box, Typography } from "@mui/material";

const HeaderCategory = () => {
  return (
    <>
      <Box
        sx={{
          background: "url(./images/ss.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography variant={"h4"} sx={{ marginBottom: "10px" }}>
            بهترین قالب های اینستاگرام
          </Typography>
          <Typography
            sx={{ width: "30%", fontSize: "15px" }}
            variant="h6"
            color="initial"
          >
            رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
            از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و و
            سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متروزنامه و مجله در
            ستون و و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و مت
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HeaderCategory;
