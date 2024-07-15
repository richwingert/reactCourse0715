/* eslint-disable no-param-reassign, operator-assignment */
// To inform next js, this is a client component
"use client";
import "semantic-ui-css/semantic.min.css";
import Image from "next/image";

import React, { useState, useEffect } from "react";

function App() {
  
  function generateVoteCount() {
       return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: "Yellow Pail",
      description: "On-demand sand castle construction expertise.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "/images/avatars/daniel.jpg",
      productImageUrl: "/images/products/image-aqua.png",
    },
    {
      id: 2,
      title: "Supermajority: The Fantasy Congress League",
      description:
        "Earn points when your favorite politicians pass legislation.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "/images/avatars/kristy.png",
      productImageUrl: "/images/products/image-rose.png",
    },
    {
      id: 3,
      title: "Tinfoild: Tailored tinfoil hats",
      description: "We already have your measurements and shipping address.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "/images/avatars/veronika.jpg",
      productImageUrl: "/images/products/image-steel.png",
    },
    {
      id: 4,
      title: "Haught or Naught",
      description: "High-minded or absent-minded? You decide.",
      url: "#",
      votes: generateVoteCount(),
      submitterAvatarUrl: "/images/avatars/molly.png",
      productImageUrl: "/images/products/image-yellow.png",
    },
  ];
  return (
<div className="App main ui text container">
<h1 className="ui dividing centered header">Popular Products</h1>
      <ProductList products={products} />
    </div>
  );
}

function ProductList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(props.products);
  }, []);

  function handleProductUpVote(productId) {
    const nextProducts = products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });

    setProducts(nextProducts);
  }

  const productsSorted = products.sort((a, b) => b.votes - a.votes);

  const productComponents = productsSorted.map((product) => (
    <Product
      key={"product-" + product.id}
      id={product.id}
      title={product.title}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      onVote={handleProductUpVote}
    />
  ));
  return <div className="ui unstackable items">{productComponents}</div>;
}

function Product(props) {
  function handleUpVote() {
    props.onVote(props.id);
  }

  return (
    <div className="item">
      <div className="image">
        <img src={props.productImageUrl} />
  
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a onClick={handleUpVote}>
          
            <i className="large caret up icon" />
          </a>
          {props.votes}
        </div>
        <div className="description">
          <a href={props.url}>{props.title}</a>
          <p>{props.description}</p>
          
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" src={props.submitterAvatarUrl} />
        </div>
      </div>
    </div>
  );
}

export default App;
