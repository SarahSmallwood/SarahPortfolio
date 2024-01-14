import React from 'react';
import ContactForm from './ContactForm';


function ContactButton() {
  return (
    <div>
        <button className="contact" onClick={<ContactForm/>}>
            CONTACT ME
        </button>
    </div>
  )
}

export default ContactButton
