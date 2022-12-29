import { Box } from "@mui/system";

const CollectionImg = ({data}) => {
  return (
    <>
      <Box sx={{display:'flex'}}>
        <Box sx={{ display: "flex", flexDirection: "column", ml:'5px' }}>
          <Box sx={{ mb:'5px' }}>
            <img style={{ width: "150px", height: "150px", borderRadius: "5px"}} src={data[0] ? "https://hdgraphic.ir/"+data[0] : "/images/Rectangle 183.png"} />
          </Box>
          <Box>
            <img style={{ width: "150px", height: "150px", borderRadius: "5px"}} src={data[1] ? "https://hdgraphic.ir/"+data[1] : "/images/Rectangle 183.png"} />
          </Box>
        </Box>
        <Box>
          <Box sx={{ position:'relative' }}>
            <img style={{ width: "150px", height: "310px", borderRadius: "5px", borderColor:'#FFFFFF'}} src={data[2] ? "https://hdgraphic.ir/"+data[2] : "/images/Rectangle 183.png"} />
            <Box sx={{width:'32px', height:'32px', backgroundColor:'white', position:'absolute', top:0, left:0, mt:'5px', ml:"5px", borderRadius:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}><img width={"16px"} height={"20px"} src="/images/icon/Path 11.png" /></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CollectionImg;
