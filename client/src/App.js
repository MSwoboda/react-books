import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

function App() {
  return (
    <div>

      <Router>
      <div>
        <NavTabs />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/" component={Search} />

      </div>
    </Router>

    </div>
  );
}

export default App;
