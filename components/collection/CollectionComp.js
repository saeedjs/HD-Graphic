import { Box, Grid } from "@mui/material";
import SingleCollection from "./SingleCollection";

const CollectionComp = (props) => {
  return (
    <>
      <Box>
        <Box>title</Box>
        <Box sx={{display:'flex', justifyContent:'center'}}>
          <Box sx={{ml:'25px'}}>
            <SingleCollection data={props.data[0]} />
          </Box>
          <Box>
            <SingleCollection data={props.data[1]} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CollectionComp;
