import SearchBox from "../../components/category/SearchBox";
import MAinDashboard from "../../components/dashboard/MainDashboard";
import Support from "../../components/dashboard/Support";
import PersonDetail from "../../components/designer/PersonDetail";
const support = () => {
  return (
    <>
      <SearchBox />
      <PersonDetail />
      <MAinDashboard>
        <Support />
      </MAinDashboard>
    </>
  );
};
export default support;
