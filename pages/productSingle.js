import { propsToClassKey } from "@mui/styles";
import SingleProduct from "../components/products/SingleProduct";

const productSingle = () => {
  return (
    <>
      <SingleProduct />
    </>
  );
};

export default productSingle;


export async function  getServerSideProps (){
  
  const res = await axios.get("/api/v1/products/:slug")
  const data = await data.json()
  
  return{
    props:{
      product: res.data.product,
    }
  }
}