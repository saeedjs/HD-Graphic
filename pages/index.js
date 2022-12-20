import axios from "axios";
import Main from "../components/Main";

export default function Home({ instagram }) {
  return (
    <>
      <Main instagram={instagram} />
    </>
  );
}

export async function getServerSideProps() {
  const resInstagram = await axios.get(
    "https://hdgraphic.ir/api/v1/files/category/قالب-اینستاگرام?page=1&page_size=8"
  );

  return {
    props: {
      instagram: resInstagram.data,
    }, // will be passed to the page component as props
  };
}
