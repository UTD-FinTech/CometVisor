import { useState } from "react";
import { TableRow, IconButton, TableCell, Modal, Box, Typography, createTheme, ThemeProvider, ButtonGroup, Button, Divider } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { grey, teal, pink } from "@mui/material/colors";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ResponsiveLine } from "@nivo/line";
import "./PositionRow.css";

const theme = createTheme({
  palette: {
    positive: {
      main: teal[500],
    },
    negative: {
      main: pink[500],
    },
  },
});

const PositionRow = (props) => {
    const [showModal, setShowModal] = useState(false);
    const { row } = props;
    const [timeframe, setTimeframe] = useState("1D");
    
    const changeDaily = () => {
      setTimeframe("1D");
    };

    const changeWeekly = () => {
      setTimeframe("1W");
    };

    const changeMonthly = () => {
      setTimeframe("1M");
    };

    const changeThreeMonthly = () => {
      setTimeframe("3M");
    };

    const changeAnnualy = () => {
      setTimeframe("1Y");
    };

    const data = [];

    if (timeframe === "1D") {
      for (const dataPoint of row.DailyData) {
        console.log(dataPoint);
        data.push({
          x: dataPoint.time,
          y: parseFloat(dataPoint.price),
        });
      }
      console.log(data);
    } else {
      if (timeframe === "1W") {
        for (const dataPoint of row.large_portfolio_data.slice(
          row.large_portfolio_data.length - 8,
          row.large_portfolio_data.length
        )) {
          data.push({
            x: dataPoint.date,
            y: parseFloat(dataPoint.price),
          });
        }
      } else if (timeframe === "1M") {
        for (const dataPoint of row.large_portfolio_data.slice(
          row.large_portfolio_data.length - 31,
          row.large_portfolio_data.length
        )) {
          data.push({
            x: dataPoint.date,
            y: parseFloat(dataPoint.price),
          });
        }
      } else if (timeframe === "3M") {
        for (const dataPoint of row.large_portfolio_data.slice(
          row.large_portfolio_data.length - 93,
          row.large_portfolio_data.length
        )) {
          data.push({
            x: dataPoint.date,
            y: parseFloat(dataPoint.price),
          });
        }
      } else if (timeframe === "1Y") {
        for (const dataPoint of row.large_portfolio_data.slice(
          0,
          row.large_portfolio_data.length
        )) {
          data.push({
            x: dataPoint.date,
            y: parseFloat(dataPoint.price),
          });
        }
      }
    }

    const findMax = [];

    for (const dataPoint of data) {
      findMax.push(Math.round(dataPoint.y));
    }
    console.log(findMax);
    const valueMax = Math.max(...findMax);
    const graphMax = Math.ceil(valueMax * 1.01);
    console.log(graphMax);

    let positive = true;
    let color = teal[500];

    if (data[0].y > data[data.length - 1].y) {
      positive = false;
      color = pink[500];
    }

    return (
      <>
        <TableRow
          key={row.Ticker}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="left">{row.Ticker}</TableCell>
          <TableCell align="left">$&nbsp;{row.CurrentVal}</TableCell>
          <TableCell align="left">$&nbsp;{row.PositionGrowth}</TableCell>
          <TableCell align="left">{row.Quantity}</TableCell>
          <TableCell align="left">$&nbsp;{row.AvgPrice}</TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setShowModal(!showModal)}
            sx={{ marginTop: "15%" }}
            component="th"
            scope="row"
          >
            <MoreHorizIcon />
          </IconButton>
        </TableRow>
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ overflow: "scroll" }}
        >
          <Box
            sx={{
              position: "absolute",
              overflow: "scroll",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "70%",
              height: "70%",
              borderRadius: 10,
              bgcolor: grey[300],
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="subtitle1"
              component="h2"
              sx={{ color: grey[600] }}
            >
              {row.Ticker}
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{ mt: -1 }}
            >
              {row.Name}
            </Typography>
            <Typography id="modal-modal-description" variant="h3">
              ${row.CurrentVal}
            </Typography>
            <ThemeProvider theme={theme}>
              {positive === true ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "20vw",
                    marginTop: 0,
                  }}
                >
                  <ArrowDropUpIcon style={{ color: teal[500] }} />
                  <Typography variant="subtitle1" sx={{ color: teal[500] }}>
                    {Math.abs(data[0].y - data[data.length - 1].y).toFixed(2)} (
                    {(
                      ((data[data.length - 1].y - data[0].y) /
                        data[data.length - 1].y) *
                      100
                    ).toFixed(2)}
                    %)
                  </Typography>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "20vw",
                    marginTop: 0,
                  }}
                >
                  <ArrowDropDownIcon style={{ color: pink[500] }} />
                  <Typography variant="subtitle1" sx={{ color: pink[500] }}>
                    {Math.abs(data[data.length - 1].y - data[0].y).toFixed(2)} (
                    {(
                      ((data[data.length - 1].y - data[0].y) /
                        data[data.length - 1].y) *
                      100
                    ).toFixed(2)}
                    %)
                  </Typography>
                </div>
              )}
              <Box
                id="accountCard"
                sx={{
                  width: "70vw",
                  height: "50vh",
                  borderRadius: 10,
                  border: 1,
                  borderColor: "#e0f2f1",
                  borderWidth: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  mt: "3vh",
                }}
              >
                <ResponsiveLine
                  data={[
                    {
                      id: "Account",
                      color: "#009688",
                      data: data,
                    },
                  ]}
                  margin={{ right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: "point" }}
                  yScale={{
                    type: "linear",
                    min: "auto",
                    max: graphMax,
                  }}
                  colors={color}
                  yFormat=" >-.2f"
                  axisTop={null}
                  axisRight={null}
                  axisBottom={null}
                  axisLeft={null}
                  height={450}
                  curve="natural"
                  layers={["lines", "points", "mesh"]}
                  pointSize={1}
                  pointColor={{ theme: "background" }}
                  pointBorderWidth={1}
                  pointBorderColor={{ from: "serieColor" }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  legends={[
                    {
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemBackground: "rgba(0, 0, 0, .03)",
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                  ]}
                />
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row-reverse",
                  }}
                >
                  <ButtonGroup
                    variant="text"
                    aria-label="text button group"
                    color={positive ? "positive" : "negative"}
                    sx={{ marginRight: "2%", marginBottom: "5%" }}
                  >
                    <Button sx={{ color: color }} onClick={changeDaily}>
                      1D
                    </Button>
                    <Button sx={{ color: color }} onClick={changeWeekly}>
                      1W
                    </Button>
                    <Button sx={{ color: color }} onClick={changeMonthly}>
                      1M
                    </Button>
                    <Button sx={{ color: color }} onClick={changeThreeMonthly}>
                      3M
                    </Button>
                    <Button sx={{ color: color }} onClick={changeAnnualy}>
                      1Y
                    </Button>
                  </ButtonGroup>
                </div>
              </Box>
            </ThemeProvider>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "3vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <Typography variant="h6" sx={{ mb: "o.5vh" }}>
                  Your Position
                </Typography>
                <Divider
                  orientation="horizontal"
                  sx={{ width: "15%", mb: "0.5vh" }}
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "8%",
                    }}
                  >
                    <Typography variant="subtitle2">Shares</Typography>
                    <Typography variant="h6">{row.Quantity}</Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "8%",
                    }}
                  >
                    <Typography variant="subtitle2">Market Value</Typography>
                    <Typography variant="h6">
                      ${(row.Quantity * row.CurrentVal).toFixed(2)}
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "8%",
                    }}
                  >
                    <Typography variant="subtitle2">Average Cost</Typography>
                    <Typography variant="h6">${row.AvgPrice}</Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "8%",
                    }}
                  >
                    <Typography variant="subtitle2">
                      Portfolio Diversity
                    </Typography>
                    <Typography variant="h6">
                      {row.PortfolioDiversity}%
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: "3vh",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "0.5%",
                  }}
                >
                  <Typography variant="subtitle1">Today's Return</Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ justifySelf: "end", marginRight: "3%" }}
                  >
                    $
                    {Math.abs(
                      (row.DailyData[0].price -
                        row.DailyData[row.DailyData.length - 1].price) *
                        row.Quantity
                    ).toFixed(2)}{" "}
                    (
                    {(
                      ((row.DailyData[row.DailyData.length - 1].price -
                        row.DailyData[0].price) /
                        row.DailyData[row.DailyData.length - 1].price) *
                      100
                    ).toFixed(2)}
                    %)
                  </Typography>
                </div>
                <Divider
                  orientation="horizontal"
                  sx={{ width: "100%", mb: "0.5vh" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    height: "3vh",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="subtitle1">Total Return</Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ justifySelf: "end", marginRight: "3%" }}
                  >
                    $
                    {Math.abs(
                      (row.DailyData[row.DailyData.length - 1].price -
                        row.AvgPrice) *
                        row.Quantity
                    ).toFixed(2)}{" "}
                    (
                    {(
                      ((row.DailyData[row.DailyData.length - 1].price -
                        row.AvgPrice) /
                        row.AvgPrice) *
                      100
                    ).toFixed(2)}
                    %)
                  </Typography>
                </div>
                <Divider
                  orientation="horizontal"
                  sx={{ width: "100%", mb: "0.5vh" }}
                />
              </div>
              <Box
                sx={{
                  width: "45%",
                  marginLeft: "5%",
                  height: "100%",
                  marginTop: "0.5vh",
                  bgcolor: grey[400],
                  p: "2%",
                  borderRadius: 5,
                }}
              >
                <Typography variant="h5">About {row.Name}</Typography>
                <Typography variant="subtitle2">
                  {" "}
                  {row.AboutInfo.Summary}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Typography variant="subtitle2">CEO</Typography>
                    <Typography variant="h6">{row.AboutInfo.CEO}</Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Typography variant="subtitle2">Founded</Typography>
                    <Typography variant="h6">
                      {row.AboutInfo.Founded}
                    </Typography>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Typography variant="subtitle2">Employees</Typography>
                    <Typography variant="h6">{row.AboutInfo.Employees}</Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Typography variant="subtitle2">Headquarters</Typography>
                    <Typography variant="h6">
                      {row.AboutInfo.Headquarters}
                    </Typography>
                  </div>
                </div>
              </Box>
            </div>
          </Box>
        </Modal>
      </>
    );
}

export default PositionRow;