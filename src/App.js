import './App.css';
import React, { useEffect, useState } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Team from './components/Team';
import Contact from './components/Contact';
import Blog from './components/Blog';
import logo from './static/logo.png';

function App() {
  const [showShadow, setShowShadow] = useState(false);

  const handleScroll = () => {
    const isHomePage = window.scrollY === 0;
    setShowShadow(!isHomePage);

    const header = document.querySelector('.navbar');
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add('opaque');
      } else {
        header.classList.remove('opaque');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="App">
      <header className="navbar pl-10 bg-black text-white md:mr-10 fixed top-0 w-full b">
        <div className='flex'>
        <img src={logo} className="w-14 mr-4" alt="logo" />
        <h1 className='text-lg md:text-3xl font-bold mt-2'> Circlez </h1>
        

        </div>

        <div className="ml-5 md:ml-0">
          <ul className='nav-links'>
            <li>
              <Link className="hover:text-blue-400 text-sm md:text-md mr-2 md:mr-4" to="home" smooth={true} offset={-50} duration={500}> Home </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 text-sm md:text-md mr-2 md:mr-4" to="about" smooth={true} offset={-50} duration={500}> About </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 text-sm md:text-md mr-2 md:mr-4" to="work" smooth={true} offset={-50} duration={500}> Work </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 text-sm md:text-md mr-2 md:mr-4" to="team" smooth={true} offset={-50} duration={500}> Team </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 text-sm md:text-md mr-2 md:mr-4" to="contact" smooth={true} offset={-50} duration={500}> Contact </Link>
            </li>
            <li>
              <Link className="hover:text-blue-400 text-sm md:text-md mr-2 md:mr-4" to="blog" smooth={true} offset={-50} duration={500}> Blog </Link>
            </li>
          </ul>
        </div>

      </header>

      <main className=''>
        <Element name="home" className="section">
          <Home />
        </Element>
        <Element name="about" className="section">
          <About />
        </Element>
        <Element name="work" className="section">
          <Work />
        </Element>
        <Element name="team" className="section">
          <Team />
        </Element>
        <Element name="contact" className="section">
          <Contact />
        </Element>
      </main>
    </div>
  );
}

export default App;
