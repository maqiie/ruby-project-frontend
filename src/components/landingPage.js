import React from 'react';
import { Link } from 'react-router-dom';

import SignUp from './register';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 h-screen">
          <SignUp />
      <div className="container mx-auto pt-32">
        <h1 className="text-5xl font-bold mb-8 text-center">Welcome to my landing page!</h1>
        <div className="flex justify-center">
          <Link to="/about" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
