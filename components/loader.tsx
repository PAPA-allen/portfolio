import { Loader2 } from 'lucide-react';
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      {/* Loader Spinner */}
      <div className="flex items-center justify-center space-x-2">
        <div className="w-8 h-8 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin"></div>
        <p className="text-white text-xl"><Loader2/></p>
      </div>
    </div>
  );
};

export default Loader;
