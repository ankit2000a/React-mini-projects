import React, { useEffect } from "react";
import { useState } from "react";
// import memesData from "../data";
import data from "../data";

export default function Meme() {
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
    console.log(data);
  }, []);

  const [allMeme, setAllMeme] = useState([]);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "src/assets/meme-4.avif",
  });

  function getMemeImg() {
    const index = Math.floor(Math.random() * allMeme.length);
    const path = allMeme[index].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: path,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="form flex-js-al">
      <div className="input-group flex-js-al">
        <div className="input-text">
          <label htmlFor="topText">Top text</label>
          <input
            type="text"
            id="topText"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>
        <div className="input-text">
          <label htmlFor="bottomText">Bottom text</label>
          <input
            type="text"
            id="bottomText"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="submit-btn">
        <input
          type="submit"
          value="Get a new meme image"
          onClick={getMemeImg}
        />
      </div>
      <div className="display-img">
        <img src={meme.randomImage} alt="image-0" />
        <p className="top-text">{meme.topText}</p>
        <p className="bottom-text">{meme.bottomText}</p>
      </div>
    </div>
  );
}
