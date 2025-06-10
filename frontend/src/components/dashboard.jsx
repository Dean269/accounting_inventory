import React from 'react';

const DashboardHome = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Revenue Summary</h1>
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow">Total Revenue</div>
      <div className="bg-white p-4 rounded shadow">Total Expenses</div>
      <div className="bg-white p-4 rounded shadow">Net Profit</div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow h-48 flex items-center justify-center">Sales Chart</div>
      <div className="bg-white p-4 rounded shadow h-48 flex items-center justify-center">Expenses Chart</div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow">Inventory Alerts</div>
      <div className="bg-white p-4 rounded shadow">Recent Activity</div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded shadow">Quick Actions</div>
      <div className="bg-white p-4 rounded shadow">Recent Activity</div>
    </div>
  </div>
);

export default DashboardHome;