import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="label">Sold out</div>}
      <img
        className="card--img"
        src={`src/assets/${props.img}`}
        alt="Zafeers-Men"
      />
      <div className="card--stats">
        <img src="src/assets/Star 1.png" alt="Star" />
        <span> {props.rating} </span>
        <span>
          ({props.reviewCount}){" "}
          <img src="src/assets/Ellipse 6.svg" alt="Ellipse" />
        </span>
        <span>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span>From ${props.price}</span> / person
      </p>
    </div>
  );
}
