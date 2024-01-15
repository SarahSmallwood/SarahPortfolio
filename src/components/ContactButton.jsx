import React from 'react';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';


function ContactButton() {
  return (
    <div>
        <button className="contact" >
          <Link to='/ContactForm'></Link>
            CONTACT ME
        </button>
    </div>
  )
}

export default ContactButton
