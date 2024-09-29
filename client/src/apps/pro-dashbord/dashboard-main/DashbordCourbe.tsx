import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaCar } from 'react-icons/fa';


const data = [
  { name: 'January', sales: 33 },
  { name: 'February', sales: 53 },
  { name: 'March', sales: 85 },
  { name: 'April', sales: 41 },
  { name: 'May', sales: 44 },
  { name: 'June', sales: 65 },
  { name: 'July', sales: 60 }
];

const DashbordCourbe = () => (
<div className='flex flex-col lg:flex-row gap-8 p-6'>
    <div className='flex-1'>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#4A90E2" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className='flex-1 max-w-md bg-white border border-gray-300 rounded-lg shadow-md p-4'>
      <h2 className='text-xl font-semibold mb-4'>Recent Activities</h2>
      <div className='flex flex-col gap-4'>
        {[
          'Your listing Audi Q3 3.5 Sportpack has been approved',
          'Ali Tufan left a message on Volvo xc40 Recharge 1.5T',
          'Someone favorites your Mercedes Benz E-Series listing',
          'Your listing Audi Q3 3.5 Sportpack has been approved',
          'Someone favorites your BMW X5 25d xDrive 4x4 Premium Package',
          'Your listing Audi Q3 3.5 Sportpack has been approved',
          'Ali Tufan left a message on Volvo xc40 Recharge 1.5T'
        ].map((activity, index) => (
          <div key={index} className='flex items-start gap-3 p-2 '>
            <FaCar className='bg-blue-100 p-2 text-3xl text-blue-600 rounded-full' />
            <p className='text-sm text-gray-700'>{activity}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default DashbordCourbe;
