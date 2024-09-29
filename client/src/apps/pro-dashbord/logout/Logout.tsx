import { useState } from 'react';
import { Modal, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BiLogOutCircle } from "react-icons/bi";

const Logout = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    localStorage.removeItem('authToken'); 
    setIsModalVisible(false);
    navigate('/connexion'); 
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal} icon={<BiLogOutCircle />}>
        Logout
      </Button>
      <Modal
        title="Confirm Logout"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes, Logout"
        cancelText="Cancel"
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </>
  );
};

export default Logout;
