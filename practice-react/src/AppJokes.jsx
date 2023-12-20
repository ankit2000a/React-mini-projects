import React, { useState } from "react";
import Jokes from "./Jokes";
import JokesData from "./jokes-data.js";
import "./App.css";

export default function AppJoke() {
  const [jokes, setJokes] = useState(JokesData);
  function toggle(index) {
    setJokes((prevJokes) => {
      return prevJokes.map((jokeMatch) => {
        return jokeMatch === prevJokes[index]
          ? { ...jokeMatch, on: !jokeMatch.on }
          : jokeMatch;
      });
    });
  }
  const jokeElement = jokes.map((jokePara, index) => {
    return (
      <Jokes
        key={index}
        jokeItem={jokePara.joke}
        punchItem={jokePara.punch}
        on={jokePara.on}
        toggle={() => toggle(index)}
      />
    );
  });
  return <div className="container">{jokeElement}</div>;
}
