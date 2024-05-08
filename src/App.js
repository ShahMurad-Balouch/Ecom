// import logo from './logo.svg';
import './App.css';
import Counter from './components/context/Counter';

import Navbar from './components/Navbar';
import Product from './components/Product';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Veiwproduct from './components/Veiwproduct';
import Home from './components/Home';
import About from './components/About';

import { useContext, useState } from 'react';
// Importing the actual context
import {CounterContext} from './components/context/Counter'
import Signup from './components/Signup';
import Cartlist from './components/Cartlist';
import Payment from './components/Payment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Protected from './components/Protected';



function App() {
  
  const counterState = useContext(CounterContext)
  
  const [notification, setNotification] = useState(null); // State for notification
  console.log("heey ", counterState)





  // addTocart functionality

// State bnay ga



const [cart , setCart] = useState([])
console.log(cart)
const addToCart = (data) => {

  const isProductInCart = cart.some((item) => item.id === data.id);

  if (isProductInCart) {
    

        setNotification(`"${data.title}" is already in the cart`);
    // Product already exists in the cart, throw an error or display a message
    // alert("already in cartlist")
    // console.error('Product is already in the cart');
    // You can also display a message to the user
    
    // alert('Product is already in the cart');
   
    return;
  }



setCart([...cart,data])
  
}


  
  return (
    <div className="App">
      {notification && (
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attention:</strong> {notification} Already in the cartList
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setNotification(null)}></button>
      </div>
    )}
    
      {/* {notification && <div className="notification">{notification}</div>} */}
      <Counter>
<BrowserRouter>

      <Navbar/>
<Routes>
<Route path='/' element={<Home/>}></Route>

  <Route path='/products' element={< Product addToCart={addToCart}/>}></Route>


<Route path="/:id" element= {<Veiwproduct />}> </Route>
  <Route path='/about' element={<About />} />

<Route path='/signup' element={<Signup />} />
<Route path='/login' element={<Login />} />

<Route path='/cartlist' element={<Protected Component= {Cartlist} cart={cart} />}></Route>
<Route path='/payment' element={<Payment />} />
<Route path='/contact' element={<Contact />} />

</Routes>
<Footer/>
</BrowserRouter>
</Counter>

    </div>
  );
}

export default App;
