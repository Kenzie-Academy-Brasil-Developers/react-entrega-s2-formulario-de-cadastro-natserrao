import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function RoutesMain() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        * <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default RoutesMain;
