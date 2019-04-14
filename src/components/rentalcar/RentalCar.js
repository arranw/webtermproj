import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class RentalCar extends Component {
  render() {
    const today = new Date();
    return (
      <div
        className="pt-3"
        style={{
          height: "100vh",
          backgroundImage: "URL(/res/carbg.jpg)",
          backgroundSize: "100% 100%",
          position: "relative"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 offset-3">
              <div className="card">
                <div className="card-header text-center">
                  <h1>
                    Dodgy Brakes Car Rental <i className="fas fa-car-side" />
                  </h1>
                </div>
                <div className="card-body">
                  <div className="col-4 offset-4">
                    <Link to="/rentalcar/rental">
                      <button className="btn btn-primary btn-lg form-control">
                        Rental
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <h3>
                    {today.toLocaleDateString() +
                      "@" +
                      today.getHours() +
                      ":" +
                      today
                        .getMinutes()
                        .toString()
                        .padStart(2, "0")}
                  </h3>
                </div>
              </div>
              <div className="list-group" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
