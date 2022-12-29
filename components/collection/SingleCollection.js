import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CollectionImg from "./CollectionImg";

const SingleCollection = (props) => {
  const [collection, setCollection] = useState(props.collection);
  const [files, setFiles] = useState(
    props.collection ? props.collection.files : null
  );
  const [collectionImgs, setCollectionImgs] = useState([]);
  useEffect(() => {
    let imgs = [];
    if (files)
      files.map((item) => imgs.push(item.image));
    setCollectionImgs(imgs);
  }, [files]);
  return (
    <>
      <Box sx={{ width: "306px" }}>
        <Box><CollectionImg data={collectionImgs ? collectionImgs : ""} /></Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", my: "10px" }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                fontFamily: "iranYekan",
                color: "colors.gray",
              }}
            >
              {collection ? collection.title : "بدون نام"}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "66px",
              height: "28px",
              backgroundColor: "colors.white",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "colors.gray",
                textAlign: "center",
                height: "100%",
              }}
            >
              96 فایل
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SingleCollection;
