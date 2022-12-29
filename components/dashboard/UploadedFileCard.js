import { Grid, Typography } from "@mui/material";
import axios from "axios";

import ItemUploadedFileCard from "./ItemUploadedFileCard";

let items = [
  {
    title: "1تصویر استوک جدید",
    sol: "2",
    srcImage: "/images/51file.png",
  },
  {
    title: "2تصویر استوک جدید",
    sol: "2",
    srcImage: "/images/uploadedfilepre.png",
  },
  {
    title: "3تصویر استوک جدید",
    sol: "2",
    srcImage: "/images/uploadedfilepre.png",
  },
  {
    title: "4تصویر استوک جدید",
    sol: "2",
    srcImage: "/images/51file.png",
  },
  {
    title: "تصویر استوک جدید",
    sol: "2",
    srcImage: "/images/uploadedfilepre.png",
  },
  {
    title: "تصویر استوک جدید",
    sol: "2",
    srcImage: "/images/51file.png",
  },
  {
    title: "تصویر استوک جدید",
    sol: "2",
    srcImage: "/images/uploadedfilepre.png",
  },
  {
    title: "تصویر استوک جدید",
    sol: "4",
    srcImage: "/images/uploadedfilepre.png",
  },
  {
    title: "تصویر استوک جدید",
    sol: "2",
    srcImage: "/images/uploadedfilepre.png",
  },
  {
    title: "تصویر استوک جدید",
    sol: "2",
    srcImage: "/images/51file.png",
  },
];

const UploadedFileCard = () => {
  return (
    <>
      <Typography sx={{ margin: "20px", fontWeight: "bold" }}>فایل های آپلود شده</Typography>
      <Grid spacing={1} container sx={{ justifyContent: "start" }}>
        {items.map((item) => {
          return (
            <ItemUploadedFileCard
              title={item.title}
              sol={item.sol}
              srcImage={item.srcImage}
              howareyou={item}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default UploadedFileCard;
