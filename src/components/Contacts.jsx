import React from 'react';

const LINKS = [
  {
    href: 'mailto:bruce_pius@outlook.com',
    label: 'Email Me',
    icon: 'fas fa-envelope',
  },
  {
    href: 'tel:+254799138291',
    label: 'Call Me',
    icon: 'fas fa-phone-alt',
  },
  {
    href: 'https://www.linkedin.com/in/bruce-pius-034821256/',
    label: 'LinkedIn',
    icon: 'fab fa-linkedin',
  },
  {
    href: 'https://github.com/LeadwithPius',
    label: 'GitHub',
    icon: 'fab fa-github',
  },
];

export default function Contacts() {
  return (
    <div className="contact-buttons">
      {LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="contact-icon-btn"
          aria-label={link.label}
          title={link.label}
          {...(link.href.startsWith('http')
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          <i className={link.icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
