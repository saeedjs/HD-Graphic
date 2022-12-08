import Articls from "../components/Articls";
import SearchBox from "../components/category/SearchBox";
import PersonDetail from "../components/designer/PersonDetail";
import Filter from "../components/Filter";
import "swiper/css";

export default function Designer() {
  return (
    <>
      <SearchBox />
      <PersonDetail />
      <Filter />
      <Articls title="مطالب مرتبط" />
    </>
  );
}
