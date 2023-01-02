import { Box } from "@mui/system";
import axios, { all } from "axios";
import AllBlog from "../../components/blog/AllBlog";
import BlogNavBar from "../../components/blog/BlogNavBar";
import SingleBlog from "../../components/blog/SingleBlog";
import SearchBox from "../../components/category/SearchBox";

const blog = ({ blogs }) => {
  return (
    <>
      <SearchBox />
      <BlogNavBar />
      <AllBlog sx={{mt:5}} blogs={blogs} />
    </>
  );
};

export async function getServerSideProps() {
  const allBlogs = await axios
    .get("https://hdgraphic.ir/api/v1/blog/posts/list")
    .catch((err) => {
      console.log(err);
    });

  return {
    props: {
      blogs: allBlogs ? allBlogs.data : [],
    },
  };
}

export default blog;
