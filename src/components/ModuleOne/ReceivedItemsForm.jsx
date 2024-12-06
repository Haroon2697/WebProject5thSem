import React from 'react'

export default function ReceivedItemsForm() {
  return (
    <div className="p-6 bg-white h-full overflow-auto">
      <h2 className="text-2xl font-semibold mb-6">Update Item Quantity</h2>
      <form className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Basic Information</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Item name</label>
              <input type="text" id="item-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="item-category" className="block text-sm font-medium text-gray-700">Item category</label>
              <input type="text" id="item-category" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="item-sku" className="block text-sm font-medium text-gray-700">Item SKU/Barcode</label>
              <input type="text" id="item-sku" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">-</button>
                <input type="number" id="quantity" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300 text-center" defaultValue="1" />
                <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button type="button" className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

