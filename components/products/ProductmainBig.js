import { Grid, Box, Typography } from "@mui/material";
import TitleComponents from "../TitleComponents";
import Link from "next/link";

const ProductmainBig = () => {
  return (
    <>
      <Grid item xs={11} sm={11} md={8.5} lg={4} xl={4} sx={{ marginTop: "-30px" }}>
        <Box sx={{ display: "flex", pb: 1 }}>
          <Box
            height={"22px"}
            sx={{
              height: "22px",
              backgroundColor: "colors.green",
              width: "8px",
            }}
          ></Box>
          {/* <></> */}
          <Typography sx={{ mx: 2 }}>تصاویر استوک</Typography>
          <Link href={"#"} style={{ color: "#4ECCA3", fontWeight: "bold" }}>
            مشاهده همه
          </Link>
        </Box>
        <img
          style={{
            width: "100%",
            padding: "0",
          }}
          src="./images/65454.png"
        />
      </Grid>
    </>
  );
};

export default ProductmainBig;
