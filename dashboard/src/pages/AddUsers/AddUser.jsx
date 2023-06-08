import React from 'react'
import { Box } from '@mui/material';
import { RiUser3Line } from 'react-icons/ri';
import { RiLockPasswordLine } from 'react-icons/ri';
import { RiMailLine } from 'react-icons/ri';
import { RiUserSettingsLine } from 'react-icons/ri';

import './Addusers.css'
function AddUser() {
  return (
    <>
        <Box style={{display:"flex" , flexDirection:"coulmn" , justifyContent:'center' , alignItems: "center" , padding: 20 , width:'100%' }}>
           <div className='w-full justify-center flex' style={{  height:'100vh'}}>
           <div className="w-full flex justify-center">
  <div className="w-full mt-40">
    <form className="bg-white shadow-md rounded px-8 py-6 space-y-4 text-right">
      <div>
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
          🧑‍🦱 الاسم الأول
        </label>
        <input
          type="text"
          id="firstName"
          className="appearance-none border text-right border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
          placeholder="ادخل الاسم الأول"
        />
      </div>

      <div>
        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
          🧔 الاسم الأخير
        </label>
        <input
          type="text"
          id="lastName"
          className="appearance-none border text-right border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
          placeholder="ادخل الاسم الأخير"
        />
      </div>

      <div>
        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
          👤 اسم المستخدم
        </label>
        <input
          type="text"
          id="username"
          className="appearance-none border text-right border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
          placeholder="ادخل اسم المستخدم"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
          🔒 كلمة المرور
        </label>
        <input
          type="password"
          id="password"
          className="appearance-none border text-right border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
          placeholder="ادخل كلمة المرور"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          ✉️ البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          className="appearance-none border text-right border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500"
          placeholder="ادخل البريد الإلكتروني"
        />
      </div>

      <div dir='rtl'>
        <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
          الدور
        </label>
        <select
          id="role"
          className="appearance-none border border-gray-300 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-indigo-500 text-right"
        >
          <option value="">اختر الدور</option>
          <option value="admin">مدير</option>
          <option value="user">مستخدم</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          إرسال
        </button>
      </div>
    </form>
  </div>
</div>
           </div>
          </Box>
    </>
  )
}

export default AddUser
