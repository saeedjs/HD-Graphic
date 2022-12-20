import { Container, Typography , Grid} from "@mui/material";
import { Box } from "@mui/system";
import MAinDashboard from "../../components/dashboard/MainDashboard";
import CheckIcon from "@mui/icons-material/Check";
import { CheckBox } from "@mui/icons-material";

const dashboardPage = () => {
  return (
    <>
      <MAinDashboard>
        <form>
          <Box maxWidth={'704px'}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "5px",
                    border: "1px solid #4ECCA3",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box>
                    <img src="/images/icon/591744.png" />
                  </Box>
                  <Box>
                    <input type="file" id="file" style={{ display: "none" }} />
                    <label htmlFor="file">آپلود تصویر</label>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    mr: 2,
                    mb: "5px",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "colors.black",
                        fontFamily: "iranYekan",
                        mr: "3px",
                      }}
                    >
                      تصویر پروفایل کاربری
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "end" }}>
                    <Box
                      width="16px"
                      height="16px"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "100%",
                        backgroundColor: "#c2c2c2",
                        ml: 1,
                      }}
                    >
                      <CheckIcon
                        fontSize="small"
                        sx={{
                          color: "white",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "colors.black",
                        fontFamily: "iranYekan",
                        mt: 3,
                      }}
                    >
                      اندازه تصویر 120 در 120 پیکسل
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "end" }}>
                    <Box
                      width="16px"
                      height="16px"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "100%",
                        backgroundColor: "#c2c2c2",
                        ml: 1,
                      }}
                    >
                      <CheckIcon
                        fontSize="small"
                        sx={{
                          color: "white",
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "colors.black",
                        fontFamily: "iranYekan",
                        mt: 1.5,
                      }}
                    >
                      حداکثر حجم تصویر 200 کیلوبایت
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box></Box>
            </Box>







            <Box sx={{mt:5}}>
              <Grid container>
                <Grid container item md={12} xs={12} sx={{justifyContent:'space-between'}}>
                  <Grid item lg={12} md={4} sx={{display:{lg:'contents',xs:'block'}}}>
                    <Box sx={{ backgroundColor:'#EEEEEE', width:'362px', height:'42px',borderRadius:'5px', display:'flex', alignItems:'center', paddingRight:'10px', mt:1}}>
                      <Box sx={{pt:'5px'}}>
                        <img src="/images/icon/01 align center.png" />
                      </Box>
                      <Box sx={{width:'100%', height:'100%', paddingRight:'10px'}}>
                        <input style={{width:'99%', height:'100%', backgroundColor:'#EEEEEE', border:'none', fontSize:'14px', color:'#989898', fontFamily:'iranYekan'}} value="نام و نام خانوادگی" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item lg={12} md={4} sx={{display:{lg:'contents',xs:'block'}}}>
                    <Box sx={{mt:1, justifyContent:'end', display:'flex'}}>
                      <input style={{width:'227px', height:'42px', borderRadius:'5px', backgroundColor:'#EEEEEE', border:'none', paddingRight:'16px', fontSize:'14px', color:'#232931', fontFamily:'iranYekan'}} value="info@gmail.com" />
                    </Box>
                  </Grid>
                  <Grid item lg={12} md={12} sx={{display:{lg:'contents',xs:'block'}}}>
                    <Box sx={{mt:1}}>
                      <button style={{width:'101px', height:'42px', borderRadius:'5px', backgroundColor:'#4ECCA3', border:'1px solid #EEEEEE', color:'white'}}><Typography sx={{fontSize:'14px',fontFamily:'iranYekan', textAlign:'center'}}>تایید ایمیل</Typography></button>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container item md={12} sx={{justifyContent:'space-between', mt:3}}>
                  <Grid item xs={3} sx={{display:'contents'}}>
                    <Box sx={{ backgroundColor:'#EEEEEE', width:'227px', height:'42px',borderRadius:'5px', display:'flex', alignItems:'center', paddingRight:'10px', mt:1}}>
                      <Box sx={{pt:'5px'}}>
                        <img src="/images/icon/lock.png" />
                      </Box>
                      <Box sx={{width:'100%', height:'100%', paddingRight:'10px'}}>
                        <input style={{width:'99%', height:'100%', backgroundColor:'#EEEEEE', border:'none', fontSize:'14px', color:'#989898', fontFamily:'iranYekan'}} value="گذرواژه" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={3} sx={{display:'contents'}}>
                    <Box sx={{ backgroundColor:'#EEEEEE', width:'227px', height:'42px',borderRadius:'5px', display:'flex', alignItems:'center', paddingRight:'10px', mt:1}}>
                      <Box sx={{pt:'5px'}}>
                        <img src="/images/icon/lock.png" />
                      </Box>
                      <Box sx={{width:'100%', height:'100%', paddingRight:'10px'}}>
                        <input style={{width:'99%', height:'100%', backgroundColor:'#EEEEEE', border:'none', fontSize:'14px', color:'#989898', fontFamily:'iranYekan'}} value="تکرار گذرواژه" />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={3} sx={{display:'contents'}}>
                    <Box sx={{ backgroundColor:'#EEEEEE', width:'227px', height:'42px',borderRadius:'5px', display:'flex', alignItems:'center', paddingRight:'10px', mt:1}}>
                      <Box sx={{pt:'5px'}}>
                        <img src="/images/icon/5070407.png" />
                      </Box>
                      <Box sx={{width:'100%', height:'100%', paddingRight:'10px'}}>
                        <input style={{width:'99%', height:'100%', backgroundColor:'#EEEEEE', border:'none', fontSize:'14px', color:'#989898', fontFamily:'iranYekan'}} value="شماره همراه" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container item md={12} sx={{mt:3}}>
                  <Grid item xs={12} sx={{display:'contents'}}>
                    <Box width='100%'>
                      <textarea style={{resize:'none', width:'100%', height:'83px', border:'none', backgroundColor:'#EEEEEE', borderRadius:'5px', paddingRight:'16px', paddingTop:'16px', fontSize:'14px', color:'#989898', fontFamily:'iranYekan'}} value='توضیح مختصر درباره طراح' />
                    </Box>
                  </Grid>
                </Grid>
                <Grid container item md={12} sx={{justifyContent:'space-between', mt:3}}>
                  <Grid item xs={6} sx={{display:'contents'}}>
                    <Box sx={{mt:1}}>
                      <input style={{width:'362px', height:'42px', borderRadius:'5px', backgroundColor:'#EEEEEE', border:'none', paddingRight:'16px', fontSize:'14px', color:'#989898', fontFamily:'iranYekan'}} value="شماره حساب" />
                    </Box>
                  </Grid>
                  <Grid item xs={6} sx={{display:'contents'}}>
                    <Box sx={{mt:1}}>
                      <input style={{width:'333px', height:'42px', borderRadius:'5px', backgroundColor:'#EEEEEE', border:'none', paddingRight:'16px', fontSize:'14px', color:'#989898', fontFamily:'iranYekan'}} value="شماره شبا" />
                    </Box>
                  </Grid>
                </Grid>
                <Grid container item md={12} sx={{justifyContent:'space-between', mt:3}}>
                  <Grid item xs={6} sx={{display:'contents'}}>
                    <Box
                      sx={{ display: "flex" }}
                    >
                      <Box>
                        <input type="checkbox" style={{borderRadius:'5px', border:'1px solid #EEEEEE'}}></input>
                      </Box>
                      <Box>
                        <Typography sx={{fontSize:'14px', color:'#232931', fontSize:'14px', color:'#232931', fontFamily:'iranYekan'}}>عضویت در خبرنامه</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sx={{display:'contents'}}>
                    <Box>
                      <button style={{width:'101px', height:'42px', borderRadius:'5px', backgroundColor:'#F6416C', border:'1px solid #EEEEEE', color:'white' }}><Typography sx={{fontSize:'14px',fontFamily:'iranYekan', textAlign:'center'}}>ثبت تغییرات</Typography></button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
















          </Box>
        </form>
      </MAinDashboard>
    </>
  );
};

export default dashboardPage;
