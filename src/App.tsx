
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Profile from "./components/Profile"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={ <Dashboard />}>
          <Route path="profile" element={ <Profile />} />
          <Route path="settings" element={ <Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;