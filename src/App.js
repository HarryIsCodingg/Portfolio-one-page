import { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './App.css';
import avatar from './assets/images/avatar.png';
import HomePage from './pages/home-page/HomePage';
import AboutMe from './pages/about-me/AboutMe';
import Startup from './pages/startup/Startup';
import WorkPage from './pages/work-page/WorkPage';
import ContactPage from './pages/contact-page/ContactPage';
import Footer from './components/shared/footer/Footer';

const navItems = [
  { id: 'home', label: 'home' },
  { id: 'about-me', label: 'about-me' },
  { id: 'startup', label: 'startup' },
  { id: 'works', label: 'works' },
  { id: 'contacts', label: 'contact' }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <HashRouter>
      <button type='button' className='mobile-menu-button' onClick={handleMenuToggle}>
        <Icon icon={isMenuOpen ? 'line-md:menu-to-close-alt-transition' : 'line-md:close-to-menu-alt-transition'} fontSize={28} />
      </button>

      {isMenuOpen && <div className='sidebar-backdrop' onClick={handleMenuClose} aria-hidden='true' />}

      <div className='one-page-layout'>
        <aside className={`left-sidebar ${isMenuOpen ? 'open' : ''}`}>
          <div className='profile-details'>
            <img src={avatar} alt='landing' className='sidebar-avatar' />
            <h1>Harinder Partap Singh</h1>
            <p>
              Founder, lead developer of HomeEatz. I crafts responsive websites where
              technologies meet creativity.
            </p>
          </div>

          <nav className='sidebar-navigation'>
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className='sidebar-link' onClick={handleMenuClose}>
                <span className='primary-color'>#</span>
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <main className='right-content'>
          <section id='home'>
            <HomePage />
          </section>
          <section id='about-me'>
            <AboutMe />
          </section>
          <section id='startup'>
            <Startup />
          </section>
          <section id='works'>
            <WorkPage />
          </section>
          <section id='contacts'>
            <ContactPage />
          </section>
          <Footer />
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
