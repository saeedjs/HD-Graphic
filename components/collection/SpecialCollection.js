import { Box, Grid } from "@mui/material";
import TitleComponents from "../TitleComponents";
import CollectionComp from "./CollectionComp";
const SpecialCollection = () => {
  const data = [
    {
      0: {
        limg: "/images/363.png",
        timg: "/images/987.png",
        bimg: "/images/789.png",
        subc: "موکاپ های خرید",
      },
      1: {
        limg: "/images/vfv.png",
        timg: "/images/xcvxcv.png",
        bimg: "/images/zxcxzc.png",
        subc: "پس زمینه ای فانتزی",
      },
    },
    {
      0: {
        limg: "/images/666.png",
        timg: "/images/656.png",
        bimg: "/images/5626.png",
        subc: "قالب های دخترانه اینستاگرام",
      },
      1: {
        limg: "/images/639.png",
        timg: "/images/369.png",
        bimg: "/images/963.png",
        subc: "قالب های معرفی محصول",
      },
    },
  ];
  return (
    <>
      <Box mt={8}>
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid item xl={11.5} lg={7} md={9} xs={12}>
            <TitleComponents
              title={"کلکسیون های ویژه"}
              mount={"بیش از 4000 طرح"}
              tcolor={"#F6416C"}
            />
          </Grid>
          <Grid item xl={6} lg={7} md={9} sm={12} xs={12}>
            <CollectionComp data={data[0]} />
          </Grid>
          <Grid item xl={6} lg={7} md={9} sm={12} xs={12}>
            <CollectionComp data={data[1]} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default SpecialCollection;
