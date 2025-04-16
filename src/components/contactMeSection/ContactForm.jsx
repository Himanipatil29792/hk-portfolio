import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zbqj41x', 'template_o5d51lf', form.current, {
        publicKey: '0GzpPegk3as8OgdQd',
      })
      .then(
        () => {
          //console.log('SUCCESS!');
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Succesfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input name="from_name"           value={name}
          onChange={handleName}  type="text" placeholder="Your Name" className="h-12 bg-lightBrown rounded-lg px-2" required />
        <input name="from_email"  value={email}
          onChange={handleEmail} type="email" placeholder="Your Email" className="h-12 bg-lightBrown rounded-lg px-2" required />
        <textarea name="message" value={message}
          onChange={handleMessage} type="text" placeholder="Message" rows="9" cols="50" className="bg-lightBrown rounded-lg px-2" required />
        <button type="submit" className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500">Send</button>
      </form>
    </div>
  )
}

export default ContactForm;