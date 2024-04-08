import React from 'react'
import "./App.css";
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/hero/Hero';
import Parallal from './Components/parallal/Parallal';
import Services from './Components/services/Services';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';
import Cursor from './Components/cursor/Cursor';



const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services"><Parallal type="services" /></section>
      <section><Services /></section>
      <section id="Portfolio"><Parallal type="portfolio" /></section>
      <Portfolio />
      <section id="Contact"><Contact /></section>

    </div>
  )
}

export default App
