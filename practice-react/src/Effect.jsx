import React, { useEffect, useState } from "react";

export default function Effect() {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  console.log("Component rendered");
  //   useEffect hook:-
  useEffect(() => {
    console.log("Effect function ran!");
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  function addCount() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    console.log(count);
  }
  return (
    <main>
      <div>
        <h1>{count}</h1>
        <button onClick={addCount}>Get Next Character</button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
    </main>
  );
}
