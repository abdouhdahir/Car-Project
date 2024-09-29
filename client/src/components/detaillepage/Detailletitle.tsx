import { FaGasPump, FaRegBookmark } from 'react-icons/fa6';
import { GiGearStickPattern } from 'react-icons/gi';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiSpeedUpFill } from 'react-icons/ri';
import { GoShare } from "react-icons/go";
import { product } from '../searchpage/Searchproduct';
import { useParams } from 'react-router-dom';

const Detailletitle = () => {
  const { id } = useParams();
  const car = product.find((car) => car.id === parseInt(id))

  return (
    <div className='container mx-auto px-20 py-6 w-full flex flex-col gap-5'>
      <p className='border-b-2 border-black pb-5'>Home / Cars for Sale</p>
      <div className='flex flex-col gap-2'>
      <h1 className='text-3xl font-semibold'>{car.title}</h1>
      <p>{car.desc}</p>
      <div className='flex justify-between items-center'>
      <div className='flex gap-5 items-center'>
        <div className='bg-blue-100 text-blue-400 text-sm py-1 px-2 rounded-lg flex gap-1 items-center'>
        <MdOutlineCalendarMonth />
        <p>2023</p>
        </div>
        <div className='bg-blue-100 text-blue-400 text-sm py-1 px-2 rounded-lg flex gap-1 items-center'>
        <RiSpeedUpFill/>
        <p>{car.Mileage} miles</p>
        </div>
        <div className='bg-blue-100 text-blue-400 text-sm py-1 px-2 rounded-lg flex gap-1 items-center'>
        <GiGearStickPattern/>
        <p>{car.Transmission}</p>
        </div>
        <div className='bg-blue-100 text-blue-400 text-sm py-1 px-2 rounded-lg flex gap-1 items-center'>
        <FaGasPump/>
        <p>{car.fuel}</p>
        </div>
      </div>
      <div className='flex gap-8 items-center'>
        <div className='flex items-center gap-2 '>
          <p>Share</p>
          <GoShare className='border-2 p-1 rounded-full text-2xl cursor-pointer'/>
        </div>
        <div className='flex items-center gap-2 '>
          <p>Save</p>
          <FaRegBookmark className='border-2 p-1 rounded-full text-2xl cursor-pointer'/>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Detailletitle
