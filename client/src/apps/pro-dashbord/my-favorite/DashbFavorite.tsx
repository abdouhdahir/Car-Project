import  { useState } from 'react';
import { FaTag } from "react-icons/fa";
import { RiSpeedUpFill } from "react-icons/ri";
import { FaGasPump } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import bleu from '../../../asset/img/allvehicule/bleu.png';
import gray from '../../../asset/img/allvehicule/gray.png';
import marron1 from '../../../asset/img/allvehicule/marron1.png';
import marron2 from '../../../asset/img/allvehicule/marron2.png';
import rouge from '../../../asset/img/allvehicule/rouge.png';
import { BsArrowUpRight } from 'react-icons/bs';
import { Pagination } from 'antd';

const DashbFavorite = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const paginatedCards = cards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);




  return (
    <div className='flex flex-col gap-5 px-6 py-6'>
      <div className='mb-4 flex flex-col gap-1'>
        <h3 className="font-semibold text-2xl">My Favorites</h3>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
      <div className='border-2 p-6 rounded-xl bg-white'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {paginatedCards.map((item, id) => (
          <div className="bg-white rounded-lg border-2 overflow-hidden w-full mx-2" key={id}>
            <div className="relative">
              <img src={item.img} alt="" className="w-full h-48 object-cover" />
              {item.isreduckilo && (
                <p className="absolute top-2 left-2 bg-blue-500 text-white text-xs py-1 px-2 rounded">
                  {item.isreduckilo}
                </p>
              )}
              {item.isreducprice && (
                <p className="absolute top-2 left-2 bg-green-500 text-white text-xs py-1 px-2 rounded">
                  {item.isreducprice}
                </p>
              )}
              <div className="bg-white p-1 rounded-full absolute top-2 right-2">
                <FaTag className="text-black text-xs cursor-pointer" style={{ transform: "rotate(227deg)" }} />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
              <div className="h-px bg-gray-200 my-2"></div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col items-center gap-1">
                  <RiSpeedUpFill className="text-gray-600" />
                  <p className="text-gray-600">{item.kilo}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FaGasPump className="text-gray-600" />
                  <p className="text-gray-600">{item.carburant}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <GiGearStickPattern className="text-gray-600" />
                  <p className="text-gray-600">{item.gear}</p>
                </div>
              </div>
              <div className="h-px bg-gray-200 my-2"></div>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{item.price}</h2>
                <div className="flex items-center gap-2">
                  <button className="text-blue-600">Voir les détails</button>
                  <BsArrowUpRight className="text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 justify-center items-center mt-6">
        <Pagination
          current={currentPage}
          onChange={page => setCurrentPage(page)}
          total={cards.length}
          pageSize={itemsPerPage}
          showSizeChanger={false}
        />
        <span className='text-gray-600'>
          Showing results {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, cards.length)} of {cards.length}
        </span>
      </div>
        </div>     
    </div>
  );
};

export default DashbFavorite;

const cards = [
  {
    img: marron1,
    isreduckilo: "Faible Kilométrage",
    isreducprice: "",
    title: "Ford Transit – 2021",
    desc: "4.0 D5 PowerPulse Momentum 5dr AW...",
    kilo: "2500 Miles",
    carburant: "Diesel",
    gear: "Manual",
    price: "$22,000"
  },
  {
    img: bleu,
    isreduckilo: "",
    isreducprice: "Prix Exceptionnel",
    title: "New GLC – 2023",
    desc: "4.0 D5 PowerPulse Momentum 5dr AW...",
    kilo: "50 Miles",
    carburant: "Petrol",
    gear: "Automatic",
    price: "$95,000"
  },
  {
    img: marron2,
    isreduckilo: "",
    isreducprice: "",
    title: "Audi A6 3.5 – New",
    desc: "3.5 D5 PowerPulse Momentum 5dr AW...",
    kilo: "100 Miles",
    carburant: "Petrol",
    gear: "Automatic",
    price: "$58,000"
  },
  {
    img: rouge,
    isreduckilo: "",
    isreducprice: "",
    title: "Corolla Altis – 2023",
    desc: "3.5 D5 PowerPulse Momentum 5dr AW...",
    kilo: "15000 Miles",
    carburant: "Petrol",
    gear: "CVT",
    price: "$45,000"
  },
  {
    img: gray,
    isreduckilo: "",
    isreducprice: "Prix Exceptionnel",
    title: "Ford Explorer 2023",
    desc: "4.0 D5 PowerPulse Momentum 5dr AW...",
    kilo: "10 Miles",
    carburant: "Diesel",
    gear: "Manual",
    price: "$35,000"
  },
  {
    img: gray,
    isreduckilo: "",
    isreducprice: "",
    title: "Ford Explorer 2023",
    desc: "4.0 D5 PowerPulse Momentum 5dr AW...",
    kilo: "10 Miles",
    carburant: "Diesel",
    gear: "Manual",
    price: "$35,000"
  },
  {
    img: gray,
    isreduckilo: "",
    isreducprice: "",
    title: "Ford Explorer 2023",
    desc: "4.0 D5 PowerPulse Momentum 5dr AW...",
    kilo: "10 Miles",
    carburant: "Diesel",
    gear: "Manual",
    price: "$35,000"
  },
  {
    img: gray,
    isreduckilo: "Faible Kilométrage",
    isreducprice: "",
    title: "Ford Explorer 2023",
    desc: "4.0 D5 PowerPulse Momentum 5dr AW...",
    kilo: "10 Miles",
    carburant: "Diesel",
    gear: "Manual",
    price: "$35,000"
  },
  {
    img: marron1,
    isreduckilo: "Faible Kilométrage",
    isreducprice: "",
    title: "Ford Transit – 2021",
    desc: "4.0 D5 PowerPulse Momentum 5dr AW...",
    kilo: "2500 Miles",
    carburant: "Diesel",
    gear: "Manual",
    price: "$22,000"
  },
  {
    img: gray,
    isreduckilo: "",
    isreducprice: "Prix Exceptionnel",
    title: "Ford Explorer 2023",
    desc: "4.0 D5 PowerPulse Momentum 5dr AW...",
    kilo: "10 Miles",
    carburant: "Diesel",
    gear: "Manual",
    price: "$35,000"
  },
  {
    img: gray,
    isreduckilo: "",
    isreducprice: "",
    title: "Ford Explorer 2023",
    desc: "4.0 D5 PowerPulse Momentum 5dr AW...",
    kilo: "10 Miles",
    carburant: "Diesel",
    gear: "Manual",
    price: "$35,000"
  },
  {
    img: bleu,
    isreduckilo: "",
    isreducprice: "Prix Exceptionnel",
    title: "New GLC – 2023",
    desc: "4.0 D5 PowerPulse Momentum 5dr AW...",
    kilo: "50 Miles",
    carburant: "Petrol",
    gear: "Automatic",
    price: "$95,000"
  },
  {
    img: marron2,
    isreduckilo: "",
    isreducprice: "",
    title: "Audi A6 3.5 – New",
    desc: "3.5 D5 PowerPulse Momentum 5dr AW...",
    kilo: "100 Miles",
    carburant: "Petrol",
    gear: "Automatic",
    price: "$58,000"
  },
  {
    img: rouge,
    isreduckilo: "",
    isreducprice: "",
    title: "Corolla Altis – 2023",
    desc: "3.5 D5 PowerPulse Momentum 5dr AW...",
    kilo: "15000 Miles",
    carburant: "Petrol",
    gear: "CVT",
    price: "$45,000"
  },

];
