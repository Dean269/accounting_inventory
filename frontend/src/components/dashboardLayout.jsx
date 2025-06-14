import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { FaTachometerAlt, FaMoneyBill, FaBoxes, FaUsers, FaFileInvoice, FaChartPie, FaCog } from 'react-icons/fa';

function DashboardLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { label: 'Dashboard', to: '/dashboard', icon: <FaTachometerAlt /> },
    { label: 'Accounting', to: '/dashboard/accounting', icon: <FaMoneyBill /> },
    { label: 'Inventory', to: '/dashboard/inventory', icon: <FaBoxes /> },
    { label: 'Customers', to: '/dashboard/customers', icon: <FaUsers /> },
    { label: 'Invoicing', to: '/dashboard/invoicing', icon: <FaFileInvoice /> },
    { label: 'Reports', to: '/dashboard/reports', icon: <FaChartPie /> },
    { label: 'Settings', to: '/dashboard/settings', icon: <FaCog /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Hamburger Button */}
      <button
        className="absolute top-4 left-4 z-20 md:hidden bg-white p-2 rounded shadow"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Open sidebar"
      >
        <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white border-r shadow-lg flex flex-col z-10
          transform transition-transform duration-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:static md:translate-x-0
        `}
      >
        <div className="h-16 flex items-center justify-center border-b">
          <span className="font-bold text-lg">Logo</span>
        </div>
        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={`flex items-center px-6 py-2 rounded transition text-gray-700 ${
                    location.pathname === item.to
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="h-16 flex items-center justify-center border-t">
          <span className="text-gray-400">● ● ●</span>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-0 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64 transition-all duration-200">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;