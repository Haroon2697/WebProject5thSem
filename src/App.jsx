import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import StockReceived from './pages/StockReceived';
import PickingAndPacking from './pages/PickingAndPacking';
import DispatchManagement from './pages/DispatchManagement';
import Inventory from './pages/Inventory';

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
          <Route path="/pickingandpacking" element={<PickingAndPacking />} />
          <Route path="/dispatch-management" element={<DispatchManagement/>} />
          <Route path="/inventory" element={<Inventory/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
