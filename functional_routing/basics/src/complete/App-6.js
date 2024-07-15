import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Navigate,
  Routes
} from 'react-router-dom';

const App = () => (
  <Router>
    <div
      className='ui text container'
    >
      <h2 className='ui dividing header'>
        Which body of water?
      </h2>

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
        <li>
          <Link to='/black-sea'>
            <code>/black-sea</code>
          </Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route path='/atlantic/ocean' element={<AtlanticOcean />} />
        <Route path='/atlantic' element={<Atlantic />} />
        <Route path='/pacific' element={<Pacific />} />
        <Route path='/black-sea' element={<BlackSea />} />


      </Routes>
    </div>
  </Router>
);


const AtlanticOcean = () => (
  <div>
    <h3>Atlantic Ocean — Again!</h3>
    <p>
      Also known as "The Pond."
    </p>
  </div>
);

const Atlantic = () => (
  <div>
    <h3>Atlantic Ocean</h3>
    <p>
      The Atlantic Ocean covers approximately 1/5th of the
      surface of the earth.
    </p>
  </div>
);

const Pacific = () => (
  <div>
    <h3>Pacific Ocean</h3>
    <p>
      Ferdinand Magellan, a Portuguese explorer, named the ocean
      'mar pacifico' in 1521, which means peaceful sea.
    </p>
  </div>
);

function BlackSea () {
  const [counter, setCounter] = useState(3);

  let interval = 0;
  

  useEffect(() => {
    // Your code here
    interval = setInterval(() => (setCounter(prevCounter => prevCounter - 1)), 1000);
  }, [counter]);


  useEffect(() => {
    return () => {
       // Your code here
       clearInterval(interval);
    }
  }, [counter]);


    return (
      <div>
        <h3>Black Sea</h3>
        <p>Nothing to sea [sic] here ...</p>
        <p>Redirecting in {counter}...</p>
        {
          (counter < 1) ? (
            <Navigate replace to='/' />
          ) : null
        }
      </div>
    );

}

export default App;
