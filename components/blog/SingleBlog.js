import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const SingleBlog = ({blog}) => {
    console.log(blog)
    return (
        <>
        <Box sx={{width:'354px', height:'378px', border:'1px solid #EEEEEE', borderRadius:'5px', boxShadow:'1px 1px #EEEEEE', m:'10px'}}>
            <Box sx={{width:'100%', height:'212px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img width={'340px'} height={'200px'} style={{objectFit:'cover', borderRadius:'5px'}} src={"https://hdgraphic.ir" + blog.banner} />
            </Box>
            <Box sx={{height:'166px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <Box sx={{display:'flex', pt:'14px', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', pr:'15px'}}>
                        <Box>
                            <Box sx={{minWidth:'53px', minHeight:'24px', borderRadius:'5px', backgroundColor:'#FFDDB1', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <Typography sx={{fontSize:'12px', fontWeight:'bold', color:'#B79200', p:'5px'}}>{blog.category.title}</Typography>
                            </Box>
                        </Box>
                        <Box pr={'10px'}>
                            <Box sx={{width:'81px', height:'24px', borderRadius:'5px', backgroundColor:'#EEEEEE', display:'flex', justifyContent:'center', alignItems:'center'}}>
                                <Typography sx={{fontSize:'12px', fontWeight:'bold', color:'#232931'}}>نویسنده</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex', pl:'20px'}}>
                        <Box sx={{display:'flex', alignItems:'center'}}>
                            <img width={"18px"} height={"18px"} src="/images/icon/13673.png" />
                        </Box>
                        <Box pr={'8px'}>
                            <Typography>8</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{pb:'15px', display:'flex', flexDirection:'column'}}>
                    <Box sx={{pb:'15px', display:'flex', justifyContent:'center'}}>
                        <Typography sx={{width:'316px', fontSize:'14px', color:'#393E46'}}>{blog.title}</Typography>
                    </Box>
                    <Box sx={{height:'52px', display:'flex', justifyContent:'center'}}>
                        <Typography sx={{fontSize:'14px', width:'316px', color:'#9A9A9A', overflow:'hidden'}}>
                            {blog.short_description}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    );
}
 
export default SingleBlog;