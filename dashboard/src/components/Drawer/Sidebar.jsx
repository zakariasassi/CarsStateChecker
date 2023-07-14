import React, { useState, useEffect, createContext, useContext } from "react";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { FaUsers, FaUser, FaCar, FaFileAlt, FaCogs } from "react-icons/fa";
export default function Sidebar() {
  // const [userdata, setUserData] = useState(null);
  const userdata = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    // setUserData(user);
  }, []);
  return (
    <>
      <div
        className="bg-gradient-to-b from-green-900 to-green-500 h-full w-1/5 flex flex-col"
        dir="rtl"
      >
        <div className="mt-10 flex flex-col items-center mb-10">
          <img
            className="w-20"
            src="https://icon-library.com/images/user-image-icon/user-image-icon-18.jpg"
            alt="Logo"
          />
          <span className="mt-4 text-2xl text-white">{userdata?.fullname}</span>
        </div>

        <div className="flex flex-col space-y-2 h-screen">
          <SidebarLink to="/home" icon={<FaUsers />} label="الرئيسية" />

          {userdata?.role === "مدير نظام" && (
            <>
              <SidebarLink
                to="/admins"
                icon={<FaUsers />}
                label="مستخدمين النظام"
              />
              <SidebarLink
                to="/newuser"
                icon={<FaUser />}
                label="اضافة مدير نظام"
              />
              <SidebarLink
                to="/users"
                icon={<FaUsers />}
                label="ادارة الموظفين"
              />
              <SidebarLink to="/addem" icon={<FaUsers />} label="اضافة موظف" />
            </>
          )}


          { userdata.role === "قسم التراخيص" && (
            <SidebarLink to="/newcar" icon={<FaCar />} label="تسجيل مركبة" />

          ) 

          }

          {(userdata.role === "قسم التراخيص" || userdata?.role === "مدير نظام" )   && (
            <>
              <SidebarLink
                to="/showcars"
                icon={<FaCar />}
                label="المركبات المسجلة"
              />
            </>
          )}


          { userdata.role === "قسم الجمارك" && (
            <SidebarLink
                to="/newjomrok"
                icon={<FaCar />}
                label="تسجيل مركبة جمركية"
              />
          ) 

          }
          {(userdata.role === "قسم الجمارك" || userdata.role === "مدير نظام") && (
            <>
         
              <SidebarLink
                to="/showjomrok"
                icon={<FaCar />}
                label="المركبات الجمركية"
              />
            </>
          )}



          { userdata.role === "قسم تأمين" && (
            <SidebarLink
                to="/insurance"
                icon={<FaCar />}
                label="تآمين سيارة"
              />
          )


          }

          {(userdata.role === "قسم تأمين" || userdata.role === "مدير نظام") && (
            <>
           
              <SidebarLink
                to="/insurancecars"
                icon={<FaCar />}
                label="السيارات المؤمنة"
              />
            </>
          )}

          {userdata.role === "قسم التراخيص" && (
            <>
              <SidebarLink
                to="/signcarsreports"
                icon={<FaFileAlt />}
                label="تقارير التراخيص"
              />
            </>
          )}

          {userdata.role === "قسم الجمارك" && (
            <>
              <SidebarLink
                to="/jomrokrepostr"
                icon={<FaFileAlt />}
                label="تقارير الجمارك"
              />
            </>
          )}

          {userdata.role === "قسم تأمين" && (
            <>
              <SidebarLink
                to="/insurancereports"
                icon={<FaFileAlt />}
                label="تقارير التأمين"
              />
            </>
          )}
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
