import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Accounts from "./Pages/Accounts";
import Developers from "./Pages/Developers";
import Homepage from "./Pages/Homepage";
import Informatives from "./Pages/Informatives";
import Research from "./Pages/Research";
import Settings from "./Pages/Settings";
import { Typography } from "@mui/material";

function App() {

  return (
    <div className="App">
      <Router>
        <div style={{width: "20%"}}>
          <Typography variant="h2">
            COMETVISOR
          </Typography>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/accounts">Accounts</Link>
              </li>
              <li>
                <Link to="/developers">Developers</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/research">Research</Link>
              </li>
              <li>
                <Link to="/informatives">Informatives</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/home">
              <Homepage />
            </Route>
            <Route path="/accounts">
              <Accounts />
            </Route>
            <Route path="/developers">
              <Developers />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/research">
              <Research />
            </Route>
            <Route path="/informatives">
              <Informatives />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
