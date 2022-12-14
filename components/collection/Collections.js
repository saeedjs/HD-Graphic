import { Box, Grid } from "@mui/material";
import CollectionComp from "./CollectionComp";
const data = [
  {
    title:'کلکسیون های لایه باز',
    mount:'بیش از 800 طرح',
    0:{
      limg:'/images/qwqwszx.png',
      timg:'/images/66.png',
      bimg:'/images/354.png',
      subc:'موکاپ های خرید',
    },
    1:{
      limg:'/images/45.png',
      timg:'/images/745.png',
      bimg:'/images/51..png',
      subc:'پس زمینه ای فانتزی'
    }
  },
  {
    title:'کلکسیون های تصاویر',
    mount:'بیش از 5200 طرح',
    0:{
      limg:'/images/654.png',
      timg:'/images/323.png',
      bimg:'/images/6565.png',
      subc:'موکاپ های خرید'
    },
    1:{
      limg:'/images/54.png',
      timg:'/images/351.png',
      bimg:'/images/55.png',
      subc:'پس زمینه ای فانتزی'
    }
  }
]
const Collections = () => {
  return (
    <>
      <Box>
        <Grid container sx={{justifyContent:'center'}}>
          <Grid item xl={6} lg={7} md={9} sm={12} xs={12} mt={8} >
            <CollectionComp data={data[0]} />
          </Grid>
          <Grid item xl={6} lg={7} md={9} sm={12} xs={12} mt={8} >
            <CollectionComp data={data[1]} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Collections;
