import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import SearchPage from "./components/SearchPage/SearchPage"; // Create a dedicated component for the search functionality
import { isLoggedIn } from "./services/authService";


const App = () => {  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={isLoggedIn() ? <SearchPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App
