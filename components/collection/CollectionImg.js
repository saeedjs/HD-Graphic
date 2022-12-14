import { Box } from "@mui/system";

const CollectionImg = (props) => {
  return (
    <>
      <Box sx={{display:'flex'}}>
        <Box sx={{ display: "flex", flexDirection: "column", ml:'5px' }}>
          <Box sx={{ width: "150px", height: "150px", borderRadius: "5px", mb:'5px' }}>
            <img src={props.data.timg} />
          </Box>
          <Box sx={{ width: "150px", height: "150px", borderRadius: "5px" }}>
            <img src={props.data.bimg} />
          </Box>
        </Box>
        <Box>
          <Box sx={{ width: "150px", height: "300px", borderRadius: "5px" }}>
            <img width={'100%'} src={props.data.limg} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CollectionImg;
