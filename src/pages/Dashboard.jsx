import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
    <div className="flex w-full h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={
            <div className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
              }}>
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative h-full flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl md:text-8xl font-light mb-4">
                  {formatTime(time)}
                </h1>
                <p className="text-lg md:text-xl">
                  15°C | Islamabad, Pakistan
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
  );
}
