import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaBox, FaTruck, FaClipboardList, FaWarehouse, FaCog, FaSignOutAlt } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-4 gap-8 sm:w-16 md:w-20">
      {/* Menu Toggle */}
      <button className="p-2 hover:bg-gray-100 rounded-lg">
        <FaBars className="w-6 h-6 text-gray-600" />
      </button>

      {/* Navigation Links */}
      <div className="flex flex-col gap-6">
        {/* Home */}
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-lg">
          <FaHome className="w-6 h-6 text-gray-600" />
        </Link>

        {/* Stock Received */}
        <Link to="/stock-received" className="p-2 hover:bg-gray-100 rounded-lg">
          <FaBox className="w-6 h-6 text-gray-600" />
        </Link>

        {/* Picking and Packing */}
        <Link to="/pickingandpacking" className="p-2 hover:bg-gray-100 rounded-lg">
          <FaTruck className="w-6 h-6 text-gray-600" />
        </Link>

        {/* Dispatch Management */}
        <Link to="/dispatch-management" className="p-2 hover:bg-gray-100 rounded-lg">
          <FaClipboardList className="w-6 h-6 text-gray-600" />
        </Link>

        {/* Inventory */}
        <Link to="/inventory" className="p-2 hover:bg-gray-100 rounded-lg">
          <FaWarehouse className="w-6 h-6 text-gray-600" />
        </Link>

        {/* Equipment Management */}
        <Link to="/equipment-management" className="p-2 hover:bg-gray-100 rounded-lg">
          <FaCog className="w-6 h-6 text-gray-600" />
        </Link>
      </div>

      {/* Logout */}
      <div className="mt-auto">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <FaSignOutAlt className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
