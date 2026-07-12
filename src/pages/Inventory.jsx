import React from "react";
import { Search, Plus } from "lucide-react";
import { inventoryData } from "../components/dummydata";
const Inventory = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Inventory</h1>
          <p className="text-gray-500 mt-1">Manage your inventory items.</p>
        </div>
        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
          <Plus size={18} />
          Add Item
        </button>
      </div>
      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="flex items-center bg-gray-100 rounded-lg px-3">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent p-3 outline-none"
          />
        </div>
      </div>
      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4">{item.product}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4">{item.stock}</td>
                <td className="p-4">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Inventory;