import { Grid } from "@mui/material";

const ProductmainBig = () => {
  return (
    <>
      <Grid item xs={11} sm={4} md={4} lg={4} xl={4}>
        <img
          style={{
            maxWidth: "100%",
            height: "auto",
            padding: "0",
            marginRight: "10px",
            justifyContent: "center",
            alignItem: "center",
          }}
          src="./images/654.png"
        />
      </Grid>
    </>
  );
};

export default ProductmainBig;
