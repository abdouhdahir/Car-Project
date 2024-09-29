import banner1 from '../../asset/img/banner/banner1.png'
import banner2 from '../../asset/img/banner/banner2.png'
import { BsArrowUpRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div className='flex justify-center gap-10 mb-32'>
      <div className='bg-bgbanner1 py-16 px-16 rounded-xl flex flex-col gap-10'>
        <h2 className='font-black text-2xl'>Tu recherche un voiture?</h2>
        <p>Nous nous engageons à offrir à nos clients un service exceptionnel.</p>
        <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center text-white bg-blue-600 rounded-lg cursor-pointer p-4'>
        <button>Commence maintenant</button>
        <BsArrowUpRight />
      </div>
            <img src={banner1} alt="" />
        </div>
      </div>
      <div className='bg-bgbanner2 py-16 px-16 rounded-xl flex flex-col gap-10'>
        <h2 className='font-black text-2xl'>Vous souhaitez vendre une voiture ?</h2>
        <p>Nous nous engageons à offrir à nos clients un service exceptionnel.</p>
        <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center text-white bg-black rounded-lg cursor-pointer p-4'>
        <button>Commence maintenant</button>
        <BsArrowUpRight />
      </div>
            <img src={banner2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner
