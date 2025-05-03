import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navBar';
import Login from './components/login';
import PrivateRoute from './privateRoute';
import Dashboard from './components/dashboard';
import InventoryTable from './components/inventoryTable';
import AccountingReport from './components/accountingReport';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        
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
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Logo</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {['Dashboard', 'Accounting', 'Inventory', 'Customers', 'Invoicing', 'Reports', 'Settings'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase()}`} className="block px-4 py-2 rounded hover:bg-gray-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="*" element={<Outlet />} />
        </Routes>
      </div>
    </div>
  );
}

// Dashboard Home Component
function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Revenue Summary */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Revenue Summary</h2>
        <div className="grid grid-cols-4 gap-4">
          {['This Month', 'Total Revenue', 'Total Expenses', 'Net Profit'].map((item) => (
            <div key={item} className="bg-gray-50 p-4 rounded">
              <h3 className="text-gray-500">{item}</h3>
              <p className="text-2xl font-bold">$0.00</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sales Chart Section */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Sales Chart</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            [Chart Placeholder]
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Inventory Alerts</h3>
            <ul className="space-y-2">
              {['Low stock: Widget A', 'Out of stock: Gadget B'].map((alert) => (
                <li key={alert} className="text-sm text-red-600">{alert}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              {['New Order', 'Add Product', 'Create Invoice', 'Generate Report'].map((action) => (
                <button key={action} className="bg-blue-50 text-blue-600 p-2 rounded text-sm hover:bg-blue-100">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;