import PersonDetail from "../../components/designer/PersonDetail";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import SearchBox from "../../components/category/SearchBox";
import ComponentTop from "../../components/ComponentTop";
import DashboardSideBar from "./DashboardSideBar";
const MAinDashboard = () => {
  return (
    <>
      <SearchBox />
      <PersonDetail />
      <Container maxWidth="xxl">
        <ComponentTop
          ltitle={"درآمد کل فروش فایل: 2.500.000 تومان"}
          rtitle={"پروفایل کاربری"}
        />
        <Grid container>
          <Grid item xs={12} sm={3} lg={2}>
            <DashboardSideBar />
          </Grid>
          <Grid item xs={12} sm={9} lg={10}>
            <Box
              sx={{ borderRight: "2px solid #e9e9e9", height: "100%" }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default MAinDashboard;
