import React from 'react';
import { motion } from 'motion/react';
import CarouselSlider from './CarouselSlider';

const PROJECTS = [
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
    title: 'FLF 1.0',
    description: 'The first Financial Literacy Forum for Engineering students at the University of Nairobi. Conceptualised the event and led media and marketing efforts, promoting sound personal finance management among students.',
    img: '/assets/flf-certificate.png',
    link: ''
  },
  {
    title: 'Knight Runner',
    description: 'An endless runner game built with JavaFX. Control a knight avoiding obstacles and collecting totems; features progressive difficulty, scoring, and pause/restart. Built with a modular OOP structure (Knight, Obstacle, Totem, GameManager, CollisionDetector).',
    img: '/assets/project-6.png',
    link: 'https://github.com/LeadwithPius/Game-dev'
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <CarouselSlider slides={PROJECTS} />
    </section>
  );
}
