import React, { useEffect, useState } from 'react';
import API from '../api';
import AddInventoryForm from './inventoryForm';

const InventoryTable = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get('/inventory/products/')
      .then(res => {
        setInventory(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  

  const reload = () => {
    setLoading(true);
    API.get('/inventory/products/')
      .then(res => {
        setInventory(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(reload, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Inventory</h2>
      <AddInventoryForm onAdded={reload} />
      <table className="min-w-full bg-white rounded shadow">
  <thead>
    <tr>
      <th className="py-2 px-4 border-b text-left">SKU</th>
      <th className="py-2 px-4 border-b text-left">Name</th>
      <th className="py-2 px-4 border-b text-left">Stock</th>
    </tr>
  </thead>
  <tbody>
    {inventory.map(item => (
      <tr key={item.id} className="hover:bg-gray-50">
        <td className="py-2 px-4 border-b">{item.sku}</td>
        <td className="py-2 px-4 border-b">{item.name}</td>
        <td className="py-2 px-4 border-b">{item.stock}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};

export default InventoryTable;