import { Layout } from 'antd';
import { IoMdSearch } from 'react-icons/io';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const DashHeader = () => {
  return (
    <Layout.Header className="bg-[#001529] text-white w-full flex items-center justify-between px-6 py-3">
      <div className="flex items-center space-x-4">
        <MenuOutlined className="text-2xl cursor-pointer" />
        <div className="bg-transparent border-b border-white text-white flex items-center px-2 w-[350px]">
          <IoMdSearch className="text-lg mr-2" />
          <input
            type="text"
            placeholder="Search Cars eg. Audi Q7"
            className="outline-none bg-transparent text-white placeholder-gray-400 w-full"
          />
        </div>
      </div>

      <nav className="flex space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/inventory" className="hover:text-gray-300">Inventory</Link>
        <Link to="/blog" className="hover:text-gray-300">Blog</Link>
        <Link to="/shop" className="hover:text-gray-300">Shop</Link>
        <Link to="/pages" className="hover:text-gray-300">Pages</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        <div className="flex items-center">
        <img
          src="https://i.pravatar.cc/150?img=3" 
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />
      </div>
      </nav>

      
    </Layout.Header>
  );
};

export default DashHeader;
