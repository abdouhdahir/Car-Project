import { useState, useEffect } from 'react';
import { Tabs, Button, Select } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const Searchebar = () => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const [make, setMake] = useState("any");
    const [model, setModel] = useState("any");
    const [price, setPrice] = useState("any");
  
    const handleSearch = () => {
      const parameters = `?make=${make}&model=${model}&price=${price}`;
      navigate(`/searchpages${parameters}`);
    };
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const SearchBar = () => (
        <div className="bg-white flex justify-between gap-7 p-3 rounded-lg items-center w-full ">
            <div>
                <Select
                    defaultValue={make}
                    className="text-black placeholder:!text-black placeholder:font-black !border-none outline-none focus:!border-none focus:!outline-none pl-0"
                    onChange={(value) => setMake(value)}
                >
                    <Option value="any">Sélectionner une marque</Option>
                    <Option value="toyota">Toyota</Option>
                    <Option value="bmw">BMW</Option>
                    <Option value="ford">Ford</Option>
                    <Option value="mercedes">Mercedes</Option>
                    <Option value="audi">Audi</Option>
                </Select>
            </div>
            <div className="w-[2px] bg-gray-400 my-2"></div>
            <div>
                <Select
                    defaultValue={model}
                    className="text-black placeholder:text-black placeholder:font-bold border-none focus:!border-none focus:!outline-none pl-0"
                    onChange={(value) => setModel(value)}
                >
                    <Option value="any">Sélectionner un modèle</Option>
                    <Option value="camry">Camry</Option>
                    <Option value="mustang">Mustang</Option>
                    <Option value="a4">A4</Option>
                    <Option value="c-class">C-Class</Option>
                    <Option value="focus">Focus</Option>
                </Select>
            </div>
            <div className="w-[2px] bg-gray-400 my-2"></div>
            <div>
                <Select
                    defaultValue={price}
                    className="text-black placeholder:text-black placeholder:font-bold border-none focus:!border-none focus:!outline-none pl-0"
                    onChange={(value) => setPrice(value)}
                >
                     <Option value="any">Sélectionner une gamme de prix</Option>
                    <Option value="0-10000">0 - 10 000€</Option>
                    <Option value="10000-20000">10 000 - 20 000€</Option>
                    <Option value="20000-30000">20 000 - 30 000€</Option>
                    <Option value="30000-40000">30 000 - 40 000€</Option>
                    <Option value="40000-above">40 000€ et plus</Option>
                </Select>
            </div>
            <div>
                <Button type="primary" className="h-11 font-bold" onClick={handleSearch}>
                    Rechercher des voitures
                </Button>
            </div>
        </div>
    );

    const SearchBarResponsive = () => (
        <div className="bg-white flex flex-col gap-7 p-3 rounded-lg items-center w-full max-w-4xl">
            <div className='w-full'>
                <Select
                    placeholder="Sélectionner une marque"
                    className="text-black placeholder:!text-black placeholder:font-black !border-none outline-none focus:!border-none focus:!outline-none pl-0"
                    onChange={(value) => setMake(value)}
                >
                    <Option value="toyota">Toyota</Option>
                    <Option value="bmw">BMW</Option>
                    <Option value="ford">Ford</Option>
                    <Option value="mercedes">Mercedes</Option>
                    <Option value="audi">Audi</Option>
                </Select>
            </div>
            <div className="w-[2px] bg-gray-400 my-2"></div>
            <div className='w-full'>
                <Select
                    placeholder="Sélectionner un modèle"
                    className="text-black placeholder:text-black placeholder:font-bold border-none focus:!border-none focus:!outline-none pl-0"
                    onChange={(value) => setMake(value)}
                >
                    <Option value="camry">Camry</Option>
                    <Option value="mustang">Mustang</Option>
                    <Option value="a4">A4</Option>
                    <Option value="c-class">C-Class</Option>
                    <Option value="focus">Focus</Option>
                </Select>
            </div>
            <div className="w-[2px] bg-gray-400 my-2"></div>
            <div className='w-full'>
                <Select
                    placeholder="Sélectionner une gamme de prix"
                    className="text-black placeholder:text-black placeholder:font-bold border-none focus:!border-none focus:!outline-none pl-0"
                    onChange={(value) => setMake(value)}
                >
                    <Option value="0-10000">0 - 10 000€</Option>
                    <Option value="10000-20000">10 000 - 20 000€</Option>
                    <Option value="20000-30000">20 000 - 30 000€</Option>
                    <Option value="30000-40000">30 000 - 40 000€</Option>
                    <Option value="40000-above">40 000€ et plus</Option>
                </Select>
            </div>
            <div>
                <Button type="primary" className="h-11 font-bold" onClick={handleSearch}>
                    Rechercher des voitures
                </Button>
            </div>
        </div>
    );

    return (
        <div>
            {
                windowWidth < 500 ? (
                    <div className='hero'>
                        <Tabs className="px-4 py-2 rounded-lg w-full max-w-4xl flex justify-center items-center ">
                            <Tabs.TabPane tab="Louer" key="1" className="bg-white rounded-lg">
                                <SearchBarResponsive />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Acheter" key="2" className="bg-white rounded-lg">
                                <SearchBarResponsive />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Vendre" key="3" className="bg-white rounded-lg">
                                <SearchBarResponsive />
                            </Tabs.TabPane>
                        </Tabs>
                    </div>
                ) : (
                    <div className='hero'>
                        <Tabs className="px-4 py-2 rounded-lg w-full max-w-4xl flex justify-center items-center ">
                            <Tabs.TabPane tab="Louer" key="1" className="bg-white rounded-lg">
                                <SearchBar />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Acheter" key="2" className="bg-white rounded-lg">
                                <SearchBar />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Vendre" key="3" className="bg-white rounded-lg">
                                <SearchBar />
                            </Tabs.TabPane>
                        </Tabs>
                    </div>
                )
            }
        </div>
    )
}

export default Searchebar;
