import { TableCell, TableRow, Button } from "@mui/material";
import Link from "next/link";

const TableRows2 = (props) => {
  return (
    <>
      <TableRow key={props.id} title={props.title}>
        <TableCell
          sx={
            props.id % 2 == 0
              ? {
                  backgroundColor: "#FFF1F4",
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
                  backgroundColor: "#FFF1F4",
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
          <img src={props.srcImage} alt={props.title} />
        </TableCell>
        <TableCell
          sx={
            props.id % 2 == 0
              ? {
                  backgroundColor: "#FFF1F4",
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
                  backgroundColor: "#FFF1F4",
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
          {props.userBuy}
        </TableCell>
        <TableCell
          sx={
            props.id % 2 == 0
              ? {
                  backgroundColor: "#FFF1F4",
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
          {props.price} تومان
        </TableCell>
        <TableCell
          sx={
            props.id % 2 == 0
              ? {
                  backgroundColor: "#FFF1F4",
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

export default TableRows2;
