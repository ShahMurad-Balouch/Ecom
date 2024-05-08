import './cartlis.css'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Cartlist() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart data from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Function to increase the quantity of a product
  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: (item.quantity || 1) + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to decrease the quantity of a product
  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.quantity && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Function to remove a product from the cart
  const removeProduct = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <>
      <h4>Shopping cart</h4>
      <div>
        {cart.map((cartItem, cartIndex) => (
          <div key={cartIndex} className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
              <div className="col-md-8">
                <div className="p-2">
                  <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                    <div className="mr-1">
                      <img className="rounded" src={cartItem.image} width="70" alt={cartItem.title} />
                    </div>
                    <div className="d-flex flex-column align-items-center product-details">
                      <span className="font-weight-bold">{cartItem.title}</span>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => increaseQuantity(cartItem.id)}>+</button>
                    <div className="d-flex flex-row align-items-center qty">
                      {cartItem.quantity || 1}
                    </div>
                    <button type="button" className="btn btn-danger" onClick={() => decreaseQuantity(cartItem.id)} disabled={!cartItem.quantity || cartItem.quantity === 1}>-</button>
                    <div>
                      <h5 className="text-grey">${((cartItem.quantity || 1) * cartItem.price).toFixed(2)}</h5>
                    </div>
                    <div className="d-flex align-items-center">
                      <FontAwesomeIcon icon={faTrash} className="mb-1 text-danger" onClick={() => removeProduct(cartItem.id)} />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                  <input type="text" className="form-control border-0 gift-card" placeholder="discount code/gift card" />
                  <button className="btn btn-outline-warning btn-sm ml-2" type="button">Apply</button>
                </div>
                <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                  <Link to="/payment">
                    <button className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cartlist;
