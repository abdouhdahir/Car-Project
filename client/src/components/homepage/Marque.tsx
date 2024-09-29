import {useState,useEffect} from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import audi from '../../asset/img/marque-voi/audi.png'
import bmw from '../../asset/img/marque-voi/bmw.jpeg'
import peugeo from '../../asset/img/marque-voi/peugeo.png'
import volvagen from '../../asset/img/marque-voi/volvagen.png'
import ford from '../../asset/img/marque-voi/ford.jpeg'
import merco from '../../asset/img/marque-voi/merco.png'

const Marque = () => {
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
      { windowWidth < 500 ?(
      <div className='flex flex-col gap-8 px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60 bg-bgmarque mb-32 py-24'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl sm:text-3xl'>Découvrez Nos Marques Premium</h2>
        <div className='flex gap-2 items-center'>
          <p>Voir Toutes les Marques</p>
          <BsArrowUpRight />
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-10'>
        <div className='flex flex-col justify-center items-center gap-2 py-8 px-6 sm:px-8 lg:px-10 bg-white border-2 border-gray-100'>
          <img className='w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px]' src={audi} alt="Audi" />
          <p>Audi</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 py-8 px-6 sm:px-8 lg:px-10 bg-white border-2 border-gray-100'>
          <img className='w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px]' src={bmw} alt="BMW" />
          <p>BMW</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 py-8 px-6 sm:px-8 lg:px-10 bg-white border-2 border-gray-100'>
          <img className='w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px]' src={ford} alt="Ford" />
          <p>Ford</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 py-8 px-6 sm:px-8 lg:px-10 bg-white border-2 border-gray-100'>
          <img className='w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px]' src={merco} alt="Mercedes Benz" />
          <p>Mercedes Benz</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 py-8 px-6 sm:px-8 lg:px-10 bg-white border-2 border-gray-100'>
          <img className='w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px]' src={peugeo} alt="Peugeot" />
          <p>Peugeot</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2 py-8 px-6 sm:px-8 lg:px-10 bg-white border-2 border-gray-100'>
          <img className='w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px]' src={volvagen} alt="Volkswagen" />
          <p>Volkswagen</p>
        </div>
      </div>
    </div>
    ):(
        <div className='flex flex-col gap-8 px-60 bg-bgmarque mb-32 py-24'>
        <div className='flex justify-between items-center'>
            <h2 className='font-bold text-3xl'>Découvrez Nos Marques Premium</h2>
            <div className='flex gap-2 items-center'>
                <p>Voir Toutes les Marques</p>
                <BsArrowUpRight />
            </div>
        </div>
        <div className='flex items-center justify-between gap-10 '>
            <div className='flex flex-col justify-center items-center gap-2 py-8 px-10 bg-white border-2 border-gray-100 w-full'>
              <img className='w-[80px] h-[80px]' src={audi} alt="" />
              <p>Audi</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-8 px-10 bg-white border-2 border-gray-100 w-full'>
              <img className='w-[80px] h-[80px]' src={bmw} alt="" />
              <p>BMW</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-8 px-10 bg-white border-2 border-gray-100 w-full'>
              <img className='w-[80px] h-[80px]' src={ford} alt="" />
              <p>Ford</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-8 px-10 bg-white border-2 border-gray-100 w-full'>
              <img className='w-[80px] h-[80px]' src={merco} alt="" />
              <p>Mercedes Benz</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-8 px-10 bg-white border-2 border-gray-100 w-full'>
              <img className='w-[80px] h-[80px]' src={peugeo} alt="" />
              <p>Peugeot</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 py-8 px-10 bg-white border-2 border-gray-100 w-full'>
              <img className='w-[80px] h-[80px]' src={volvagen} alt="" />
              <p>Volkswagen</p>
            </div>
        </div>
    </div>
      )
      }
    </div>
  )
}

export default Marque
