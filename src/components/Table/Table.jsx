import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function TableAll() {
  let arr = JSON.parse(sessionStorage.getItem("arr"));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Side</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Instrument</TableCell>
            <TableCell align="right">Volume</TableCell>
            <TableCell align="right">Timestamp</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {arr.map((el) => (
            <TableRow
              key={el.date}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{ color: el.side === "BUY" ? "green" : "red" }}
              >
                {el.side}
              </TableCell>
              <TableCell align="right">{el.price}</TableCell>
              <TableCell align="right">{el.type}</TableCell>
              <TableCell align="right">{el.volume}</TableCell>
              <TableCell align="right">{el.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
