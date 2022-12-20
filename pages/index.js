import axios from "axios";
import Main from "../components/Main";

export default function Home({ instagram, category }) {
  return (
    <>
      <Main instagram={instagram} category={category} />
    </>
  );
}

export async function getServerSideProps() {
  const resInstagram = await axios.get(
    "https://hdgraphic.ir/api/v1/files/category/قالب-اینستاگرام?page=1&page_size=8"
  );
  const resCategory = await axios.get("https://hdgraphic.ir/api/v1/files/categories");
  return {
    props: {
      instagram: resInstagram.data,
      category: resCategory.data,
    }, // will be passed to the page component as props
  };
}
