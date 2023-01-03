import { Box } from "@mui/material";
import axios from "axios";
import FileManager from "../../components/dashboard/FileManager.js";
import MAinDashboard from "../../components/dashboard/MainDashboard";
import ProfileFileManager from "../../components/dashboard/ProfileFileManager";
import { getServerSideProps } from "../auth/login.js";

const filemanagement = (props) => {
  return (
    <>
      <MAinDashboard>
        <FileManager />
      </MAinDashboard>
    </>
  );
};

export default filemanagement;
