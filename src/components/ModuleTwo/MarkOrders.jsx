import React from 'react'

export default function MarkOrders() {
  return (
    
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Orders Ready for Dispatch</h1>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Order ID</th>
                  <th className="text-left p-3">Customer Name</th>
                  <th className="text-left p-3">Items</th>
                  <th className="text-left p-3">Quantity</th>
                  <th className="text-left p-3">Dispatch Date</th>
                  <th className="text-left p-3">Status</th>
                  <th className="text-left p-3">Last Login</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">12345</td>
                  <td className="p-3">Khizar Shahid</td>
                  <td className="p-3">Laptop</td>
                  <td className="p-3">2</td>
                  <td className="p-3">2024-11-23</td>
                  <td className="p-3">Ready for Dispatch</td>
                  <td className="p-3"></td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      Print Slip
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">3467</td>
                  <td className="p-3">Zaid Shahid</td>
                  <td className="p-3">Phone</td>
                  <td className="p-3">3</td>
                  <td className="p-3">2024-09-12</td>
                  <td className="p-3">Ready for Dispatch</td>
                  <td className="p-3"></td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:text-blue-800">
                      Print Slip
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
  )
}

