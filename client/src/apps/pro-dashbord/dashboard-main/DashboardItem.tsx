import { FaCar } from 'react-icons/fa';
import DashbordCourbe from './DashbordCourbe';

const DashboardItem = () => {
  return (
    <div className='mx-6 mt-10  flex flex-col gap-10'>
      <div className=''>
      <h1 className='font-bold text-3xl'>Dashboard</h1>
      <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
    <div className='flex flex-col gap-10 p-6 bg-white rounded-xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">My Listings</p>
            <h3 className="text-2xl font-bold">43,279</h3>
          </div>
          <div className="text-gray-500 text-2xl">
            <FaCar />
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Total Saved Search</p>
            <h3 className="text-2xl font-bold">19</h3>
          </div>
          <div className="text-gray-500 text-2xl">
            <FaCar />
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">Messages</p>
            <h3 className="text-2xl font-bold">15</h3>
          </div>
          <div className="text-gray-500 text-2xl">
            <FaCar />
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm">My Favorites</p>
            <h3 className="text-2xl font-bold">22,786</h3>
          </div>
          <div className="text-gray-500 text-2xl">
            <FaCar />
          </div>
        </div>
      </div>
      <DashbordCourbe />
    </div>
    </div>




  )
}

export default DashboardItem
