import { TableCell, TableRow, Button, Typography } from "@mui/material";
import Link from "next/link";
import { numberFormat } from "../../lib/helper";

const TableRows = (props) => {
  return (
    <>
      <TableRow key={props.id} title={props.title}>
        <TableCell
          sx={
            props.id % 2 == 0
              ? {
                  backgroundColor: "#F3FFFB",
                  borderLeft: 1,
                  borderColor: "#E9E9E9",
                }
              : {
                  backgroundColor: "white",
                  borderLeft: 1,
                  borderColor: "#E9E9E9",
                }
          }
          component="th"
          scope="row"
        >
          {props.id}
        </TableCell>
        <TableCell
          sx={
            props.id % 2 == 0
              ? {
                  backgroundColor: "#F3FFFB",
                  borderLeft: 1,
                  borderColor: "#E9E9E9",
                }
              : {
                  backgroundColor: "white",
                  borderLeft: 1,
                  borderColor: "#E9E9E9",
                }
          }
          align="right"
        >
          <img
            style={{
              width: "75px",
              height: "75px",
              borderRadius: "15px",
            }}
            src={`https://hdgraphic.ir${props.srcImage}`}
            alt={props.title}
          />
        </TableCell>
        <TableCell
          sx={
            props.id % 2 == 0
              ? {
                  backgroundColor: "#F3FFFB",
                  borderLeft: 1,
                  borderColor: "#E9E9E9",
                }
              : {
                  backgroundColor: "white",
                  borderLeft: 1,
                  borderColor: "#E9E9E9",
                }
          }
          align="right"
        >
          {props.title}
        </TableCell>
        <TableCell
          sx={
            props.id % 2 == 0
              ? {
                  backgroundColor: "#F3FFFB",
                  borderLeft: 1,
                  borderColor: "#E9E9E9",
                }
              : {
                  backgroundColor: "white",
                  borderLeft: 1,
                  borderColor: "#E9E9E9",
                }
          }
          align="right"
        >
          <Link href={`/file/${props.slug}/${props.id}`}>
            <Typography
              sx={{
                backgroundColor: "#eee",
                color: "colos.green",
                textAlign: "center",
              }}
            >
              {" "}
              صفحه این فایل
            </Typography>
          </Link>
        </TableCell>
        <TableCell
          sx={
            props.id % 2 == 0
              ? {
                  backgroundColor: "#F3FFFB",
                  borderLeft: 1,
                  borderColor: "#E9E9E9",
                }
              : {
                  backgroundColor: "white",
                  borderLeft: 1,
                  borderColor: "#E9E9E9",
                }
          }
          align="right"
        >
          {numberFormat(props.price)} تومان
        </TableCell>
        <TableCell
          sx={
            props.id % 2 == 0
              ? {
                  backgroundColor: "#F3FFFB",
                  borderLeft: 1,
                  borderColor: "#E9E9E9",
                }
              : {
                  backgroundColor: "white",
                  borderLeft: 1,
                  borderColor: "#E9E9E9",
                }
          }
          align="right"
        >
          <Button sx={{ backgroundColor: "colors.green" }}>
            <Link
              href={props.downloadLink}
              download
              style={{ color: "#fff", fontSize: "14px" }}
            >
              لینک دانلود
            </Link>
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableRows;
