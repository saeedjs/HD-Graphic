import { Box, Grid } from "@mui/material";
import CollectionComp from "./CollectionComp";

const Collections = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={6}>
            <CollectionComp />
          </Grid>
          <Grid item xs={6}>
            <CollectionComp />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Collections;
