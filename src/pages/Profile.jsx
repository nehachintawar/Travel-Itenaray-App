import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaClock, FaUsers, FaMoon, FaSun } from "react-icons/fa6";

const Profile = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className={` ${isDark ? 'bg-gray-900' : 'bg-white'} min-h-screen p-10`}>
      <div className="flex gap-5 items-center">
        <h1 className={`font-bold ${isDark ? 'text-white' : 'text-black'}`}>Theme</h1>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${
            isDark ? "bg-gray-800 text-yellow-400" : "bg-gray-200 text-blue-800"
          }`}
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Profile;
