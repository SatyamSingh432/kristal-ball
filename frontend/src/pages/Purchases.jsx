import { useState } from "react";
import { FaPlus, FaCalendarAlt } from "react-icons/fa";

export default function Purchases() {
  const [date, setDate] = useState("12/06/2025");

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Purchases</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm flex items-center gap-2 shadow">
          <FaPlus size={12} />
          Add Purchase
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow mb-6 flex justify-around flex-wrap gap-4">
        <div className="relative">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded-lg px-3 py-2 pr-2 w-55 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <select className="border rounded-lg px-3 py-2 w-55 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700">
          <option>All Bases</option>
          <option>Base A</option>
          <option>Base B</option>
          <option>Base C</option>
        </select>
        <select className="border rounded-lg px-3 py-2 w-55 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-700">
          <option>All Equipment</option>
          <option>Weapon</option>
          <option>Ammunition</option>
          <option>Vehicles</option>
          <option>Medical</option>
        </select>

        <input
          type="text"
          placeholder="Filter by status"
          className="border rounded-lg px-3 py-2 w-55 text-gray-500"
        />
      </div>

      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs border-b">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Equipment</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Base</th>
              <th className="px-6 py-3">Cost</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
