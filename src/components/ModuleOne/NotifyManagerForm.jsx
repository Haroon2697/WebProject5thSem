import React from 'react'

export default function NotifyManagerForm() {
  return (
    <div className="p-6 bg-white h-full overflow-auto">
      <h2 className="text-2xl font-semibold mb-6">Report Discrepancies to Manager</h2>
      <form className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Item Information</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="item-id" className="block text-sm font-medium text-gray-700">Item ID</label>
              <input type="text" id="item-id" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
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
              <label htmlFor="manager-name" className="block text-sm font-medium text-gray-700">Reporting Manager Name</label>
              <input type="text" id="manager-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="discrepancies" className="block text-sm font-medium text-gray-700">Discrepancies (if any)</label>
            <textarea id="discrepancies" rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

