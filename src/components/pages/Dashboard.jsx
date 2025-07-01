import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Meu dashboard</h1>
      <span>
      <Button variant="outlined" onClick={() => navigate("/")}>Logout</Button>
      </span>
      <ul>
        <li>
          <a href="/dashboard/profile">Perfil</a>
        </li>
        <li>
          <a href="/dashboard/settings">Configurações</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Dashboard;
