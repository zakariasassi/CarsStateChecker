import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import { FiUser, FiLock } from "react-icons/fi";



function Login() {
const navigate = useNavigate()





const handellogin = (event) => { 
  event.preventDefault()
    navigate('/home')
  }

    
  return (
    <>
        
        <div
      className="bg-gradient-to-r from-purple-800 to-indigo-900 min-h-screen flex items-center justify-center"
      dir="rtl"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg p-8 shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          مرحبًا بك مرة أخرى!
        </h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-800 text-lg mb-2"
            >
              اسم المستخدم
            </label>
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <FiUser className="text-gray-500" />
              <input
                type="text"
                id="username"
                placeholder="ادخل اسم المستخدم"
                className="outline-none bg-transparent mx-2 flex-1 text-gray-800"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-800 text-lg mb-2"
            >
              كلمة المرور
            </label>
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <FiLock className="text-gray-500" />
              <input
                type="password"
                id="password"
                placeholder="ادخل كلمة المرور"
                className="outline-none bg-transparent mx-2 flex-1 text-gray-800"
              />
            </div>
          </div>

          <button
          onClick={ (e) => { handellogin(e)}}
            type="submit"
            className="bg-indigo-500 text-white rounded-lg px-4 py-2 w-full font-semibold text-lg"
          >
            تسجيل الدخول
          </button>
        </form>
      </motion.div>
    </div>
      
    </>
  )
}

export default Login
