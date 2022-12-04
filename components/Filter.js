import { Label } from "@mui/icons-material";
import { Checkbox, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";

const Filter = () => {
    const filterArray = ['بیشترین تخفیف', 'ارزان ترین', 'پر فروش ترین', 'محبوب ترین']
    const itemArray = [
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        },
        {
            src:'asds.png'
        }
    ]
    const [item, setItem] = useState(itemArray);
  return (
    <>
      <Container maxWidth="xxl">
        <Box sx={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #EEEEEE'}}>
            <Box sx={{display:'flex'}}>
                <Box sx={{ml:'10px'}}><img src="/images/icon/filter.png" /></Box>
                <Box><Typography sx={{fontSize:'16px'}}>تنظیمات</Typography></Box>
            </Box>
            <Box>
                <Box><Typography sx={{color:'#AAAAAA'}}>تعداد 6500 طرح آماده</Typography></Box>
            </Box>
        </Box>
        <Grid container>
          <Grid item xs={2}>
            <Box sx={{borderBottom:'1px solid #EEEEEE'}}>
                <Typography sx={{color:"colors.pink", fontWeight:'bold', fontSize:'14px'}}>فیلتر بر اساس :</Typography>
            </Box>
            <Box>
                <Box>

                </Box>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    {filterArray.map((item, i) => (
                        <Box sx={{display:'flex', alignItems:'center'}}>
                            <Checkbox /><Typography>{item}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
          </Grid>
          <Grid item xs={10} sx={{borderRight:'1px solid #EEEEEE'}}>
            <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {item.map((item, i) => (
                    <Box sx={{m:'5px'}}>
                        <img
                            style={{maxWidth:'200px !important',height:'200px !important'}}
                            src={`/images/${item.src}`}
                            loading="lazy"
                        />
                    </Box>
                ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Filter;
