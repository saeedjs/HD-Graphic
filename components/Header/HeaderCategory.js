import { Box, Grid, Typography } from "@mui/material";

const HeaderCategory = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          backgroundImage: "linear-gradient(to  left, white, #EEEEEE)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Grid container sx={{height:'100%'}}>
          <Grid item xs={4} sx={{display:'flex'}}>
            <Box
              sx={{
                maxWidth: "100%",
                display: "flex",
                position:'relative',
                right:'-55%',
                alignItems: "center",
              }}
            >
              <img style={{ maxWidth: "100%" }} src="/images/dv.png" />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Box sx={{ mb: "20px" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                  بهترین قالب های اینستاگرام
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: "14px", lineHeight: "2", color: "#393E46" }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{display:'flex', justifyContent:'end', alignItems:'center'}}>
            <Box>
              <Box sx={{display:'flex', justifyContent:'end'}}>
                <img style={{ maxWidth: "100%" }} src="/images/baner.png" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* <Box sx={{position:'absolute', display:'flex', justifyContent:'space-between', width:'100%', height:'100%'}}>
          <Box sx={{ mr: "-270px", maxWidth: "100%", display:'flex', alignItems:'center' }}>
            <img style={{ maxWidth: "100%" }} src="/images/dv.png" />
          </Box>
          <Box sx={{width:'50%', display:'flex', flexDirection:'column', justifyContent:'center', height:'100%'}}>
            <Box sx={{mb:'20px'}}>
              <Typography sx={{fontSize:'24px', fontWeight:'bold'}}>بهترین قالب های اینستاگرام</Typography>
            </Box>
            <Box>
              <Typography sx={{fontSize:'14px', lineHeight:'2', color:'#393E46'}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <img style={{maxWidth:'100%'}} src="/images/baner.png" />
            </Box>
          </Box>
        </Box> */}
      </Box>
    </>
  );
};

export default HeaderCategory;
