import axios from "axios";
import Filter from "../../../components/filter/Filter";
import { Typography } from "@mui/material";

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
      </Typography>
      <Filter category={category} colors={colors} />
    </>
  );
};

export default tagsPage;

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
      `https://hdgraphic.ir/api/v1/files/tag/${params.query.slug}?${
        q ? "q=" + q : ""
      }&page=${page}&${color ? "color=" + color : ""}&${
        filter ? "filter=" + filter : ""
      }&${complex_filter ? "complex_filter=" + complex_filter : ""}`
    );
    const resColors = await axios.get(
      `https://hdgraphic.ir/api/v1/files/colors`
    );
    const title = await axios.get(
      `https://hdgraphic.ir/api/v1/files/tag-detail/${params.params.slug}`
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
        error: "we have a problem!",
      },
    };
  }
}
