import { Box, Grid } from "@mui/material";
import CollectionComp from "./CollectionComp";
const data = [
  [
    {
      limg:'/images/qwqwszx.png',
      timg:'/images/66.png',
      bimg:'/images/354.png',
      subc:'موکاپ های خرید'
    },
    {
      limg:'/images/45.png',
      timg:'/images/745.png',
      bimg:'/images/51..png',
      subc:'پس زمینه ای فانتزی'
    }
  ],
  [
    {
      limg:'/images/654.png',
      timg:'/images/323.png',
      bimg:'/images/6565.png',
      subc:'موکاپ های خرید'
    },
    {
      limg:'/images/54.png',
      timg:'/images/351.png',
      bimg:'/images/55.png',
      subc:'پس زمینه ای فانتزی'
    }
  ]
]
const Collections = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={6}>
            <CollectionComp data={data[0]} />
          </Grid>
          <Grid item xs={6}>
            <CollectionComp data={data[1]} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Collections;
