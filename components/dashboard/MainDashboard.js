import PersonDetail from "../../components/designer/PersonDetail";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import SearchBox from "../../components/category/SearchBox";
import ComponentTop from "../../components/ComponentTop";
const MAinDashboard = () => {
  return (
    <>
      <Typography sx={{ mb: 2, fontWeight: "bold" }}>
        فایل های خریداری شده
      </Typography>
      <TableContainer dir={"rtl"} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead sx={{ backgroundColor: "colors.black" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>شناسه</TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                تصویر
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                نام فایل
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                تاریخ خرید
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                قیمت
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                دانلود
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRows
                title={row.title}
                price={row.price}
                downloadLink={row.downloadLink}
                id={index + 1}
                srcImage={row.srcImage}
                date={row.date}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Mypagination />
        </Box>
      </Box>
    </>
  );
};
export default MAinDashboard;
