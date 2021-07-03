import React from 'react'
import './contact.css';
import Nav from "./nav"
import ArrI from './../ArrI'
function Contact() {
  return (
   <>
   <Nav />
     <div className="contact-con">
       <div className="img-contact-con">
           <div className="img-contact">
           <div className="new-img" style= {{backgroundImage: `url(${ArrI[0]})` }}></div>
           </div>
           <div className="img-contact">
           <div className="new-img" style= {{backgroundImage: `url(${ArrI[6]})` }}></div>
           </div>
           <div className="img-contact">
           <div className="new-img" style= {{backgroundImage: `url(${ArrI[4]})` }}></div>
           </div>
       </div>
       <div className="form-contact">
           <div className="title-con">
               <h1>Contact Us</h1>
           </div>
           <form>
               <label>Full Name</label>
               <input type="text" />
               <label>Email</label>
               <input type="text" />
               <label>Message</label>
               <textarea type="text"></textarea>
               <button className="btn-sh">Submit message</button>
           </form>
       </div>
     </div>
   </>
  );
}

export default Contact;