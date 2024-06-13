import React from "react";
import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import "./Emicalc.css";

export default function TableDetails(props) {
  const total = props.pAmount + props.TotalAmountofInterest;
  return (
    <Table
      style={{ width: "100%", border: "2px solid #CCC" }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          <TableCell className="ETableCellText">
            <strong>Loan Amount</strong>
          </TableCell>
          <TableCell className="ETableCellVal">
            <strong>Rs </strong>
            {props.pAmount}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">
            <strong>Interest %</strong>
          </TableCell>
          <TableCell className="ETableCellVal">
            <strong>Rs </strong>
            {props.interest}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">
            <strong>Tenure (Months)</strong>
          </TableCell>
          <TableCell className="ETableCellVal">
            <strong>Rs </strong>
            {props.duration}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">
            <strong>EMI (Monthly)</strong>
          </TableCell>
          <TableCell className="ETableCellVal">
            <strong>Rs </strong>
            {props.emi}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">
            <strong>Total Interest</strong>
          </TableCell>
          <TableCell className="ETableCellVal">
            <strong>Rs </strong>
            {props.TotalAmountofInterest}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">
            <strong>Total Payment</strong>
            <br />
          </TableCell>
          <TableCell className="ETableCellVal">
            <strong>Rs </strong>
            {total}
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}
