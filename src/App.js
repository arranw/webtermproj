import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/layout/Dashboard";
import AppNavBar from "./components/layout/AppNavBar";
import WellSearch from "./components/welldata/WellSearch";
import RentalCar from "./components/rentalcar/RentalCar";
import Rental from "./components/rentalcar/Rental";
import Quiz from "./components/quiz/Quiz";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavBar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/welldata" component={WellSearch} />
              <Route exact path="/rentalcar" component={RentalCar} />
              <Route exact path="/rentalcar/rental" component={Rental} />
              <Route exact path="/finalquiz" component={Quiz} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
