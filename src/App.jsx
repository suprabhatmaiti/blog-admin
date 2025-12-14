import React from "react";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
