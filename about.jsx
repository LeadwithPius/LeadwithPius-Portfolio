import React from 'react';
import { motion } from 'motion/react';

const PLACEHOLDER_AVATAR = 'https://placehold.co/400x400?text=BP';

export default function About() {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container glass"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="about-photo">
          <img
            src="/assets/portrait.png"
            alt="Bruce Pius portrait"
            onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_AVATAR; }}
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
           Dedicated Computer Science professional combining technical expertise in full-stack web development with a strong background in customer service and digital content management. Adept at diagnosing technical issues, managing database structures, and streamlining user experiences.
            Demonstrated leadership capabilities and a commitment to excellence through organizing impactful industry engagement initiatives.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
