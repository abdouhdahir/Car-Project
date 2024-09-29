import {useState,useEffect} from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import CardFlex from '../common/CardFlex';


const Popular = () => {
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
        windowWidth < 500 ?(
          <div className='bg-bgpopu text-white py-40 mb-60 flex flex-col gap-10'>
        <div className='flex justify-between px-20'>
            <h2 className='font-bold text-4xl'>Les plus populaire</h2>
            <div className='flex gap-2 items-center mb-8'>
        <button>Voir Tout</button>
        <BsArrowUpRight />
      </div>
        </div>
      <CardFlex/>
    </div>
        ):(
          <div className='bg-bgpopu text-white py-40 mb-60 flex flex-col gap-10'>
        <div className='flex justify-between px-20'>
            <h2 className='font-bold text-4xl'>Les plus populaire</h2>
            <div className='flex gap-2 items-center mb-8'>
        <button>Voir Tout</button>
        <BsArrowUpRight />
      </div>
        </div>
      <CardFlex/>
    </div>
        )
      }
    </div>
  )
}

export default Popular
