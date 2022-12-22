import { Box } from "@mui/system";
import DashboardCollection from "../../components/dashboard/DashboardCollection";
import MAinDashboard from "../../components/dashboard/MainDashboard";

const collection = () => {
  return (
    <>
      <MAinDashboard>
        <DashboardCollection />
      </MAinDashboard>
    </>
  );
};
export default collection;
