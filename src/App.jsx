import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';
import Skills from './components/Skills';
import Footer from './components/Footer';

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