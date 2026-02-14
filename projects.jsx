import React from 'react';

const PROJECTS = [
  {
    title: 'Organisation website',
    description: 'I designed a website for a charity organisation I am part of to help improve visibility and credibility.',
    img: '/assets/project-1.jpg',
    link: '' // Add live or repo URL when available
  },
  {
    title: 'Matatu fleet management system',
    description: 'A system to help track public service vehicles: mileage, income vs targets, and report issues.',
    img: '/assets/project-2.jpg',
    link: 'https://trip-tally-system.lovable.app/'
  },
  {
    title: 'FarmNet',
    description: 'A blockchain-powered digital platform empowering Kenyan smallholder farmers with expert advisory, market access, weather and climate alerts, and farm input supply. Connects farmers, agronomists, and supply chains through real-time data and secure trade—designed for mobile accessibility even with limited connectivity.',
    img: '/assets/project-3.jpg',
    link: 'https://farmnet-two.vercel.app/'
  },
  {
    title: 'IESC 8.0',
    description: 'Headed the Marketing den and assisted the media den on event day.',
    img: '/assets/project-4.jpg',
    link: ''
  },
  {
    title: 'FLF 1.0',
    description: 'Conceptualised the event and led media and marketing efforts.',
    img: '/assets/project-5.jpg',
    link: ''
  },
  {
    title: 'Knight Runner',
    description: 'An endless runner game built with JavaFX. Control a knight avoiding obstacles and collecting totems; features progressive difficulty, scoring, and pause/restart. Built with a modular OOP structure (Knight, Obstacle, Totem, GameManager, CollisionDetector).',
    img: '/assets/project-6.jpg',
    link: 'https://github.com/LeadwithPius/Game-dev'
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {PROJECTS.map((p, i) => (
          <article className="project-card" key={i}>
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {p.link ? <a href={p.link} className="btn" target="_blank" rel="noopener noreferrer">View Project</a> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
