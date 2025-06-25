import { FaPlus, FaCalendarAlt } from "react-icons/fa";

export default function DashboardHome() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm flex items-center gap-2 shadow">
          <FaPlus size={12} />
          Quick Action
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow flex justify-around flex-wrap gap-6">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <div className="relative">
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              className="border rounded-lg px-3 py-2 pr-2 w-65 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Base</label>
          <select className="border rounded-lg px-3 py-2 w-65 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>All Bases</option>
            <option>Base A</option>
            <option>Base B</option>
            <option>Base C</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Equipment Type
          </label>
          <select className="border rounded-lg px-3 py-2 w-65 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>All Equipment</option>
            <option>Weapon</option>
            <option>Ammuniation</option>
            <option>Vehicles</option>
            <option>Medical</option>
          </select>
        </div>
      </div>
    </div>
  );
}
