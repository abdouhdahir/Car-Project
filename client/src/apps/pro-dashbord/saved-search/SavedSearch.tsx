import { Table, Input, Button, Dropdown, Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { AiOutlineDelete } from 'react-icons/ai';

interface SavedSearchRecord {
  key: string;
  title: string;
  query: string;
  listings: string;
  frequency: string;
}

const SavedSearch = () => {
  const data: SavedSearchRecord[] = [
    {
      key: '1',
      title: 'Q3',
      query: 'Year to: 2023 • Mileage to: 2500',
      listings: 'Listings found: 7',
      frequency: 'Daily',
    },
    {
      key: '2',
      title: 'BMW X5',
      query: 'Year to: 2023 • Mileage to: 2500',
      listings: 'Listings found: 7',
      frequency: 'Daily',
    },
    {
      key: '3',
      title: 'Volvo XC40',
      query: 'Year to: 2023 • Mileage to: 2500',
      listings: 'Listings found: 7',
      frequency: 'Daily',
    },
  ];

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      className: 'text-left text-blue-600 font-medium',
    },
    {
      title: 'Saved Search Query',
      dataIndex: 'query',
      key: 'query',
      className: 'text-left',
    },
    {
      title: 'Number Listings',
      dataIndex: 'listings',
      key: 'listings',
      className: 'text-left',
    },
    {
      title: 'Times',
      dataIndex: 'frequency',
      key: 'frequency',
      className: 'text-left',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: string, record: SavedSearchRecord) => (
        <Button
          type="text"
          className="text-red-600"
          icon={<AiOutlineDelete className="text-xl" />}
          onClick={() => handleDelete(record.key)}
        />
      ),
    },
  ];

  const handleDelete = (key: string) => {
    console.log('Item supprimé avec la clé:', key);
  };

  const sortMenu = (
    <Menu>
      <Menu.Item key="1">Newest</Menu.Item>
      <Menu.Item key="2">Oldest</Menu.Item>
    </Menu>
  );

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold">Saved Search</h2>
      <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur.</p>

      <div className="flex flex-col gap-5 bg-white p-6 rounded-xl"> 
        <div className="flex items-center mb-6">
          <Input
            size="large"
            placeholder="Search Cars e.g. Audi Q7"
            prefix={<SearchOutlined />}
            className="w-96 mr-4"
          />
        </div>

        {/* Menu de tri */}
        <div className="flex justify-between mb-4">
          <Dropdown overlay={sortMenu}>
            <Button>Sort By: Newest</Button>
          </Dropdown>
        </div>

        {/* Table */}
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="bg-white rounded-lg"
        />
      </div>
    </div>
  );
};

export default SavedSearch;
