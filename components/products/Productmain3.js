import { Grid } from "@mui/material";
import Productmain2 from "./Productmain2";
import Productmain4 from "./Productmain4";

const productmain3 = () => {
  return (
    <>
      <Grid container maxWidth="xl" justifyContent={"center"}>
        <Grid item lg={5.15}>
          <Productmain2 />
        </Grid>{" "}
        <Grid item lg={5.7}>
          <Productmain4 />
        </Grid>
      </Grid>
    </>
  );
};

export default productmain3;
