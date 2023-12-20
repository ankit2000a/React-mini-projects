import React, { useEffect, useState } from "react";

export default function WindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener(
      "resize",
      function () {
        setWindowWidth(window.innerWidth);
      },
      []
    );
  });
  return <h1>Window Width: {windowWidth}</h1>;
}
