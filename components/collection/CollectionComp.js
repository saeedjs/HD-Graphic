import { Box, Grid, Typography } from "@mui/material";
import TitleComponents from "../TitleComponents";
import SingleCollection from "./SingleCollection";

const CollectionComp = (props) => {
  return (
    <>
      <Box>
        <Grid container sx={{justifyContent:'center'}}>
          <Grid xl={10} sm={12} xs={10}>
            <Box>
              <TitleComponents
                title={props.data.title}
                mount={props.data.mount}
              />
            </Box>
          </Grid>
          <Grid container xl={10} sm={12} xs={12} sx={{justifyContent:{md:'space-between', xs:'space-around'}, mt:'20px'}}>
              <Box>
                <SingleCollection data={props.data[0]} />
              </Box>
              <Box>
                <SingleCollection data={props.data[1]} />
              </Box>
          </Grid>
        </Grid>
      </Box>

      {/* <Box>
        <Box>
          <Box>
            <TitleComponents
              title={props.data.title}
              mount={props.data.mount}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
            <Box sx={{ ml: "25px" }}>
              <SingleCollection data={props.data[0]} />
            </Box>
            <Box>
              <SingleCollection data={props.data[1]} />
            </Box>
          </Box>
        </Box>
      </Box> */}
    </>
  );
};
export default CollectionComp;
