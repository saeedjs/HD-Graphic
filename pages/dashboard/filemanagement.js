import { Box } from "@mui/system";
import axios from "axios";
import MAinDashboard from "../../components/dashboard/MainDashboard";
import ProfileFileManager from "../../components/dashboard/ProfileFileManager";

const filemanagement = (props) => {
  return (
    <>
      <MAinDashboard>
        <ProfileFileManager />
      </MAinDashboard>
    </>
  );
};

export default filemanagement;
