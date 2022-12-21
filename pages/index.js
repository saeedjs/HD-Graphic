import axios from "axios";
import Main from "../components/Main";

export default function Home({ instagram, mockup }) {
  return (
    <>
      <Main instagram={instagram} mockup={mockup} />
    </>
  );
}

export async function getServerSideProps() {
  const resInstagram = await axios.get(
    "https://hdgraphic.ir/api/v1/files/category/قالب-اینستاگرام?page=2&page_size=4"
  );
  const resMocup = await axios.get(
    "https://hdgraphic.ir/api/v1/files/category/موکاپ?page=1&page_size=4"
  );

  console.log(resInstagram);

  return {
    props: {
      instagram: resInstagram.data,
      mockup: resMocup.data,
    }, // will be passed to the page component as props
  };
}
