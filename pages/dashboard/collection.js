import { Container } from "@mui/material";
import { Box } from "@mui/system";
import CreateCollection from "../../components/dashboard/CreateCollection";
import DashboardCollection from "../../components/dashboard/DashboardCollection";
import MAinDashboard from "../../components/dashboard/MainDashboard";

const collection = () => {
  return (
    <>
      <MAinDashboard>
        <Container>
          <CreateCollection />
          <DashboardCollection />
        </Container>
      </MAinDashboard>
    </>
  );
};
export default collection;
