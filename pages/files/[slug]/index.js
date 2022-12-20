import axios from "axios";
import { useRouter } from "next/router";
import Filter from "../../../components/Filter";
const fileSlugPage = ({category}) => {
  console.log('categry')
  return (
    <>
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
