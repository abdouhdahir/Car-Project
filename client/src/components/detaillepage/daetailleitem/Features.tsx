import { FaCheck } from "react-icons/fa6";

const Features = () => {
  return (
    <div className='flex flex-col gap-10 pb-20' style={{borderBottom:"1px solid #e1e1e1"}}>
    <h2 className='text-2xl font-semibold'>Description</h2>
    <div className='flex justify-between items-start'>
      <div className='flex flex-col gap-5'>
        <h3 className='text-xl font-medium'>Interior</h3>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full '/>
        <p>Air Conditioner</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full '/>
        <p>Digital Odometer</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full '/>
        <p>Leather Seats</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full '/>
        <p>Heater</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full '/>
        <p>Tachometer</p>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h3 className='text-xl font-medium'>Exterior</h3>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full'/>
        <p>Fog Lights Front</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full'/>
        <p>Rain Sensing Wipe</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full'/>
        <p>Rear Spoiler</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full'/>
        <p>Sun Roof</p>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h3 className='text-xl font-medium'>Safety</h3>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full'/>
        <p>Brake Assist</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full'/>
        <p>Child Safety Locks</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full'/>
        <p>Traction Contro</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full'/>
        <p>Power Door Locks</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-300 p-1 rounded-full'/>
        <p>Driver Air Bag</p>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h3 className='text-xl font-medium'>Comfort & Convenience</h3>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full'/>
        <p>Power Steering</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full'/>
        <p>Power Steering</p>
        </div>
        <div className='flex items-center gap-3'>
        <FaCheck className='bg-blue-50 text-blue-400 p-1 rounded-full'/>
        <p>Trunk Light</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features
