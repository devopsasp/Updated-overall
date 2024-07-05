import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const Payslipmonthly = () => {
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: "1100px", margin: "auto", padding: "10px" }}>
      <Box
        border={4}
        borderColor="black"
        borderRadius={1}
        style={{ padding: "10px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          HESPERUS AUTOMATION PVT LTD.
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Payslip for the month of ____________, 2012
        </Typography>
      </Box>
      <Box
        marginTop={"20px"}
        border={4}
        borderColor="black"
        borderRadius={1}
        style={{ padding: "10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Emp No.: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Gender: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Name: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Grade: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Pan No.: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Department: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong> Att. Branch: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Location: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Att. Brc Code: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Bank A/C No.: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Bank Name: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>LOP Days: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Standard Days: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong> Refund Days: _______________</strong>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>PF No.: _______________</strong>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Table
        size="small"
        aria-label="earnings and deductions"
        style={{ marginTop: "20px" }}>
        <TableHead style={{ border: "4px solid black" }}>
          <TableRow style={{ border: "4px solid black" }}>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong> Earnings</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Monthly Rate</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Current Month</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Arrears</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Total</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Deductions</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Total</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ border: "4px solid black" }}>
          <TableRow>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Basic</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>7500.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>7500.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>7500.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Profession Tax</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>200.00</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Conveyance Allowance</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>800.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>800.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>800.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Group Insurance</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>150.00</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>House Rent Allow.</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>3750.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>3750.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>3750.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Provident Fund</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>900.00</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Fixed Allowance</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>3750.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>3750.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>3750.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Income Tax</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Leave Travel Allowance</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>1250.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>1250.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>1250.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Medical</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>1250.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>1250.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>1250.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>Superannuation Allowance</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>750.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>750.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}>
              <strong>750.00</strong>
            </TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
            <TableCell style={{ borderRight: "4px solid black" }}></TableCell>
          </TableRow>
          <TableRow style={{ border: "4px solid black" }}>
            <TableCell>
              <strong>Total</strong>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <strong>Gross Earnings</strong>
            </TableCell>
            <TableCell>
              <strong>1250.00</strong>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow style={{ border: "4px solid black" }}>
            <TableCell colSpan={4}>
              <strong>Net Salary Payable</strong>
            </TableCell>
            <TableCell>
              <strong>17800.00</strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={8}>
              <strong>
                {" "}
                Net Salary Payable (In words): Seventeen Thousand Eight Hundred
                Only
              </strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography variant="body2" align="center" style={{ marginTop: "16px" }}>
        <strong>
          *Net Salary payable also subject to deductions as per Income Tax Law
        </strong>
      </Typography>
    </TableContainer>
  );
};

export default Payslipmonthly;
