import { Box } from "@mui/material";
import SearchBox from "../../components/category/SearchBox";
import TableProfile1 from "../../components/dashboard/TableProfile";
import TableProfile2 from "../../components/dashboard/TableProfile2";
import UploadedFileCard from "../../components/dashboard/UploadedFileCard";
import PersonDetail from "../../components/designer/PersonDetail";

const dashboardPage = () => {
  return (
    <Box sx={{ p: 4 }}>
      <SearchBox />
      <PersonDetail />
      <TableProfile1 />

      <TableProfile2 />
      <UploadedFileCard />
    </Box>
  );
};

export default dashboardPage;
