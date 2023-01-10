import axios from "axios";
import Main from "../components/Main";
import Link from "next/link";

export default function Home({ instagram, mockup, bigImageStock }) {
  return (
    <>
      <Main instagram={instagram} mockup={mockup} stock={bigImageStock} />
    </>
  );
}

export async function getServerSideProps() {
  const resInstagram = await axios.get(
    "https://hdgraphic.ir/api/v1/files/category/قالب-اینستاگرام?page=2&page_size=8"
  );
  const resMocup = await axios.get(
    "https://hdgraphic.ir/api/v1/files/category/موکاپ?page=1&page_size=4"
  );
  const resSetting = await axios.get(
    "https://hdgraphic.ir/api/v1/settings/setting"
  );

  return {
    props: {
      instagram: resInstagram.data.items,
      mockup: resMocup.data.items,
      bigImageStock: resSetting.data.big_banner,
    }, // will be passed to the page component as props
  };
}
