import { Typography } from "@mui/material";
import axios from "axios";

import Filter from "../../../components/filter/Filter";

const fileSlugPage = ({ category, colors, title }) => {
  return (
    <>
      <Typography
        component={"h1"}
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          my: 4,
        }}
      >
        {title}
      </Typography>

      <Filter category={category} colors={colors} />
    </>
  );
};

export async function getServerSideProps(params) {
  let page = 1;
  let color = "";
  let q = "";
  let filter = "";
  let complex_filter = "";
  if (params.query.page) page = params.query.page;
  if (params.query.filter) filter = params.query.filter;
  if (params.query.q) q = params.query.q;
  if (params.query.complex_filter) complex_filter = params.query.complex_filter;
  if (params.query.color) color = params.query.color;
  try {
    const res = await axios.get(
      `https://hdgraphic.ir/api/v1/files/category/${params.query.slug}?${
        q ? "q=" + q : ""
      }&page=${page}&${color ? "color=" + color : ""}&${
        filter ? "filter=" + filter : ""
      }&${complex_filter ? "complex_filter=" + complex_filter : ""}`
    );
    const resColors = await axios.get(
      `https://hdgraphic.ir/api/v1/files/colors`
    );

    console.log(res.data);
    const title = await axios.get(
      `https://hdgraphic.ir/api/v1/files/category-detail/${params.params.slug}`
    );
    return {
      props: {
        category: res.data,
        colors: resColors.data,
        title: title.data.title,
      },
    };
  } catch (error) {
    return {
      props: {
        error: "s",
      },
    };
  }
}

export default fileSlugPage;
