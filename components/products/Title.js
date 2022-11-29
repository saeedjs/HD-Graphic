import { Typography } from "@mui/material";

const TitleProducts = () => {
  return (
    <>
      <Typography
        sx={{
          borderRight: 8,
          borderColor: "#4ECCA3",
        }}
      >
        <span style={{ marginRight: "10px" }}> تصاویر استوک</span>
        <span
          style={{
            marginRight: "10px",
            color: "#4ECCA3",
            marginRight: "70px",
          }}
        >
          {" "}
          مشاهده همه
        </span>
      </Typography>
    </>
  );
};

export default TitleProducts;
