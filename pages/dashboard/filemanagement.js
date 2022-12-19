<<<<<<< HEAD
=======
import { Box } from "@mui/system";
import axios from "axios";
>>>>>>> dced9e61ce59d543c0b9c9d3a177d0f4f7d8a2eb
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
