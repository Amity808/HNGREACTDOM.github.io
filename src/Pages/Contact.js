import React from 'react'
import Footer from '../component/footer/footer'
import './Contact.css'

function Contact() {
  return (
    <div>
        <div className='container'>
        <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form action="" className='form'>
                <div className='name'>
                  <span>
                  <label for="fname">First name <br />
                <input type="text" name="first_name" id="first_name" placeholder="Enter your first name"/>
                </label>
                  </span>
                  <span className='lname-padd'>
                  <label for="fname" id='last_name'>Last name <br />
                <input type="text" name="lastname" id="lname" placeholder="Enter your last name"/>
                </label>
                  </span>
                </div>
                
                 <br />
                <label for="fname">Email <br />
                <input type="text" name="email" id="email" placeholder="yourname@email.com"/><br />
                </label>
                <label for="message">Message</label> <br />
                <textarea name="t-messag" id="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea><br />
                <input type="radio" name="btn-radio" id="btn-radio"/>
                <span>You agree to providing your data to  who may contact you.</span><br />
                <button id='btn_submit'>Send message</button>
            </form>
            <Footer />
        </div>
        
    </div>
  )
}

export default Contact
