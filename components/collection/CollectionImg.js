import { Box } from "@mui/system";

const CollectionImg = (props) => {
  return (
    <>
      <Box sx={{display:'flex'}}>
        <Box sx={{ display: "flex", flexDirection: "column", ml:'5px' }}>
          <Box sx={{ width: "150px", height: "150px", borderRadius: "5px", mb:'5px' }}>
            <img src={props.data.timg ? props.data.timg : ""} />
          </Box>
          <Box sx={{ width: "150px", height: "150px", borderRadius: "5px" }}>
            <img src={props.data.bimg ? props.data.bimg : ""} />
          </Box>
        </Box>
        <Box>
          <Box sx={{ width: "150px", height: "300px", borderRadius: "5px", position:'relative' }}>
            <img width={'100%'} src={props.data.limg ? props.data.limg : ""} />
            <Box sx={{width:'32px', height:'32px', backgroundColor:'white', position:'absolute', top:0, left:0, mt:'5px', ml:"5px", borderRadius:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}><img width={"16px"} height={"20px"} src="/images/icon/Path 11.png" /></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CollectionImg;
