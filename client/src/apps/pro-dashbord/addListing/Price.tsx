import { Form, Input } from 'antd';

const Price = () => {


  return (
      <div className="">
        <Form layout="vertical" className='w-full'>
          <Form.Item
            label="Price ($)"
            name="price"
            rules={[{ required: true, message: 'Please input the price!' }]}
          >
            <Input placeholder="e.g. $500" />
          </Form.Item>

          <Form.Item
            label="Price Prefix"
            name="pricePrefix"
            rules={[{ message: 'Please input a price prefix!' }]}
          >
            <Input placeholder="Any text shown before price (for example, 'per unit')" />
          </Form.Item>

          <Form.Item
            label="Price Suffix"
            name="priceSuffix"
            rules={[{ message: 'Please input a price suffix!' }]}
          >
            <Input placeholder="Any text shown after price (for example, 'per kg')" />
          </Form.Item>

          <Form.Item
            label="Price Custom"
            name="priceCustom"
            rules={[{ message: 'Please input a custom price text!' }]}
          >
            <Input placeholder="Any text instead of price (for example, 'by agreement')" />
          </Form.Item>


        </Form>
      </div>
  );
};

export default Price;