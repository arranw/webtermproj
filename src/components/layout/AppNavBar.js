import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";

class AppNavBar extends Component {
  render() {
    return (
      <nav
        className={classnames(
          "navbar navbar-expand-md navbar-dark bg-primary ",
          { "mb-4": this.props.history.location.pathname !== "/rentalcar" }
        )}
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            CPRG-256 Final Project
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/welldata" className="nav-link">
                  Well Data
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/rentalcar" className="nav-link">
                  Rental Car
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/finalquiz" className="nav-link">
                  Final Quiz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(AppNavBar);
