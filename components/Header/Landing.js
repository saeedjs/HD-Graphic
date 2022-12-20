import LandingProducts from "./LandingProducts";
import LandingTitle from "./LandingTitle";
import SearchBox from "./SearchBox";

const Header = ({ category }) => {
  return (
    <>
      <LandingTitle />
      <SearchBox />
      <LandingProducts category={category} />
    </>
  );
};

export default Header;
