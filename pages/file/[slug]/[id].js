import { propsToClassKey } from "@mui/styles";
import axios from "axios";
import { useContext } from "react";
import SingleProduct from "../../../components/products/SingleProduct";
import AuthContext from "../../../context/AuthContext";

const productSingle = ({ DetailProduct, creator }) => {
  return (
    <>
      <SingleProduct DetailProduct={DetailProduct} creator={creator} />
    </>
  );
};

export default productSingle;

export async function getServerSideProps(params) {
  const resSingleProduct = await axios.get(
    `https://hdgraphic.ir/api/v1/files/file/${params.params.slug}/${params.params.id}`
  );

  console.log(resSingleProduct.data);
  return {
    props: {
      DetailProduct: resSingleProduct.data,
      creator: resSingleProduct.data.user,
    }, // will be passed to the page component as props
  };
}
