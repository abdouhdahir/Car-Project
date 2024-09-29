import {useState,useEffect} from 'react'
import { TbCarSuv } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa6";
import { LiaCarSideSolid } from "react-icons/lia";
import { FaCar } from "react-icons/fa";
import { MdElectricCar } from "react-icons/md";
import Searchebar from '../common/Searchebar';

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
   <div>
    {
      windowWidth < 500 ? (
        <div className="flex flex-col gap-10 justify-center items-center text-white">
       <div className='flex flex-col gap-5 px-4 justify-center items-center'>
       <p className='text-2xl'>Trouvez des voitures à vendre et à louer près de chez vous</p>
        <h1 className='font-black text-7xl'>Trouvez la voiture parfaite</h1>
       </div>
        <div>
        <Searchebar/>
        </div>
        <p>Ou explorez les modèles en vedette</p>
        <div className='flex flex-col gap-3 '>
          <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
          <TbCarSuv />
          <p>SUV</p>
          </div>
          <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
          <FaCarSide />
          <p>Berline</p>
          </div>
          <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
          <LiaCarSideSolid />
          <p>Hatchback</p>
          </div>
          <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
          <FaCar />
          <p>Coupé</p>
          </div>
          <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
          <MdElectricCar />
          <p>Hybride</p>
          </div>
        </div>
      </div>
      ):
      ( 
      <div className="flex flex-col gap-10 items-center text-white">
      <p className='text-2xl'>Trouvez des voitures à vendre et à louer près de chez vous</p>
      <h1 className='font-black text-7xl'>Trouvez la voiture parfaite</h1>
      <div>
      <Searchebar/>
      </div>
      <p>Ou explorez les modèles en vedette</p>
      <div className='flex gap-3 '>
        <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
        <TbCarSuv />
        <p>SUV</p>
        </div>
        <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
        <FaCarSide />
        <p>Berline</p>
        </div>
        <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
        <LiaCarSideSolid />
        <p>Hatchback</p>
        </div>
        <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
        <FaCar />
        <p>Coupé</p>
        </div>
        <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
        <MdElectricCar />
        <p>Hybride</p>
        </div>
      </div>
    </div>)
    }
   </div>
  );
};



export default Hero;

