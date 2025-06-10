import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './navBar';
import Login from './components/login';
import LoginPage from './pages/login';
import PrivateRoute from './privateRoute';
import DashboardHome from './components/dashboard';
import InventoryTable from './components/inventoryTable';
import AccountingReport from './components/accountingReport';
import {Link, useLocation} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      
        
        {/* Protected Dashboard Routes */}
        <Route path="/" element={
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
  const navItems = [
    { label: 'Dashboard', to: '/' },
    { label: 'Accounting', to: '/accounting' },
    { label: 'Inventory', to: '/inventory' },
    { label: 'Customers', to: '/customers' }, // Placeholder
    { label: 'Invoicing', to: '/invoicing' }, // Placeholder
    { label: 'Reports', to: '/reports' },     // Placeholder
    { label: 'Settings', to: '/settings' },   // Placeholder
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col">
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
                >
                  {/* You can add icons here if desired */}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="h-16 flex items-center justify-center border-t">
          {/* Profile/Settings icons can go here */}
          <span className="text-gray-400">● ● ●</span>
        </div>
      </aside>
      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
} 

export default App;