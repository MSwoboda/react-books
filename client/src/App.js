import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";

import Saved from "./pages/Saved";
import Search from "./pages/Search";

import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Saved} />
        <Route exact path="/search" component={Search} />
      </div>
    </Router>

    </div>
  );
}

export default App;
