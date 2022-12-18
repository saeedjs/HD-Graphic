import PersonDetail from "../../components/designer/PersonDetail";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import SearchBox from "../../components/category/SearchBox";
import ComponentTop from "../../components/ComponentTop";
import TableProfile2 from "./TableProfile2";
import TableProfile1 from "./TableProfile";
import UploadedFileCard from "./UploadedFileCard";
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
            <Box>
              <Box
                sx={{
                  borderTop: "1px solid #E9E9E9",
                  borderBottom: "1px solid #E9E9E9",
                  height: "55px",
                  pr: "25px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  داشبورد
                </Typography>
              </Box>
              <Box
                sx={{
                  borderTop: "1px solid #E9E9E9",
                  borderBottom: "1px solid #E9E9E9",
                  height: "55px",
                  pr: "25px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  سوابق کاربری
                </Typography>
              </Box>
              <Box
                sx={{
                  borderTop: "1px solid #E9E9E9",
                  borderBottom: "1px solid #E9E9E9",
                  height: "55px",
                  pr: "25px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  کلکسیون
                </Typography>
              </Box>
              <Box
                sx={{
                  borderTop: "1px solid #E9E9E9",
                  borderBottom: "1px solid #E9E9E9",
                  height: "55px",
                  pr: "25px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  مدیریت فایل ها
                </Typography>
              </Box>
              <Box
                sx={{
                  borderTop: "1px solid #E9E9E9",
                  borderBottom: "1px solid #E9E9E9",
                  height: "55px",
                  pr: "25px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  پشتیبانی
                </Typography>
              </Box>
              <Box
                sx={{
                  borderTop: "1px solid #E9E9E9",
                  height: "55px",
                  pr: "25px",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  خروج
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9} lg={10}>
            <Box
              sx={{ borderRight: "2px solid #e9e9e9", height: "100%", p: 2 }}
            >
              <TableProfile1 />
              <TableProfile2 />
              <UploadedFileCard />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default MAinDashboard;
