import HeaderCategory from "../components/Header/HeaderCategory";
import SingleProduct from "../components/products/SingleProduct";
import Category from "../components/category/Category";
import SearchBox from "../components/category/SearchBox";
import Articls from "../components/Articls";
import "swiper/css";

const category = () => {
  return (
    <>
      <SearchBox />
      <HeaderCategory />
      <Category />
      <Articls title="مطالب مرتبط" />
    </>
  );
};

export default category;
