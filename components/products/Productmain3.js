import { Grid } from "@mui/material";
import Productmain2 from "./Productmain2";

const productmain3 = () => {
  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item lg={6}>
          <Productmain2 />
        </Grid>
        <Grid item lg={6}>
          <Productmain2 />
        </Grid>
      </Grid>
    </>
  );
};

export default productmain3;
