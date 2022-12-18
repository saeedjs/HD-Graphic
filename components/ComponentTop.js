import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const ComponentTop = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid #EEEEEE",
        }}
      >
        <Box sx={{ display: "flex", pr: "25px" }}>
          <Box sx={{ ml: "10px" }}>
            <img src="/images/icon/filter.png" />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
              {props.rtitle}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography sx={{ color: "#AAAAAA" }}>
              {props.ltitle}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ComponentTop;
