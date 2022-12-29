import Articls from "../components/Articls";
import SearchBox from "../components/category/SearchBox";
import PersonDetail from "../components/designer/PersonDetail";
import "swiper/css";
import Filter from "../components/filter/Filter";

export default function Designer() {
  return (
    <>
      <SearchBox />
      <PersonDetail />
      {/* <Filter /> */}
      <Articls title="مطالب مرتبط" />
    </>
  );
}
