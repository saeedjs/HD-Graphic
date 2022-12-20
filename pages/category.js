import HeaderCategory from "../components/Header/HeaderCategory";
import SingleProduct from "../components/products/SingleProduct";
import Category from "../components/category/Category";
import SearchBox from "../components/category/SearchBox";
import Articls from "../components/Articls";
import "swiper/css";
import Filter from "../components/Filter";

const category = () => {
  return (
    <>
      <SearchBox />
      <HeaderCategory />
      <Filter />
      <Category />
      <Articls title="مطالب مرتبط" />
    </>
  );
};

export default category;
