import { TableCell, TableRow, Button } from "@mui/material";
import Link from "next/link";

const TableRows2 = (props) => {
  return (
    <>
      <TableRow key={props.id} title={props.title}>
        <TableCell component="th" scope="row">
          {props.id}
        </TableCell>
        <TableCell align="right">
          <img src={props.srcImage} alt={props.title} />
        </TableCell>
        <TableCell align="right">{props.title}</TableCell>
        <TableCell align="right">{props.userBuy}</TableCell>
        <TableCell align="right">{props.price} تومان</TableCell>
        <TableCell align="right">
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
