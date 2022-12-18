import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import TableRows from "./TableRows";
import { Mypagination } from "../Mypagination";
import { Box } from "@mui/system";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    title: "قالب محصولات آرایشی اینستاگرام",
    date: "1401/01/08",
    srcImage: "/images/banana54.png",
    downloadLink: "#",
    price: "12,000",
  },
  {
    title: "قالب محصولات آرایشی اینستاگرام",
    date: "1401/01/08",
    srcImage: "/images/banana54.png",
    downloadLink: "#",
    price: "12,000",
  },
  {
    title: "قالب محصولات آرایشی اینستاگرام",
    date: "1401/01/08",
    srcImage: "/images/banana54.png",
    downloadLink: "#",
    price: "12,000",
  },
];

export default function AcccessibleTable(props) {
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
}
