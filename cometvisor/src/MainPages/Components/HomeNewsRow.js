import { Divider, Typography } from "@mui/material";
import "./HomeNewsRow.css";

const HomeNewsRow = (props) => {
    const { news } = props;

    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "start", height: "100%", marginTop: "3%"}}>
        <a href={news.href} textDecoration="none">
            <Typography variant="h5" sx={{ fontWeight: 700, textDecoration: "none", color: "black" }} align="left">
            {news.title}
            </Typography>
        </a>
        <div style={{ display: "flex", flexDirection: "row", marginTop: "2%", height: "2vh", alignItems: "center", width: "40%" }}>
          <Typography variant="subtitle2">{news.source}</Typography>
          <Divider orientation="vertical" variant="middle" sx={{ height: "100%", marginRight: "2%", marginLeft: "2%" }} />
          <Typography variant="subtitle2">{news.date}</Typography>
        </div>
        <Divider sx={{width: "100%", marginTop: "3%"}}/>
      </div>
    );
}

export default HomeNewsRow;