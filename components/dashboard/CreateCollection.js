import { Box, Typography, Grid } from "@mui/material";
import CCTable from "./CCTable";
import SubmitCollection from "./SubmitCollection";

const CreateCollection = () => {
  return (
    <>
      <Box>
        <Box>
          <Grid container sx={{justifyContent:'center'}}>
            <Grid item xl={8.5} lg={8.3} xs={12}>
                <CCTable />
            </Grid>
            <Grid item xl={3.5} lg={3.7} xs={12} >
                <SubmitCollection />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CreateCollection;
