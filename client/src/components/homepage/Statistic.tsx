import {useState,useEffect} from 'react'

const Statistic = () => {
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
      windowWidth < 500 ?  (
<div className='mb-60 flex flex-col gap-10 lg:gap-20'>
  <div className='flex flex-col lg:flex-row justify-between items-center px-10 lg:px-60 gap-10 lg:gap-0'>
    <div className='flex items-center flex-col gap-1'>
      <h1 className='text-2xl lg:text-4xl font-black'>836M</h1>
      <p className='text-base lg:text-xl'>Voitures vendue</p>
    </div>
    <div className='flex items-center flex-col gap-1'>
      <h1 className='text-2xl lg:text-4xl font-black'>738M</h1>
      <p className='text-base lg:text-xl'>Avis des client</p>
    </div>
    <div className='flex items-center flex-col gap-1'>
      <h1 className='text-2xl lg:text-4xl font-black'>100M</h1>
      <p className='text-base lg:text-xl'>Visiteur par jour</p>
    </div>
    <div className='flex items-center flex-col gap-1'>
      <h1 className='text-2xl lg:text-4xl font-black'>238M</h1>
      <p className='text-base lg:text-xl'>Fournisseur de qualite</p>
    </div>
  </div>
  <div className='w-full h-[1px] bg-gray-500'></div>
</div>

        ):(
          <div className='mb-60 flex flex-col gap-20'>
      <div className='flex justify-between px-60 '>
      <div className='flex items-center flex-col gap-1 '>
        <h1 className='text-4xl font-black'>836M</h1>
        <p className='text-xl'>Voitures vendue</p>
      </div>
      <div className='flex items-center flex-col gap-1 '>
        <h1 className='text-4xl font-black'>738M</h1>
        <p className='text-xl'>Avis des client</p>
      </div>
      <div className='flex items-center flex-col gap-1 '>
        <h1 className='text-4xl font-black'>100M</h1>
        <p className='text-xl'>Visiteur par jour</p>
      </div>
      <div className='flex items-center flex-col gap-1 '>
        <h1 className='text-4xl font-black'>238M</h1>
        <p className='text-xl'>Fournisseur de qualite</p>
      </div>
      
      
    </div>
    <div className='w-[100%] h-[1px] bg-gray-500'></div>
    </div>
        )
      }
    </div>
  )
}

export default Statistic
