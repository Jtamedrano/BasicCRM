import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../comps/Home/Dashboard";
import Navbar from "../comps/Navbar";
import Profile from "./Profile";

function Home() {
  return (
    <>
      <Router>
        <div className="Home">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Home;
