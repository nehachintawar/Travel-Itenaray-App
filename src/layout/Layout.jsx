import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useTheme } from "../context/ThemeContext";

const Layout = () => {
  const { theme } = useTheme();
    const isDark = theme === "dark";
  return (
    <div className={`w-[393px] ${isDark ? '' : 'border border-gray-300'} relative mx-auto`}>
        <Outlet />
        <Navbar />
    </div>
  )
}

export default Layout
