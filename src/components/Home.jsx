import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/dashboard")}>Login</button>
    </>
  );
};

export default Home;
