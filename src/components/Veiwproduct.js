import './viewpro.css';
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CounterContext } from './context/Counter';

const ShowProduct = ({ product, addToCart }) => {
  const counterContext = useContext(CounterContext);

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductInCart = existingCart.some(item => item.id === product.id);

    if (!isProductInCart) {
      // If the product is not already in the cart, add it
      addToCart(product);

      // Add the new product to the existing cart items
      const updatedCart = [...existingCart, product];

      // Save the updated cart items to localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      console.log("Product is already in the cart.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={product.image} alt="laptop bag" />
          </div>
          <div className="col-md-7">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price}</p>
            <p className="card-text">
              Qty :
              <button type="button" className="btn btn-primary" onClick={() => counterContext.setCount(counterContext.count + 1)}> + </button>
              {counterContext.count}
              <button type="button" className="btn btn-danger" onClick={() => (counterContext.count > 1) ? counterContext.setCount(counterContext.count - 1) : console.log("not able")} disabled={counterContext.count === 1}> - </button>
            </p>
            <p>Total Price :$ {counterContext.count * product.price}</p>
            <button className='btn btn-success mx-4' onClick={() => { addToCart(product); handleAddToCart(product); }}>addToCart</button>
          </div>
        </div>
      </div>
    </>
  );
};

function Veiwproduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getSingle = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    };

    getSingle();
  }, [id]);

  const addToCart = (product) => {
    // Implement your addToCart logic here
    console.log("Adding product to cart:", product);
  };

  return (
    <div>
      <ShowProduct product={product} addToCart={addToCart} />
    </div>
  );
}

export default Veiwproduct;
