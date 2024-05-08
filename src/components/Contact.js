import './contact.css'
import React from "react";

function Contact() {
  return (
    <div>
        <div className="text-center my-3">
        <h2>Contact Us</h2>

        </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1481.5508377988162!2d74.27550340247191!3d31.44144513334304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190126cb91ee01%3A0xdd1fcf7708eeabba!2sSoneri%20Bank%20-%20Wapda%20Town%20Branch!5e0!3m2!1sen!2s!4v1713768502862!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{border : 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
      

        <form action="https://formspree.io/f/xgegrlzj" method="post" className='contact-inputs'>
<div className="mb-2">
  <input type="username" name='username' className="form-control" required autoComplete='off' placeholder="name" />

</div>
<div className="mb-2">
  <input type="email" name='email' className="form-control" required autoComplete='off' placeholder="name@example.com" />
  </div>
<div className="mb-2">
  <textarea className="form-control" name='message' type="message"  placeholder= 'Enter Your Message' rows="4" required autoComplete='off'></textarea>
</div>
<div className="text-center mb-2 ">
<button type="submit" className="btn btn-primary" >Send</button>
</div>
      </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
