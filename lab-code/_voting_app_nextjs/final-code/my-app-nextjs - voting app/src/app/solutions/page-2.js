/* eslint-disable no-param-reassign, operator-assignment */
// To inform next js, this is a client component
"use client";
import "semantic-ui-css/semantic.min.css";
import Image from "next/image";

function App() {

  return (
    <div className="App main ui text container">
      <h1 className="ui dividing centered header">Popular Products</h1>
      <ProductList />
    </div>
  );
}

function ProductList(props) {
   return (
   <div className="ui unstackable items"> 
      <Product />
   </div>);
}

function Product(props) {

  return (
    <div className='item'>
      <div className='image'>
        <img src='images/products/image-aqua.png' />
      </div>
      <div className='middle aligned content'>
        <div className='description'>
          <a>Fort Knight</a>
          <p>Authentic renaissance actors, delivered in just two weeks.</p>
        </div>
        <div className='extra'>
          <span>Submitted by:</span>
          <img
            className='ui avatar image'
            src='images/avatars/daniel.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
