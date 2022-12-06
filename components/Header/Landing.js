import LandingProducts from "./LandingProducts";
import LandingTitle from "./LandingTitle";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <>
      <LandingTitle />
      <SearchBox />
      <LandingProducts />
    </>
  );
};

export default Header;
