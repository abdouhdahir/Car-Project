import { Carousel } from 'antd';
import { product } from '../../searchpage/Searchproduct';
import { useParams } from 'react-router-dom';

const ItemImage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>ID is missing or invalid</div>;
  }

  const car = product.find((car) => car.id === parseInt(id, 10));

  if (!car || !car.image) {
    return <div>Car not found or image not available</div>;
  }

  return (
    <div className='rounded-xl overflow-hidden'>
      <Carousel arrows infinite={false}>
        <img src={car.image} alt="Car Image" className='w-[941px] h-[570px]' />
        <img src={car.image} alt="Car Image" className='w-[941px] h-[570px]' />
        <img src={car.image} alt="Car Image" className='w-[941px] h-[570px]' />
        <img src={car.image} alt="Car Image" className='w-[941px] h-[570px]' />
      </Carousel>
    </div>
  );
}

export default ItemImage;
