import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Productmain2 from "./Productmain2";
import Productmain4 from "./Productmain4";

const productmain3 = ({ mockup }) => {
  return (
    <>
      <Box
        sx={{
          mt: 5,
        }}
      ></Box>
      <Grid container minWidth="xl" justifyContent={"center"}>
        <Grid item lg={5}>
          <Productmain2 mockup={mockup} />
        </Grid>{" "}
        <Grid item lg={5}>
          <Productmain4 mockup={mockup} />
        </Grid>
      </Grid>
    </>
  );
};

export default productmain3;
