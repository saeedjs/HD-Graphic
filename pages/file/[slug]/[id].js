import { propsToClassKey } from "@mui/styles";
import axios from "axios";
import SingleProduct from "../../../components/products/SingleProduct";

const productSingle = ({ DetailProduct }) => {
  return (
    <>
      <SingleProduct DetailProduct={DetailProduct} />
    </>
  );
};

export default productSingle;

export async function getServerSideProps(params) {
  const resSingleProduct = await axios.get(
    `https://hdgraphic.ir/api/v1/files/file/${params.params.slug}/${params.params.id}`
  );
  return {
    props: {
      DetailProduct: resSingleProduct.data,
    }, // will be passed to the page component as props
  };
}
