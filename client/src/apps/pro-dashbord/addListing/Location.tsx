import { Typography, Form, Input } from 'antd';


const Location = () => {
  return (
    <div className="mb-8">
      <Form layout="vertical">
        <div className="grid grid-cols-2 gap-4">
          <Form.Item label="City" name="city">
            <Input placeholder="Enter city" />
          </Form.Item>
          <Form.Item label="Region" name="region">
            <Input placeholder="Enter region" />
          </Form.Item>
        </div>
      </Form>
      <div className="bg-gray-200 p-4 rounded-lg mt-4">
        <Typography>
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.3490142822265625%2C48.8255550495646%2C2.375640869140625%2C48.85523812297443&layer=mapnik"
            allowFullScreen
          ></iframe>
        </Typography>
      </div>
    </div>
  );
};

export default Location;
