import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


function Navbar() {

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-light">
      {/* <img src="https://media.istockphoto.com/id/1503698559/photo/online-shopping-concept-businessman-use-smartphones-and-credit-cards-to-purchase-products.webp?b=1&s=170667a&w=0&k=20&c=HNyDOaHUps0eDioQrLsE9A1Ipf_Ish6QioTZN8XdL0U=" alt="this is a Home " style={{height:'23%' , width:'300%'}}/> */}
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">E-com</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
       
          <Link className="nav-link" aria-current="page" to="/products"  >All Products</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <Link  type="button" className="btn btn-primary" to="/cartlist" style={{width:'100%' , margin:'5px' , height:'100%'}}>
        <FontAwesomeIcon icon={faCartPlus} /> 
      </Link>
          <Link  className="btn btn-success" type='button' to="/signup" style={{width:'100%' , margin:'5px' , height:'100%'}}>Signup</Link>
          <Link  className="btn btn-primary" type='button' to="/login" style={{width:'100%' , margin:'5px' , height:'100%'}}>Login</Link>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
