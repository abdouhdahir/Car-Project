import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiUser } from 'react-icons/ci';
import Hero from '../components/homepage/Hero';
import bgi from '../asset/img/BackgroundHero.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseSharp } from 'react-icons/io5';
import Mobilenav from '../components/homepage/Mobilenav';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const affiche = () => {
    setMobileNav(!mobileNav);
  };

  const supprime = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div>
      {windowWidth < 500 ? (
        <div
          className='relative flex flex-col pb-44'
          style={{ backgroundImage: `url(${bgi})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='flex justify-between text-white items-center pt-3 pb-40 px-9 mb-20'>
            <h1 className='text-2xl font-black text-white'>DjibCars Express</h1>
            <div className='flex gap-10 items-center'>
              {mobileNav ? (
                <IoCloseSharp className='text-3xl md:text-4xl lg:text-5xl' onClick={supprime} />
              ) : (
                <RxHamburgerMenu className='text-3xl md:text-4xl lg:text-5xl' onClick={affiche} />
              )}
            </div>
          </div>
          <Hero />
        </div>
      ) : (
        <div
          className='relative flex flex-col pb-44'
          style={{ backgroundImage: `url(${bgi})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className='flex justify-between items-center p-10 pb-40'>
            <h1 className='text-4xl font-black text-white'>DjibCars Express</h1>
            <nav>
              <ul className='flex gap-10 items-center text-white'>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/annonces">Annonces</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/apropos">À propos</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className='flex items-center gap-1'><CiUser /><Link to="/connexion">Se connecter</Link></li>
                <li><Link className='bg-white text-black p-2 rounded-xl' to="/soumettre-annonce">Soumettre une annonce</Link></li>
              </ul>
            </nav>
          </div>
          <Hero />
          <div>
            <div
              className='w-[100%] h-[2px] bg-bgmarque absolute bottom-0 pb-20'
              style={{ borderRadius: '90px 90px 0 0' }}
            ></div>
          </div>
        </div>
      )}
      {mobileNav ? <Mobilenav /> : null}
    </div>
  );
};

export default Header;
