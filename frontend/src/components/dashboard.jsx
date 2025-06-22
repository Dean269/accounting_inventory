import React, { useState, useEffect } from 'react';
import { fetchProfitLossReport, fetchProducts } from '../api';

const cardStyle = {
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    minWidth: '200px',
    textAlign: 'center',
};

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
};

function DashboardHome() {
    const [report, setReport] = useState(null);
    const [productCount, setProductCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadDashboardData = async () => {
            try {
                setLoading(true);
                const reportRes = await fetchProfitLossReport();
                const productsRes = await fetchProducts();
                
                setReport(reportRes.data);
                setProductCount(productsRes.data.length);
                setError('');
            } catch (err) {
                setError('Failed to fetch dashboard data. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadDashboardData();
    }, []);

    if (loading) {
        return <div>Loading Dashboard...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <div style={containerStyle}>
                {report && (
                    <>
                        <div style={cardStyle}>
                            <h4>Net Profit</h4>
                            <p>${Number(report.net_profit).toFixed(2)}</p>
                        </div>
                        <div style={cardStyle}>
                            <h4>Total Revenue</h4>
                            <p>${Number(report.total_revenue).toFixed(2)}</p>
                        </div>
                        <div style={cardStyle}>
                            <h4>COGS</h4>
                            <p>${Number(report.cogs).toFixed(2)}</p>
                        </div>
                    </>
                )}
                <div style={cardStyle}>
                    <h4>Active Products</h4>
                    <p>{productCount}</p>
                </div>
            </div>
        </div>
    );
}

export default DashboardHome;