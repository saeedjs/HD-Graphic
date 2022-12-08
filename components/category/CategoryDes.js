import { Grid, Box, Typography, Container, Link } from "@mui/material";
const CategoryDes = () => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid container sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
            <Grid item xm={12} md={5} lg={4}>
              <img src="images/asd.png" />
            </Grid>
            <Grid item xm={12} md={6} lg={6}>
              <Typography
                component={"h2"}
                variant={"h2"}
                sx={{ py: 2, color: "colors.gray", fontWeight: "bold" }}
              >
                اینستاگرام پر طرفدار
              </Typography>
              <Typography sx={{ color: "colors.gray", lineHeight: "2", fontSize: "14px" }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
                داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                طراحی اساسا مورد استفاده قرار گیرد
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 15, display: "flex", justifyContent: "center" }}>
            <Grid
              item
              xm={12}
              md={6}
              lg={6}
              sx={{
                order: {
                  xs: 3,
                  md: 2,
                },
              }}
            >
              <Typography
                component={"h2"}
                variant={"h2"}
                sx={{
                  py: 2,
                  pr: {
                    md: 2,
                  },
                  color: "colors.gray",
                  fontWeight: "bold",
                }}
              >
                اینستاگرام پر طرفدار
              </Typography>
              <Typography
                sx={{
                  pl: 2,
                  pr: {
                    md: 2,
                  },
                  color: "colors.gray",
                  lineHeight: "2",
                  fontSize: "14px",
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
                داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                طراحی اساسا مورد استفاده قرار گیرد
              </Typography>
            </Grid>
            <Grid
              item
              xm={12}
              md={6}
              lg={4}
              sx={{
                mt: {
                  xs: 5,
                  md: 2,
                },
                pr: {
                  md: 8,
                },
                order: 2,
              }}
            >
              <img src="images/ewe.png" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default CategoryDes;
