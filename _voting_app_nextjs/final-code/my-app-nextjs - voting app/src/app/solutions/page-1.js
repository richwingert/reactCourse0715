/* eslint-disable no-param-reassign, operator-assignment */
// To inform next js, this is a client component
"use client";
import "semantic-ui-css/semantic.min.css";
import Image from "next/image";


function App() {

  return (
<div className="App main ui text container">
<h1 className="ui dividing centered header">Popular Products</h1>      <ProductList  />
    </div>
  );
}

function ProductList() {
  return (
  <div className="ui unstackable items">
        Hello, friend! I am a basic React component.
  </div>);
}

export default App;
