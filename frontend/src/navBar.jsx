import React from 'react';

const Navbar = () => {
  const username = localStorage.getItem('username');

  return (
    <nav className="p-4 bg-gray-100 flex justify-between">
      <div className="font-bold">FBA Tool</div>
      {username && <div>Welcome, {username}!</div>}
    </nav>
  );
};

export default Navbar;