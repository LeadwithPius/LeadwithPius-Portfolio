import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

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
