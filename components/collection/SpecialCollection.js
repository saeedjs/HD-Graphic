import { Box, Grid } from "@mui/material";
import TitleComponents from "../TitleComponents";
import CollectionComp from "./CollectionComp";
const SpecialCollection = ({data}) => {
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
