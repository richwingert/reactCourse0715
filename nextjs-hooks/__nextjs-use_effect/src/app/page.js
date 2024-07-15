"use client";

import React, { useState, useEffect } from "react";

//import "./styles.css";

function App() {
  let [names, setNames] = useState([]);

/*     useEffect(() => {
    fetch("https://api.fungenerators.com/name/categories.json?start=0&limit=25")
      .then((response) => response.json())
      .then((data) => {
        let tmpdata = data.contents[0];
        setNames(tmpdata);
      });
  }, []); */

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        setNames(data.results);
      });
  }, []);

  return (
    <div className="App">
      <div>Names</div>
      <div>
        {names.map((item, i) => (
          <div key={i}>
            {item.name} {item.title} {item.unisex}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
