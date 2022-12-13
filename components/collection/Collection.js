import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import CollectionBanner from "./CollectionBanner";
import CollectionComp from "./CollectionComp";
import Collections from "./Collections";

const Collection = () => {
  return (
    <>
      <CollectionBanner />
      <Container>
        <Collections />
      </Container>
    </>
  );
};

export default Collection;
