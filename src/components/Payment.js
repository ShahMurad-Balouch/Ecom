import React from 'react'
import './pay.css'

function Payment() {
  return (
    <div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
</div>
            <div className="col-sm-6">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label for="username" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Username" required />
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
            </div>

            <div className="col-md-5">
              <label for="country" className="form-label">Country</label>
              <select className="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Pakistan</option>
                <option>India</option>
                <option>UAE</option>
                <option>Iran</option>
                <option>Iraq</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-4">
              <label for="state" className="form-label">State</label>
              <select className="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>California</option>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>KPK</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" placeholder="" required />
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
            <hr className="my-4" />

<h4 className="mb-3">Payment</h4>
<label className="form-check-label" for="credit">Cash on Delivery</label>
{/* 
<div className="my-3">
  <div className="form-check">
    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
    <label className="form-check-label" for="credit">Credit card</label>
  </div>
  <div className="form-check">
    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
    <label className="form-check-label" for="debit">Debit card</label>
  </div>
  <div className="form-check">
    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
    <label className="form-check-label" for="paypal">PayPal</label>
  </div>
</div>

<div className="row gy-3">
  <div className="col-md-6">
    <label for="cc-name" className="form-label">Name on card</label>
    <input type="text" className="form-control" id="cc-name" placeholder="" required />
    <small className="text-muted">Full name as displayed on card</small>
    <div className="invalid-feedback">
      Name on card is required
    </div>
  </div>

  <div className="col-md-6">
    <label for="cc-number" className="form-label">Credit card number</label>
    <input type="text" className="form-control" id="cc-number" placeholder="" required />
    <div className="invalid-feedback">
      Credit card number is required
    </div>
  </div>

  <div className="col-md-3">
    <label for="cc-expiration" className="form-label">Expiration</label>
    <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
    <div className="invalid-feedback">
      Expiration date required
    </div>
  </div>

  <div className="col-md-3">
    <label for="cc-cvv" className="form-label">CVV</label>
    <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
    <div className="invalid-feedback">
      Security code required
    </div>
  </div>
</div> */}

<hr className="my-4" />

<button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
</form>
</div>
    </div>
    
  )
}

export default Payment
