import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* <button onClick={() => window.history.back()}>Voltar</button> */}
      <Link to="/">Voltar</Link>
    </div>
  )
}

export default Dashboard