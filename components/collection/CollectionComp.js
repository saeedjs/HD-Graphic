import { Box, Grid } from "@mui/material";
import SingleCollection from "./SingleCollection";

const CollectionComp = () => {
  return (
    <>
      <Box>
        <Box>title</Box>
        <Box sx={{display:'flex'}}>
          <Box>
            <SingleCollection subc={"موکاپ های خرید"} />
          </Box>
          <Box>
            <SingleCollection subc={"پس زمینه ای فانتزی"} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CollectionComp;
