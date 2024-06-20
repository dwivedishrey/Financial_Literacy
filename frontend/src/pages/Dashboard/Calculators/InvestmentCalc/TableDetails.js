import React from "react";
import { Table, TableCell, TableHead, TableRow } from "@mui/material";

export default function TableDetails(props) {
  return (
    <Table
      style={{
        width: "100%",
        border: "2px solid #CCC",
        backgroundColor: "#A1DD70",
      }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          <TableCell className="ETableCellText">
            <strong>Monthly Investment</strong>
          </TableCell>
          <TableCell className="ETableCellVal">
            <strong>Rs </strong>
            {props.monthlyInvestment}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">
            <strong>Expected Return Rate %</strong>
          </TableCell>
          <TableCell className="ETableCellVal">
            <strong>{props.expectedReturnRate}</strong>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">
            <strong>Time Period (Years)</strong>
          </TableCell>
          <TableCell className="ETableCellVal">
            <strong>{props.timePeriod}</strong>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">
            <strong>Total Investment</strong>
          </TableCell>
          <TableCell className="ETableCellVal">
            <strong>Rs </strong>
            {props.totalInvestment}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">
            <strong>Estimated Returns</strong>
          </TableCell>
          <TableCell className="ETableCellVal">
            <strong>Rs </strong>
            {props.estimatedReturns}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="ETableCellText">
            <strong>Total Value</strong>
          </TableCell>
          <TableCell className="ETableCellVal">
            <strong>Rs </strong>
            {props.futureValue}
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}
