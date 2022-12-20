import { Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import Filter from "../../../components/Filter";
<<<<<<< HEAD
=======

>>>>>>> 7b695d9734b3d7b7102099e8c25e91e625d5442c
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
<<<<<<< HEAD
=======

>>>>>>> 7b695d9734b3d7b7102099e8c25e91e625d5442c
      <Filter category={category} />
    </>
  );
};

export async function getServerSideProps(params) {
  try {
    const res = await axios.get(
      `https://hdgraphic.ir/api/v1/files/category/${params.query.slug}`
    );
    console.log(res);
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
