import React from "react";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
