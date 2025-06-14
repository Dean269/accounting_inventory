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
import DashboardLayout from './components/dashboardLayout';

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

export default App;