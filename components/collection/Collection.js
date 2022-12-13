import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import CollectionComp from "./CollectionComp";
import Collections from "./Collections";

const Collection = () => {
  return (
    <>
      <Container maxWidth={'xxl'}>
        <Collections />
      </Container>
    </>
  );
};

export default Collection;
