import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_t03jcbk";
const TEMPLATE_ID = "template_o3nq39k";
const PUBLIC_KEY = "7DVCzFr3jgn5HTrSi";

function ContactForm () {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };
    return (
        <div className='contactForm'>
          <Form onSubmit={handleOnSubmit}>
            <Form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
              name='user_email'
              placeholder='Email…'
              required
              icon='mail'
              iconPosition='left'
            />
            <Form.Field
              id='form-input-control-last-name'
              control={Input}
              label='Name'
              name='user_name'
              placeholder='Name…'
              required
              icon='user circle'
              iconPosition='left'
            />
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Message'
              name='user_message'
              placeholder='Message…'
              required
            />
            <Button type='submit' color='black'>Submit</Button>
          </Form>
        </div>
      );
  
}

export default ContactForm