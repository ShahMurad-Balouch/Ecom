import React from "react";
import { Link } from "react-router-dom";
// import './Hom.css'
function Home() {
  return (
    <>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
      <img className="bg-image"  src="https://images.unsplash.com/photo-1712921673244-de60e017f767?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="this is a Home "
style={{width:"100%", height:"500px"}} 
 /> 
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Unveil Your Style.</h1>
            <p style={{color: 'white'}}>Join our community of savvy shoppers and stay updated on exclusive deals, new arrivals, and special promotions. Sign up today for access to member-only benefits!</p>
            <p><Link class="btn btn-lg btn-primary" to="/signup">Sign up today</Link></p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
      <img className="bg-image"  src="https://images.unsplash.com/photo-1591036575756-7f38747ebdb8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="this is a Home "
style={{width:"100%", height:"500px"}} 
 /> 
        <div class="container">
          <div class="carousel-caption">
            <h1>Discover Endless Possibilities.</h1>
            <p style={{color: 'white'}}>Discover the latest trends in fashion and technology at unbeatable prices! Shop now and elevate your lifestyle with our curated collection.</p>
            <p><Link class="btn btn-lg btn-primary" to="/about">Learn more</Link></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
      <img className="bg-image"  src="https://images.unsplash.com/photo-1633113212423-dc2828784c7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="this is a Home "
style={{width:"100%", height:"500px"}} 
 /> 
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p style={{color: 'white'}}>Make every purchase count! With our commitment to sustainability, shop guilt-free knowing that you're supporting eco-friendly practices and responsible sourcing.</p>
            <p><Link class="btn btn-lg btn-primary" to="/products">Browse gallery</Link></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
      
      <div role="main">
    
 <div className="container marketing">

       


        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto " style={{height:'250px'}} src="https://images.unsplash.com/photo-1603201101485-e232d22ad18b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGltYWdlfGVufDB8fDB8fHww" alt="Generic placeholder image"  />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="featurette-image img-fluid mx-auto" src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Generic placeholder image" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" src="https://images.unsplash.com/photo-1620313926202-159eb90ec94a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Generic placeholder image" />
          </div>
        </div>

        <hr className="featurette-divider" />

        

      </div>

    </div>




    </>
  )
}

export default Home
