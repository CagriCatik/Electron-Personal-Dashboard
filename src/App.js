// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { 
  FaHome, 
  FaTachometerAlt, 
  FaCalendarAlt, 
  FaUser, 
  FaAngleDoubleLeft, 
  FaAngleDoubleRight 
} from "react-icons/fa";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import "./App.css";

// Top navigation bar
function Navbar({ toggleSidebar, isCollapsed }) {
  return (
    <div className="navbar">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
      </button>
      <h1 className="navbar-title">Dashboard</h1>
      {/* Add other navbar items (e.g. user profile) if needed */}
    </div>
  );
}

// Sidebar component – receives collapsed state and toggle function from parent
function Sidebar({ isCollapsed, toggleSidebar }) {
  // Manage the open dropdown state locally (for the "Create" dropdown)
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    // If sidebar is collapsed, expand it first
    if (isCollapsed) {
      toggleSidebar();
    }
    setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId));
  };

  return (
    <nav id="sidebar" className={isCollapsed ? "close" : ""}>
      <ul>
        {/* Navigation Links */}
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            <FaHome className="icon" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaTachometerAlt className="icon" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar" className={({ isActive }) => (isActive ? "active" : "")}>
            <FaCalendarAlt className="icon" />
            <span>Calendar</span>
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}

// Footer component with sample links
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <NavLink to="/privacy">Privacy Policy</NavLink>
        <NavLink to="/terms">Terms of Service</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
      <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
}

function App() {
  // Lift the sidebar collapsed state to the App component
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <Router>
      <div className="App">
        <Navbar toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
        <div className="content">
          <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
          <main>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              {/* Dummy routes for footer links */}
              <Route path="/privacy" element={<div><h2>Privacy Policy</h2><p>Privacy details here.</p></div>} />
              <Route path="/terms" element={<div><h2>Terms of Service</h2><p>Terms details here.</p></div>} />
              <Route path="/contact" element={<div><h2>Contact Us</h2><p>Contact details here.</p></div>} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
