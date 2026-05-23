import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";

export default function App() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  if (!role) {
    return <LoginPage onLogin={setRole} />;
  }

  if (role !== "ADMIN") {
    return <h1>Access Denied</h1>;
  }

  return <Dashboard />;
}