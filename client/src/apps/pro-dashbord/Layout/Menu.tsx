import { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineCarRental } from "react-icons/md";
import { IoCarOutline } from "react-icons/io5";
import { MdBookmarkBorder } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { PiUserSquareLight } from "react-icons/pi";
import { BiLogOutCircle } from "react-icons/bi";
import { Layout, Menu, Modal, Button } from 'antd';

const MenuDashbord = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  
  const [isColapsed, setIsColapsed] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const showLogoutModal = () => {
    setIsLogoutModalVisible(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    
    navigate('/connexion');
    
    setIsLogoutModalVisible(false);
  };

  const handleCancel = () => {
    setIsLogoutModalVisible(false);
  };

  const getActiveKey = () => {
    if(currentPath.includes('/pro-dashbord/dashboard')) return '1';
    if(currentPath.includes('/pro-dashbord/my-listings')) return '2';
    if(currentPath.includes('/pro-dashbord/add-listings')) return '3';
    if(currentPath.includes('/pro-dashbord/my-favorites')) return '4';
    if(currentPath.includes('/pro-dashbord/saved-search')) return '5';
    if(currentPath.includes('/pro-dashbord/my-profile')) return '7';
    if(currentPath.includes('/pro-dashbord/logout')) return '8';
    return '1';
  }

  const menuItems = [
    { key: '1', icon: <RiHome6Line />, label: <Link to="/pro-dashbord/dashboard">Dashboard</Link> },
    { key: '2', icon: <MdOutlineCarRental />, label: <Link to="/pro-dashbord/my-listings">My Listings</Link> },
    { key: '3', icon: <IoCarOutline />, label: <Link to="/pro-dashbord/add-listings">Add Listings</Link> },
    { key: '4', icon: <MdBookmarkBorder />, label: <Link to="/pro-dashbord/my-favorites">My Favorites</Link> },
    { key: '5', icon: <IoMdSearch />, label: <Link to="/pro-dashbord/saved-search">Saved Search</Link> },
    { key: '6', icon: <LuMessagesSquare />, label: <Link to="/pro-dashbord/messages">Messages</Link> },
    { key: '7', icon: <PiUserSquareLight />, label: <Link to="/pro-dashbord/my-profile">My Profile</Link> },
    {
      key: '8', icon: <BiLogOutCircle />, label: (
        <Button type="text" onClick={showLogoutModal} className='text-gray-400'>
          Logout
        </Button>
      )
    },
  ];

  return (
    <>
      <Layout.Sider
        theme="dark"
        width={200}
        collapsible
        collapsed={isColapsed}
        onCollapse={() => setIsColapsed(!isColapsed)}
      >
        <h1 className="text-3xl text-white text-center my-5 font-bold">
          {isColapsed ? "DCE" : "DjibCars Express"}
        </h1>

        <Menu
          theme='dark'
          mode='vertical'
          selectedKeys={[getActiveKey()]}
          items={menuItems}
        />
      </Layout.Sider>

      <Modal
        title="Logout Confirmation"
        visible={isLogoutModalVisible}
        onOk={handleLogout}
        onCancel={handleCancel}
        okText="Yes a dieu"
        cancelText="No"
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </>
  );
};

export default MenuDashbord;

// mongodb+srv://abdouhdahir:ge0ZiOaQTs75gSpM@location-voiture.5exme.mongodb.net/?retryWrites=true&w=majority&appName=location-voiture