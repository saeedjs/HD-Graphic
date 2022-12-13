import { Box, Grid } from "@mui/material";
import CollectionImg from "./CollectionImg";

const SingleCollection = (props) => {
  return (
    <>
      <Grid>
        <Grid item xs={6}>
          <CollectionImg />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <Box>{props.subc}</Box>
    </>
  );
};
export default SingleCollection;
