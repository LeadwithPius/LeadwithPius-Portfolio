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
      <Navbar />
      <main>
        <Intro />
        <About />
        <Projects />
        <ContactForm />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
