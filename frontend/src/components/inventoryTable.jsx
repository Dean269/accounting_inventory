import React, { useEffect, useState } from 'react';
import { fetchInventory } from '../api';

const InventoryTable = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetchInventory()
      .then(res => setInventory(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Inventory</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, idx) => (
            <tr key={idx}>
              <td>{item.product}</td>
              <td>{item.quantity}</td>
              <td>{new Date(item.last_updated).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
