import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-blue-950 mb-2">404</h1>
      <p className="text-gray-600 mb-6">The requested page could not be found.</p>
      <Link to="/" className="bg-orange-500 text-white font-bold px-6 py-2.5 rounded-full text-sm">
        Back to Home
      </Link>
    </div>
  );
};