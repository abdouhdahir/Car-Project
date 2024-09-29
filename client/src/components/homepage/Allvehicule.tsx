import {useState,useEffect} from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import Card from '../common/Card';


const Allvehicule = () => {
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
          <div className='pb-32 flex flex-col justify-center items-center ml-60'>
          <div className='flex justify-between items-center'>
          <h2 className='font-bold text-3xl'>Explorez Tous les Véhicules</h2>
          <div className='flex gap-2 items-center mb-8'>
            <p>Voir Tout</p>
            <BsArrowUpRight />
          </div>
          </div>
          
            <Card/>
        </div>
      ):(
        <div className='pb-32 ml-60'>
      <div className='flex justify-between items-center'>
      <h2 className='font-bold text-3xl'>Explorez Tous les Véhicules</h2>
      <div className='flex gap-2 items-center mb-8'>
        <p>Voir Tout</p>
        <BsArrowUpRight />
      </div>
      </div>
      
        <Card/>
    </div>
      )
      }
    </div>
  )
}

export default Allvehicule;

