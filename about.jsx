import React from 'react';
import profilePlaceholder from '../assets/DSC_1807(1).jpg'; // optional placeholder path

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-photo">
          <img src={profilePlaceholder} alt="Bruce Pius portrait" />
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
