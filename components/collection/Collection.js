import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import CollectionBanner from "./CollectionBanner";
import CollectionComp from "./CollectionComp";
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
