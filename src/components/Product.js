import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Product({addToCart}) {

  // state to store products and selected category
  const [products, setProducts] = useState([]);
  const [pro , setPro] = useState([])
  const [category, setCategory] = useState("");
  


  // fetch products when the component mounts
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(d =>
        {
        setProducts(d.data) ;
        setPro(d.data)
        }
        )

      .catch(err => console.log(err)); 
  }, []);

  // filter function to filter products by category
  const filter = (category) => {
    console.log(category)
  
    if (category) {
      const filtered = products.filter((products) => products.category === category);
      console.log(filtered)
      setPro(filtered);
    }
    setCategory(category);
  }




  const handleAddToCart = (product) => {
    addToCart(product);

    // Get the existing cart items from localStorage or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the existing cart items
    const updatedCart = [...existingCart, product];

    // Save the updated cart items to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
};

  // map through the products array and display each product
  return (
    <div>
      <div className='row' style={{ margin: "10px" }}>
<ul className="nav justify-content-center text-white">
  <li className="nav-item"> <button className='nav-link btn btn-primary m-1 text-white' onClick={() => filter('electronics')}>Electronics</button>
  </li>
  <li className="nav-item">
              <button className='nav-link btn btn-primary m-1 text-white' onClick={() => filter('jewelery')}>Jewelery</button>
  </li>
  <li className="nav-item"> <button className='nav-link btn btn-primary m-1 text-white' onClick={() => filter("men's clothing")}>Men</button>
          
  </li>
  <li className="nav-item">
  <button className='nav-link btn btn-primary m-1 text-white' onClick={() => filter("women's clothing")}>Women</button>
            </li>
</ul>
        <h1>{category.replace(/\b\w/g, x => x.toUpperCase())
}</h1>
<div className="container">
<div className="row">

        {
          pro.map((product) => (
            
<div className="col-md-3">
<img src={product.image} style={{ height: "200px", width: "310px", borderRadius:'23px' }} className="card-img-top" alt="..." />
    <h2>{product.title.slice(0, 11)}</h2>
    <p>{product.description.slice(0, 20)} </p>
    <p><Link to={`/${product.id}`} className="btn btn-primary">Check Out</Link>
    {/* <button className='btn btn-success mx-4' onClick={()=>{ addToCart(product); handleAddToCart(product); }}>addToCart</button> */}
    </p>
    
  </div>
  
))
}
</div>
</div>
      </div>
    </div>
  )
}

export default Product