import React, { useEffect, useState } from 'react';
import API from '../api';

const AccountingReport = () => {
  const [transactions, setTransactions] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      API.get('/accounting/transactions/'),
      API.get('/accounting/expenses/')
    ])
      .then(([transRes, expRes]) => {
        setTransactions(transRes.data);
        setExpenses(expRes.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Accounting Report</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Transactions</h3>
        <ul>
          {transactions.map(tx => (
            <li key={tx.id}>{tx.product} - ${tx.amount}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Expenses</h3>
        <ul>
          {expenses.map(exp => (
            <li key={exp.id}>{exp.description} - ${exp.amount}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountingReport;