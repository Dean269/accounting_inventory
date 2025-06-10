import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './navBar';
import Login from './components/login';
import LoginPage from './pages/login';
import PrivateRoute from './privateRoute';
import DashboardHome from './components/dashboard';
import InventoryTable from './components/inventoryTable';
import AccountingReport from './components/accountingReport';
import {Link, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      
        
        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }>
          <Route index element={<DashboardHome />} />
          <Route path="inventory" element={<InventoryTable />} />
          <Route path="accounting" element={<AccountingReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// New Dashboard Layout Component
function DashboardLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Accounting', to: '/dashboard/accounting' },
    { label: 'Inventory', to: '/dashboard/inventory' },
    { label: 'Customers', to: '/dashboard/customers' }, // Placeholder
    { label: 'Invoicing', to: '/dashboard/invoicing' }, // Placeholder
    { label: 'Reports', to: '/dashboard/reports' },     // Placeholder
    { label: 'Settings', to: '/dashboard/settings' },   // Placeholder
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Hamburger Button */}
      <button
        className="absolute top-4 left-4 z-20 md:hidden bg-white p-2 rounded shadow"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Open sidebar"
      >
        {/* Hamburger icon */}
        <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-800"></span>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white border-r flex flex-col z-10
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
                  className={`flex items-center px-6 py-2 rounded transition ${
                    location.pathname === item.to
                      ? 'bg-gray-200 font-semibold'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)} // close menu on link click
                >
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

      {/* Overlay for mobile when sidebar is open */}
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

export default App;