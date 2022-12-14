import { Container } from "@mui/system";
import CollectionBanner from "./CollectionBanner";
import Collections from "./Collections";
import SpecialCollection from "./SpecialCollection";

const Collection = () => {
  return (
    <>
      <CollectionBanner />
      <Container maxWidth={"xl"}>
        <SpecialCollection />
        <Collections />
      </Container>
    </>
  );
};
export default Collection;
