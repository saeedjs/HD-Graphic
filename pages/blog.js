import { Box } from "@mui/system";
import axios from "axios";
import AllBlog from "../components/blog/AllBlog";
import SingleBlog from "../components/blog/SingleBlog";

const blog = ({blogs}) => {
    return (
        <>
        <Box m={10}></Box>
        <AllBlog blogs={blogs} />
        </>
    );
}

export async function getServerSideProps() {
    const allBlogs = await axios.get(
      "https://hdgraphic.ir/api/v1/blog/posts/list"
    )
    .catch((err) => {
        console.log(err)
    })
  
    return {
      props: {
        blogs: allBlogs.data,
      },
    };
  }
  

export default blog;