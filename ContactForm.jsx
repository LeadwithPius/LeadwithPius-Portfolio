import React, { useState } from 'react';
import { motion } from 'motion/react';

// Encodes a plain object as an application/x-www-form-urlencoded string,
// which is what Netlify's form-handling endpoint expects.
function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function ContactForm() {
  const [status, setStatus] = useState(''); // '', 'sending', 'sent', 'error'
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: bots fill every field, humans never see this one.
    if (e.target['bot-field'] && e.target['bot-field'].value) {
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...form }),
      });

      if (!response.ok) throw new Error(`Netlify responded ${response.status}`);

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setStatus('error');
      setTimeout(() => setStatus(''), 4500);
    }
  };

  return (
    <div className="contact-slider">
      <div className="contact-stage">
        <motion.form
          id="contact-form"
          className="contact-card glass"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -3 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.55 }}
        >
          {/* Required so Netlify can match this submission to the form
              registered via the hidden static form in index.html. */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field: hidden from real users via CSS, bots fill it in. */}
          <p className="hp-field" aria-hidden="true">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" tabIndex="-1" autoComplete="off" />
            </label>
          </p>

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
                    : status === 'error'
                      ? 'Try again'
                      : 'Send Message'}
                <i
                  className={
                    status === 'sent'
                      ? 'fa-solid fa-check'
                      : status === 'error'
                        ? 'fa-solid fa-triangle-exclamation'
                        : 'fa-solid fa-paper-plane'
                  }
                  aria-hidden="true"
                />
              </motion.button>

              {status === 'error' && (
                <p className="contact-status contact-status-error" role="alert">
                  Something went wrong sending that — try again, or email me directly.
                </p>
              )}
              {status === 'sent' && (
                <p className="contact-status contact-status-sent" role="status">
                  Thanks! I’ll get back to you soon.
                </p>
              )}
            </div>
          </div>
        </motion.form>
        <div className="contact-backdrop" aria-hidden="true" />
      </div>
    </div>
  );
}
