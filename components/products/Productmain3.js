import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Productmain2 from "./Productmain2";
import Productmain4 from "./Productmain4";

const productmain3 = () => {
  return (
    <>
      <Box
        sx={{
          mt: 5,
        }}
      ></Box>
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
