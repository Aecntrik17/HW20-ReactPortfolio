import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./components/Nav/Nav";

import NoMatch from "./pages/NoMatch";

// represents the main control for the html displays
function App() {
  return (
    <Router basename="/">
      <div>
        <Nav />
        {/* allows for the differnt pages to be displayed when the corresponding routes via the URL*/}
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Route path="/" component={NoMatch} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
