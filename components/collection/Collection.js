import { Container } from "@mui/system";
import CollectionBanner from "./CollectionBanner";
import Collections from "./Collections";
import SearchBox from "../category/SearchBox";
import SpecialCollection from "./SpecialCollection";
import CollectionMasonry from "./CollectionMasonry";

const Collection = () => {
  return (
    <>
      <SearchBox />
      <CollectionBanner />
      <CollectionMasonry />
      <Container maxWidth={"xl"}>
        <SpecialCollection />
        <Collections />
      </Container>
    </>
  );
};
export default Collection;
