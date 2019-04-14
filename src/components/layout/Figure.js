import React from "react";
import "../rentalcar/rental.css";
import classnames from "classnames";

export default function Figure(props) {
  const { imgSrc, imgCaption, cost, selectedCar, setSelectedCar } = props;
  return (
    <figure
      className={classnames("rounded pb-2", {
        "bg-info": selectedCar.name === imgCaption
      })}
      onClick={() => setSelectedCar({ name: imgCaption, cost })}
    >
      <img src={imgSrc} alt={imgCaption} style={{ width: "100%" }} />
      <figcaption className="text-center">
        <h5>
          {imgCaption}
          <small> ${cost}/day</small>
        </h5>
      </figcaption>
    </figure>
  );
}
