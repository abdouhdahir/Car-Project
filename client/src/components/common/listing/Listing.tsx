import { useEffect, useState } from 'react'
import { product } from '../../searchpage/Searchproduct'
import { useLocation, useNavigate } from 'react-router-dom';
import { RiSpeedUpFill } from "react-icons/ri";
import { FaGasPump } from 'react-icons/fa6';
import { GiGearStickPattern } from 'react-icons/gi';
import { FaRegBookmark } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { Button } from 'antd'
const Listing = () => {
  const navigate = useNavigate();

    const location = useLocation();
    const [voitures, setVoitures] = useState(product);

    const query = new URLSearchParams(location.search);
    const suv = query.get('suv');
    const automatic = query.get('automatic');
    const hatchback = query.get('hatchback');
    
    useEffect(() => {
      let filteredCars = product; 
      if(suv){
        filteredCars = product.filter((voiture) => voiture.type === "SUV");
      }
      if(automatic){
        filteredCars = product.filter((voiture) => voiture.Transmission === "Automatic")
      }
      if(hatchback){
        filteredCars = product.filter((voiture) => voiture.type === "Hatchback")
      }
      setVoitures(filteredCars);
    },[location.search])
  return (
       <div className='flex flex-col gap-5'>
      {voitures.map((item) => (
        <div
          key={item.id}
          className='flex justify-between border-2 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg'
          onClick={() => navigate(`/detaillepage/${item.id}`)}
        >
          <div className='relative'>
            <img src={item.image} alt={item.title} />
            {item.isGreat && (
              <p className='absolute top-4 left-4 bg-green-500 p-1 rounded-lg text-xs text-white'>{item.isGreat}</p>
            )}
          </div>
          <div className='flex flex-col justify-between border-r-2 py-2 pr-5'>
            <div>
              <h2 className='font-bold text-xl'>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
            <div className="flex items-start gap-10 mb-4">
              <div className="flex items-center gap-1">
                <RiSpeedUpFill />
                <div>
                  <p className='text-gray-400'>Mileage</p>
                  <p>{item.Mileage}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <FaGasPump />
                <div>
                  <p className='text-gray-400'>Fuel Type</p>
                  <p>{item.fuel}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <GiGearStickPattern />
                <div className='flex flex-col gap-1'>
                  <p className='text-gray-400'>Transmission</p>
                  <p>{item.Transmission}</p>
                </div>
              </div>
            </div>
            <div className='flex gap-10'>
              <Button>Bluetooth</Button>
              <Button>Keyless start</Button>
              <Button>Brake assist</Button>
            </div>
          </div>
          <div className='flex flex-col gap-7 items-end pr-3 pt-5'>
            <div className='flex gap-1 items-center'>
              <p>Save</p>
              <FaRegBookmark className='text-2xl cursor-pointer border-2 rounded-full p-1' />
            </div>
            <div>
              <p>{item.city}</p>
            </div>
            <div className='flex flex-col gap-3 items-end'>
              <h2>${item.price}</h2>
              <p className='text-xs'>Calculate financing</p>
              <div className='flex gap-1 items-center border text-blue-500 hover:bg-blue-700 hover:text-white border-blue-500 py-1 px-2 rounded-xl'>
                <p className='text-xs'>View Details</p>
                <RxArrowTopRight className='text-sm' />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}

export default Listing
