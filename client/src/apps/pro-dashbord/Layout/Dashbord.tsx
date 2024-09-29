import React from 'react';
import { Layout } from 'antd';
import MenuDashbord from './Menu';
import DashHeader from './DashHeader';

const { Content } = Layout;

interface DashbordProps {
  children: React.ReactNode;
}

const Dashbord: React.FC<DashbordProps> = ({ children }) => {
  return (
    <Layout className='h-screen'>
      <MenuDashbord />
      <Layout>
        <DashHeader />
        <Content className='overflow-y-auto rounded-bl-lg rounded-br-lg'>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashbord;
