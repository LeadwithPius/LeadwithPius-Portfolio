import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Simple client-side "submit" placeholder
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3500);
    }, 900);
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
        <label htmlFor="contact-email">Your email</label>
        <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
        <label htmlFor="contact-message">Your message</label>
        <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="Your message" required rows={5} />
        <button type="submit" className="btn">
          {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
        </button>
      </form>
      <p className="contact-note">Or reach me directly via the links below.</p>
    </>
  );
}
