import React, { useState, useEffect } from 'react';
import { fetchInventory } from '../api';
import AddInventoryForm from './inventoryForm';

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
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

function InventoryTable() {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadInventory = async () => {
            try {
                setLoading(true);
                const res = await fetchInventory();
                setInventory(res.data);
                setError('');
            } catch (err) {
                setError('Failed to fetch inventory. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadInventory();
    }, []);

    const reload = () => {
        setLoading(true);
        fetchInventory()
            .then(res => {
                setInventory(res.data);
                setError('');
            })
            .catch(err => {
                setError('Failed to fetch inventory. Please try again later.');
                console.error(err);
            })
            .finally(() => setLoading(false));
    };

    useEffect(reload, []);

    if (loading) {
        return <div>Loading Inventory...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Inventory</h2>
            <AddInventoryForm onAdded={reload} />
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>SKU</th>
                        <th style={thStyle}>Product Name</th>
                        <th style={thStyle}>Supplier</th>
                        <th style={thStyle}>Cost Per Unit</th>
                        <th style={thStyle}>Quantity On Hand</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.length > 0 ? (
                        inventory.map(record => (
                            <tr key={record.id}>
                                <td style={tdStyle}>{record.product.sku}</td>
                                <td style={tdStyle}>{record.product.name}</td>
                                <td style={tdStyle}>{record.product.supplier}</td>
                                <td style={tdStyle}>${Number(record.product.cost_per_unit).toFixed(2)}</td>
                                <td style={tdStyle}>{record.quantity}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={{...tdStyle, textAlign: 'center'}}>No inventory records found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default InventoryTable;