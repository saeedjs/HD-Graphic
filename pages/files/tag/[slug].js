import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import Filter from "../../../components/filter/Filter";

const tagsPage = ({ category, colors, title }) => {
  return (
    <>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          my: 4,
        }}
      >
        {title}
      </Typography>{" "}
      <Filter category={category} colors={colors} />
    </>
  );
};

export default tagsPage;

export async function getServerSideProps(params) {
  const resTag = await axios.get(
    `https://hdgraphic.ir/api/v1/files/tag/${params.params.slug}`
  );

  const resColors = await axios.get(`https://hdgraphic.ir/api/v1/files/colors`);
  const resTitle = await axios.get(
    `https://hdgraphic.ir/api/v1/files/tag-detail/${params.params.slug}?short=1`
  );

  return {
    props: {
      category: resTag.data,
      colors: resColors.data,
      title: resTitle.data.title,
    },
  };
}
