import React, { Component } from "react";

export default class RentalCar extends Component {
  render() {
    const today = new Date();
    return (
      <div
        style={{ minHeight: "100vh", backgroundImage: "URL(/res/carbg.jpg)" }}
      >
        <ul className="nav justify-content-center bg-danger">
          <li className="navbar-brand text-light">Dodgy Brakes Car Rental</li>
        </ul>
        <button>dsa</button>
        <ul className="nav justify-content-center bg-danger float-bottom">
          <li className="navbar-brand text-light">
            {today.toLocaleDateString() +
              "@" +
              today.getHours() +
              ":" +
              today.getMinutes()}
          </li>
        </ul>
      </div>
    );
  }
}
