import React from "react";
import { Form, Input, Select, InputNumber } from "antd";

const { Option } = Select;

const CarForm: React.FC = () => {
  return (
    <div className="car-form-container">
      <h3 className="font-semibold mb-4">Car Details</h3>
      <div className="grid grid-cols-3 gap-4">
        <Form.Item
          label="Title"
          name="title"
          rules={[{ message: "Please enter the title!" }]}
        >
          <Input placeholder="Car title" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="desc"
          rules={[{ message: "Please enter the description!" }]}
        >
          <Input placeholder="Car description" />
        </Form.Item>

        <Form.Item label="Kilometers" name="kilo">
          <InputNumber placeholder="Kilometers" />
        </Form.Item>

        <Form.Item
          label="Carburant"
          name="carburant"
          rules={[{ message: "Please select the fuel type!" }]}
        >
          <Select placeholder="Select fuel type">
            <Option value="petrol">Petrol</Option>
            <Option value="diesel">Diesel</Option>
            <Option value="electric">Electric</Option>
            <Option value="hybrid">Hybrid</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Gear"
          name="gear"
          rules={[{ message: "Please select the gear type!" }]}
        >
          <Select placeholder="Select gear type">
            <Option value="manual">Manual</Option>
            <Option value="automatic">Automatic</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Price" name="price">
          <InputNumber placeholder="Price" min={0} />
        </Form.Item>

        <Form.Item label="Is Reduction on Kilometers" name="isreduckilo">
          <Select placeholder="Select reduction on kilometers">
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Is Reduction on Price" name="isreducprice">
          <Select placeholder="Select reduction on price">
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
        </Form.Item>
      </div>
    </div>
  );
};

export default CarForm;
