import { useState } from "react";
import {
  Table,
  Input,
  Pagination,
  Button,
  Select,
  Drawer,
  Form,
  message,
} from "antd";
import {
  SearchOutlined,
  EllipsisOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { DELETE_CAR, UPTADE_CAR } from "../../../graphql/mutation/car";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_CARS } from "../../../graphql/query/car";

const { Option } = Select;

interface CarListing {
  id: string;
  isreduckilo: boolean;
  isreducprice: boolean;
  title: string;
  desc: string;
  kilo: number;
  carburant: string;
  gear: string;
  price: number;
}

const MyListings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [visible, setVisible] = useState(false);
  const [selectedCar, setSelectedCar] = useState<CarListing | null>(null);
  const { loading, error, data } = useQuery(GET_ALL_CARS);
  const [updateCarApi] = useMutation(UPTADE_CAR);
  const [deleteCarApi] = useMutation(DELETE_CAR, {
    refetchQueries: [{ query: GET_ALL_CARS }],
  });
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const carsData = data.getAllCars.map((car: CarListing) => ({
    key: car.id,
    id: car.id,
    isreduckilo: car.isreduckilo,
    isreducprice: car.isreducprice,
    title: car.title,
    desc: car.desc,
    kilo: car.kilo,
    carburant: car.carburant,
    gear: car.gear,
    price: car.price,
  }));

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (_: string, record: CarListing) => (
        <div className="flex items-center">
          <img
            src={record.desc}
            alt={record.title}
            className="w-16 h-16 object-cover mr-2"
          />
          <div>
            <div className="font-bold">{record.title}</div>
            <div className="text-xs text-gray-400">{record.desc}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Kilometers",
      dataIndex: "kilo",
      key: "kilo",
    },
    {
      title: "Fuel Type",
      dataIndex: "carburant",
      key: "carburant",
    },
    {
      title: "Transmission",
      dataIndex: "gear",
      key: "gear",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (record: CarListing) => (
        <div className="flex space-x-3">
          <Button
            icon={<EditOutlined />}
            size="small"
            onClick={() => handleEdit(record)}
          />
          <Button
            icon={<DeleteOutlined />}
            size="small"
            onClick={() => deleteCar(record.id)}
          />
          <Button icon={<EllipsisOutlined />} size="small" />
        </div>
      ),
    },
  ];

  const handleEdit = (car: CarListing) => {
    setSelectedCar(car);
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setSelectedCar(null);
  };
  const deleteCar = (id: string) => {
    deleteCarApi({
      variables: { id },
    })
      .then(() => {
        message.success("Car supprimé avec succès");
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression :", error);
        message.error("Erreur lors de la suppression du Car");
      });
  };

  return (
    <div className="mx my-10 flex flex-col gap-10">
      <div className="mx-9">
        <h2 className="text-xl font-bold">My Listings</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur.
        </p>
      </div>
      <div className="p-8 min-h-screen">
        <div className="bg-white p-6 rounded-xl border-2">
          <div className="flex justify-between items-start mb-4">
            <div className="mb-4 flex justify-between items-center">
              <Input
                placeholder="Search Listing, Audi Q3"
                prefix={<SearchOutlined />}
                className="w-80"
              />
            </div>
            <div className="flex items-center gap-5 select">
              <p>Sort By</p>
              <Select defaultValue="Newest" className="w-40 !border-none">
                <Option value="newest">Newest</Option>
                <Option value="oldest">Oldest</Option>
              </Select>
            </div>
          </div>

          <Table
            columns={columns}
            dataSource={carsData}
            pagination={false}
            rowKey="key"
          />

          <div className="flex flex-col gap-2 justify-center items-center mt-6">
            <Pagination
              current={currentPage}
              onChange={(page) => setCurrentPage(page)}
              total={50}
              pageSize={10}
            />
            <span className="text-gray-600">Showing results 1 to 3 of 3</span>
          </div>
        </div>
      </div>

      <Drawer
        title="Edit Car Listing"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        {selectedCar && (
          <Form
            layout="vertical"
            initialValues={selectedCar}
            onFinish={async (values) => {
              if (selectedCar) {
                try {
                  const { id } = selectedCar;
                  console.log(id);
                  await updateCarApi({
                    variables: {
                      id,
                      isreduckilo: values.isreduckilo === "oui",
                      isreducprice: values.isreducprice === "oui",
                      title: values.title,
                      desc: values.desc,
                      kilo: parseInt(values.kilo, 10),
                      carburant: values.carburant,
                      gear: values.gear,
                      price: parseFloat(values.price),
                    },
                  });
                  message.success("La voiture a été mise à jour avec succès");
                  onClose();
                } catch (error) {
                  console.error("Erreur lors de la mise à jour :", error);
                }
              } else {
                console.error(
                  "Aucune voiture sélectionnée pour la mise à jour"
                );
              }
            }}
          >
            <Form.Item label="Réduction Kilo" name="isreduckilo">
              <Select placeholder="Sélectionnez une option">
                <Select.Option value="oui">Oui</Select.Option>
                <Select.Option value="non">Non</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Réduction Prix" name="isreducprice">
              <Select placeholder="Sélectionnez une option">
                <Select.Option value="oui">Oui</Select.Option>
                <Select.Option value="non">Non</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Titre" name="title">
              <Input placeholder="Entrez le titre du véhicule" />
            </Form.Item>

            <Form.Item label="Description" name="desc">
              <Input.TextArea placeholder="Entrez la description du véhicule" />
            </Form.Item>

            <Form.Item label="Kilomètres" name="kilo">
              <Input placeholder="Entrez le nombre de kilomètres" />
            </Form.Item>

            <Form.Item label="Type de Carburant" name="carburant">
              <Input placeholder="Entrez le type de carburant" />
            </Form.Item>

            <Form.Item label="Transmission" name="gear">
              <Input placeholder="Entrez le type de transmission" />
            </Form.Item>

            <Form.Item label="Prix" name="price">
              <Input placeholder="Entrez le prix du véhicule" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Mettre à jour
              </Button>
            </Form.Item>
          </Form>
        )}
      </Drawer>
    </div>
  );
};

export default MyListings;
