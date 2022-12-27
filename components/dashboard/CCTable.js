import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import { CheckBox } from "@mui/icons-material";
import { Typography } from "@mui/material";

const CCTable = () => {
  const columns = ["انتخاب", "نام تصویر", "نام طرح", "جستجو", "تصویر شاخص"];

  const rows = ["انتخاب", "نام تصویر", "نام طرح", "جستجو", "تصویر شاخص"];

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden", width: "95%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {rows.map((item) => (
                  <TableCell
                    sx={{ backgroundColor: "#232931", color: "white" }}
                  >
                    {item == "جستجو" ? (
                      <input
                        placeholder="جستجو"
                        style={{
                          width: "264px",
                          height: "33px",
                          borderRadius: "5px",
                          border: "none",
                          backgroundColor: "#4F555E",
                          color: "#C2C2C2",
                          fontSize: "14px",
                          fontFamily: "iranYekan",
                          paddingRight: "20px",
                        }}
                      />
                    ) : (
                      item
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  <TableCell>
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <CheckBox />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                        <img width={"64px"} height={"64px"} src="/images/369.png" />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <Typography>کارت ویزیت ویزیت ویزیت</Typography>
                    </Box>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <Box sx={{display:'flex', justifyContent:'center'}}>
                        <CheckBox />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default CCTable;
