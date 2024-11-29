import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x2f6tka", // Ganti dengan Service ID dari EmailJS
        "template_ow94h2c", // Ganti dengan Template ID dari EmailJS
        form.current,
        "Mpo3m-9vlhsbHftjJ" // Ganti dengan Public Key dari EmailJS
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Message Failed to Send.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
