import { propsToClassKey } from "@mui/styles";
import axios from "axios";
import SingleProduct from "../../../components/products/SingleProduct";

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
  // const downloadAccess = await axios.get(
  //   `https://hdgraphic.ir/api/v1/users/access-download/${params.query.token}`,{
  //     header:{
  //       Auth
  //     }
  //   }
  // );

  console.log(resSingleProduct.data);
  return {
    props: {
      DetailProduct: resSingleProduct.data.file,
      creator: resSingleProduct.data.user,
    }, // will be passed to the page component as props
  };
}
