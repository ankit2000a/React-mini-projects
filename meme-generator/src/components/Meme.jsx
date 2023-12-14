import React from "react";

export default function Meme() {
    const thingArray = ['Thing 1', 'Thing 2'];
    const addThing = () => {
        let thing = `Thing ${thingArray.length + 1}`;
        thingArray.push(thing)
        console.log(thingArray)
    }

    const date = new Date();
    const hours = date.getHours();

    const greeting = () => {
        let greet;
        switch (greet) {
            case if(4 <= hours <= 12):
                greet = 'Good Morning'
                // break;
            case (13 <= hours <= 17):
                greet = 'good afternoon'
                // break;
            case (18 <= hours <= 24):
                greet = 'good night';
        }
        console.log(greet)
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
        <input type="submit" value="Get a new meme image" onClick={greeting}/>
      </div>
    </div>
  );
}
