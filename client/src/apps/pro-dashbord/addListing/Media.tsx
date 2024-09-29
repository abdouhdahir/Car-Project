import { Form, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Media = () => {
  return (
    <div className="mb-8">
      <h3 className="font-semibold mb-4">Upload Photos</h3>
      <Form.Item name="photos">
        <Upload
          action="/upload"
          listType="picture-card"
          multiple
         
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>
    </div>
  );
};

export default Media;