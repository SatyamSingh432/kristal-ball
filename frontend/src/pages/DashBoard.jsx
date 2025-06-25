import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaExchangeAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Dashboard() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-teal-900 text-white flex flex-col justify-between shadow-md">
        <div>
          <div className="p-6 border-b border-teal-700">
            <div className="text-xl font-bold text-white">
              Military Management
            </div>
            <div className="text-sm text-teal-200">Defense Ops Command</div>
          </div>

          <nav className="mt-6 space-y-1 px-4">
            <SidebarLink
              to="/"
              icon={<FaHome />}
              label="Dashboard"
              active={location.pathname === "/"}
            />
            <SidebarLink
              to="/purchases"
              icon={<FaShoppingCart />}
              label="Purchases"
              active={location.pathname === "/purchases"}
            />
            <SidebarLink
              to="/transfers"
              icon={<FaExchangeAlt />}
              label="Transfers"
              active={location.pathname === "/transfers"}
            />
            <SidebarLink
              to="/assignments"
              icon={<FaUser />}
              label="Assignments"
              active={location.pathname === "/assignments"}
            />
            <SidebarLink
              to="/settings"
              icon={<FaCog />}
              label="Settings"
              active={location.pathname === "/settings"}
            />
          </nav>
        </div>

        <div className="px-4 mb-4">
          <button className="flex items-center gap-2 text-sm text-teal-100 hover:text-red-400">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <div />
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Guest</span>
            <div className="w-8 h-8 bg-teal-600 text-white flex items-center justify-center rounded-full font-bold">
              G
            </div>
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
}

const SidebarLink = ({ to, icon, label, active }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-3 py-2 rounded text-sm w-full transition ${
      active
        ? "bg-teal-700 text-white font-semibold"
        : "hover:bg-teal-800 text-teal-100"
    }`}
  >
    {icon}
    {label}
  </Link>
);
