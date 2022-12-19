import { Container } from "@mui/system";
import CollectionBanner from "./CollectionBanner";
import Collections from "./Collections";
import SearchBox from "../category/SearchBox";
import SpecialCollection from "./SpecialCollection";

const Collection = () => {
  return (
    <>
      <SearchBox />
      <CollectionBanner />
      <Container maxWidth={"xl"}>
        <SpecialCollection />
        <Collections />
      </Container>
    </>
  );
};
export default Collection;
