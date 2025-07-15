import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant="contained" onClick={
          () => navigate("/dashboard")
        }>Login
      </Button>
    </>
  );
};

export default Home;
