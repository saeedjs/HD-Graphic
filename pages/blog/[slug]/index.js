import BlogDetail from "../../../components/blog/BlogDetail";
import axios from "axios";
const Blog = ({ blogDetail, comment }) => {
  return (
    <>
      <BlogDetail blogDetail={blogDetail} comment={comment} />
    </>
  );
};

export default Blog;

export async function getServerSideProps(params) {
  const resSingleProduct = await axios.get(
    `https://hdgraphic.ir/api/v1/blog/post/detail/${params.params.slug}`
  );
  const blogComment = await axios.get(
    `https://hdgraphic.ir/api/v1/blog/comments/post/${resSingleProduct.data.id}`
  );
  return {
    props: {
      comment: blogComment.data,
      blogDetail: resSingleProduct.data,
    },
  };
}
