import { Box } from "@mui/system";
import MAinDashboard from "../../components/dashboard/MainDashboard";
import ProfileFileManager from "../../components/dashboard/ProfileFileManager";

const filemanagement = () => {
  return (
    <>
      <MAinDashboard>
        {/* <Box>
            filemanagement
        </Box> */}
        <ProfileFileManager />
      </MAinDashboard>
    </>
  );
};
export default filemanagement;
