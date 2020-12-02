import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./components/Nav/Nav";

import NoMatch from "./pages/NoMatch";

// represents the main control for the html displays
function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* allows for the differnt pages to be displayed when the corresponding routes via the URL*/}
        <Switch>
          <Route exact path="/HW20-ReactPortfolio/" component={About} />
          <Route exact path="/HW20-ReactPortfolio/About" component={About} />
          <Route
            exact
            path="/HW20-ReactPortfolio/Portfolio"
            component={Portfolio}
          />
          <Route
            exact
            path="/HW20-ReactPortfolio/Contact"
            component={Contact}
          />
          <Route path="HW20-ReactPortfolio/" component={NoMatch} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
