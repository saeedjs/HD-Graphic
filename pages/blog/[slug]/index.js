import BlogDetail from "../../../components/blog/BlogDetail";
import axios from "axios";
const Blog = ({ blogDetail }) => {
  return (
    <>
      <BlogDetail blogDetail={blogDetail} />
    </>
  );
};

export default Blog;

export async function getServerSideProps(params) {
  const resSingleProduct = await axios.get(
    `https://hdgraphic.ir/api/v1/blog/post/detail/${params.params.slug}`
  );

  return {
    props: {
      blogDetail: resSingleProduct.data,
    },
  };
}
