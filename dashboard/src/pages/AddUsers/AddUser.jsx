import React, { useState } from "react";
import { Box } from "@mui/material";
import { RiUser3Line } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiUserSettingsLine } from "react-icons/ri";
import axios from "axios";

import "./Addusers.css";
import { url } from "../../constent/url";

function AddUser() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: 0,
    fullname: "",
    email: "",
  });

  const { username, password, role, fullname, email } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password || !role || !fullname || !email) {
      // Handle validation error
      return;
    }

    try {
      const response = await axios.post( url +  "/addadmin", formData);
      const data = response.data;
      if (data.state === 1) {
        // User account created successfully
        // Handle success scenario
      } else {
        // Failed to create user account
        // Handle error scenario
      }
    } catch (error) {
      // Handle server error
    }
  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "coulmn",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          width: "100%",
        }}
      >
        <div className="w-full justify-center flex" style={{ height: "100vh" }}>
          <div className="w-full flex justify-center">
            <div className="w-11/12 mt-20 border p-14 rounded">
              <span className="text-3xl float-right ">اضافة مدير نظام</span>

              <form
                className="bg-white rounded space-y-4 text-right"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-bold mt-10"
                  >
                    🧑‍🦱 الاسم بالكامل
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="fullname"
                    value={fullname}
                    onChange={handleChange}
                    className="appearance-none border text-right border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
                    placeholder="ادخل الاسم"
                  />
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    👤 اسم المستخدم
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                    className="appearance-none border text-right border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
                    placeholder="ادخل اسم المستخدم"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    🔒 كلمة المرور
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="appearance-none border text-right border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
                    placeholder="ادخل كلمة المرور"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    ✉️ البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="appearance-none border text-right border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
                    placeholder="ادخل البريد الإلكتروني"
                  />
                </div>

                <div dir="rtl">
                  <label
                    htmlFor="role"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    الدور
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={role}
                    onChange={handleChange}
                    className="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500 text-right"
                  >
                    <option value="">اختر الدور</option>
                    <option value={1}>مدير</option>
                    <option value={2}>مستخدم</option>
                  </select>
                </div>

                <div className="w-full cursor-pointer  justify-center self-center align-middle flex">
                  <button
                    type="submit"
                    className="bg-blue-700 cursor-pointer  w-60 self-center text-white font-bold py-2 px-4 rounded"
                  >
                    حفـــــظ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default AddUser;
