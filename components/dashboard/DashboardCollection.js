import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DashboardCollectionComp from "./DashboardCollectionComp";

const DashboardCollection = () => {
  const data = [
    {
      limg: "/images/vfv.png",
      timg: "/images/66.png",
      bimg: "/images/354.png",
      subc: "موکاپ های خرید",
    },
    {
      limg: "/images/vfv.png",
      timg: "/images/66.png",
      bimg: "/images/354.png",
      subc: "موکاپ های خرید",
    },
    {
      limg: "/images/vfv.png",
      timg: "/images/66.png",
      bimg: "/images/354.png",
      subc: "موکاپ های خرید",
    },
  ];
  return (
    <>
      <DashboardCollectionComp data={data} />
      <DashboardCollectionComp data={data} />
    </>
  );
};

export default DashboardCollection;
