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
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

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

export default function TableProfile1(props) {
  const [access, setAccess] = React.useState("");
  const [files, setFiles] = React.useState([]);
  const [mount, setMount] = React.useState();
  const router = useRouter();

  React.useEffect(() => {
    setAccess(localStorage.getItem("access"));
  }, []);

  axios
    .post(
      `https://hdgraphic.ir/api/v1/users/bought-files?page=${router.query.page}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  ${access}
`,
        },
      }
    )
    .then((response) => {
      console.log(response.data.items);
      setFiles(response.data.items);
      setMount(response.data.extra.page_count);

      // console.log("response", response.data);
    })
    .catch((error) => {
      console.log("error", error.response);
    });

  return (
    <>
      <hr />
      <Typography sx={{ mb: 2, fontWeight: "bold" }}>
        فایل های خریداری شده
      </Typography>
      {files == [] ? (
        <Typography component={"h1"}>فایلی خریداری شده ندارید!</Typography>
      ) : (
        <TableContainer dir={"rtl"} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead
              sx={{
                backgroundColor: "colors.black",
              }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  شناسه
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  تصویر
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  نام فایل
                </TableCell>
                <TableCell sx={{ color: "white" }} align="right">
                  لینک صفحه فایل
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
              {files.map((row, index) => (
                <TableRows
                  title={row.title}
                  downloadLink={row.file_url}
                  id={row.id}
                  srcImage={row.image}
                  slug={row.slug}
                  price={row.price}
                />
              ))}
            </TableBody>
          </Table>
          <Box sx={{ display: "flex", justifyContent: "end", mb: 10 }}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Mypagination mount={{ page_count: 2 }} />
            </Box>
          </Box>
        </TableContainer>
      )}
    </>
  );
}
