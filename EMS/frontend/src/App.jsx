import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashbord from "./pages/AdminDashbord";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" replace />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashbord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
