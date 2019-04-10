import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Dashboard</h1>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <Link to="/welldata">
                <li className="list-group-item mask flex-center rgba-blue-light">
                  <h3>Well Data</h3>
                </li>
              </Link>
              <Link to="/rentalcar">
                <li className="list-group-item mask flex-center rgba-blue-light">
                  <h3>Rental Car</h3>
                </li>
              </Link>
              <Link to="/finalquiz">
                <li className="list-group-item mask flex-center rgba-blue-light">
                  <h3>Final Quiz</h3>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
