import { Button, Input, Upload, Form } from 'antd';
import { AiOutlineUpload } from 'react-icons/ai';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { RcFile } from 'antd/es/upload';
const { TextArea } = Input;

const Profile = () => {
  // Fonction pour gérer l'upload
  const handleUpload = (file: RcFile) => {
    console.log(file);
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold">Profile</h2>
      <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur.</p>

      <div className='bg-white p-6 rounded-xl'>
      <Form layout="vertical" className="space-y-6">
        {/* Avatar Upload */}
        <div>
          <h3 className="text-xl mb-4">Avatar</h3>
          <div className="flex items-center space-x-4">
            {/* Avatar actuel */}
            <div className="relative">
              <img
                src="https://via.placeholder.com/100"
                alt="avatar"
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white">
                <FiEdit className="text-lg cursor-pointer" />
                <FiTrash className="text-lg cursor-pointer" />
              </div>
            </div>

            {/* Bouton pour uploader */}
            <Upload
              showUploadList={false}
              customRequest={({ file }) => handleUpload(file as RcFile)}
              className="border-dashed border-2 border-gray-300 p-4 rounded-lg cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <AiOutlineUpload className="text-3xl text-gray-500" />
                <p>Upload</p>
              </div>
            </Upload>
          </div>
          <p className="text-gray-500 mt-2">
            Max file size is 1MB. Minimum dimensions: 300x300. And suitable files are jpg & png.
          </p>
        </div>

        {/* Informations personnelles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form.Item label="First Name" name="firstName">
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName">
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input placeholder="Phone" />
          </Form.Item>
          <Form.Item label="WhatsApp" name="whatsapp">
            <Input placeholder="WhatsApp" />
          </Form.Item>
          <Form.Item label="Website" name="website">
            <Input placeholder="Website" />
          </Form.Item>
        </div>

        {/* Photos Upload */}
        <div>
          <h3 className="text-xl mb-4">Photos</h3>
          <div className="flex items-center space-x-4">
            {/* Photos existantes */}
            <div className="relative">
              <img
                src="https://via.placeholder.com/100"
                alt="photo"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white">
                <FiEdit className="text-lg cursor-pointer" />
                <FiTrash className="text-lg cursor-pointer" />
              </div>
            </div>

            {/* Bouton pour uploader */}
            <Upload
              showUploadList={false}
              customRequest={({ file }) => handleUpload(file as RcFile)}
              className="border-dashed border-2 border-gray-300 p-4 rounded-lg cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <AiOutlineUpload className="text-3xl text-gray-500" />
                <p>Upload</p>
              </div>
            </Upload>
          </div>
          <p className="text-gray-500 mt-2">
            Max file size is 1MB. Minimum dimensions: 300x300. And suitable files are jpg & png.
          </p>
        </div>

        {/* Adresse et localisation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form.Item label="Friendly Address" name="friendlyAddress">
            <Input placeholder="Address" />
          </Form.Item>
          <Form.Item label="Map Location" name="mapLocation">
            <Input placeholder="e.g. Lincoln Park" />
          </Form.Item>
        </div>

        {/* Latitude et Longitude */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form.Item label="Latitude" name="latitude">
            <Input placeholder="Latitude" />
          </Form.Item>
          <Form.Item label="Longitude" name="longitude">
            <Input placeholder="Longitude" />
          </Form.Item>
        </div>

        {/* Description */}
        <Form.Item label="Description" name="description">
          <TextArea rows={4} placeholder="Description" />
        </Form.Item>

        {/* Bouton Save */}
        <div className="text-right">
          <Button type="primary" size="large" htmlType="submit" className="bg-blue-600 text-white">
            Save Profile
          </Button>
        </div>
      </Form>
      </div>
    </div>
  );
};

export default Profile;
