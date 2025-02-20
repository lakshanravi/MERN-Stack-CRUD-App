import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Nav from '../Nav/Nav';

function ContactUs() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qkts0tl', 'template_catbpfg', form.current, {
        publicKey: 'QGSbG28pszZSr-kQ_',
      })
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent Successfully', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message Sent Failed', error.text);
        },
      );
    };
  return (
    <div>
      <Nav/>
    <h1>ContactUs</h1>
   
        {/* this one get from emailjs site */}
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

    



    </div>
  )
}

export default ContactUs