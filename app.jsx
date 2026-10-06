import React from 'react';
import Navbar from './navbar';
import Intro from './intro';
import About from './about';
import Projects from './projects';
import ContactForm from './ContactForm';
import Contacts from './contacts';
import Skills from './skills';
import Footer from './footer';

export default function App() {
  return (
    <>

      <div className="ambient-bg" aria-hidden="true">
        <span className="ambient-blob ambient-blob-1" />
        <span className="ambient-blob ambient-blob-2" />
        <span className="ambient-blob ambient-blob-3" />
      </div>
      <Navbar />
      <main>
        <Intro />
        <About />
        <Projects />
        <section id="contact">
          <h2>Contact</h2>
          <ContactForm />
          <Contacts />
        </section>
        <Skills />
      </main>
      <Footer />
    </>
  );
}