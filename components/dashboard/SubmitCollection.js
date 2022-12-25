import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import SingleCollection from "../Collection/SingleCollection";

const SubmitCollection = () => {
  const data = {
    limg: "/images/vfv.png",
    timg: "/images/66.png",
    bimg: "/images/354.png",
    subc: "موکاپ های خرید",
  };
  return (
    <>
      <Box>
        <Box>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "bold", color: "#232931" }}
          >
            پیشنمایش و ثبت
          </Typography>
        </Box>
        <Box sx={{mt:'15px'}}>
          <SingleCollection data={data} />
        </Box>
        <Box>
            <Box sx={{mt:'25px'}}>
                <input style={{width:'303px', height:'42px', borderRadius:'5px', border:'none', backgroundColor:'#EEEEEE', paddingRight:'20px', fontSize:'14px', fontFamily:'iranYekan'}} placeholder={"عنوان کلکسیون"} />
            </Box>
            <Box sx={{mt:'10px'}}>
                <input type={"button"} style={{width:'303px', height:'42px', borderRadius:'5px',  border:'none' , backgroundColor:'#F6416C', fontSize:'14px', fontWeight:'bold', color:'white', fontFamily:'iranYekan'}} value={"ایجاد کلکسیون"} />
            </Box>
        </Box>
      </Box>
    </>
  );
};

export default SubmitCollection;
