import React from "react";
import { 
   Route,
   Link 
  } from "react-router-dom";

const App = () => (

    <div className="ui text container">
      <h2 className="ui dividing header">Which body of water?</h2>

      <ul>
        <li>
        <Link to='/atlantic'>
            <code>/atlantic</code>
          </Link>
        </li>
        <li>
        <Link to='/pacific'>
            <code>/pacific</code>
          </Link>
        </li>
      </ul>

      <hr />

      <Route path="/atlantic" element={<Atlantic />} />
      <Route path="/pacific" element={<Pacific />} />
    </div>

);

function Atlantic() {
  return (
    <div>
      <h3>Atlantic Ocean</h3>
      <p>
        The Atlantic Ocean covers approximately 1/5th of the surface of the
        earth.
      </p>
    </div>
  );
}

const Pacific = () => (
  <div>
    <h3>Pacific Ocean</h3>
    <p>
      Ferdinand Magellan, a Portuguese explorer, named the ocean 'mar pacifico'
      in 1521, which means peaceful sea.
    </p>
  </div>
);

export default App;
