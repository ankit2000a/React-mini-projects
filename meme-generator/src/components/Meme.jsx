import React from "react";
import { useState } from "react";
import memesData from "../data";

export default function Meme() {
  const [image, setImage] = useState("src/assets/meme-4.avif");
  function handleClick() {
    let index = Math.floor(Math.random() * memesData.data.memes.length);
    let path = memesData.data.memes[index];
    setImage(path.url);
    console.log(path.url);
  }
  return (
    <div className="form flex-js-al">
      <div className="input-group flex-js-al">
        <div className="input-text">
          <label>Top text</label>
          <input type="text" />
        </div>
        <div className="input-text">
          <label>Bottom text</label>
          <input type="text" />
        </div>
      </div>
      <div className="submit-btn">
        <input
          type="submit"
          value="Get a new meme image"
          onClick={handleClick}
        />
      </div>
      <div className="display-img">
        <img src={image} alt="image-0" />
      </div>
      <div className="div"></div>
    </div>
  );
}
