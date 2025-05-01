import React from 'react';
import InventoryTable from './components/inventoryTable';
import AccountingReport from './components/accountingReport';
import Login from './components/login';
import Navbar from './navBar';

import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import privateRoute from './privateRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <privateRoute>
            <Dashboard />
          </privateRoute>
        }
      />
    </Routes>
  );
}

/*function App() {
  return (
    <div className="p-4">
      <Login/>
      <h1 className="text-2xl font-bold mb-4">FBA Tool Dashboard</h1>
      <InventoryTable />
      <AccountingReport />
    </div>
  );
}*/

export default App;