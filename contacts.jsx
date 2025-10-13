import React from 'react';

export default function Contacts() {
  return (
    <section id="contacts">
      <h2>Contact Me</h2>
      <div className="contact-buttons">
        <a href="mailto:bruce_pius@outlook.com" className="contact-btn email"><i className="fas fa-envelope"></i> Email Me</a>
        <a href="tel:+254799138291" className="contact-btn phone"><i className="fas fa-phone-alt"></i> Call Me</a>
        <a href="https://www.linkedin.com/in/bruce-pius-034821256/" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin"><i className="fab fa-linkedin"></i> LinkedIn</a>
        <a href="https://github.com/LeadwithPius" target="_blank" rel="noopener noreferrer" className="contact-btn github"><i className="fab fa-github"></i> GitHub</a>
      </div>
    </section>
  );
}
