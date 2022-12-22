import { Container } from "@mui/system";
import CollectionBanner from "./CollectionBanner";
import Collections from "./Collections";
import SearchBox from "../category/SearchBox";
import SpecialCollection from "./SpecialCollection";

const Collection = () => {
  const data = [
    {
      0: {
        limg: "/images/363.png",
        timg: "/images/987.png",
        bimg: "/images/789.png",
        subc: "موکاپ های خرید",
      },
      1: {
        limg: "/images/vfv.png",
        timg: "/images/xcvxcv.png",
        bimg: "/images/zxcxzc.png",
        subc: "پس زمینه ای فانتزی",
      },
    },
    {
      0: {
        limg: "/images/666.png",
        timg: "/images/656.png",
        bimg: "/images/5626.png",
        subc: "قالب های دخترانه اینستاگرام",
      },
      1: {
        limg: "/images/639.png",
        timg: "/images/369.png",
        bimg: "/images/963.png",
        subc: "قالب های معرفی محصول",
      },
    },
  ];
  return (
    <>
      <SearchBox />
      <CollectionBanner />
      <Container maxWidth={"xl"}>
        <SpecialCollection data={data} />
        <Collections />
      </Container>
    </>
  );
};
export default Collection;
