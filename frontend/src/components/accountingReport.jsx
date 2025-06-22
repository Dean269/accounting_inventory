import React, { useState, useEffect } from 'react';
import { fetchTransactions, fetchExpenses } from '../api';

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
    marginBottom: '30px',
};

const thStyle = {
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
    padding: '12px',
    border: '1px solid #ddd',
};

const tdStyle = {
    padding: '12px',
    border: '1px solid #ddd',
    textAlign: 'left',
};

function AccountingReport() {
    const [transactions, setTransactions] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadReportData = async () => {
            try {
                setLoading(true);
                const [transRes, expRes] = await Promise.all([
                    fetchTransactions(),
                    fetchExpenses()
                ]);
                setTransactions(transRes.data);
                setExpenses(expRes.data);
                setError('');
            } catch (err) {
                setError('Failed to fetch accounting data. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadReportData();
    }, []);

    if (loading) {
        return <div>Loading Accounting Report...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div>
            <h2>Accounting Report</h2>

            <h3>Sales Transactions</h3>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Date</th>
                        <th style={thStyle}>Product</th>
                        <th style={thStyle}>Qty Sold</th>
                        <th style={thStyle}>Revenue</th>
                        <th style={thStyle}>FBA Fee</th>
                        <th style={thStyle}>Refund</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ? (
                        transactions.map(t => (
                            <tr key={t.id}>
                                <td style={tdStyle}>{t.date}</td>
                                <td style={tdStyle}>{t.product.name}</td>
                                <td style={tdStyle}>{t.quantity_sold}</td>
                                <td style={tdStyle}>${Number(t.revenue).toFixed(2)}</td>
                                <td style={tdStyle}>${Number(t.fba_fee).toFixed(2)}</td>
                                <td style={tdStyle}>${Number(t.refund).toFixed(2)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={{...tdStyle, textAlign: 'center'}}>No transactions found.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <h3>Expenses</h3>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Date</th>
                        <th style={thStyle}>Description</th>
                        <th style={thStyle}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.length > 0 ? (
                        expenses.map(e => (
                            <tr key={e.id}>
                                <td style={tdStyle}>{e.date}</td>
                                <td style={tdStyle}>{e.description}</td>
                                <td style={tdStyle}>${Number(e.amount).toFixed(2)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" style={{...tdStyle, textAlign: 'center'}}>No expenses found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AccountingReport;