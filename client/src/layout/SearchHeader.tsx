import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import Mobilenav from '../components/homepage/Mobilenav';
import Searchebar from '../components/common/Searchebar';


const SearchHeader = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobileNav, setMobileNav] = useState(false);
    useEffect(() => {


      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    const affiche = () => {
        setMobileNav(!mobileNav)
      }
      const supprime = () => {
        setMobileNav(!mobileNav)
      }

  return (
    <div>
       <div>
       {
      windowWidth < 500 ? (
       
        <div className='relative flex flex-col pb-44 '>
    <div className='flex justify-between text-white items-center pt-3 pb-40 px-9 mb-20'>
    <Link to="/"><h1 className='text-2xl font-black text-white'>DjibCars Express</h1></Link>
        <div className='flex gap-10 items-center'>       
        {mobileNav ?  <IoCloseSharp  className="text-3xl md:text-4xl lg:text-5xl" onClick={supprime}/>:
        <RxHamburgerMenu className="text-3xl md:text-4xl lg:text-5xl" onClick={affiche}/> }
        </div>
    </div>
    <Searchebar/>
</div>
       
      ) : 
        (<div className='relative flex flex-col pb-44 bg-bgpopu'>
        <div className='flex justify-between items-center p-10 pb-20' >
        <h1 className='text-4xl font-black text-white'>DjibCars Express</h1>
            <nav>
                <ul className='flex gap-10 items-center text-white'>
                <li><Link to="/">Accueil</Link></li>
                    <li>Annonces</li>
                    <li>Blog</li>
                    <li>À propos</li>
                    <li>Contact</li>
                    <li className='flex items-center gap-1'><CiUser /><Link to="/connexion">Se connecter</Link></li>
                    <li><button className='bg-white text-black p-2 rounded-xl'> Soumettre une annonce</button></li>
                </ul>
            </nav>
    </div>
    <div className='flex justify-center'>
    <Searchebar/>
    </div>
    <div>
    <div className='w-[100%] h-[2px] bg-white absolute bottom-0 pb-20 ' style={{borderRadius:"90px 90px 0 0"}}>
    
    </div>
    <div>
    
    </div>
    </div>
    </div>)
      }
      {mobileNav ? <Mobilenav/> : null}
    </div>
    </div>
  )
}

export default SearchHeader
