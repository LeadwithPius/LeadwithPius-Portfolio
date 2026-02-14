import React from 'react';

const PLACEHOLDER_AVATAR = 'https://placehold.co/400x400?text=BP';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
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
            I tend to think of myself as a creative swiss knife — versatile, sharp and ready for anything.
            From organizing impactful events to designing logos, posters, websites, and capturing stories
            through videography and editing — I bring ideas to life across mediums.
          </p>
        </div>
      </div>
    </section>
  );
}
