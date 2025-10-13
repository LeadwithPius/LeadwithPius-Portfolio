import React from 'react';
import Aurora from './Aurora';

export default function Intro() {
  return (
    <section id="intro" className="intro-section">
      {/* Aurora background (pointer-events: none so text is clickable) */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="intro-content">
        <h1 className="typing-text">Hello, I'm Bruce Pius</h1>
        <p className="subtext">Developer • Designer • Problem Solver</p>
        <a href="#projects" className="intro-btn">View My Work</a>
      </div>
    </section>
  );
}
