import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaSearch, FaPlus, FaHeart, FaUser } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { to: "/", label: "Home", icon: <FaHome /> },
  { to: "/search", label: "Search", icon: <FaSearch /> },
  { to: "/plantrip", label: "Add", icon: <FaPlus /> },
  { to: "/saved", label: "Saved", icon: <FaHeart /> },
  { to: "/profile", label: "Profile", icon: <FaUser /> },
];

const Navbar = () => {
  const location = useLocation();
  const { theme } = useTheme();
  
  return (
    <nav 
      className={`sticky bottom-0 left-0 right-0 z-50 border-t ${
        theme === 'dark' 
          ? 'bg-gray-900 text-white border-gray-700' 
          : 'bg-white text-gray-800 border-gray-200 shadow-md'
      }`}
    >
      <div className="max-w-sm mx-auto flex justify-between px-6 py-3 text-xs">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex flex-col items-center ${
              location.pathname === item.to 
                ? theme === 'dark' ? 'text-[#D3F462]' : 'text-[#313DDF]' 
                : theme === 'dark' ? 'text-white' : 'text-gray-700'
            }`}
          >
            <div className="text-lg mb-1">{item.icon}</div>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;