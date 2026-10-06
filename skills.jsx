import React from 'react';
import { motion } from 'motion/react';

// Technologies taken from the resume header:
// MySQL | PostgreSql | MongoDB | Java | NodeJs | React | TailwindCSS
const icon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

const SKILLS = [
  { name: 'MySQL', img: icon('mysql') },
  { name: 'PostgreSQL', img: icon('postgresql') },
  { name: 'MongoDB', img: icon('mongodb') },
  { name: 'Java', img: icon('java') },
  { name: 'Node.js', img: icon('nodejs') },
  { name: 'React.js', img: icon('react') },
  { name: 'Tailwind CSS', img: icon('tailwindcss') },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        My Professional Skills
      </motion.h2>

      <motion.div
        className="skills-grid"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {SKILLS.map((skill) => (
          <div className="skill-card glass" key={skill.name}>
            <img src={skill.img} alt={`${skill.name} logo`} loading="lazy" />
            <p>{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}