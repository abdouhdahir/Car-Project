import { Checkbox, Input, Select, Space, Slider, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Searchfilter = () => {
  const { Option } = Select;
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);

  const setQuery = (name: string, value: string | number | boolean) => {
    query.set(name, value.toString());
    const parameters = `?${query.toString()}`;
    navigate(`/searchpages${parameters}`);
  };

  return (
    <div className='flex flex-col gap-3 border-2 p-3'>
      <div className='flex flex-col '>
        <label>Ville</label>
        <Select
          placeholder="Toutes marques"
          className="text-black placeholder:!text-black placeholder:font-black !border-none outline-none focus:!border-none focus:!outline-none pl-0"
          onChange={(value) => setQuery("ville", value)}
        >
          <Option value="djibouti ville">Djibouti Ville</Option>
          <Option value="ali sabieh">Ali Sabieh</Option>
          <Option value="dikhil">Dikhil</Option>
          <Option value="obock">Obock</Option>
          <Option value="tadjourah">Tadjourah</Option>
          <Option value="arta">Arta</Option>
        </Select>
      </div>
      <Space wrap>
        <div className='flex gap-2 items-center w-full border-b-2 pb-5'>
          <div className='flex flex-col'>
            <label>Marque</label>
            <Select
              placeholder="Toutes marques"
              className="text-black placeholder:!text-black placeholder:font-black !border-none outline-none focus:!border-none focus:!outline-none pl-0"
              style={{ width: 140 }}
              onChange={(value) => setQuery("marque", value)}
            >
              <Option value="audi">Audi</Option>
              <Option value="bmw">BMW</Option>
              <Option value="mercedes">Mercedes-Benz</Option>
              <Option value="toyota">Toyota</Option>
              <Option value="ford">Ford</Option>
              <Option value="volkswagen">Volkswagen</Option>
              <Option value="nissan">Nissan</Option>
              <Option value="honda">Honda</Option>
              <Option value="peugeot">Peugeot</Option>
              <Option value="renault">Renault</Option>
            </Select>
          </div>
          <div className='flex flex-col'>
            <label>Numéro de téléphone</label>
            <Input
              style={{ width: '70%' }}
              defaultValue="26888888"
            />
          </div>
        </div>
      </Space>
      <div className='flex flex-col border-b-2 pb-5'>
        <label>Condition</label>
        <Select
          placeholder="Condition"
          className="text-black placeholder:!text-black placeholder:font-black !border-none outline-none focus:!border-none focus:!outline-none pl-0"
          onChange={(value) => setQuery("condition", value)}
        >
          <Option value="new">Neuf</Option>
          <Option value="used">Occasion</Option>
        </Select>
      </div>
      <div className=' border-b-2 pb-5'>
        <label>Type</label>
        <div className='flex flex-col gap-2'>
          <Checkbox onChange={(e) => setQuery("type", e.target.checked ? "suv" : "")}>SUV</Checkbox>
          <Checkbox onChange={(e) => setQuery("type", e.target.checked ? "sedan" : "")}>Sedan</Checkbox>
          <Checkbox onChange={(e) => setQuery("type", e.target.checked ? "hatchback" : "")}>Hatchback</Checkbox>
          <Checkbox onChange={(e) => setQuery("type", e.target.checked ? "coupe" : "")}>Coupe</Checkbox>
          <Checkbox onChange={(e) => setQuery("type", e.target.checked ? "convertible" : "")}>Convertible</Checkbox>
        </div>
      </div>
      <div className='flex flex-col border-b-2 pb-5'>
        <label>Modèles</label>
        <Select
          placeholder="Tous les modèles"
          className="text-black placeholder:!text-black placeholder:font-black !border-none outline-none focus:!border-none focus:!outline-none pl-0"
          onChange={(value) => setQuery("modeles", value)}
        >
          <Option value="audi_a3">Audi A3</Option>
          <Option value="bmw_3_series">BMW 3 Series</Option>
          <Option value="mercedes_benz_c_class">Mercedes-Benz C-Class</Option>
          <Option value="toyota_corolla">Toyota Corolla</Option>
          <Option value="ford_focus">Ford Focus</Option>
          <Option value="volkswagen_golf">Volkswagen Golf</Option>
          <Option value="nissan_altima">Nissan Altima</Option>
          <Option value="honda_civic">Honda Civic</Option>
          <Option value="peugeot_308">Peugeot 308</Option>
          <Option value="renault_clio">Renault Clio</Option>
        </Select>
      </div>
      <div className='flex flex-col border-b-2 pb-5'>
        <label>Marque</label>
        <Select
          placeholder="Toutes marques"
          className="text-black placeholder:!text-black placeholder:font-black !border-none outline-none focus:!border-none focus:!outline-none pl-0"
        >
          <Option value="brand1">Marque 1</Option>
          <Option value="brand2">Marque 2</Option>
          <Option value="brand3">Marque 3</Option>
        </Select>
      </div>
      <Space wrap>
        <div className='flex gap-2 items-center w-full border-b-2 pb-5'>
          <div className='flex flex-col'>
            <label>Marque</label>
            <Select
              placeholder="Toutes marques"
              className="text-black placeholder:!text-black placeholder:font-black !border-none outline-none focus:!border-none focus:!outline-none pl-0"
              style={{ width: 140 }}
            >
              <Option value="brand1">Marque 1</Option>
              <Option value="brand2">Marque 2</Option>
              <Option value="brand3">Marque 3</Option>
            </Select>
          </div>
          <div className='flex flex-col'>
            <label>Numéro de téléphone</label>
            <Input
              style={{ width: '70%' }}
              defaultValue="26888888"
            />
          </div>
        </div>
      </Space>
      <div className='flex flex-col border-b-2 pb-5'>
        <label>Marque</label>
        <Select
          placeholder="Toutes marques"
          className="text-black placeholder:!text-black placeholder:font-black !border-none outline-none focus:!border-none focus:!outline-none pl-0"
        >
          <Option value="brand1">Marque 1</Option>
          <Option value="brand2">Marque 2</Option>
          <Option value="brand3">Marque 3</Option>
        </Select>
      </div>
      <div className='flex flex-col border-b-2 pb-5'>
        <label>Marque</label>
        <Select
          placeholder="Toutes marques"
          className="text-black placeholder:!text-black placeholder:font-black !border-none outline-none focus:!border-none focus:!outline-none pl-0"
        >
          <Option value="brand1">Marque 1</Option>
          <Option value="brand2">Marque 2</Option>
          <Option value="brand3">Marque 3</Option>
        </Select>
      </div>
      <Space wrap>
        <div className='flex flex-col gap-3 border-b-2'>
          <div className='flex gap-2 items-center w-full border-b-2 pb-5'>
            <div className='flex flex-col'>
              <label>Numéro de téléphone</label>
              <Input
                style={{ width: '100%' }}
                defaultValue="26888888"
              />
            </div>
            <div className='flex flex-col'>
              <label>Numéro de téléphone</label>
              <Input
                style={{ width: '100%' }}
                defaultValue="26888888"
              />
            </div>
          </div>
          <div>
            <Slider
              range={{
                draggableTrack: true,
              }}
              defaultValue={[20, 50]}
            />
          </div>
        </div>
      </Space>
      <div className='flex flex-col'>
        <label>Prix</label>
        <Slider
          range
          defaultValue={[10000, 50000]}
          min={0}
          max={100000}
          step={1000}
        />
      </div>
      <div className='flex justify-end gap-3'>
        <Button
          type="primary"
          onClick={() => navigate('/searchpages')}
        >
          Rechercher
        </Button>
      </div>
    </div>
  );
};

export default Searchfilter;
