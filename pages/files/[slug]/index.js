import { Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import Filter from "../../../components/filter/Filter";

const fileSlugPage = ({ category, colors }) => {
  // const title = category[0].category.title;
  return (
    <>
      {/* <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          my: 4,
        }}
      >
      </Typography> */}
      <Filter category={category} colors={colors} />
    </>
  );
};

export async function getServerSideProps(params) {
  let page = 1;
  if (params.query.page)
    page = params.query.page;
  try {
    const res = await axios.get(`https://hdgraphic.ir/api/v1/files/category/${params.query.slug}?page=${page}`);
    const resColors = await axios.get(`https://hdgraphic.ir/api/v1/files/colors`);
    console.log(resColors)
    return {
      props: {
        category: res.data.items,
        colors: resColors.data,
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
