import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import DashboardCollectionComp from "./DashboardCollectionComp";

const DashboardCollection = () => {
  const [collections, setCollections] = useState();
  const [files, setFiles] = useState();
  axios
    .post("https://hdgraphic.ir/api/v1/users/user-collections",{}, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyMTUyOTQzLCJpYXQiOjE2NzIxNDkzNDMsImp0aSI6IjlkYTMwNTBjZjVkYzQxMWI5NDczYjc4N2IzZjI0ZDYxIiwidXNlcl9pZCI6NTJ9.e2FmjREGTEfvIK2U1FYt_BuclMKP4du2YTs2vu88CxQ",
      },
    })
    .then((result) => {
      setCollections(result.data)
      setFiles(result.data.files)
      console.log(result)
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
    {collections+""}
      <DashboardCollectionComp data={data} />
      <DashboardCollectionComp data={data} />
    </>
  );
};

export default DashboardCollection;