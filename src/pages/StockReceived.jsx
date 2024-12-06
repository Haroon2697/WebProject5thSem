import React, { useState } from 'react';
import ReceivedItemsForm from '../components/ModuleOne/ReceivedItemsForm';
import NotifyManagerForm from '../components/ModuleOne/NotifyManagerForm';
import UpdateStockForm from '../components/ModuleOne/UpdateStockForm';

export default function StockReceived() {
  const [selectedForm, setSelectedForm] = useState('received'); // Default form

  return (
    <div className="p-4">
      {/* Form Selection Buttons */}
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setSelectedForm('received')} 
          className="p-2 bg-blue-500 text-white rounded-lg"
        >
          Received Item Form
        </button>
        <button 
          onClick={() => setSelectedForm('notify')} 
          className="p-2 bg-green-500 text-white rounded-lg"
        >
          Notify Manager Form
        </button>
        <button 
          onClick={() => setSelectedForm('update')} 
          className="p-2 bg-yellow-500 text-white rounded-lg"
        >
          Update Stock Form
        </button>
      </div>

      {/* Render selected form */}
      <div>
        {selectedForm === 'received' && <ReceivedItemsForm />}
        {selectedForm === 'notify' && <NotifyManagerForm />}
        {selectedForm === 'update' && <UpdateStockForm />}
      </div>
    </div>
  );
}
