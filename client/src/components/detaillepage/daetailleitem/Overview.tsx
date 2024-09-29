import { IoCarSportOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { product } from '../../searchpage/Searchproduct';

const Overview = () => {
  const { id } = useParams();
  const carId = id ? parseInt(id, 10) : null;
  
  const car = carId !== null ? product.find((car) => car.id === carId) : undefined;

  if (!car) {
    return <p>Car not found</p>;
  }

  return (
    <div className='flex flex-col gap-8 pb-20' style={{ borderBottom: "1px solid #e1e1e1" }}>
      <h2 className='text-2xl font-medium'>Car Overview</h2>
      <div className='flex gap-40'>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-20 justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <IoCarSportOutline />
              <p>Body</p>
            </div>
            <p className='font-medium'>{car.type}</p>
          </div>
          <div className='flex gap-20 justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <IoCarSportOutline />
              <p>Mileage</p>
            </div>
            <p className='font-medium'>{car.Mileage} miles</p>
          </div>
          <div className='flex gap-20 justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <IoCarSportOutline />
              <p>Fuel Type</p>
            </div>
            <p className='font-medium'>{car.fuel}</p>
          </div>
          <div className='flex gap-20 justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <IoCarSportOutline />
              <p>Year</p>
            </div>
            <p className='font-medium'>{car.year}</p>
          </div>
          <div className='flex gap-20 justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <IoCarSportOutline />
              <p>Transmission</p>
            </div>
            <p className='font-medium'>{car.Transmission}</p>
          </div>
          <div className='flex gap-20 justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <IoCarSportOutline />
              <p>Drive Type</p>
            </div>
            <p className='font-medium'>Front Wheel Drive</p>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between gap-20 items-center'>
            <div className='flex gap-4 items-center'>
              <IoCarSportOutline />
              <p>Condition</p>
            </div>
            <p className='font-medium'>{car.condition}</p>
          </div>
          <div className='flex justify-between gap-20 items-center'>
            <div className='flex gap-4 items-center'>
              <IoCarSportOutline />
              <p>Engine Size</p>
            </div>
            <p className='font-medium'>4.8L</p>
          </div>
          <div className='flex justify-between gap-20 items-center'>
            <div className='flex gap-4 items-center'>
              <IoCarSportOutline />
              <p>Doors</p>
            </div>
            <p className='font-medium'>5-door</p>
          </div>
          <div className='flex justify-between gap-20 items-center'>
            <div className='flex gap-4 items-center'>
              <IoCarSportOutline />
              <p>Cylinders</p>
            </div>
            <p className='font-medium'>6</p>
          </div>
          <div className='flex justify-between gap-20 items-center'>
            <div className='flex gap-4 items-center'>
              <IoCarSportOutline />
              <p>Color</p>
            </div>
            <p className='font-medium'>Blue</p>
          </div>
          <div className='flex justify-between gap-20 items-center'>
            <div className='flex gap-4 items-center'>
              <IoCarSportOutline />
              <p>VIN</p>
            </div>
            <p className='font-medium'>ZN682AVA2P7429564</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
