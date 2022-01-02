import { useState, useEffect } from "react";
import { Divider, Typography, Avatar } from "@mui/material";
import { Box } from "@mui/system";

const indices = [
  { name: "S&P 500", value: "$4,701.70" },
  { name: "Dow Jones", value: "$36,432.22" },
  { name: "Nasdaq", value: "$211.69" },
];

const daysOfTheWeek = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var today = new Date();
var day = daysOfTheWeek[today.getDay()];
var date = today.getDate();
var month = monthNames[today.getMonth()];
var year = today.getFullYear();

const ProfileBar = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((seconds) => ((seconds + 1) % 3));
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div
        style={{
          width: "100vw",
          height: "13vh",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Box
          sx={{
            width: "30vw",
            height: "9vh",
            marginTop: "2vh",
            marginRight: "4vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              alignItems: "end",
              justifyItems: "center",
            }}
          >
            <Typography variant="caption" sx={{marginBottom: -0.5}}>
              {day}, {month} {date}, {year}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                width: "100%",
              }}
            >
              <Typography variant="h6" sx={{ marginLeft: "0.5vw" }}>
                {indices[seconds].value}
              </Typography>
              <Typography variant="h6" sx={{ marginLeft: "2%" }}>
                {indices[seconds].name}
              </Typography>
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{marginLeft: "6%", marginRight: "6%"}}
          />
          <Avatar sx={{ width: "3vw", height: "3vw", bgcolor: "salmon" }}>SR</Avatar>
          <Box sx={{display: "flex", flexDirection: "column", marginLeft: "3%", alignItems: "start", height: "6vh", justifyContent: "center"}}>
            <Typography variant="caption" style={{marginBottom: -8, color: "grey"}}>Welcome back</Typography>
            <Typography variant="h6">Sean</Typography>    
          </Box>
        </Box>
      </div>
    ); 
}

export default ProfileBar;