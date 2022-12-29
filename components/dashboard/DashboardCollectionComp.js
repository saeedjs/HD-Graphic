import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import SingleCollection from "../Collection/SingleCollection";
const DashboardCollectionComp = ({ data }) => {
  return (
    <>
      <Box sx={{mt:'70px'}}>
        <Box>
          <Typography
            sx={{ fontSize: "14px", color: "#232931", fontWeight: "bold" }}
          >
            کلکسیون های انتخاب شده
          </Typography>
        </Box>
        <Box>
          <Grid container sx={{justifyContent:'space-between'}}>
            {data.map((collection) => (
              <Grid item xl={4} lg={3.5} md={5.6} sm={7} xs={10} sx={{mt:'50px'}}>
                <SingleCollection collection={collection} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default DashboardCollectionComp;
