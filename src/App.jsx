import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import StockReceived from './pages/StockReceived';

function App() {
  return (
    <div className="flex">
      {/* Sidebar is always present */}
      <SideBar />
      
      {/* Main Content */}
      <div className="flex-1 ">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stock-received" element={<StockReceived />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
