import "./index.css";
import { Box, Drawer, Typography, List, ListItem, ListItemButton, createTheme, ThemeProvider, ListItemIcon, Divider } from "@mui/material";
import { pink } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";
import { Route, Switch, Link } from "react-router-dom";
import Accounts from "./Accounts";
import Developers from "./Developers";
import Homepage from "./Homepage";
import Informatives from "./Informatives";
import Research from "./Research";
import Settings from "./Settings";
import ProfileBar from "./profileBar";
import Login from "./Login";

const theme = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          paddingTop: 3,
          paddingBottom: 3,
        },
      },
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "h6",
      },
    },
  },
});

export default () => {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Drawer
            variant="permanent"
            anchor="left"
            PaperProps={{
              style: {
                backgroundColor: "transparent",
                boxShadow: "none",
                borderColor: "transparent",
              },
            }}
          >
            <div
              style={{
                height: "90vh",
                width: "22vw",
                display: "flex",
                alignItems: "center",
              }}
            >
              <List style={{ marginLeft: "5%", marginRight: "5%" }}>
                <ListItem
                  id="menuItem"
                  href="/home"
                  component="a"
                  sx={{ "&:hover": { "& .sectionLabel": { color: "white" } } }}
                >
                  <ListItemButton className="sectionButton">
                    <Typography
                      className="sectionLabel"
                      sx={{ color: "black" }}
                    >
                      Home
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem
                  id="menuItem"
                  component="a"
                  href="/accounts"
                  sx={{ "&:hover": { "& .sectionLabel": { color: "white" } } }}
                >
                  <ListItemButton className="sectionButton">
                    <Typography
                      className="sectionLabel"
                      sx={{ color: "black" }}
                    >
                      Accounts
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem
                  id="menuItem"
                  component={Link}
                  to="/developers"
                  sx={{ "&:hover": { "& .sectionLabel": { color: "white" } } }}
                >
                  <ListItemButton className="sectionButton">
                    <Typography
                      className="sectionLabel"
                      sx={{ color: "black" }}
                    >
                      Developers
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem
                  id="menuItem"
                  component={Link}
                  to="/settings"
                  sx={{ "&:hover": { "& .sectionLabel": { color: "white" } } }}
                >
                  <ListItemButton className="sectionButton">
                    <Typography
                      className="sectionLabel"
                      sx={{ color: "black" }}
                    >
                      Settings
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem
                  id="menuItem"
                  component={Link}
                  to="/research"
                  sx={{ "&:hover": { "& .sectionLabel": { color: "white" } } }}
                >
                  <ListItemButton className="sectionButton">
                    <Typography
                      className="sectionLabel"
                      sx={{ color: "black" }}
                    >
                      Investments & Research
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem
                  id="menuItem"
                  component={Link}
                  to="/informatives"
                  sx={{ "&:hover": { "& .sectionLabel": { color: "white" } } }}
                >
                  <ListItemButton className="sectionButton">
                    <Typography
                      className="sectionLabel"
                      sx={{ color: "black" }}
                    >
                      Informatives
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ marginLeft: "6%", marginRight: "6%", marginTop: "5vh", height: "90vh" }}
              />
            </div>
            <div
              style={{
                marginLeft: "3vw",
                marginRight: "5%",
              }}
            >
              <div className="button">
                <Typography 
                className="btnText" 
                component={Link}
                to="/login"
                sx={{ color: pink[500], textDecoration: 'none' }}>
                  Sign out
                </Typography>
                <div className="btnTwo">
                  <ListItemIcon className="btnText2" sx={{ color: pink[500] }}>
                    <LogoutIcon />
                  </ListItemIcon>
                </div>
              </div>
            </div>
          </Drawer>
        </ThemeProvider>
        <ProfileBar />
        <main>
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route path="/accounts" component={Accounts} />
            <Route path="/developers" component={Developers} />
            <Route path="/settings" component={Settings} />
            <Route path="/research" component={Research} />
            <Route path="/informatives" component={Informatives} />
            <Route path="/login" component={Login} />
          </Switch>
        </main>
      </div>
    );
  }