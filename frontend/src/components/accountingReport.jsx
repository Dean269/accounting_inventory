import React, { useEffect, useState } from 'react';
import { fetchTransactions, fetchExpenses } from '../api';

const AccountingReport = () => {
  const [transactions, setTransactions] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchTransactions().then(res => setTransactions(res.data));
    fetchExpenses().then(res => setExpenses(res.data));
  }, []);

  const totalRevenue = transactions.reduce((sum, t) => sum + parseFloat(t.revenue), 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Accounting Report</h2>
      <p>Total Revenue: ${totalRevenue.toFixed(2)}</p>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <p>Net Profit: ${(totalRevenue - totalExpenses).toFixed(2)}</p>
    </div>
  );
};

export default AccountingReport;