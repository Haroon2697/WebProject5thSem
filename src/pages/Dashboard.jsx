import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { Menu, Home, Package, Truck, CreditCard, Settings, LogOut } from 'lucide-react';
import StockReceived from './StockReceived'; 
import UpdateStockForm from '../components/ModuleOne/UpdateStockForm'; 
import NotifyManagerForm from '../components/ModuleOne/NotifyManagerForm'; 
import ReceivedItemsForm from '../components/ModuleOne/ReceivedItemsForm';

export default function Dashboard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).toLowerCase();
  };

  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="w-full h-full mx-auto rounded-lg overflow-hidden shadow-xl border border-gray-200">
        <div className="flex w-full h-full">
          {/* Sidebar */}
          <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-4 gap-8 sm:w-16 md:w-20">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex flex-col gap-6">
              <Link to="/" className="p-2 hover:bg-gray-100 rounded-lg">
                <Home className="w-6 h-6 text-gray-600" />
              </Link>
              <Link to="/stock-received" className="p-2 hover:bg-gray-100 rounded-lg">
                <Package className="w-6 h-6 text-gray-600" />
              </Link>
              <Link to="/update-stock" className="p-2 hover:bg-gray-100 rounded-lg">
                <Truck className="w-6 h-6 text-gray-600" />
              </Link>
              <Link to="/notify-manager" className="p-2 hover:bg-gray-100 rounded-lg">
                <CreditCard className="w-6 h-6 text-gray-600" />
              </Link>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="mt-auto">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <LogOut className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 relative">
            <Routes>
              <Route path="/" element={
                <div className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
                  }}>
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="relative h-full flex flex-col items-center justify-center text-white px-4 md:px-8">
                    <h1 className="text-4xl md:text-8xl font-light mb-4">
                      {formatTime(time)}
                    </h1>
                    <p className="text-lg md:text-xl">
                      15 C | Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              } />
              <Route path="/stock-received" element={<StockReceived />} />
              <Route path="/received-items" element={<ReceivedItemsForm />} />
              <Route path="/update-stock" element={<UpdateStockForm />} />
              <Route path="/notify-manager" element={<NotifyManagerForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
