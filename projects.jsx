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
    link: ''
  },
  {
    title: 'TechWeek 3.0',
    description: 'Organised media & stage operations for TechWeek 3.0 at University of Nairobi.',
    img: '/assets/project-3.jpg',
    link: ''
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
