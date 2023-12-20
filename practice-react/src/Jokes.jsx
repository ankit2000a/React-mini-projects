import React from "react";

export default function Jokes(props) {
  return (
    <div className="cards">
      <p>
        <span>Joke:</span>
        {props.jokeItem}
      </p>
      {props.on && (
        <p>
          <span>Punch:</span> {props.punchItem}
        </p>
      )}
      <button onClick={props.toggle}>{props.on ? "Close" : "Open"}</button>
    </div>
  );
}
