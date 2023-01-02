import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import ComponentTop from "../../components/ComponentTop";
import SearchBox from "../category/SearchBox";
import PersonDetail from "../designer/PersonDetail";
import DashboardSideBar from "./DashboardSideBar";

const MAinDashboard = ({ children }) => {
  const [username, setUserName] = useState("");
  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("user")));
    console.log(username);
  });
  return (
    <>
      <Box>
        <SearchBox />
        <PersonDetail username={username.username} />
      </Box>
      <Container maxWidth="xxl">
        <ComponentTop
          ltitle={"درآمد کل فروش فایل: 2.500.000 تومان"}
          rtitle={"پروفایل کاربری"}
          icon={"/images/icon/menu-burger.png"}
        />
        <Grid container>
          <Grid item xs={12} sm={3} lg={2}>
            <DashboardSideBar />
          </Grid>
          <Grid item xs={12} sm={9} lg={10}>
            <Box
              sx={{
                borderRight:{sm: "2px solid #e9e9e9"},
                minHeight: "1200px",
                pt: "30px",
                pr: "45px",
                
              }}
            >
              {children}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default MAinDashboard;
