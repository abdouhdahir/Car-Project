import { MdLocalOffer } from "react-icons/md";
import { PiSteeringWheelBold } from "react-icons/pi";
import volvo from "../../asset/img/detaille/volvo.png"
import { CiLocationOn } from "react-icons/ci";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { CgArrowTopRight } from "react-icons/cg";
import { product } from '../searchpage/Searchproduct';
import { useParams } from 'react-router-dom';

const DetaillePay = () => {
  const { id } = useParams();
  const car = product.find((car) => car.id === parseInt(id))
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-2 p-5' style={{border:"1px solid #e1e1e1"}}>
        <div className='flex flex-col gap-2 '>
            <p>Our Price</p>
            <h2 className='text-2xl font-bold'>${car.price}</h2>
            <p>Instant Saving : $7.000</p>
        </div>
        <div className='flex flex-col gap-2 '>
            <div className='flex gap-2 items-center border-2 border-black py-2 px-16 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600'>
            <MdLocalOffer />
            <p>Make An Offer Price</p>
            </div>
            <div className='flex gap-2 items-center border-2 border-black py-2 px-16 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600'>
            <PiSteeringWheelBold />
            <p>Schedule Test Drive</p>
            </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 items-start p-5' style={{border:"1px solid #e1e1e1"}}>
        <div className='p-2 rounded-full' style={{border:"1px solid #e1e1e1"}}>
          <img src={volvo} alt="" />
        </div>


        <div className='flex flex-col gap-3'>
          <h3 className='text-2xl font-bold'>{car.title}</h3>
          <p>619 Francisco Blvd E, San Rafael, CA 94901</p>
          <div className='flex items-center gap-5'>
            <div className='flex gap-3 items-center'>
            <CiLocationOn className='text-blue-400 bg-blue-200 rounded-full p-1 text-2xl cursor-pointer'/>
            <p className='font-semibold'>Get Directions</p>
            </div>
            <div className='flex gap-3 items-center'>
            <LiaPhoneVolumeSolid  className='text-blue-400 bg-blue-200 rounded-full p-1 text-2xl cursor-pointer'/>
            <p className='font-semibold'>+76 956 039 967</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3 text-center'>
        <div className='flex gap-2 items-center border-2 text-blue-400 bg-white border-blue-400 py-2 px-16 rounded-xl hover:bg-blue-100 cursor-pointer'>
            <p>Message Dealer</p>
            <CgArrowTopRight  />
            </div>
            <div className='flex gap-2 items-center border-2 text-green-400 bg-white  border-green-400 py-2 px-16 rounded-xl hover:bg-green-100 cursor-pointer'>
            <p>Chat Via Whatsapp</p>
            <CgArrowTopRight  />
            </div>
            <div className='flex gap-2 items-center'>
            <p>View all stock at this dealer</p>
            <CgArrowTopRight  />
            </div>
        </div>

      </div>





    </div>
  )
}

export default DetaillePay
