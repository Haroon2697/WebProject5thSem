import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaBox, FaTruck, FaCreditCard, FaCog, FaSignOutAlt } from 'react-icons/fa';


const SideBar = () => {
  return (
    <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-4 gap-8 sm:w-16 md:w-20">
    <button className="p-2 hover:bg-gray-100 rounded-lg">
      <FaBars className="w-6 h-6 text-gray-600" />
    </button>
    <div className="flex flex-col gap-6">
      <Link to="/" className="p-2 hover:bg-gray-100 rounded-lg">
        <FaHome className="w-6 h-6 text-gray-600" />
      </Link>
      <Link to="/stock-received" className="p-2 hover:bg-gray-100 rounded-lg">
        <FaBox className="w-6 h-6 text-gray-600" />
      </Link>
      <Link to="/pickingandpacking" className="p-2 hover:bg-gray-100 rounded-lg">
        <FaTruck className="w-6 h-6 text-gray-600" />
      </Link>
      <Link to="/dispatch-management" className="p-2 hover:bg-gray-100 rounded-lg">
        <FaCreditCard className="w-6 h-6 text-gray-600" />
      </Link>
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <FaCog className="w-6 h-6 text-gray-600" />
      </button>
    </div>
    <div className="mt-auto">
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <FaSignOutAlt className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  </div>
  );
};

export default SideBar;
