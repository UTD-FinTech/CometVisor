import { Box, Typography, Divider, Input, Table, TableContainer, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveBar } from "@nivo/bar";
import PositionRow from "./Components/PositionRow";

const portfolioAssetTypes = [
  {
    id: "Stocks",
    label: "Stocks",
    value: 218.78,
    color: "rgba(0, 150, 136, 1)",
  },
  {
    id: "Options",
    label: "Options",
    value: 93.28,
    color: "#3f51b5",
  },
  {
    id: "Cash",
    label: "Cash",
    value: 20.43,
    color: "rgba(96, 125, 139, 1)",
  },
];

const portfolioIndustries = [
  {
    Category: "Other",
    Amount: "9",
  },
  {
    Category: "Pharmaceuticals",
    Amount: "6",
  },
  {
    Category: "Industrials",
    Amount: "13",
  },
  {
    Category: "SPAC",
    Amount: "18",
  },
  {
    Category: "Retail",
    Amount: "12",
  },
  {
    Category: "Technology",
    Amount: "24",
  },
];

const portfolioAssets = [
  {
    Name: "Advanced Micro Devices",
    Ticker: "AMD",
    CurrentVal: 155.0,
    DailyMove: 3.68,
    PositionGrowth: 55,
    Quantity: 4,
    AvgPrice: 126.34,
    PortfolioDiversity: 12,
    AboutInfo: {
      Summary:
        "Advanced Micro Devices Inc. engages in the provision of semiconductor businesses. It operates through the following segments: Computing & Graphics, and Enterprise, Embedded and Semi-Custom.",
      CEO: "Lisa T. Su",
      Founded: "1969",
      Employees: "12,600",
      Headquarters: "Santa Clara, California",
    },
    large_portfolio_data: [
      { date: "Nov 10, 2020", price: "77.99" },
      { date: "Nov 11, 2020", price: "81.28" },
      { date: "Nov 12, 2020", price: "81.84" },
      { date: "Nov 13, 2020", price: "81.43" },
      { date: "Nov 16, 2020", price: "83.73" },
      { date: "Nov 17, 2020", price: "83.36" },
      { date: "Nov 18, 2020", price: "82.54" },
      { date: "Nov 19, 2020", price: "85.54" },
      { date: "Nov 20, 2020", price: "84.64" },
      { date: "Nov 23, 2020", price: "85.31" },
      { date: "Nov 24, 2020", price: "85.07" },
      { date: "Nov 25, 2020", price: "86.71" },
      { date: "Nov 27, 2020", price: "87.19" },
      { date: "Nov 30, 2020", price: "92.66" },
      { date: "Dec 01, 2020", price: "92.63" },
      { date: "Dec 02, 2020", price: "93.74" },
      { date: "Dec 03, 2020", price: "92.31" },
      { date: "Dec 04, 2020", price: "94.04" },
      { date: "Dec 07, 2020", price: "94.07" },
      { date: "Dec 08, 2020", price: "92.92" },
      { date: "Dec 09, 2020", price: "89.83" },
      { date: "Dec 10, 2020", price: "91.66" },
      { date: "Dec 11, 2020", price: "91.65" },
      { date: "Dec 14, 2020", price: "94.78" },
      { date: "Dec 15, 2020", price: "97.12" },
      { date: "Dec 16, 2020", price: "96.85" },
      { date: "Dec 17, 2020", price: "96.84" },
      { date: "Dec 18, 2020", price: "95.92" },
      { date: "Dec 21, 2020", price: "93.23" },
      { date: "Dec 22, 2020", price: "93.16" },
      { date: "Dec 23, 2020", price: "91.55" },
      { date: "Dec 24, 2020", price: "91.81" },
      { date: "Dec 28, 2020", price: "91.60" },
      { date: "Dec 29, 2020", price: "90.62" },
      { date: "Dec 30, 2020", price: "92.29" },
      { date: "Dec 31, 2020", price: "91.71" },
      { date: "Jan 04, 2021", price: "92.30" },
      { date: "Jan 05, 2021", price: "92.77" },
      { date: "Jan 06, 2021", price: "90.33" },
      { date: "Jan 07, 2021", price: "95.16" },
      { date: "Jan 08, 2021", price: "94.58" },
      { date: "Jan 11, 2021", price: "97.25" },
      { date: "Jan 12, 2021", price: "95.36" },
      { date: "Jan 13, 2021", price: "91.78" },
      { date: "Jan 14, 2021", price: "90.79" },
      { date: "Jan 15, 2021", price: "88.21" },
      { date: "Jan 19, 2021", price: "89.45" },
      { date: "Jan 20, 2021", price: "88.75" },
      { date: "Jan 21, 2021", price: "91.53" },
      { date: "Jan 22, 2021", price: "92.79" },
      { date: "Jan 25, 2021", price: "94.13" },
      { date: "Jan 26, 2021", price: "94.71" },
      { date: "Jan 27, 2021", price: "88.84" },
      { date: "Jan 28, 2021", price: "87.52" },
      { date: "Jan 29, 2021", price: "85.64" },
      { date: "Feb 01, 2021", price: "87.66" },
      { date: "Feb 02, 2021", price: "88.86" },
      { date: "Feb 03, 2021", price: "87.89" },
      { date: "Feb 04, 2021", price: "87.84" },
      { date: "Feb 05, 2021", price: "87.90" },
      { date: "Feb 08, 2021", price: "91.47" },
      { date: "Feb 09, 2021", price: "90.91" },
      { date: "Feb 10, 2021", price: "92.35" },
      { date: "Feb 11, 2021", price: "92.66" },
      { date: "Feb 12, 2021", price: "93.77" },
      { date: "Feb 16, 2021", price: "91.46" },
      { date: "Feb 17, 2021", price: "89.94" },
      { date: "Feb 18, 2021", price: "88.64" },
      { date: "Feb 19, 2021", price: "89.58" },
      { date: "Feb 22, 2021", price: "85.37" },
      { date: "Feb 23, 2021", price: "84.74" },
      { date: "Feb 24, 2021", price: "86.94" },
      { date: "Feb 25, 2021", price: "82.42" },
      { date: "Feb 26, 2021", price: "84.51" },
      { date: "Mar 01, 2021", price: "86.39" },
      { date: "Mar 02, 2021", price: "84.13" },
      { date: "Mar 03, 2021", price: "80.86" },
      { date: "Mar 04, 2021", price: "77.75" },
      { date: "Mar 05, 2021", price: "78.52" },
      { date: "Mar 08, 2021", price: "73.96" },
      { date: "Mar 09, 2021", price: "78.53" },
      { date: "Mar 10, 2021", price: "77.52" },
      { date: "Mar 11, 2021", price: "81.23" },
      { date: "Mar 12, 2021", price: "81.05" },
      { date: "Mar 15, 2021", price: "82.50" },
      { date: "Mar 16, 2021", price: "82.75" },
      { date: "Mar 17, 2021", price: "82.63" },
      { date: "Mar 18, 2021", price: "78.12" },
      { date: "Mar 19, 2021", price: "79.06" },
      { date: "Mar 22, 2021", price: "80.30" },
      { date: "Mar 23, 2021", price: "78.38" },
      { date: "Mar 24, 2021", price: "76.48" },
      { date: "Mar 25, 2021", price: "76.22" },
      { date: "Mar 26, 2021", price: "77.41" },
      { date: "Mar 29, 2021", price: "77.14" },
      { date: "Mar 30, 2021", price: "76.00" },
      { date: "Mar 31, 2021", price: "78.50" },
      { date: "Apr 01, 2021", price: "81.09" },
      { date: "Apr 05, 2021", price: "81.43" },
      { date: "Apr 06, 2021", price: "81.44" },
      { date: "Apr 07, 2021", price: "82.20" },
      { date: "Apr 08, 2021", price: "83.35" },
      { date: "Apr 09, 2021", price: "82.76" },
      { date: "Apr 12, 2021", price: "78.58" },
      { date: "Apr 13, 2021", price: "80.19" },
      { date: "Apr 14, 2021", price: "78.55" },
      { date: "Apr 15, 2021", price: "83.01" },
      { date: "Apr 16, 2021", price: "82.15" },
      { date: "Apr 19, 2021", price: "81.11" },
      { date: "Apr 20, 2021", price: "79.27" },
      { date: "Apr 21, 2021", price: "81.61" },
      { date: "Apr 22, 2021", price: "79.06" },
      { date: "Apr 23, 2021", price: "82.76" },
      { date: "Apr 26, 2021", price: "85.41" },
      { date: "Apr 27, 2021", price: "85.21" },
      { date: "Apr 28, 2021", price: "84.02" },
      { date: "Apr 29, 2021", price: "83.91" },
      { date: "Apr 30, 2021", price: "81.62" },
      { date: "May 03, 2021", price: "78.55" },
      { date: "May 04, 2021", price: "78.61" },
      { date: "May 05, 2021", price: "77.83" },
      { date: "May 06, 2021", price: "77.89" },
      { date: "May 07, 2021", price: "78.81" },
      { date: "May 10, 2021", price: "75.99" },
      { date: "May 11, 2021", price: "76.83" },
      { date: "May 12, 2021", price: "74.64" },
      { date: "May 13, 2021", price: "73.09" },
      { date: "May 14, 2021", price: "74.59" },
      { date: "May 17, 2021", price: "74.65" },
      { date: "May 18, 2021", price: "74.44" },
      { date: "May 19, 2021", price: "76.23" },
      { date: "May 20, 2021", price: "78.06" },
      { date: "May 21, 2021", price: "77.17" },
      { date: "May 24, 2021", price: "77.44" },
      { date: "May 25, 2021", price: "77.86" },
      { date: "May 26, 2021", price: "78.34" },
      { date: "May 27, 2021", price: "78.42" },
      { date: "May 28, 2021", price: "80.08" },
      { date: "Jun 01, 2021", price: "80.81" },
      { date: "Jun 02, 2021", price: "81.97" },
      { date: "Jun 03, 2021", price: "80.28" },
      { date: "Jun 04, 2021", price: "81.58" },
      { date: "Jun 07, 2021", price: "81.35" },
      { date: "Jun 08, 2021", price: "80.89" },
      { date: "Jun 09, 2021", price: "79.96" },
      { date: "Jun 10, 2021", price: "81.56" },
      { date: "Jun 11, 2021", price: "81.31" },
      { date: "Jun 14, 2021", price: "81.55" },
      { date: "Jun 15, 2021", price: "80.47" },
      { date: "Jun 16, 2021", price: "80.11" },
      { date: "Jun 17, 2021", price: "84.56" },
      { date: "Jun 18, 2021", price: "84.65" },
      { date: "Jun 21, 2021", price: "82.59" },
      { date: "Jun 22, 2021", price: "83.58" },
      { date: "Jun 23, 2021", price: "83.82" },
      { date: "Jun 24, 2021", price: "86.10" },
      { date: "Jun 25, 2021", price: "85.62" },
      { date: "Jun 28, 2021", price: "87.08" },
      { date: "Jun 29, 2021", price: "89.52" },
      { date: "Jun 30, 2021", price: "93.93" },
      { date: "Jul 01, 2021", price: "93.31" },
      { date: "Jul 02, 2021", price: "94.70" },
      { date: "Jul 06, 2021", price: "94.47" },
      { date: "Jul 07, 2021", price: "90.54" },
      { date: "Jul 08, 2021", price: "89.74" },
      { date: "Jul 09, 2021", price: "90.90" },
      { date: "Jul 12, 2021", price: "90.81" },
      { date: "Jul 13, 2021", price: "90.26" },
      { date: "Jul 14, 2021", price: "89.05" },
      { date: "Jul 15, 2021", price: "86.93" },
      { date: "Jul 16, 2021", price: "85.89" },
      { date: "Jul 19, 2021", price: "86.58" },
      { date: "Jul 20, 2021", price: "87.11" },
      { date: "Jul 21, 2021", price: "89.41" },
      { date: "Jul 22, 2021", price: "91.21" },
      { date: "Jul 23, 2021", price: "92.15" },
      { date: "Jul 26, 2021", price: "91.82" },
      { date: "Jul 27, 2021", price: "91.03" },
      { date: "Jul 28, 2021", price: "97.93" },
      { date: "Jul 29, 2021", price: "102.95" },
      { date: "Jul 30, 2021", price: "106.19" },
      { date: "Aug 02, 2021", price: "108.63" },
      { date: "Aug 03, 2021", price: "112.56" },
      { date: "Aug 04, 2021", price: "118.77" },
      { date: "Aug 05, 2021", price: "112.35" },
      { date: "Aug 06, 2021", price: "110.11" },
      { date: "Aug 09, 2021", price: "107.58" },
      { date: "Aug 10, 2021", price: "106.48" },
      { date: "Aug 11, 2021", price: "107.68" },
      { date: "Aug 12, 2021", price: "106.50" },
      { date: "Aug 13, 2021", price: "110.55" },
      { date: "Aug 16, 2021", price: "107.48" },
      { date: "Aug 17, 2021", price: "107.56" },
      { date: "Aug 18, 2021", price: "103.44" },
      { date: "Aug 19, 2021", price: "103.70" },
      { date: "Aug 20, 2021", price: "104.65" },
      { date: "Aug 23, 2021", price: "108.77" },
      { date: "Aug 24, 2021", price: "107.65" },
      { date: "Aug 25, 2021", price: "108.30" },
      { date: "Aug 26, 2021", price: "107.27" },
      { date: "Aug 27, 2021", price: "111.40" },
      { date: "Aug 30, 2021", price: "111.32" },
      { date: "Aug 31, 2021", price: "110.72" },
      { date: "Sep 01, 2021", price: "109.99" },
      { date: "Sep 02, 2021", price: "109.20" },
      { date: "Sep 03, 2021", price: "109.92" },
      { date: "Sep 07, 2021", price: "109.15" },
      { date: "Sep 08, 2021", price: "106.17" },
      { date: "Sep 09, 2021", price: "106.15" },
      { date: "Sep 10, 2021", price: "105.20" },
      { date: "Sep 13, 2021", price: "104.80" },
      { date: "Sep 14, 2021", price: "105.73" },
      { date: "Sep 15, 2021", price: "105.60" },
      { date: "Sep 16, 2021", price: "106.22" },
      { date: "Sep 17, 2021", price: "103.88" },
      { date: "Sep 20, 2021", price: "101.55" },
      { date: "Sep 21, 2021", price: "102.82" },
      { date: "Sep 22, 2021", price: "104.38" },
      { date: "Sep 23, 2021", price: "106.15" },
      { date: "Sep 24, 2021", price: "105.80" },
      { date: "Sep 27, 2021", price: "108.16" },
      { date: "Sep 28, 2021", price: "101.52" },
      { date: "Sep 29, 2021", price: "100.35" },
      { date: "Sep 30, 2021", price: "102.90" },
      { date: "Oct 01, 2021", price: "102.45" },
      { date: "Oct 04, 2021", price: "100.34" },
      { date: "Oct 05, 2021", price: "101.81" },
      { date: "Oct 06, 2021", price: "103.64" },
      { date: "Oct 07, 2021", price: "106.45" },
      { date: "Oct 08, 2021", price: "105.06" },
      { date: "Oct 11, 2021", price: "104.68" },
      { date: "Oct 12, 2021", price: "105.04" },
      { date: "Oct 13, 2021", price: "109.16" },
      { date: "Oct 14, 2021", price: "111.99" },
      { date: "Oct 15, 2021", price: "112.12" },
      { date: "Oct 18, 2021", price: "116.43" },
      { date: "Oct 19, 2021", price: "116.33" },
      { date: "Oct 20, 2021", price: "116.39" },
      { date: "Oct 21, 2021", price: "119.33" },
      { date: "Oct 22, 2021", price: "119.82" },
      { date: "Oct 25, 2021", price: "122.36" },
      { date: "Oct 26, 2021", price: "122.93" },
      { date: "Oct 27, 2021", price: "122.28" },
      { date: "Oct 28, 2021", price: "121.16" },
      { date: "Oct 29, 2021", price: "120.23" },
      { date: "Nov 01, 2021", price: "125.23" },
      { date: "Nov 02, 2021", price: "127.63" },
      { date: "Nov 03, 2021", price: "130.53" },
      { date: "Nov 04, 2021", price: "137.50" },
      { date: "Nov 05, 2021", price: "136.34" },
      { date: "Nov 08, 2021", price: "150.16" },
      { date: "Nov 09, 2021", price: "148.92" },
      { date: "Nov 10, 2021", price: "139.87" },
    ],
    DailyData: [
      { time: "8:00 AM", price: "326.45" },
      { time: "8:15 AM", price: "323.70" },
      { time: "8:30 AM", price: "317.25" },
      { time: "8:45 AM", price: "318.56" },
      { time: "9:00 AM", price: "320.45" },
      { time: "9:15 AM", price: "319.35" },
      { time: "9:30 AM", price: "325.67" },
      { time: "9:45 AM", price: "328.95" },
      { time: "10:00 AM", price: "330.12" },
      { time: "10:15 AM", price: "329.54" },
      { time: "10:30 AM", price: "329.19" },
      { time: "10:45 AM", price: "327.40" },
      { time: "11:00 AM", price: "333.33" },
      { time: "11:15 AM", price: "331.87" },
      { time: "11:30 AM", price: "332.94" },
      { time: "11:45 AM", price: "326.89" },
      { time: "12:00 PM", price: "332.49" },
    ],
  },
  {
    Name: "NIO",
    Ticker: "NIO",
    CurrentVal: 39.76,
    DailyMove: -1.43,
    PositionGrowth: 23,
    Quantity: 10,
    AvgPrice: 51.36,
    PortfolioDiversity: 34,
    AboutInfo: {
      Summary:
        "NIO, Inc. (China) is a holding company which engages in the design, manafacture, and sale of electric vehicles. Its products include the EP9 supercar and the ES8 7-seater SUV.",
      CEO: "Bin Li",
      Founded: "2014",
      Employees: "-",
      Headquarters: "Jiading, Shanghai",
    },
    large_portfolio_data: [
      { date: "Nov 10, 2020", price: "41.55" },
      { date: "Nov 11, 2020", price: "43.08" },
      { date: "Nov 12, 2020", price: "48.30" },
      { date: "Nov 13, 2020", price: "44.56" },
      { date: "Nov 16, 2020", price: "45.58" },
      { date: "Nov 17, 2020", price: "46.59" },
      { date: "Nov 18, 2020", price: "45.06" },
      { date: "Nov 19, 2020", price: "48.45" },
      { date: "Nov 20, 2020", price: "49.25" },
      { date: "Nov 23, 2020", price: "55.38" },
      { date: "Nov 24, 2020", price: "53.51" },
      { date: "Nov 25, 2020", price: "53.69" },
      { date: "Nov 27, 2020", price: "54.00" },
      { date: "Nov 30, 2020", price: "50.53" },
      { date: "Dec 01, 2020", price: "45.36" },
      { date: "Dec 02, 2020", price: "47.98" },
      { date: "Dec 03, 2020", price: "45.35" },
      { date: "Dec 04, 2020", price: "43.04" },
      { date: "Dec 07, 2020", price: "45.11" },
      { date: "Dec 08, 2020", price: "46.56" },
      { date: "Dec 09, 2020", price: "44.01" },
      { date: "Dec 10, 2020", price: "45.22" },
      { date: "Dec 11, 2020", price: "41.98" },
      { date: "Dec 14, 2020", price: "40.98" },
      { date: "Dec 15, 2020", price: "43.50" },
      { date: "Dec 16, 2020", price: "44.67" },
      { date: "Dec 17, 2020", price: "46.00" },
      { date: "Dec 18, 2020", price: "46.72" },
      { date: "Dec 21, 2020", price: "48.95" },
      { date: "Dec 22, 2020", price: "47.58" },
      { date: "Dec 23, 2020", price: "47.01" },
      { date: "Dec 24, 2020", price: "45.77" },
      { date: "Dec 28, 2020", price: "44.06" },
      { date: "Dec 29, 2020", price: "46.14" },
      { date: "Dec 30, 2020", price: "48.38" },
      { date: "Dec 31, 2020", price: "48.74" },
      { date: "Jan 04, 2021", price: "53.49" },
      { date: "Jan 05, 2021", price: "53.20" },
      { date: "Jan 06, 2021", price: "50.50" },
      { date: "Jan 07, 2021", price: "54.28" },
      { date: "Jan 08, 2021", price: "58.92" },
      { date: "Jan 11, 2021", price: "62.70" },
      { date: "Jan 12, 2021", price: "62.04" },
      { date: "Jan 13, 2021", price: "62.15" },
      { date: "Jan 14, 2021", price: "60.87" },
      { date: "Jan 15, 2021", price: "56.27" },
      { date: "Jan 19, 2021", price: "58.44" },
      { date: "Jan 20, 2021", price: "57.71" },
      { date: "Jan 21, 2021", price: "58.34" },
      { date: "Jan 22, 2021", price: "61.95" },
      { date: "Jan 25, 2021", price: "59.99" },
      { date: "Jan 26, 2021", price: "60.31" },
      { date: "Jan 27, 2021", price: "57.15" },
      { date: "Jan 28, 2021", price: "58.37" },
      { date: "Jan 29, 2021", price: "57.00" },
      { date: "Feb 01, 2021", price: "56.99" },
      { date: "Feb 02, 2021", price: "55.77" },
      { date: "Feb 03, 2021", price: "57.98" },
      { date: "Feb 04, 2021", price: "57.60" },
      { date: "Feb 05, 2021", price: "56.67" },
      { date: "Feb 08, 2021", price: "59.07" },
      { date: "Feb 09, 2021", price: "62.84" },
      { date: "Feb 10, 2021", price: "61.26" },
      { date: "Feb 11, 2021", price: "60.27" },
      { date: "Feb 12, 2021", price: "59.85" },
      { date: "Feb 16, 2021", price: "59.23" },
      { date: "Feb 17, 2021", price: "57.32" },
      { date: "Feb 18, 2021", price: "54.43" },
      { date: "Feb 19, 2021", price: "55.04" },
      { date: "Feb 22, 2021", price: "50.68" },
      { date: "Feb 23, 2021", price: "49.11" },
      { date: "Feb 24, 2021", price: "51.86" },
      { date: "Feb 25, 2021", price: "46.81" },
      { date: "Feb 26, 2021", price: "45.78" },
      { date: "Mar 01, 2021", price: "49.76" },
      { date: "Mar 02, 2021", price: "43.29" },
      { date: "Mar 03, 2021", price: "41.53" },
      { date: "Mar 04, 2021", price: "39.28" },
      { date: "Mar 05, 2021", price: "38.11" },
      { date: "Mar 08, 2021", price: "35.21" },
      { date: "Mar 09, 2021", price: "41.35" },
      { date: "Mar 10, 2021", price: "41.32" },
      { date: "Mar 11, 2021", price: "46.03" },
      { date: "Mar 12, 2021", price: "45.50" },
      { date: "Mar 15, 2021", price: "44.93" },
      { date: "Mar 16, 2021", price: "43.68" },
      { date: "Mar 17, 2021", price: "44.76" },
      { date: "Mar 18, 2021", price: "41.63" },
      { date: "Mar 19, 2021", price: "43.35" },
      { date: "Mar 22, 2021", price: "42.94" },
      { date: "Mar 23, 2021", price: "41.18" },
      { date: "Mar 24, 2021", price: "36.96" },
      { date: "Mar 25, 2021", price: "37.94" },
      { date: "Mar 26, 2021", price: "36.13" },
      { date: "Mar 29, 2021", price: "35.51" },
      { date: "Mar 30, 2021", price: "37.55" },
      { date: "Mar 31, 2021", price: "38.98" },
      { date: "Apr 01, 2021", price: "39.66" },
      { date: "Apr 05, 2021", price: "39.31" },
      { date: "Apr 06, 2021", price: "40.00" },
      { date: "Apr 07, 2021", price: "37.27" },
      { date: "Apr 08, 2021", price: "38.70" },
      { date: "Apr 09, 2021", price: "38.12" },
      { date: "Apr 12, 2021", price: "37.14" },
      { date: "Apr 13, 2021", price: "38.48" },
      { date: "Apr 14, 2021", price: "37.02" },
      { date: "Apr 15, 2021", price: "35.66" },
      { date: "Apr 16, 2021", price: "36.09" },
      { date: "Apr 19, 2021", price: "36.78" },
      { date: "Apr 20, 2021", price: "36.93" },
      { date: "Apr 21, 2021", price: "38.90" },
      { date: "Apr 22, 2021", price: "39.57" },
      { date: "Apr 23, 2021", price: "41.08" },
      { date: "Apr 26, 2021", price: "42.62" },
      { date: "Apr 27, 2021", price: "41.21" },
      { date: "Apr 28, 2021", price: "41.19" },
      { date: "Apr 29, 2021", price: "38.99" },
      { date: "Apr 30, 2021", price: "39.84" },
      { date: "May 03, 2021", price: "39.54" },
      { date: "May 04, 2021", price: "37.93" },
      { date: "May 05, 2021", price: "37.71" },
      { date: "May 06, 2021", price: "36.68" },
      { date: "May 07, 2021", price: "36.94" },
      { date: "May 10, 2021", price: "34.33" },
      { date: "May 11, 2021", price: "34.87" },
      { date: "May 12, 2021", price: "33.68" },
      { date: "May 13, 2021", price: "31.22" },
      { date: "May 14, 2021", price: "33.42" },
      { date: "May 17, 2021", price: "33.81" },
      { date: "May 18, 2021", price: "34.19" },
      { date: "May 19, 2021", price: "33.46" },
      { date: "May 20, 2021", price: "34.33" },
      { date: "May 21, 2021", price: "34.06" },
      { date: "May 24, 2021", price: "35.89" },
      { date: "May 25, 2021", price: "36.07" },
      { date: "May 26, 2021", price: "37.76" },
      { date: "May 27, 2021", price: "38.91" },
      { date: "May 28, 2021", price: "38.62" },
      { date: "Jun 01, 2021", price: "42.34" },
      { date: "Jun 02, 2021", price: "41.16" },
      { date: "Jun 03, 2021", price: "40.90" },
      { date: "Jun 04, 2021", price: "41.94" },
      { date: "Jun 07, 2021", price: "43.68" },
      { date: "Jun 08, 2021", price: "43.56" },
      { date: "Jun 09, 2021", price: "42.74" },
      { date: "Jun 10, 2021", price: "42.76" },
      { date: "Jun 11, 2021", price: "45.68" },
      { date: "Jun 14, 2021", price: "46.55" },
      { date: "Jun 15, 2021", price: "45.15" },
      { date: "Jun 16, 2021", price: "45.02" },
      { date: "Jun 17, 2021", price: "47.36" },
      { date: "Jun 18, 2021", price: "46.91" },
      { date: "Jun 21, 2021", price: "46.51" },
      { date: "Jun 22, 2021", price: "44.10" },
      { date: "Jun 23, 2021", price: "45.41" },
      { date: "Jun 24, 2021", price: "45.46" },
      { date: "Jun 25, 2021", price: "45.07" },
      { date: "Jun 28, 2021", price: "49.40" },
      { date: "Jun 29, 2021", price: "50.34" },
      { date: "Jun 30, 2021", price: "53.20" },
      { date: "Jul 01, 2021", price: "50.90" },
      { date: "Jul 02, 2021", price: "50.40" },
      { date: "Jul 06, 2021", price: "50.29" },
      { date: "Jul 07, 2021", price: "46.04" },
      { date: "Jul 08, 2021", price: "45.60" },
      { date: "Jul 09, 2021", price: "45.53" },
      { date: "Jul 12, 2021", price: "46.34" },
      { date: "Jul 13, 2021", price: "44.96" },
      { date: "Jul 14, 2021", price: "43.05" },
      { date: "Jul 15, 2021", price: "43.68" },
      { date: "Jul 16, 2021", price: "42.80" },
      { date: "Jul 19, 2021", price: "43.35" },
      { date: "Jul 20, 2021", price: "44.17" },
      { date: "Jul 21, 2021", price: "46.77" },
      { date: "Jul 22, 2021", price: "46.07" },
      { date: "Jul 23, 2021", price: "43.99" },
      { date: "Jul 26, 2021", price: "43.17" },
      { date: "Jul 27, 2021", price: "39.36" },
      { date: "Jul 28, 2021", price: "41.84" },
      { date: "Jul 29, 2021", price: "42.62" },
      { date: "Jul 30, 2021", price: "44.68" },
      { date: "Aug 02, 2021", price: "45.85" },
      { date: "Aug 03, 2021", price: "44.57" },
      { date: "Aug 04, 2021", price: "45.09" },
      { date: "Aug 05, 2021", price: "45.60" },
      { date: "Aug 06, 2021", price: "43.84" },
      { date: "Aug 09, 2021", price: "45.21" },
      { date: "Aug 10, 2021", price: "44.22" },
      { date: "Aug 11, 2021", price: "43.97" },
      { date: "Aug 12, 2021", price: "42.47" },
      { date: "Aug 13, 2021", price: "41.03" },
      { date: "Aug 16, 2021", price: "38.62" },
      { date: "Aug 17, 2021", price: "38.10" },
      { date: "Aug 18, 2021", price: "38.86" },
      { date: "Aug 19, 2021", price: "36.29" },
      { date: "Aug 20, 2021", price: "36.92" },
      { date: "Aug 23, 2021", price: "38.17" },
      { date: "Aug 24, 2021", price: "38.94" },
      { date: "Aug 25, 2021", price: "38.95" },
      { date: "Aug 26, 2021", price: "38.26" },
      { date: "Aug 27, 2021", price: "38.05" },
      { date: "Aug 30, 2021", price: "37.80" },
      { date: "Aug 31, 2021", price: "39.31" },
      { date: "Sep 01, 2021", price: "39.08" },
      { date: "Sep 02, 2021", price: "40.35" },
      { date: "Sep 03, 2021", price: "40.37" },
      { date: "Sep 07, 2021", price: "40.59" },
      { date: "Sep 08, 2021", price: "38.14" },
      { date: "Sep 09, 2021", price: "38.45" },
      { date: "Sep 10, 2021", price: "37.98" },
      { date: "Sep 13, 2021", price: "38.39" },
      { date: "Sep 14, 2021", price: "37.89" },
      { date: "Sep 15, 2021", price: "38.03" },
      { date: "Sep 16, 2021", price: "37.09" },
      { date: "Sep 17, 2021", price: "37.51" },
      { date: "Sep 20, 2021", price: "35.17" },
      { date: "Sep 21, 2021", price: "34.90" },
      { date: "Sep 22, 2021", price: "35.70" },
      { date: "Sep 23, 2021", price: "36.01" },
      { date: "Sep 24, 2021", price: "35.38" },
      { date: "Sep 27, 2021", price: "36.77" },
      { date: "Sep 28, 2021", price: "35.05" },
      { date: "Sep 29, 2021", price: "35.13" },
      { date: "Sep 30, 2021", price: "35.63" },
      { date: "Oct 01, 2021", price: "35.38" },
      { date: "Oct 04, 2021", price: "33.40" },
      { date: "Oct 05, 2021", price: "33.87" },
      { date: "Oct 06, 2021", price: "33.66" },
      { date: "Oct 07, 2021", price: "35.99" },
      { date: "Oct 08, 2021", price: "35.83" },
      { date: "Oct 11, 2021", price: "35.64" },
      { date: "Oct 12, 2021", price: "35.51" },
      { date: "Oct 13, 2021", price: "36.24" },
      { date: "Oct 14, 2021", price: "36.28" },
      { date: "Oct 15, 2021", price: "37.71" },
      { date: "Oct 18, 2021", price: "39.61" },
      { date: "Oct 19, 2021", price: "40.03" },
      { date: "Oct 20, 2021", price: "39.78" },
      { date: "Oct 21, 2021", price: "39.97" },
      { date: "Oct 22, 2021", price: "38.88" },
      { date: "Oct 25, 2021", price: "41.27" },
      { date: "Oct 26, 2021", price: "40.47" },
      { date: "Oct 27, 2021", price: "39.31" },
      { date: "Oct 28, 2021", price: "40.79" },
      { date: "Oct 29, 2021", price: "39.41" },
      { date: "Nov 01, 2021", price: "40.84" },
      { date: "Nov 02, 2021", price: "41.30" },
      { date: "Nov 03, 2021", price: "41.50" },
      { date: "Nov 04, 2021", price: "43.12" },
      { date: "Nov 05, 2021", price: "42.29" },
      { date: "Nov 08, 2021", price: "43.20" },
      { date: "Nov 09, 2021", price: "40.64" },
      { date: "Nov 10, 2021", price: "39.55" },
    ],
    DailyData: [
      { time: "8:00 AM", price: "326.45" },
      { time: "8:15 AM", price: "323.70" },
      { time: "8:30 AM", price: "317.25" },
      { time: "8:45 AM", price: "318.56" },
      { time: "9:00 AM", price: "320.45" },
      { time: "9:15 AM", price: "319.35" },
      { time: "9:30 AM", price: "325.67" },
      { time: "9:45 AM", price: "328.95" },
      { time: "10:00 AM", price: "330.12" },
      { time: "10:15 AM", price: "329.54" },
      { time: "10:30 AM", price: "329.19" },
      { time: "10:45 AM", price: "327.40" },
      { time: "11:00 AM", price: "333.33" },
      { time: "11:15 AM", price: "331.87" },
      { time: "11:30 AM", price: "332.94" },
      { time: "11:45 AM", price: "326.89" },
      { time: "12:00 PM", price: "332.49" },
    ],
  },
  {
    Name: "Meta Platforms",
    Ticker: "FB",
    CurrentVal: 333.4,
    DailyMove: 7.94,
    PositionGrowth: 487.88,
    Quantity: 4,
    AvgPrice: 170.84,
    PortfolioDiversity: 54,
    AboutInfo: {
      Summary:
        "Meta Platforms Inc. (formerly known as Facebook, Inc.) operates as a global social technology company. The company engages in the development of social media applications as well as virutal and augmented reality products.",
      CEO: "Mark Elliot Zuckerberg",
      Founded: "2004",
      Employees: "58,604",
      Headquarters: "Menlo Park, California",
    },
    large_portfolio_data: [
      { date: "Nov 10, 2020", price: "272.43" },
      { date: "Nov 11, 2020", price: "276.48" },
      { date: "Nov 12, 2020", price: "275.08" },
      { date: "Nov 13, 2020", price: "276.95" },
      { date: "Nov 16, 2020", price: "278.96" },
      { date: "Nov 17, 2020", price: "275.00" },
      { date: "Nov 18, 2020", price: "271.97" },
      { date: "Nov 19, 2020", price: "272.94" },
      { date: "Nov 20, 2020", price: "269.70" },
      { date: "Nov 23, 2020", price: "268.43" },
      { date: "Nov 24, 2020", price: "276.92" },
      { date: "Nov 25, 2020", price: "275.59" },
      { date: "Nov 27, 2020", price: "277.81" },
      { date: "Nov 30, 2020", price: "276.97" },
      { date: "Dec 01, 2020", price: "286.55" },
      { date: "Dec 02, 2020", price: "287.52" },
      { date: "Dec 03, 2020", price: "281.85" },
      { date: "Dec 04, 2020", price: "279.70" },
      { date: "Dec 07, 2020", price: "285.58" },
      { date: "Dec 08, 2020", price: "283.40" },
      { date: "Dec 09, 2020", price: "277.92" },
      { date: "Dec 10, 2020", price: "277.12" },
      { date: "Dec 11, 2020", price: "273.55" },
      { date: "Dec 14, 2020", price: "274.19" },
      { date: "Dec 15, 2020", price: "275.55" },
      { date: "Dec 16, 2020", price: "275.67" },
      { date: "Dec 17, 2020", price: "274.48" },
      { date: "Dec 18, 2020", price: "276.40" },
      { date: "Dec 21, 2020", price: "272.79" },
      { date: "Dec 22, 2020", price: "267.09" },
      { date: "Dec 23, 2020", price: "268.11" },
      { date: "Dec 24, 2020", price: "267.40" },
      { date: "Dec 28, 2020", price: "277.00" },
      { date: "Dec 29, 2020", price: "276.78" },
      { date: "Dec 30, 2020", price: "271.87" },
      { date: "Dec 31, 2020", price: "273.16" },
      { date: "Jan 04, 2021", price: "268.94" },
      { date: "Jan 05, 2021", price: "270.97" },
      { date: "Jan 06, 2021", price: "263.31" },
      { date: "Jan 07, 2021", price: "268.74" },
      { date: "Jan 08, 2021", price: "267.57" },
      { date: "Jan 11, 2021", price: "256.84" },
      { date: "Jan 12, 2021", price: "251.09" },
      { date: "Jan 13, 2021", price: "251.64" },
      { date: "Jan 14, 2021", price: "245.64" },
      { date: "Jan 15, 2021", price: "251.36" },
      { date: "Jan 19, 2021", price: "261.10" },
      { date: "Jan 20, 2021", price: "267.48" },
      { date: "Jan 21, 2021", price: "272.87" },
      { date: "Jan 22, 2021", price: "274.50" },
      { date: "Jan 25, 2021", price: "278.01" },
      { date: "Jan 26, 2021", price: "282.05" },
      { date: "Jan 27, 2021", price: "272.14" },
      { date: "Jan 28, 2021", price: "265.00" },
      { date: "Jan 29, 2021", price: "258.33" },
      { date: "Feb 01, 2021", price: "262.01" },
      { date: "Feb 02, 2021", price: "267.08" },
      { date: "Feb 03, 2021", price: "266.65" },
      { date: "Feb 04, 2021", price: "266.49" },
      { date: "Feb 05, 2021", price: "268.10" },
      { date: "Feb 08, 2021", price: "266.58" },
      { date: "Feb 09, 2021", price: "269.45" },
      { date: "Feb 10, 2021", price: "271.87" },
      { date: "Feb 11, 2021", price: "270.39" },
      { date: "Feb 12, 2021", price: "270.50" },
      { date: "Feb 16, 2021", price: "273.97" },
      { date: "Feb 17, 2021", price: "273.57" },
      { date: "Feb 18, 2021", price: "269.39" },
      { date: "Feb 19, 2021", price: "261.56" },
      { date: "Feb 22, 2021", price: "260.33" },
      { date: "Feb 23, 2021", price: "265.86" },
      { date: "Feb 24, 2021", price: "264.31" },
      { date: "Feb 25, 2021", price: "254.69" },
      { date: "Feb 26, 2021", price: "257.62" },
      { date: "Mar 01, 2021", price: "264.91" },
      { date: "Mar 02, 2021", price: "259.00" },
      { date: "Mar 03, 2021", price: "255.41" },
      { date: "Mar 04, 2021", price: "257.64" },
      { date: "Mar 05, 2021", price: "264.28" },
      { date: "Mar 08, 2021", price: "255.31" },
      { date: "Mar 09, 2021", price: "265.74" },
      { date: "Mar 10, 2021", price: "264.90" },
      { date: "Mar 11, 2021", price: "273.88" },
      { date: "Mar 12, 2021", price: "268.40" },
      { date: "Mar 15, 2021", price: "273.75" },
      { date: "Mar 16, 2021", price: "279.28" },
      { date: "Mar 17, 2021", price: "284.01" },
      { date: "Mar 18, 2021", price: "278.62" },
      { date: "Mar 19, 2021", price: "290.11" },
      { date: "Mar 22, 2021", price: "293.54" },
      { date: "Mar 23, 2021", price: "290.63" },
      { date: "Mar 24, 2021", price: "282.14" },
      { date: "Mar 25, 2021", price: "278.74" },
      { date: "Mar 26, 2021", price: "283.02" },
      { date: "Mar 29, 2021", price: "290.82" },
      { date: "Mar 30, 2021", price: "288.00" },
      { date: "Mar 31, 2021", price: "294.53" },
      { date: "Apr 01, 2021", price: "298.66" },
      { date: "Apr 05, 2021", price: "308.91" },
      { date: "Apr 06, 2021", price: "306.26" },
      { date: "Apr 07, 2021", price: "313.09" },
      { date: "Apr 08, 2021", price: "313.02" },
      { date: "Apr 09, 2021", price: "312.46" },
      { date: "Apr 12, 2021", price: "311.54" },
      { date: "Apr 13, 2021", price: "309.76" },
      { date: "Apr 14, 2021", price: "302.82" },
      { date: "Apr 15, 2021", price: "307.82" },
      { date: "Apr 16, 2021", price: "306.18" },
      { date: "Apr 19, 2021", price: "302.24" },
      { date: "Apr 20, 2021", price: "302.65" },
      { date: "Apr 21, 2021", price: "301.47" },
      { date: "Apr 22, 2021", price: "296.52" },
      { date: "Apr 23, 2021", price: "301.13" },
      { date: "Apr 26, 2021", price: "303.04" },
      { date: "Apr 27, 2021", price: "303.57" },
      { date: "Apr 28, 2021", price: "307.10" },
      { date: "Apr 29, 2021", price: "329.51" },
      { date: "Apr 30, 2021", price: "325.08" },
      { date: "May 03, 2021", price: "322.58" },
      { date: "May 04, 2021", price: "318.36" },
      { date: "May 05, 2021", price: "315.02" },
      { date: "May 06, 2021", price: "320.02" },
      { date: "May 07, 2021", price: "319.08" },
      { date: "May 10, 2021", price: "305.97" },
      { date: "May 11, 2021", price: "306.53" },
      { date: "May 12, 2021", price: "302.55" },
      { date: "May 13, 2021", price: "305.26" },
      { date: "May 14, 2021", price: "315.94" },
      { date: "May 17, 2021", price: "315.46" },
      { date: "May 18, 2021", price: "309.96" },
      { date: "May 19, 2021", price: "313.59" },
      { date: "May 20, 2021", price: "318.61" },
      { date: "May 21, 2021", price: "316.23" },
      { date: "May 24, 2021", price: "324.63" },
      { date: "May 25, 2021", price: "327.79" },
      { date: "May 26, 2021", price: "327.66" },
      { date: "May 27, 2021", price: "332.75" },
      { date: "May 28, 2021", price: "328.73" },
      { date: "Jun 01, 2021", price: "329.13" },
      { date: "Jun 02, 2021", price: "329.15" },
      { date: "Jun 03, 2021", price: "326.04" },
      { date: "Jun 04, 2021", price: "330.35" },
      { date: "Jun 07, 2021", price: "336.58" },
      { date: "Jun 08, 2021", price: "333.68" },
      { date: "Jun 09, 2021", price: "330.25" },
      { date: "Jun 10, 2021", price: "332.46" },
      { date: "Jun 11, 2021", price: "331.26" },
      { date: "Jun 14, 2021", price: "336.77" },
      { date: "Jun 15, 2021", price: "336.75" },
      { date: "Jun 16, 2021", price: "331.08" },
      { date: "Jun 17, 2021", price: "336.51" },
      { date: "Jun 18, 2021", price: "329.66" },
      { date: "Jun 21, 2021", price: "332.29" },
      { date: "Jun 22, 2021", price: "339.03" },
      { date: "Jun 23, 2021", price: "340.59" },
      { date: "Jun 24, 2021", price: "343.18" },
      { date: "Jun 25, 2021", price: "341.37" },
      { date: "Jun 28, 2021", price: "355.64" },
      { date: "Jun 29, 2021", price: "351.89" },
      { date: "Jun 30, 2021", price: "347.71" },
      { date: "Jul 01, 2021", price: "354.39" },
      { date: "Jul 02, 2021", price: "354.70" },
      { date: "Jul 06, 2021", price: "352.78" },
      { date: "Jul 07, 2021", price: "350.49" },
      { date: "Jul 08, 2021", price: "345.65" },
      { date: "Jul 09, 2021", price: "350.42" },
      { date: "Jul 12, 2021", price: "353.16" },
      { date: "Jul 13, 2021", price: "352.09" },
      { date: "Jul 14, 2021", price: "347.63" },
      { date: "Jul 15, 2021", price: "344.46" },
      { date: "Jul 16, 2021", price: "341.16" },
      { date: "Jul 19, 2021", price: "336.95" },
      { date: "Jul 20, 2021", price: "341.66" },
      { date: "Jul 21, 2021", price: "346.23" },
      { date: "Jul 22, 2021", price: "351.19" },
      { date: "Jul 23, 2021", price: "369.79" },
      { date: "Jul 26, 2021", price: "372.46" },
      { date: "Jul 27, 2021", price: "367.81" },
      { date: "Jul 28, 2021", price: "373.28" },
      { date: "Jul 29, 2021", price: "358.32" },
      { date: "Jul 30, 2021", price: "356.30" },
      { date: "Aug 02, 2021", price: "351.95" },
      { date: "Aug 03, 2021", price: "351.24" },
      { date: "Aug 04, 2021", price: "358.92" },
      { date: "Aug 05, 2021", price: "362.97" },
      { date: "Aug 06, 2021", price: "363.51" },
      { date: "Aug 09, 2021", price: "361.61" },
      { date: "Aug 10, 2021", price: "361.13" },
      { date: "Aug 11, 2021", price: "359.96" },
      { date: "Aug 12, 2021", price: "362.65" },
      { date: "Aug 13, 2021", price: "363.18" },
      { date: "Aug 16, 2021", price: "366.56" },
      { date: "Aug 17, 2021", price: "358.45" },
      { date: "Aug 18, 2021", price: "355.45" },
      { date: "Aug 19, 2021", price: "355.12" },
      { date: "Aug 20, 2021", price: "359.37" },
      { date: "Aug 23, 2021", price: "363.35" },
      { date: "Aug 24, 2021", price: "365.51" },
      { date: "Aug 25, 2021", price: "368.39" },
      { date: "Aug 26, 2021", price: "364.38" },
      { date: "Aug 27, 2021", price: "372.63" },
      { date: "Aug 30, 2021", price: "380.66" },
      { date: "Aug 31, 2021", price: "379.38" },
      { date: "Sep 01, 2021", price: "382.05" },
      { date: "Sep 02, 2021", price: "375.28" },
      { date: "Sep 03, 2021", price: "376.26" },
      { date: "Sep 07, 2021", price: "382.18" },
      { date: "Sep 08, 2021", price: "377.57" },
      { date: "Sep 09, 2021", price: "378.00" },
      { date: "Sep 10, 2021", price: "378.69" },
      { date: "Sep 13, 2021", price: "376.51" },
      { date: "Sep 14, 2021", price: "376.53" },
      { date: "Sep 15, 2021", price: "373.92" },
      { date: "Sep 16, 2021", price: "373.06" },
      { date: "Sep 17, 2021", price: "364.72" },
      { date: "Sep 20, 2021", price: "355.70" },
      { date: "Sep 21, 2021", price: "357.48" },
      { date: "Sep 22, 2021", price: "343.21" },
      { date: "Sep 23, 2021", price: "345.96" },
      { date: "Sep 24, 2021", price: "352.96" },
      { date: "Sep 27, 2021", price: "353.58" },
      { date: "Sep 28, 2021", price: "340.65" },
      { date: "Sep 29, 2021", price: "339.61" },
      { date: "Sep 30, 2021", price: "339.39" },
      { date: "Oct 01, 2021", price: "343.01" },
      { date: "Oct 04, 2021", price: "326.23" },
      { date: "Oct 05, 2021", price: "332.96" },
      { date: "Oct 06, 2021", price: "333.64" },
      { date: "Oct 07, 2021", price: "329.22" },
      { date: "Oct 08, 2021", price: "330.05" },
      { date: "Oct 11, 2021", price: "325.45" },
      { date: "Oct 12, 2021", price: "323.77" },
      { date: "Oct 13, 2021", price: "324.54" },
      { date: "Oct 14, 2021", price: "328.53" },
      { date: "Oct 15, 2021", price: "324.76" },
      { date: "Oct 18, 2021", price: "335.34" },
      { date: "Oct 19, 2021", price: "339.99" },
      { date: "Oct 20, 2021", price: "340.78" },
      { date: "Oct 21, 2021", price: "341.88" },
      { date: "Oct 22, 2021", price: "324.61" },
      { date: "Oct 25, 2021", price: "328.69" },
      { date: "Oct 26, 2021", price: "315.81" },
      { date: "Oct 27, 2021", price: "312.22" },
      { date: "Oct 28, 2021", price: "316.92" },
      { date: "Oct 29, 2021", price: "323.57" },
      { date: "Nov 01, 2021", price: "329.98" },
      { date: "Nov 02, 2021", price: "328.08" },
      { date: "Nov 03, 2021", price: "331.62" },
      { date: "Nov 04, 2021", price: "335.85" },
      { date: "Nov 05, 2021", price: "341.13" },
      { date: "Nov 08, 2021", price: "338.62" },
      { date: "Nov 09, 2021", price: "335.37" },
      { date: "Nov 10, 2021", price: "327.64" },
    ],
    DailyData: [
      { time: "8:00 AM", price: "326.45" },
      { time: "8:15 AM", price: "323.70" },
      { time: "8:30 AM", price: "317.25" },
      { time: "8:45 AM", price: "318.56" },
      { time: "9:00 AM", price: "320.45" },
      { time: "9:15 AM", price: "319.35" },
      { time: "9:30 AM", price: "325.67" },
      { time: "9:45 AM", price: "328.95" },
      { time: "10:00 AM", price: "330.12" },
      { time: "10:15 AM", price: "329.54" },
      { time: "10:30 AM", price: "329.19" },
      { time: "10:45 AM", price: "327.40" },
      { time: "11:00 AM", price: "333.33" },
      { time: "11:15 AM", price: "331.87" },
      { time: "11:30 AM", price: "332.94" },
      { time: "11:45 AM", price: "326.89" },
      { time: "12:00 PM", price: "332.49" },
    ],
  },
];

const Research = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        marginTop: "5vh",
        marginRight: "5vw"
      }}
    >
      <Box
        id="accountCard"
        sx={{
          width: "70vw",
          height: "60vh",
          borderRadius: 10,
          border: 1,
          borderColor: "#e0f2f1",
          borderWidth: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginRight: "5%",
            marginLeft: "5%",
            marginTop: "3%",
            width: "90%",
          }}
        >
          <Typography
            variant="h4"
            sx={{ marginLeft: "5%", marginBottom: "2%" }}
          >
            Your Portfolio
          </Typography>
          <Divider orientation="horizontal" sx={{ width: "100%" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ height: "40vh", width: "30vw", marginLeft: "-3%" }}>
                <ResponsivePie
                  data={portfolioAssetTypes}
                  margin={{ top: 35, bottom: 20, left: 0 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  colors={[
                    "rgba(0, 150, 136, 1)",
                    "rgba(63, 81, 181, 1)",
                    "rgba(96, 125, 139, 1)",
                  ]}
                  activeOuterRadiusOffset={8}
                  enableArcLabels={false}
                  borderWidth={1}
                  defs={[
                    {
                      id: "dots",
                      type: "patternDots",
                      background: "inherit",
                      color: "rgba(255, 255, 255, 0.3)",
                      size: 4,
                      padding: 1,
                      stagger: true,
                    },
                    {
                      id: "lines",
                      type: "patternLines",
                      background: "inherit",
                      color: "rgba(255, 255, 255, 0.3)",
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                  ]}
                  fill={[
                    {
                      match: {
                        id: "stocks",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "c",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "go",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "python",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "scala",
                      },
                      id: "lines",
                    },
                    {
                      match: {
                        id: "lisp",
                      },
                      id: "lines",
                    },
                    {
                      match: {
                        id: "elixir",
                      },
                      id: "lines",
                    },
                    {
                      match: {
                        id: "javascript",
                      },
                      id: "lines",
                    },
                  ]}
                />
              </div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: -3,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      style={{
                        width: "1vh",
                        height: "1vh",
                        backgroundColor: "rgba(0, 150, 136, 1)",
                      }}
                    ></Box>
                    <Typography variant="subtitle2">
                      &nbsp;&nbsp;Stocks:&nbsp;&nbsp;&nbsp;&nbsp;$ &nbsp;
                    </Typography>
                    <Input
                      defaultValue={portfolioAssetTypes[0].value}
                      disabled
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      style={{
                        width: "1vh",
                        height: "1vh",
                        backgroundColor: "rgba(63, 81, 181, 1)",
                      }}
                    ></Box>
                    <Typography variant="subtitle2">
                      &nbsp;&nbsp;Options:&nbsp;&nbsp;$ &nbsp;
                    </Typography>
                    <Input
                      defaultValue={portfolioAssetTypes[1].value}
                      disabled
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      style={{
                        width: "1vh",
                        height: "1vh",
                        backgroundColor: "rgba(96, 125, 139, 1)",
                      }}
                    ></Box>
                    <Typography variant="subtitle2">
                      &nbsp;&nbsp;Cash:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
                      &nbsp;
                    </Typography>
                    <Input
                      defaultValue={portfolioAssetTypes[2].value}
                      disabled
                    />
                  </div>
                </div>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    marginLeft: "4%",
                    marginRight: "4%",
                    height: 100,
                    marginTop: 2,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    style={{ color: "grey", marginBottom: "-0.5vh" }}
                  >
                    Investment Strategy:
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#DF7D23" }}>
                    Moderate Risk
                  </Typography>
                </Box>
              </Box>
            </div>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{
                marginLeft: "4%",
                marginRight: "4%",
                marginTop: "2%",
                height: "90%",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Typography variant="h5">Industry Breakdown</Typography>
              <Divider orientation="horizontal" sx={{ width: "40%" }} />
              <div style={{ height: "40vh", width: "30vw" }}>
                <ResponsiveBar
                  data={portfolioIndustries}
                  keys={["Amount"]}
                  indexBy="Category"
                  margin={{ top: 0, bottom: 50, left: 100, right: 50 }}
                  padding={0.3}
                  layout="horizontal"
                  valueScale={{ type: "linear" }}
                  indexScale={{ type: "band", round: true }}
                  colors={[
                    "rgba(0, 150, 136, 1)",
                    "rgba(63, 81, 181, 1)",
                    "rgba(96, 125, 139, 1)",
                  ]}
                  defs={[
                    {
                      id: "dots",
                      type: "patternDots",
                      background: "inherit",
                      color: "#38bcb2",
                      size: 4,
                      padding: 1,
                      stagger: true,
                    },
                    {
                      id: "lines",
                      type: "patternLines",
                      background: "inherit",
                      color: "#eed312",
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                  ]}
                  fill={[
                    {
                      match: {
                        id: "fries",
                      },
                      id: "dots",
                    },
                    {
                      match: {
                        id: "sandwich",
                      },
                      id: "lines",
                    },
                  ]}
                  borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Allocation",
                    legendPosition: "middle",
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Box>
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
          marginTop: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginRight: "5%",
            marginLeft: "5%",
            marginTop: "3%",
            width: "90%",
          }}
        >
          <Typography
            variant="h4"
            sx={{ marginLeft: "5%", marginBottom: "2%" }}
          >
            Your Positions
          </Typography>
          <Divider orientation="horizontal" sx={{ width: "100%" }} />
          <TableContainer>
            <Table
              style={{
                minWidth: "100%",
                marginTop: "1%",
                marginBottom: "4%",
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ fontWeight: 700 }}>
                    Asset
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: 700 }}>
                    Current Price
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: 700 }}>
                    Position Growth
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: 700 }}>
                    Qty.
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: 700 }}>
                    Avg. Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {portfolioAssets.map((row) => (
                  <PositionRow key={row.name} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </div>
  );
};

export default Research;
