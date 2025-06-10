import React, { useState } from 'react';
import API from '../api';

const AddInventoryForm = ({ onAdded }) => {
  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/inventory/products/', { sku, name, stock });
    setSku('');
    setName('');
    setStock('');
    if (onAdded) onAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        className="border px-2 py-1 rounded"
        placeholder="SKU"
        value={sku}
        onChange={e => setSku(e.target.value)}
        required
      />
      <input
        className="border px-2 py-1 rounded"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className="border px-2 py-1 rounded"
        placeholder="Stock"
        type="number"
        value={stock}
        onChange={e => setStock(e.target.value)}
        required
      />
      <button className="bg-blue-500 text-white px-4 py-1 rounded" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddInventoryForm;