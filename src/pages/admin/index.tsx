import React from 'react';
import { Link } from 'react-router-dom';

const Admin: React.FC = () => {
  return (
    <div>
      <h1>Admin</h1>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Admin;