import { Box } from "@mui/system";
import axios from "axios";
import MAinDashboard from "../../components/dashboard/MainDashboard";
import UploadedFileCard from "../../components/dashboard/UploadedFileCard";

const filemanagement = (props) => {
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
