import { Box, Typography } from "@mui/material";

const HeaderCategory = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "",
          width: "100%",
          height: "30%",
          display: "flex",
          justifyContent: "center",
          p: 5,
        }}
      >
        <img sx={{ position: "absolute" }} src="./images/dv.png" />
        <Box
          sx={{
            width: "50%",
            height: "500px",
            overFlow: "hidden",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                lg: "24px",
                md: "22px",
                sm: "20px",
                xs: "18px",
              },
              fontWeight: "bold",
            }}
          >
            بهترین قالب اینستاگرام
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "14px",
                md: "12px",
                sm: "10px",
                xs: "8px",
              },
              fontWeight: "small",
            }}
          >
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default HeaderCategory;
