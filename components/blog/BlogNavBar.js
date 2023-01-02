import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const BlogNavBar = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "169px", backgroundColor: "#EEEE" }}>
        <Container sx={{height:'100%'}}>
            <Grid container sx={{alignItems:'center', justifyContent: "space-between", width:'100%', height:'100%'}}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Box>
                        <Box sx={{mb:'20px'}}>
                            <Typography sx={{fontSize:"24px", fontWeight:'bold', color:'#393E46'}}>وبلاگ اچ دی گرافیک</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{fontSize:'14px', color:'#393E46'}}>جدیدترین و مفیدترین مطالب مرتبط با عکاسی، گرافیک، و هنر</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={4} md={5} sm={6} xs={12}>
                    <Box sx={{display:'flex', backgroundColor:'#FFFF', borderRadius: "5px"}}>
                        <Box sx={{width:'25px', display:'flex', alignItems:'center', mr:'15px'}}>
                            <img src="/images/icon/search.png" />
                        </Box>
                        <Box sx={{width: "275px", height: "43px"}}>
                            <input placeholder="جستجو در وبلاگ..." style={{ width: "100%", height: "100%",  borderRadius: "5px 0px 0px 5px", border:'none', outline:'none', color:'#A5A5A5', fontSize:'14px', fontFamily:'iranYekan'}}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
            <Box sx={{width:'100%', height:'48px', backgroundColor:'#FFFF', mt:'-24px'}}>
                <Box sx={{display:'flex'}}>
                    <Box sx={{px:'10px'}}>
                        <Typography>آموزشی</Typography>
                    </Box>
                    <Box sx={{px:'10px'}}>
                        <Typography>هنری</Typography>
                    </Box>
                    <Box sx={{px:'10px'}}>
                        <Typography>عکاسی</Typography>
                    </Box>
                    <Box sx={{px:'10px'}}>
                        <Typography>راهنما</Typography>
                    </Box>
                    <Box sx={{px:'10px'}}>
                        <Typography>اخبار</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
      </Box>
    </>
  );
};

export default BlogNavBar;
