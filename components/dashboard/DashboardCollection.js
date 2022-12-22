import SpecialCollection from "../Collection/SpecialCollection";
const DashboardCollection = () => {
  const data = [
    {
      0: {
        limg: "/images/363.png",
        timg: "/images/987.png",
        bimg: "/images/789.png",
        subc: "قالب های معرفی محصول",
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
    },
  ];
  return (
    <>
      <SpecialCollection data={data} />
    </>
  );
};

export default DashboardCollection;
