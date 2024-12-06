import React from 'react'

export default function UpdateStockForm() {
  return (
    <div className="p-6 bg-white h-full overflow-auto">
      <h2 className="text-2xl font-semibold mb-6">Update Stock Level</h2>
      <form className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Stocks' Information</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="stock-id" className="block text-sm font-medium text-gray-700">Stock ID</label>
              <input type="text" id="stock-id" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="item-category" className="block text-sm font-medium text-gray-700">Item category</label>
              <input type="text" id="item-category" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Item name</label>
              <input type="text" id="item-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="inventory-level" className="block text-sm font-medium text-gray-700">Update Inventory Level</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">-</button>
                <input type="number" id="inventory-level" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300 text-center" defaultValue="1" />
                <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">+</button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
        </div>
      </form>
    </div>
  )
}

