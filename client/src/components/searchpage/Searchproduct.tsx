import { Select } from 'antd'
import bleu from '../../asset/img/allvehicule/bleu.png';
import marron1 from '../../asset/img/allvehicule/marron1.png';
import marron2 from '../../asset/img/allvehicule/marron2.png';
import rouge from '../../asset/img/allvehicule/rouge.png';
import Listing from '../common/listing/Listing';


const Searchproduct = () => {
  

  return (
    <div className='flex flex-col gap-10'>
    <div className='flex justify-between items-center'>
      <p className='font-medium'>Showing 1 to 16 of 1559 vehicles</p>
      <div className='flex gap-3 items-center'>
        <p className='text-gray-400'>Sort by</p>
        <Select
          placeholder="Borderless"
          variant="borderless"
          className='placeholder:!text-red-800'
          style={{ flex: 1 }}
          options={[
            { value: 'price', label: 'Price' },
            { value: 'mileage', label: 'Mileage' },
          ]}
        />
      </div>
    </div>
    <Listing/>      
  </div>
);
}

export default Searchproduct
export const product = [
  {
    id: 1,
    image: bleu,
    isGreat: "Great Price",
    title: "Audi A3",
    desc: "2023 Audi A3 2.0 TFSI S Line 5dr S Tronic",
    Mileage: 45.000,
    fuel: "Petrol",
    Transmission: "Manual",
    price: "24,500", 
    type: "Suv",
    city: "Djibouti City",
    condition: "Used",
    year: 2023
  },
  {
    id: 2,
    image: marron1,
    isGreat: false,
    title: "BMW 3 Series",
    desc: "2023 BMW 3 Series 320i M Sport 4dr Auto",
    Mileage: 50.000,
    fuel: "Petrol",
    Transmission: "Automatic",
    price: "31,000", 
    type: "Sedan",
    city: "Arta",
    condition: "New",
    year: 2021
  },
  {
    id: 3,
    image: marron2,
    isGreat: "Great Price",
    title: "Mercedes-Benz C-Class",
    desc: "2023 Mercedes-Benz C-Class",
    Mileage: 55.000,
    fuel: "Petrol",
    Transmission: "Manual",
    price: "27,800", 
    type: "SUV",
    city: "Ali Sabieh",
    condition: "Used",
    year: 2022
  },
  {
    id: 4,
    image: rouge,
    isGreat: "Great Price",
    title: "Toyota Corolla",
    desc: "2023 Toyota Corolla 1.8 VVT-i",
    Mileage: 60.000,
    fuel: "Petrol",
    Transmission: "Automatic",
    price: "20,500", 
    type: "Sedan",
    city: "Dikhil",
    condition: "Used",
    year: 2020
  },
  {
    id: 5,
    image: marron2,
    isGreat: false,
    title: "Ford Focus",
    desc: "2023 Ford Focus ST-Line 5dr",
    Mileage: 40.000,
    fuel: "Petrol",
    Transmission: "Manual",
    price: "22,000", 
    type: "Hatchback",
    city: "Obock",
    condition: "New",
    year: 2024
  },
  {
    id: 6,
    image: bleu,
    isGreat: false,
    title: "Volkswagen Golf",
    desc: "2023 Volkswagen Golf 1.5 TSI Life 5dr",
    Mileage: 65.000,
    fuel: "Petrol",
    Transmission: "Automatic",
    price: "23,700", 
    type: "SUV",
    city: "Tadjourah",
    condition: "Used",
    year: 2021
  },
  {
    id: 7,
    image: bleu,
    isGreat: "Great Price",
    title: "Nissan Altima",
    desc: "2023 Nissan Altima 2.5 SR Sedan",
    Mileage: 48.000,
    fuel: "Petrol",
    Transmission: "Manual",
    price: "25,300", 
    type: "SUV",
    city: "Djibouti City",
    condition: "Used",
    year: 2022
  },
  {
    id: 8,
    image: rouge,
    isGreat: false,
    title: "Honda Civic",
    desc: "2023 Honda Civic EX-L Sedan",
    Mileage: 52.000,
    fuel: "Petrol",
    Transmission: "Automatic",
    price: "22,800", 
    type: "Sedan",
    city: "Arta",
    condition: "New",
    year: 2023
  },
  {
    id: 9,
    image: marron1,
    isGreat: "Great Price",
    title: "Peugeot 308",
    desc: "2023 Peugeot 308 GT Line 5dr",
    Mileage: 47.000,
    fuel: "Petrol",
    Transmission: "Manual",
    price: "23,500", 
    type: "Hatchback",
    city: "Ali Sabieh",
    condition: "Used",
    year: 2020
  },
  {
    id: 10,
    image: marron2,
    isGreat: "Great Price",
    title: "Renault Clio",
    desc: "2023 Renault Clio E-Tech Hybrid 140 R.S. Line 5dr",
    Mileage: 68.000,
    fuel: "Petrol",
    Transmission: "Automatic",
    price: "21,000", 
    type: "SUV",
    city: "Dikhil",
    condition: "Used",
    year: 2024
  }
];






