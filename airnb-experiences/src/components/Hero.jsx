import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="gallery-1">
          <img src="src/assets/image 28.png" alt="image-28" />
        </div>
        <div className="gallery-2 flex-col">
          <img src="src/assets/image 30.png" alt="image-30" />
          <img src="src/assets/image 26.png" alt="image-26" />
        </div>
        <div className="gallery-3 flex-col">
          <img src="src/assets/image 27.png" alt="image-27" />
          <img src="src/assets/image 29.png" alt="image-29" />
        </div>
        <div className="gallery-4 flex-col">
          <img src="src/assets/image 22.png" alt="image-22" />
          <img src="src/assets/image 23.png" alt="image-23" />
        </div>
        <div className="gallery-5 flex-col">
          <img src="src/assets/image 25.png" alt="image-25" />
          <img src="src/assets/image 24.png" alt="image-24" />
        </div>
      </div>
      <div className="hero-txt">
        <h1>Online Experiences</h1>
        <h3>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </h3>
      </div>
    </>
  );
}
