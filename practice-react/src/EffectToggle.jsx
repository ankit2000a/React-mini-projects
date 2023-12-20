import React, { useState } from "react";
import WindowWidth from "./WindowWidth.jsx";

export default function EffectToggle() {
  const [show, setShow] = useState(true);

  function handleToggle() {
    setShow((prevShow) => !prevShow);
    console.log(show);
  }
  return (
    <div>
      <button onClick={handleToggle}>Toggle WindowTracker</button>
      {show && <WindowWidth />}
    </div>
  );
}
