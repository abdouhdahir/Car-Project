import { BsArrowUpRight } from "react-icons/bs";
import { Tabs } from 'antd';


const Shop = () => {
  return (
    <div className='flex flex-col gap-10 px-32'>
      <div className='flex justify-between'>
            <h2 className='font-bold text-4xl'>Magasinez dans DjibCars Express à Votre Façon</h2>
            <div className='flex gap-2 items-center mb-8'>
        <button>Voir Tout</button>
        <BsArrowUpRight />
      </div>
      </div>
      <Tabs className="">
        <Tabs.TabPane tab="Neuves" key="1" className="bg-white rounded-lg">
          <Items />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Occasion" key="2" className="bg-white rounded-lg">
          <Items />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Parcourir par Type" key="3" className="bg-white rounded-lg">
          <Items />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Parcourir par Marque" key="4" className="bg-white rounded-lg">
          <Items />
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default Shop

const Items = () => (
  <div className='flex justify-between pb-60'>
    <div className='flex flex-col items-start gap-1'>
      <a href="#">Ford Cars</a>
      <a href="#">Honda Cars</a>
      <a href="#">Hyundai Cars</a>
      <a href="#">Infiniti Cars</a>
      <a href="#">Jaguar Cars</a>
      <a href="#">Jeep Cars</a>
    </div>
    <div className='flex flex-col items-start gap-1'>
      <a href="#">Chrysler Cars</a>
      <a href="#">Citroen Cars</a>
      <a href="#">Cupra Cars</a>
      <a href="#">Dacia Cars</a>
      <a href="#">DS Cars</a>
      <a href="#">Fiat Cars</a>
    </div>
    <div className='flex flex-col items-start gap-1'>
      <a href="#">Land Rover Cars</a>
      <a href="#">Lexus Cars</a>
      <a href="#">Mercedes Benz Cars</a>
      <a href="#">Mazda Cars</a>
      <a href="#">MG Cars</a>
      <a href="#">Kia Cars</a>
    </div>
    <div className='flex flex-col items-start gap-1'>
      <a href="#">Abarth Cars</a>
      <a href="#">Romeo Cars</a>
      <a href="#">Audi Cars</a>
      <a href="#">Bentley Cars</a>
      <a href="#">BMW Cars</a>
      <a href="#">Chevrolet Cars</a>
    </div>
    <div className='flex flex-col items-start gap-1'>
      <a href="#">Mini Cars</a>
      <a href="#">Mitsubishi Cars</a>
      <a href="#">Nissan Cars</a>
      <a href="#">Peugeot Cars</a>
      <a href="#">Porsche Cars</a>
      <a href="#">Renault Cars</a>
    </div>
  </div>
)