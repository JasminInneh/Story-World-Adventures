// Import necessary dependencies
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/index.css"; // Import your global styles
import Header from "./components/Header"; // Import your Header component
import Home from "./components/Home"; // Import your Home component
import BookDetail from "./components/BookDetail"; // Import your BookDetail component
import About from "./components/About"; // Import your About component

// Define the App component
const App = () => {
  return (
    <Router>
      <Header /> {/* Render the Header component with navigation */}
      <Switch>
        <Route path="/" exact component={Home} />{" "}
        {/* Route for the home page */}
        <Route path="/book/:index" component={BookDetail} />{" "}
        {/* Route for book detail page */}
        <Route path="/about" component={About} /> {/* Route for about page */}
      </Switch>
    </Router>
  );
};

// Render the App component into the #app element in index.html
ReactDOM.render(<App />, document.querySelector("#app"));
