import React, { useEffect, useState } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Team from './components/Team';
import Contact from './components/Contact';
import Blog from './components/Blog';
import logo from './static/logo.png';
import burger from './static/burg.png';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClose = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const isMobile = windowWidth <= 768;

  return (
    <div className="App" onClick={handleMenuClose}>
      <header className={`navbar pl-10 bg-black text-white md:mr-10 fixed top-0 w-screen b ${showShadow ? 'opaque' : ''}`}>
        <div className="flex justify-between items-center w-screen">
          <div className="flex items-center">
            <img src={logo} className="w-14 mr-4" alt="logo" />
            <h1 className="text-lg md:text-3xl font-bold"> Circlez </h1>
          </div>

          <div className="flex justify-end">
            {isMobile ? (
              <div className='flex justify-end'>
                <img
                  src={burger}
                  className="w-10 mr-4 cursor-pointer"
                  alt="menu-icon"
                  onClick={toggleMenu}
                />
              </div>
            ) : (
              <div className="ml-5 mr-10">
                <ul className="nav-links flex space-x-4 justify-end">
                  <li>
                    <Link
                      className="hover:text-blue-400 text-sm md:text-md hover:cursor-pointer"
                      to="home"
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-400 text-sm md:text-md hover:cursor-pointer"
                      to="about"
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-400 text-sm md:text-md hover:cursor-pointer"
                      to="work"
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-400 text-sm md:text-md hover:cursor-pointer"
                      to="team"
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-400 text-sm md:text-md hover:cursor-pointer"
                      to="contact"
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-blue-400 text-sm md:text-md hover:cursor-pointer"
                      to="blog"
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {showMenu && isMobile && (
          <div className="md:hidden bg-black text-white absolute w-full top-20 left-0 z-10">
            <ul className="py-2">
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-blue-400 hover:text-black"
                  to="home"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-blue-400 hover:text-black"
                  to="about"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-blue-400 hover:text-black"
                  to="work"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-blue-400 hover:text-black"
                  to="team"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-blue-400 hover:text-black"
                  to="contact"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-2 hover:bg-blue-400 hover:text-black"
                  to="blog"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
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
