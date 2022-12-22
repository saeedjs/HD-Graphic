import { Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import Filter from "../../../components/filter/Filter";

const fileSlugPage = ({ category, colors }) => {
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
      ></Typography>
      <Filter category={category} colors={colors} />
    </>
  );
};

export async function getServerSideProps(params) {
  let page = 1;
  let color = ' ';
  let q = '';
  if (params.query.page) page = params.query.page;
  if (params.query.q) q = params.query.q; 
  if (params.query.color) color = params.query.color;
  try {
    const res = await axios.get(
      `https://hdgraphic.ir/api/v1/files/category/${params.query.slug}?${q ? 'q='+q:""}&page=${page}&color=${color}`
    );
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
