import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiLock } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";
import { url } from "../../constent/url";

function Login() {
  const navigate = useNavigate();
  const notify = (msg) => toast(msg);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handellogin = async (event) => {
    event.preventDefault();
    await axios.post(url + "/loginadmin", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data)
        if (res.data.state === 1) {
          console.log(res)
          window.localStorage.setItem('user' , JSON.stringify(res.data.user))
          window.localStorage.setItem('isLogin' , true)
          navigate("/home");
        } else {
          notify(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Toaster />
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
                  onChange = { e => setUsername(e.target.value)}
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
                  onChange = { e => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  placeholder="ادخل كلمة المرور"
                  className="outline-none bg-transparent mx-2 flex-1 text-gray-800"
                />
              </div>
            </div>

            <button
              onClick={(e) => {
                handellogin(e);
              }}
              type="submit"
              className="bg-indigo-500 text-white rounded-lg px-4 py-2 w-full font-semibold text-lg"
            >
              تسجيل الدخول
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
