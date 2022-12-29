import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import DashboardCollectionComp from "./DashboardCollectionComp";

const DashboardCollection = () => {
  const [collections, setCollections] = useState([]);
  axios
    .post("https://hdgraphic.ir/api/v1/users/user-collections",{}, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyMjk4NTMyLCJpYXQiOjE2NzIyOTQ5MzIsImp0aSI6ImEzOWZkZDI2YTAyMTQzMzM4MjA0MThkZjUwNmMxOGM4IiwidXNlcl9pZCI6NTJ9.BxhHQfhZn4M_Ij1TqQzDgQ1OFiH-EW6Z9UmGc8j3BSU",
      },
    })
    .then((result) => {
      setCollections(result.data)
    })
    .catch((err) => {
      console.log(err);
    });

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
      {/* <DashboardCollectionComp data={data} /> */}
      <DashboardCollectionComp data={collections} />
    </>
  );
};

export default DashboardCollection;