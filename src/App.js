import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./components/layout/Dashboard";
import AppNavBar from "./components/layout/AppNavBar";
import WellSearch from "./components/welldata/WellSearch";
import RentalCar from "./components/rentalcar/RentalCar";

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
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
