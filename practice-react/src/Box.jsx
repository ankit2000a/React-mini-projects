import React, { useState } from "react";

export default function Box(props) {
  return (
    <div
      className={`box ${props.on ? "is-on" : ""}`}
      onMouseOver={props.toggle}
    ></div>
  );
}
