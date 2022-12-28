import Typography from "@mui/material/Typography";
import axios from "axios";
import Filter from "../../../components/filter/Filter";

const tagsPage = ({ category, colors }) => {
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
        {category.extra.title}
      </Typography>
      <Filter category={category} colors={colors} />
    </>
  );
};
cosnoel.log("how is going:");
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
    return {
      props: {
        category: res.data,
        colors: resColors.data,
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
