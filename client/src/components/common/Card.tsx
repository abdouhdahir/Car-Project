import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaTag } from "react-icons/fa";
import { RiSpeedUpFill } from "react-icons/ri";
import { FaGasPump } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";
import bleu from '../../asset/img/allvehicule/bleu.png';
import gray from '../../asset/img/allvehicule/gray.png';
import marron1 from '../../asset/img/allvehicule/marron1.png';
import marron2 from '../../asset/img/allvehicule/marron2.png';
import rouge from '../../asset/img/allvehicule/rouge.png';

const Card = () => {
    const Cards = [
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
            isreduckilo: "",
            isreducprice: "",
            title: "Ford Explorer 2023",
            desc: "4.0 D5 PowerPulse Momentum 5dr AW...",
            kilo: "10 Miles",
            carburant: "Diesel",
            gear: "Manual",
            price: "$35,000"
        },
    ];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {
                windowWidth < 500 ? (
                    <Swiper
                    spaceBetween={0}
                    slidesPerView={1.2}
                    
                            >
                    {Cards.map((item, id) => (
        <SwiperSlide key={id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full mx-2">
                <div className="relative">
                    <img src={item.img} alt="" className="w-full h-48" />
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
                    <div className="bg-white p-2 rounded-full absolute top-2 right-2">
                        <FaTag className="text-black text-xl" style={{ transform: "rotate(227deg)" }} />
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
        </SwiperSlide>
    ))}
</Swiper>
                ):(
                    <Swiper
                    spaceBetween={20}
                    slidesPerView={3.3}
                    pagination={{ clickable: true }} 
                    scrollbar={{ draggable: true }}  
                            >
                    {Cards.map((item, id) => (
                        <SwiperSlide key={id}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-9/12 mx-2">
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
                                    <div className="bg-white p-2 rounded-full absolute top-2 right-2">
                                        <FaTag className="text-black text-xl" style={{ transform: "rotate(227deg)" }} />
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
                        </SwiperSlide>
                    ))}
                </Swiper>
                )
            }
        </div>
    );
}

export default Card;
