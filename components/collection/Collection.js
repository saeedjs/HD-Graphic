import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import CollectionBanner from "./CollectionBanner";
import CollectionComp from "./CollectionComp";
import Collections from "./Collections";
import SearchBox from "../category/SearchBox";
const Collection = () => {
  return (
    <>
      <SearchBox />
      <CollectionBanner />
      <Container>
        <Collections />
      </Container>
    </>
  );
};

export default Collection;
