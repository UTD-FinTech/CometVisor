import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pages from "./MainPages";

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route>
              <Pages />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
