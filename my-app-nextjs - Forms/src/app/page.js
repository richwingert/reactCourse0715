/* eslint-disable no-param-reassign, operator-assignment */
// To inform next js, this is a client component
"use client";

import React, { useState, useEffect } from "react";

import 'semantic-ui-css/semantic.min.css' 

import {
  BrowserRouter as Router,
  Route,
  Link,
  Navigate,
  Routes,
} from "react-router-dom";

import isEmail from "validator/lib/isEmail";

let myRef = React.createRef();
let myRef2 = React.createRef();

const App = () => (
  <Router>
    <div className="ui text container">
      <h2 className="ui dividing header">Which form?</h2>

      <ul>
        <li>
          <Link to="/01-basic-button">
            <code>/01-basic-button</code>
          </Link>
        </li>
        <li>
          <Link to="/02-basic-button">
            <code>/02-basic-button</code>
          </Link>
        </li>
        <li>
          <Link to="/03-basic-input">
            <code>/03-basic-input</code>
          </Link>
        </li>
        <li>
          <Link to="/04-basic-input">
            <code>/04-basic-input</code>
          </Link>
        </li>
        <li>
          <Link to="/05-state-input">
            <code>/05-state-input</code>
          </Link>
        </li>
        <li>
          <Link to="/06-state-input-multi">
            <code>/06-state-input-multi</code>
          </Link>
        </li>
        <li>
          <Link to="/07-basic-validation">
            <code>/07-basic-validation</code>
          </Link>
        </li>
      </ul>

      <hr />
      <Routes>
        <Route path="/01-basic-button" element={<Button01 />} />
        <Route path="/02-basic-button" element={<Button02 />} />
        <Route path="/03-basic-input" element={<Input01 />} />
        <Route path="/04-basic-input" element={<DoNotUse />} />
        <Route path="/05-state-input" element={<State01 />} />
        <Route path="/06-state-input-multi" element={<State02 />} />
        <Route path="/07-basic-validation" element={<Valid01 />} />

        <Route exact path="/" element={<Home />} />

        <Route path="/*" element={<ErrorPath />} />
      </Routes>
    </div>
  </Router>
);

const ErrorPath = () => (
  <div className="ui inverted red segment">
    <h3>
      Error! No matches for <code>{window.location.pathname}</code>
    </h3>
  </div>
);

const Home = () => <h3>Welcome to the Forms app! Select a link from above.</h3>;

const DoNotUse = () => <h3>Don't use the "ref" attribute in an input tag</h3>;


function onGreatClick(evt) {
  console.log("The user clicked button-1: great", evt);
}

function onAmazingClick(evt) {
  console.log("The user clicked button-2: amazing", evt);
}

function onButtonClick(evt) {
  const btn = evt.target;
  console.log(`The user clicked ${btn.name}: ${btn.value}`);
}



// function onFormSubmitRef02(evt) {
//   // const name = this.refs.name.value;
//   // const names = [ ...this.state.names, name ];
//   // this.setState({ names: names });
//   // this.refs.name.value = '';
//   evt.preventDefault();
//   const node = myRef2.current;
//   console.log(node.value);

//   setName(node.value);
//   setNames([...names, name]);

//   node.value = "";

// }

function Button01() {
  return (
    <div>
      <h1>What do you think of React?</h1>

      <button name="button-1" value="great" onClick={onGreatClick}>
        Great
      </button>

      <button name="button-2" value="amazing" onClick={onAmazingClick}>
        Amazing
      </button>
    </div>
  );
}

function Button02() {
  return (
    <div>
      <h1>What do you think of React?</h1>

      <button name="button-1" value="great" onClick={onButtonClick}>
        Great
      </button>

      <button name="button-2" value="amazing" onClick={onButtonClick}>
        Amazing
      </button>
    </div>
  );
}

function Input01() {

  function onFormSubmitRef01(evt) {
    evt.preventDefault();
    const node = myRef.current;
    console.log("input1 = " + node.value);
  }
  return (
    <div>
      <h1>Sign Up Sheet</h1>

      <form onSubmit={onFormSubmitRef01}>
        {/* <input placeholder="Name" ref="name" /> */}
        <input placeholder="Name" ref={myRef} />

        <input type="submit" />
      </form>
    </div>
  );
}

// function Input02() {

//   const [name, setName] = useState("");
//   const [names, setNames] = useState(["steve"]);

//   function onFormSubmitRef02(evt) {
//     let node_value = "";

//     evt.preventDefault();
//     const node = myRef2.current;
//     console.log("input2 = " + node.value);
//     console.log("names_before = " + names );

//     node_value = node.value;
//     setName("steve");
        
//       setNames([...names, name]);
  
//     console.log("name = " + name );
//     console.log("names_after = " + names );

//     node.value = "";
  
//   }

//   return (
//     <div>
//       <h1>Sign Up Sheet</h1>

//       <form onSubmit={onFormSubmitRef02}>
//         <input placeholder="Name" ref={myRef2} />

//         <input type="submit" />
//       </form>

//       <div>
//         <h3>Names</h3>
//         <ol>
//         {names.map((name, i) => (
//             <li key={i}>{name}</li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// }

function State01() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  return (
    <div>
      <h1>Sign Up Sheet</h1>

      <form
        onSubmit={(e) => {
          setNames([...names, name]);
          setName("");
          e.preventDefault();
        }}
      >
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input type="submit" />
      </form>

      <div>
        <h3>Names</h3>
        <ul>
          {names.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function State02() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [fields, setFields] = useState({ name: "", email: "", address: "" });

  const [people, setPeople] = useState([]);

  return (
    <div>
      <h1>Sign Up Sheet</h1>

      <form
        onSubmit={(e) => {
          setPeople([...people, fields]);
          setName("");
          setEmail("");
          setAddress("");
          setFields({ name: "", email: "", address: "" });
          e.preventDefault();
        }}
      >
        <input
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            const { name, value } = e.target;
            setFields({ ...fields, [name]: value });
          }}
        />

        <input
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            const { name, value } = e.target;
            setFields({ ...fields, [name]: value });
          }}
        />

        <input
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            const { name, value } = e.target;
            setFields({ ...fields, [name]: value });
          }}
        />

        <input type="submit" />
      </form>

      <div>
        <h3>Names</h3>
        <ul>
          {people.map(({ name, email, address }, i) => (
            <li key={i}>
              {name} ({email}) - {address}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function validate(person) {
  const errors = {};
  if (!person.name) errors.name = "Name Required";
  if (!person.email) errors.email = "Email Required";
  if (person.email && !isEmail(person.email)) errors.email = "Invalid Email";
  return errors;
}

function Valid01() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [address, setAddress] = useState('');
  const [fields, setFields] = useState({ name: "", email: "" });
  const [fieldErrors, setFieldErrors] = useState({});

  const [people, setPeople] = useState([{ name: "", email: "" }]);

  return (
    <div>
      <h1>Sign Up Sheet</h1>

      <form
        onSubmit={(e) => {
          //const people = [...people];
          const person = fields;
          const fieldErrors = validate(person);
          setFieldErrors(fieldErrors);

          console.log(fieldErrors);
          if (Object.keys(fieldErrors).length) {
            //return;
          } else {
            setPeople([...people, person]);
            setName("");
            setEmail("");
            setFields({ name: "", email: "" });
          }
          e.preventDefault();
        }}
      >
        <input
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            const { name, value } = e.target;
            setFields({ ...fields, [name]: value });
          }}
        />

        <span style={{ color: "red" }}>{fieldErrors.name}</span>

        <input
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            const { name, value } = e.target;
            setFields({ ...fields, [name]: value });
          }}
        />

        <span style={{ color: "red" }}>{fieldErrors.email}</span>

        <input type="submit" />
      </form>

      <div>
        <h3>Names</h3>
        <ul>
          {people.map(({ name, email }, i) => (
            <li key={i}>
              {name} ({email}) 
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
