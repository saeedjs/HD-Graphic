import { Box } from "@mui/system";
import MAinDashboard from "../../components/dashboard/MainDashboard";
import UploadedFileCard from "../../components/dashboard/UploadedFileCard";

const filemanagement = () => {
  return (
    <>
      <MAinDashboard>
        <Box>
          <UploadedFileCard />
        </Box>
      </MAinDashboard>
    </>
  );
};
export default filemanagement;
