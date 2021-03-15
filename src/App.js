import logo from "./logo.svg";
import "./App.css";
import About from "./components/About.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>

        <Switch>
          <Route path="/" exact>
            {/* / or /* */}
            <Home/>
          </Route>
          <Route path="/about" exact>
           < About/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
