import React from "react";

export default function LocationCard(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.item.img} alt={props.item.location} />
      </div>
      <div className="card-txt">
        <div className="card-head">
          <img src="src/assets/location-pointer.svg" alt="Pointer" />
          <h5>
            {props.item.country}
            <span>
              <a href="https://www.google.com/search?q=Japan">
                view on Google Maps
              </a>
            </span>
          </h5>
          <h3>{props.item.location}</h3>
        </div>
        <div className="card-desc">
          <h6>{props.item.date}</h6>
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
