import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route components
import Dashboard from './pages/Dashboard';
import StockReceived from './pages/StockReceived';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stock-received" element={<StockReceived />} />
    </Routes>
  );
}

export default App;
