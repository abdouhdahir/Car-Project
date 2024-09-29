import {useState,useEffect} from 'react'
import finance1 from '../../asset/img/finance/finance1.png'
import finance2 from '../../asset/img/finance/finance2.png'
import finance3 from '../../asset/img/finance/finance3.png'
import finance4 from '../../asset/img/finance/finance4.png'

const Finance = () => {
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
          <div className='flex flex-col px-6 lg:px-60 pb-20 lg:pb-60 gap-10'>
  <h2 className='text-2xl lg:text-4xl font-bold'>Pourquoi nous choisir?</h2>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
    <div className='flex flex-col items-start gap-2'>
      <img src={finance1} alt="Finance 1" className='w-8/12'/>
      <h3 className='font-bold text-base lg:text-lg'>Offres de Financement Spéciales</h3>
      <p className='text-sm lg:text-base'>Our stress-free finance department that can find financial solutions to save you money.</p>
    </div>
    <div className='flex flex-col items-start gap-2'>
      <img src={finance2} alt="Finance 2" className='w-8/12'/>
      <h3 className='font-bold text-base lg:text-lg'>Offres de Financement Spéciales</h3>
      <p className='text-sm lg:text-base'>Our stress-free finance department that can find financial solutions to save you money.</p>
    </div>
    <div className='flex flex-col items-start gap-2'>
      <img src={finance3} alt="Finance 3" className='w-8/12'/>
      <h3 className='font-bold text-base lg:text-lg'>Offres de Financement Spéciales</h3>
      <p className='text-sm lg:text-base'>Our stress-free finance department that can find financial solutions to save you money.</p>
    </div>
    <div className='flex flex-col items-start gap-2'>
      <img src={finance4} alt="Finance 4" className='w-8/12'/>
      <h3 className='font-bold text-base lg:text-lg'>Offres de Financement Spéciales</h3>
      <p className='text-sm lg:text-base'>Our stress-free finance department that can find financial solutions to save you money.</p>
    </div>
  </div>
</div>

        ):(
          <div className='flex flex-col px-60 pb-60 gap-10'>
      <h2 className='text-4xl font-bold'>Porquoi nous-choisir?</h2>
      <div className='flex justify-between '>
        <div className='flex flex-col items-start gap-2'>
            <img src={finance1} alt="" />
            <h3 className='font-bold'>Offres de Financement Spéciales</h3>
            <p>Our stress free finance department that can <br />
                find financial solutions to save you money.</p>
        </div>
        <div className='flex flex-col items-start gap-2'>
            <img src={finance2} alt="" />
            <h3 className='font-bold'>Offres de Financement Spéciales</h3>
            <p>Our stress free finance department that can <br />
                find financial solutions to save you money.</p>
        </div>
        <div className='flex flex-col items-start gap-2'>
            <img src={finance3} alt="" />
            <h3 className='font-bold'>Offres de Financement Spéciales</h3>
            <p>Our stress free finance department that can <br />
                find financial solutions to save you money.</p>
        </div>
        <div className='flex flex-col items-start gap-2'>
            <img src={finance4} alt="" />
            <h3 className='font-bold'>Offres de Financement Spéciales</h3>
            <p>Our stress free finance department that can <br />
                find financial solutions to save you money.</p>
        </div>
      </div>
    </div>
        )
      }
    </div>
  )
}

export default Finance
