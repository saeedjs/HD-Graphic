import { Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import Filter from "../../../components/Filter";
<<<<<<< HEAD
const fileSlugPage = ({category}) => {
  console.log('categry')
  return (
    <>
=======
const fileSlugPage = ({ category }) => {
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
>>>>>>> 7b66a17180023bf3e386dbee1be35715845283f6
      <Filter category={category} />
    </>
  );
};

export async function getServerSideProps(params) {
  try {
    const res = await axios.get(`https://hdgraphic.ir/api/v1/files/category/${params.query.slug}`);
    console.log(res)
    return {
      props: {
        category: res.data,
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
