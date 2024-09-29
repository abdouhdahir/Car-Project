import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
}

const Footer = () => {
  return (
    <div className='relative flex flex-col gap-10'>
      <div className=' flex flex-col gap-20 bg-bgpopu pb-32 px-40 pt-20  '>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col text-white'>
          <h2 className='font-semibold text-2xl'>Rejoigner DjibCars Express</h2>
          <p>Recevez tout les nouvelles des prix , produit et plus .</p>
        </div>
        <div className='flex gap-4 bg-bgcardflex py-2 rounded-xl px-5'>
          <input className='bg-transparent text-white outline-none placeholder:text-gray-200 w-96' type="text" placeholder='Votre adresse mail'/>
          <button className='bg-blue-600 px-4 py-2 text-white rounded-xl'>Incrivez-vous</button>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-4 text-white'>
          <h3 className='text-lg font-medium'>Entreprise</h3>
          <nav>
            <ul className='flex flex-col gap-2 text-white'>
              <li className='text-sm'> À propos de nous</li>
              <li className='text-sm'>Blog</li>
              <li className='text-sm'>Services</li>
              <li className='text-sm'>FAQ</li>
              <li className='text-sm'>Conditions générales</li>
              <li className='text-sm'>Nous contacter</li>
            </ul>
          </nav>
        </div>
         <div className='flex flex-col gap-4 text-white'>
          <h3 className='text-lg font-medium'>Liens rapides</h3>
          <nav>
            <ul className='flex flex-col gap-2 text-white'>
              <li className='text-sm'>Prendre contact</li>
              <li className='text-sm'>Centre d'aide</li>
              <li className='text-sm'>Chat en direct</li>
              <li className='text-sm'>Conditions générales</li>
              <li className='text-sm'>Comment ça marche</li>
            </ul>
          </nav>
        </div>
         <div className='flex flex-col gap-4 text-white'>
          <h3 className='text-lg font-medium'>Nos marques</h3>
          <nav>
            <ul className='flex flex-col gap-2 text-white'>
              <li className='text-sm'> Toyota</li>
              <li className='text-sm'>Porsche</li>
              <li className='text-sm'>Audi</li>
              <li className='text-sm'>BMW</li>
              <li className='text-sm'>Ford</li>
              <li className='text-sm'>Nissan</li>
              <li className='text-sm'>Peugeot</li>
              <li className='text-sm'>Volkswagen</li>
            </ul>
          </nav>
        </div>
         <div className='flex flex-col gap-4 text-white'>
          <h3 className='text-lg font-medium'>Types de véhicules</h3>
          <nav>
            <ul className='flex flex-col gap-2 text-white'>
              <li className='text-sm'>Berline</li>
              <li className='text-sm'>Hayon</li>
              <li className='text-sm'>SUV</li>
              <li className='text-sm'>Hybride</li>
              <li className='text-sm'>Électrique</li>
              <li className='text-sm'>Coupé</li>
              <li className='text-sm'>Camion</li>
              <li className='text-sm'>Cabriolet</li>
            </ul>
          </nav>
        </div>
         <div className='flex flex-col gap-10 text-white'>
          <div className='flex flex-col gap-10'>
          <h3 className='text-lg font-medium'>Notre application mobile</h3>
          <div className='flex flex-col gap-2'>
          <div className='flex justify-center cursor-pointer hover:bg-white group hover:text-black gap-4 items-center bg-bgcardflex px-2 py-1 rounded-xl text-white'>
          <FaApple className='text-3xl'/>
          <div className='flex flex-col gap-1 text-white group-hover:text-black'>
            <p>Télécharger sur</p>
            <h3>L'Apple Store</h3>
          </div>
          </div>
          <div className='flex justify-center cursor-pointer hover:bg-white group hover:text-black gap-4 items-center bg-bgcardflex px-2 py-1 rounded-xl text-white'>
          <FaGooglePlay className='text-3xl'/>
          <div className='flex flex-col gap-1 text-white group-hover:text-black'>
            <p>Disponible sur</p>
            <h3>Google Play</h3>
          </div>
          </div>
          </div>
          </div>
          <div className='flex flex-col gap-10 text-white'>
            <h3 className='text-lg font-medium'>Restez en contact avec nous.</h3>
            <div className='flex gap-2 text-white text-sm'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex justify-between items-center text-white'>
        <p>© 2024 exemple.com. All rights reserved.</p>
        <div className='flex gap-2 items-center'>
          <p>Terms & Conditions </p>
          <div className='w-[5px] h-[5px] bg-white'></div>
          <p>Privacy Notice</p>
          <div onClick={scrollToTop}>
      <FaArrowUp className='absolute bottom-[-10px] right-[-125px] bg-blue-600 p-4 rounded-full text-6xl cursor-pointer' />
    </div>
  </div>
      </div>
    </div>
    <div className='w-[100%] h-[2px] bg-bgpopu absolute top-[-90px] pb-32 ' style={{borderRadius:"90px 90px 0 0"}}></div>

    </div>
  )
}

export default Footer
