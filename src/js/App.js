import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import BookDetail from "./components/BookDetail";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />{" "}
        {/* Route for the home page */}
        <Route path="/book/:index" component={BookDetail} />{" "}
        {/* Route for book detail page */}
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

// Render the App component into the #app element in index.html
ReactDOM.render(<App />, document.querySelector("#app"));
