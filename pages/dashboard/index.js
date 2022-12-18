import SearchBox from "../../components/category/SearchBox";
import TableProfile1 from "../../components/dashboard/TableProfile";
import TableProfile2 from "../../components/dashboard/TableProfile2";
import PersonDetail from "../../components/designer/PersonDetail";

const dashboardPage = () => {
  return (
    <>
      <SearchBox />
      <PersonDetail />
      <TableProfile1 />

      <hr />
      <TableProfile2 />
    </>
  );
};

export default dashboardPage;
