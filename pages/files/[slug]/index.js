import { Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import Filter from "../../../components/Filter";

const fileSlugPage = ({ category, colors }) => {
  const title = category[0].category.title;
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

export async function getServerSideProps(params) {
  try {
    const res = await axios.get(`https://hdgraphic.ir/api/v1/files/category/${params.query.slug}`);
    const resColors = await axios.get(`https://hdgraphic.ir/api/v1/files/colors`);
    return {
      props: {
        category: res.data,
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