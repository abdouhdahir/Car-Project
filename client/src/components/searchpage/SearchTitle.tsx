import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const SearchTitle = () => {
  const items = [
    { label: 'SUV', value: 'suv' },
    { label: 'Automatic', value: 'automatic' },
    { label: '$5,000-$10,000', value: '5000-10000' },
    { label: 'Hatchback', value: 'hatchback' },
    { label: '2020+', value: '2020+' },
    { label: 'All Wheel Drive', value: 'all-wheel-drive' },
    { label: 'Great Price', value: 'great-price' },
    { label: 'Up to 75.000 miles', value: 'up-to-75000-miles' },
    { label: 'Low Mileage', value: 'low-mileage' },
    { label: 'Diesel', value: 'diesel' }
];
const navigate = useNavigate()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const query = new URLSearchParams(window.location.search)
  return (
    <div className='flex flex-col gap-5 pb-20 container mx-auto px-20 py-6'>
      <p className='pt-20 border-b-2 border-black '>Home / Cars for Sale</p> 
        <h2 className='text-black font-black'>What Kind of Car Should I Get? Try Boxcars Car Finder to Find a Car</h2>
        <div className='p-4'>
            <Slider {...settings}>
            {items.map((item, index) => {
              const filterExiste = query.get(item.value)
              return (
                    
                <div key={index} className='flex cursor-pointer gap-3 border-2 border-gray-500 p-2 rounded-xl items-center' 
                onClick={() => {
                  
                  
                  if(filterExiste){
                    query.delete(item.value)
                  }
                  else{
                    query.set(item.value, item.value)
                  }
                  const parameters = `?${query.toString()}`;
                  navigate(`/searchpages${parameters}`)
                }}
                >
                    <p>{item.label}</p>
                </div>
            )
            })}
            </Slider>
        </div>
    </div>
  )
}

export default SearchTitle
