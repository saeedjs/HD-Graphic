import { Box, Typography } from "@mui/material";
import { propsToClassKey } from "@mui/styles";

const TitleComponents = (props) => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent:{md:'space-between', xs:'space-around'}}}>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Box
              height={"22px"}
              sx={{
                height: "22px",
                backgroundColor: "colors.green",
                width: "8px",
              }}
            ></Box>
            <Box sx={{ mr: "10px" }}>
              <Typography sx={{ fontSize: "16px" }}>{props.title}</Typography>
            </Box>
            <Box sx={{ mr: "35px" }}>
              <Typography sx={{ color: "colors.green", fontSize: "14px" }}>
                مشاهده همه
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography sx={{fontSize:'14px', color:'colors.green'}} >{props.mount}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default TitleComponents;
