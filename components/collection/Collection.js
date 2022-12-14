import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import CollectionBanner from "./CollectionBanner";
import CollectionComp from "./CollectionComp";
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
