import React, { useState, useEffect, createContext, useContext } from "react";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { FaUsers, FaUser, FaCar, FaFileAlt, FaCogs } from "react-icons/fa";
export default function Sidebar() {
  const user = JSON.parse(window.localStorage.getItem('user'));
  return (
    <>
         <div className="bg-gradient-to-b from-green-900 to-green-500 h-full w-1/5 flex flex-col" dir='rtl'>
      <div className="mt-10 flex flex-col items-center mb-10">
        <img className="w-20" src="https://icon-library.com/images/user-image-icon/user-image-icon-18.jpg" alt="Logo" />
        <span className="mt-4 text-2xl text-white">{user?.fullname}</span>
      </div>

      <div className="flex flex-col space-y-2">
      <SidebarLink to="/home" icon={<FaUsers />} label="الرئيسية" />
      <SidebarLink to="/admins" icon={<FaUsers />} label="مستخدمين النظام" />
      <SidebarLink to="/newuser" icon={<FaUser />} label="اضافة مدير نظام" />
        <SidebarLink to="/users" icon={<FaUsers />} label="ادارة الموظفين" />
        <SidebarLink to="/addem" icon={<FaUsers />} label="اضافة موظف" />

        <SidebarLink to="/newcar" icon={<FaCar />} label="تسجيل مركبة" />
        <SidebarLink to="/showcars" icon={<FaCar />} label="المركبات المسجلة" />
        <SidebarLink to="/newjomrok" icon={<FaCar />} label="تسجيل مركبة جمركية" />
        <SidebarLink to="/showjomrok" icon={<FaCar />} label="المركبات الجمركية" />
        <SidebarLink to="/insurance" icon={<FaCar />} label="تآمين سيارة" />
        <SidebarLink to="/signcarsreports" icon={<FaFileAlt />} label="تقارير التراخيص" />
        <SidebarLink to="/jomrokrepostr" icon={<FaFileAlt />} label="تقارير الجمارك" />
        <SidebarLink to="/insurancereports" icon={<FaFileAlt />} label="تقارير التأمين" />


        
      </div>
    </div>
    </>
  );
}


function SidebarLink({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center px-6 py-4 text-white hover:bg-green-700"
      style={{ textDecoration: "none" }}
    >
      {icon && <span className="ml-2">{icon}</span>}
      <span>{label}</span>
    </Link>
  );
}