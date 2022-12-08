import { Grid } from "@mui/material";

const ProductmainBig = () => {
  return (
    <>
      <Grid item xs={11} sm={4} md={4} lg={4} xl={4}>
        <img
          style={{
            width: "100%",
            height: "auto",
            padding: "0",
            marginRight: {lg:"-20px",md:"0px",sm:"0px",xs:"0px"},
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
