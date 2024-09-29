import { Button } from 'antd';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl text-gray-600 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-500 mb-8">
          Sorry, the page you're looking for doesn't exist. Please check the URL or go back to the homepage.
        </p>
        <Button type="primary" size="large" href="/" className="bg-blue-500 hover:bg-blue-600">
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;