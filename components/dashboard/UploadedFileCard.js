import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const UploadedFileCard = () => {
  return (
    <Grid container>
      <Grid
        sx={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
        item
        xs={1.5}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <HighlightOffIcon color="colors.pink" />

          <img src="/images/uploadedfilepre.png" alt="" />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography>تصویر جدید استوک</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography>
              <svg
                id="_3917361"
                data-name="3917361"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M15.242.709,6.1,9.853A3.725,3.725,0,0,0,5,12.5v1.007a.75.75,0,0,0,.75.75H6.757a3.724,3.724,0,0,0,2.651-1.1l9.144-9.144a2.344,2.344,0,0,0,0-3.31,2.4,2.4,0,0,0-3.31,0Zm2.25,2.25L8.348,12.1a2.265,2.265,0,0,1-1.591.658H6.5V12.5a2.265,2.265,0,0,1,.658-1.591L16.3,1.769a.861.861,0,0,1,1.19,0,.842.842,0,0,1,0,1.189Z"
                  transform="translate(-1.25 -0.011)"
                  fill="#4ecca3"
                />
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M17.25,6.734a.75.75,0,0,0-.75.75V11.25h-3a2.25,2.25,0,0,0-2.25,2.25v3H3.75A2.25,2.25,0,0,1,1.5,14.25V3.75A2.25,2.25,0,0,1,3.75,1.5h6.781a.75.75,0,1,0,0-1.5H3.75A3.754,3.754,0,0,0,0,3.75v10.5A3.754,3.754,0,0,0,3.75,18h8.507a3.726,3.726,0,0,0,2.652-1.1L16.9,14.908A3.726,3.726,0,0,0,18,12.257V7.484A.75.75,0,0,0,17.25,6.734Zm-3.4,9.107a2.231,2.231,0,0,1-1.1.6V13.5a.75.75,0,0,1,.75-.75h2.944a2.262,2.262,0,0,1-.6,1.1Z"
                  fill="#4ecca3"
                />
              </svg>
              <span style={{ marginBottom: "10px" }}> ویرایش</span>
            </Typography>
            <Typography>فروش:2بار</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default UploadedFileCard;
