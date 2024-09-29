import {useState,useEffect} from 'react'
import blog from '../../asset/img/blog.png'
import { FaCheck } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";


const Blog = () => {
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
        <div className='flex flex-col lg:flex-row gap-0 justify-center mb-60'>
        <div className='w-full lg:w-[805px] h-[300px] lg:h-[691px] relative' style={{ backgroundImage: `url(${blog})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
          <CiPlay1 className='bg-white cursor-pointer p-4 lg:p-6 rounded-full text-5xl lg:text-7xl absolute top-[44%] right-[48%]' />
        </div>
        <div className='bg-bgblog rounded-b-xl lg:rounded-r-xl flex flex-col gap-6 lg:gap-10 justify-center items-start p-10 lg:px-20'>
          <h2 className='text-2xl lg:text-4xl font-bold'>Get A Fair Price For Your Car <br />Sell To Us Today</h2>
          <p className='text-sm lg:text-base'>We are committed to providing our customers with exceptional service, competitive <br />pricing, and a wide range of options.</p>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-2 items-center'>
              <FaCheck className='bg-white p-1 rounded-full text-xl lg:text-2xl' />
              <p className='font-semibold text-sm lg:text-base'>We are the UK’s largest provider, with more patrols in more places</p>
            </div>
            <div className='flex gap-2 items-center'>
              <FaCheck className='bg-white p-1 rounded-full text-xl lg:text-2xl' />
              <p className='font-semibold text-sm lg:text-base'>You get 24/7 roadside assistance</p>
            </div>
            <div className='flex gap-2 items-center'>
              <FaCheck className='bg-white p-1 rounded-full text-xl lg:text-2xl' />
              <p className='font-semibold text-sm lg:text-base'>We fix 4 out of 5 cars at the roadside</p>
            </div>
          </div>
          <div className='flex gap-2 items-center mt-4 lg:mb-8 bg-blue-600 p-4 lg:p-5 text-white rounded-xl'>
            <button className='text-sm lg:text-base'>Voir Tout</button>
            <BsArrowUpRight className='text-sm lg:text-base' />
          </div>
        </div>
      </div>
      
        ):(
          <div className='flex gap-0 justify-center mb-60'>
      <div className='w-[805px] h-[691px] relative' style={{backgroundImage: `url(${blog})`, backgroundRepeat:"no-repeat"}}>
      <CiPlay1 className='bg-white cursor-pointer p-6 rounded-full text-7xl absolute top-[44%] right-[48%]'/>

      </div>
      <div className='bg-bgblog rounded-r-xl flex gap-10 flex-col justify-center items-start px-20'>
        <h2 className='text-4xl font-bold'>Get A Fair Price For Your Car <br />Sell To Us Today</h2>
        <p>We are committed to providing our customers with exceptional service, competitive <br />
        pricing, and a wide range of</p>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-1 items-center'>
            <FaCheck className='bg-white p-1 rounded-full text-2xl'/>
            <p className='font-semibold'>We are the UK’s largest provider, with more 
                patrols in more places</p>
            </div>
            <div className='flex gap-1 items-center'>
            <FaCheck className='bg-white p-1 rounded-full text-2xl'/>
            <p className='font-semibold'>You get 24/7 roadside assistance</p>
            </div>
            <div className='flex gap-1 items-center'>
            <FaCheck className='bg-white p-1 rounded-full text-2xl'/>
            <p className='font-semibold'>We fix 4 out of 5 cars at the roadside</p>
            </div>
        </div>
        <div className='flex gap-2 items-center mb-8 bg-blue-600 p-5 text-white rounded-xl'>
        <button>Voir Tout</button>
        <BsArrowUpRight className=''/>
      </div>
      </div>
    </div>
        )
      }
    </div>
  )
}

export default Blog
