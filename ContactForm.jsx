import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3500);
    }, 900);
  };

  return (
    <div className="contact-slider">
      <div className="contact-stage">
        <motion.form
          id="contact-form"
          className="contact-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -3 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.55 }}
        >
          <div className="contact-card-inner">
            <div className="contact-card-body">
              <p className="contact-kicker">Let’s talk</p>
              <h3>Send a message</h3>
              <p className="contact-lead">
                Tell me about an event, a product, or a collaboration.
              </p>

              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />

              <label htmlFor="contact-email">Your email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                required
              />

              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help?"
                required
                rows={4}
              />

              <motion.button
                type="submit"
                className="btn contact-submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={status === 'sending'}
              >
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'sent'
                    ? 'Sent'
                    : 'Send Message'}
                <i
                  className={
                    status === 'sent'
                      ? 'fa-solid fa-check'
                      : 'fa-solid fa-paper-plane'
                  }
                  aria-hidden="true"
                />
              </motion.button>
            </div>
          </div>
        </motion.form>
        <div className="contact-backdrop" aria-hidden="true" />
      </div>
    </div>
  );
}
