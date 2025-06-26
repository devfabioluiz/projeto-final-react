import { Outlet } from 'react-router-dom';

// Crie um arquivo chamado Dashboard.jsx
const Dashboard = () => {
  return (
    <div>
      <h1>Dashyboard </h1>
      <Outlet />
    </div>
  );
}

export default Dashboard;