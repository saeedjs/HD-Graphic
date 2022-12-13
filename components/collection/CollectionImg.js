import { Box } from "@mui/system";

const CollectionImg = () => {
  return (
    <>
      <Box sx={{display:'flex'}}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ width: "150px", height: "150px", borderRadius: "5px" }}>
            <img src="/images/66.png" />
          </Box>
          <Box sx={{ width: "150px", height: "150px", borderRadius: "5px" }}>
            <img src="/images/66.png" />
          </Box>
        </Box>
        <Box>
          <Box sx={{ width: "150px", height: "300px", borderRadius: "5px" }}>
            <img src="/images/qwqwszx.png" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CollectionImg;
