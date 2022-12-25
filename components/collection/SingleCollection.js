import { Box, Grid, Typography } from "@mui/material";
import CollectionImg from "./CollectionImg";

const SingleCollection = (props) => {
  return (
    <>
      <Box sx={{ width: "306px" }}>
        <Box>
          <CollectionImg data={props.data ? props.data : ""} />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", my: "10px" }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "iranYekan",
                color: "colors.gray",
              }}
            >
              {props.data.subc}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "66px",
              height: "28px",
              backgroundColor: "colors.white",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "colors.gray",
                textAlign: "center",
                height: "100%",
              }}
            >
              96 فایل
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SingleCollection;
