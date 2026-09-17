import React from 'react';
import Navbar from './navbar';
import Intro from './intro';
import About from './about';
import Projects from './projects';
import ContactForm from './ContactForm';
import Contacts from './contacts';
import Footer from './footer';

export default function App() {
  return (
    <>
      {/* Ambient blurred color blobs behind the whole page — this is what
          the glass panels (navbar, cards, form) are actually blurring.
          Fixed + pointer-events:none so it never interferes with content. */}
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
      </main>
      <Footer />
    </>
  );
}
