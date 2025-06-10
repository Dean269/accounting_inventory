import React from 'react';


const DashboardHome = () => (
  <div>
    <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
    <h2 className="text-xl font-semibold mb-6">Revenue Summary <span className="text-base font-normal text-gray-500">This Month</span></h2>
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow text-center">Total Revenue</div>
      <div className="bg-white p-4 rounded shadow text-center">Total Expenses</div>
      <div className="bg-white p-4 rounded shadow text-center">Net Profit</div>
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