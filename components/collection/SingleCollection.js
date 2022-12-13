import { Box, Grid } from "@mui/material";
import CollectionImg from "./CollectionImg";

const SingleCollection = (props) => {
  return (
    <>
      <Box>
        <CollectionImg />
      </Box>
      <Box>{props.subc}</Box>
    </>
  );
};
export default SingleCollection;
