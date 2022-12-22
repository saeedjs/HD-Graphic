import { Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import Filter from "../../../components/filter/Filter";

const fileSlugPage = ({ category, colors }) => {
<<<<<<< HEAD
  // const title = category[0].category.title;
=======
  // const router = useRouter();
>>>>>>> 823285a33b34a185e84ce056174be9ec12daf6bb
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
<<<<<<< HEAD
      >
      </Typography> */}
=======
      ></Typography>
>>>>>>> 823285a33b34a185e84ce056174be9ec12daf6bb
      <Filter category={category} colors={colors} />
    </>
  );
};

export async function getServerSideProps(params) {
  let page = 1;
  if (params.query.page) page = params.query.page;
  try {
<<<<<<< HEAD
    const res = await axios.get(`https://hdgraphic.ir/api/v1/files/category/${params.query.slug}?page=${page}`);
    const resColors = await axios.get(`https://hdgraphic.ir/api/v1/files/colors`);
    console.log(resColors)
=======
    const res = await axios.get(
      `https://hdgraphic.ir/api/v1/files/category/${params.query.slug}?page=${page}`
    );
    const resColors = await axios.get(
      `https://hdgraphic.ir/api/v1/files/colors`
    );
>>>>>>> 823285a33b34a185e84ce056174be9ec12daf6bb
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
