import React, { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', eventDate:'', message:'' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you! We will get back to you within 24 hours. 💌');
    setForm({ name:'', email:'', phone:'', eventDate:'', message:'' });
  };

  return (
    <section id="contact" className="contact-page">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="contact-tag">Get in Touch</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Let's Create <span>Magic</span> Together</h2>
            <p className="contact-desc">Ready to book your date or have questions? Reach out and let's start planning.</p>
            <div className="contact-details">
              <div className="contact-item"><span className="contact-icon">📍</span><div><h4>Visit Us</h4><p>Banjara Hills, Hyderabad</p></div></div>
              <div className="contact-item"><span className="contact-icon">📞</span><div><h4>Call Us</h4><p>+91 98765 43210</p></div></div>
              <div className="contact-item"><span className="contact-icon">✉️</span><div><h4>Email Us</h4><p>hello@weddingdiarieshyd.com</p></div></div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <div className="form-group"><input type="text" name="name" placeholder="Your Name *" value={form.name} onChange={handleChange} required /></div>
              <div className="form-group"><input type="email" name="email" placeholder="Email Address *" value={form.email} onChange={handleChange} required /></div>
              <div className="form-group"><input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} /></div>
              <div className="form-group"><input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} /></div>
              <div className="form-group"><textarea name="message" placeholder="Tell us about your vision..." rows="4" value={form.message} onChange={handleChange}></textarea></div>
              <button type="submit" className="btn-primary" style={{ width:'100%' }}>Send Message ✨</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;