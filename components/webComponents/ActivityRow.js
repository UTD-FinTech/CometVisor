import { useState } from "react";
import {TableRow, TableCell, IconButton, Collapse, Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { teal, pink } from "@mui/material/colors";

const ActivityRow = (props) => {
    const [open, setOpen] = useState(false);
    const { row } = props

    return (
      <>
        <TableRow
          key={row.datetime}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ marginTop: "15%" }}
            component="th"
            scope="row"
          >
            <KeyboardArrowDownIcon />
          </IconButton>
          <TableCell align="right">{row.datetime}</TableCell>
          <TableCell align="right">{row.amount}</TableCell>
          { row.buyOrSell === "Buy"
            ? <TableCell align="right" style={{color: teal[500]}}>{row.buyOrSell}</TableCell>
            : <TableCell align="right" style={{color: pink[500]}}>{row.buyOrSell}</TableCell>
          }
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Market {row.buyOrSell}
                </Typography>
                <Typography variant="subtitle2" sx={{ marginTop: "-3%" }}>
                  {row.asset}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "5%",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body1">
                      Order Status: {row.status}
                    </Typography>
                    <Typography variant="body1">
                      Submitted: {row.datetime}
                    </Typography>
                    <Typography variant="body1">
                      Time in Force: Good for day
                    </Typography>
                    <Typography variant="body1">
                      Entered In: {row.filled_quantity.type}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "10%" }}>
                    <Typography variant="body1">
                      Entered Quantity: {row.filled_quantity.quantity}
                    </Typography>
                    <Typography variant="body1">
                      Filled: {row.filled}
                    </Typography>
                    <Typography variant="body1">
                      Filled Quantity: {row.filled_quantity.quantity} {row.filled_quantity.type} at {row.filled_quantity.price}
                    </Typography>
                    <Typography variant="body1">
                        Total Notional: ${row.amount}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
}

export default ActivityRow;