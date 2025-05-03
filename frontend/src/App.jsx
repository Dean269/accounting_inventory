import React from 'react';
import InventoryTable from './components/inventoryTable';
import AccountingReport from './components/accountingReport';
import Login from './components/login';
import Navbar from './navBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import PrivateRoute from './privateRoute';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;