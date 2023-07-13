import { Typography, CardContent, Card } from "@mui/material";
import { Box } from "@mui/material";
import styles from "./home-style";
import index from "../../constent/index";
import React , {useState , useEffect}from "react";
import axios from 'axios'
import { url } from "../../constent/url";


function Home() {


  const users = [
    { id: 1, name: "محمد أحمد", role: "مدير", date: "2023-05-18" },
    { id: 2, name: "أميرة خالد", role: "مستخدم", date: "2023-05-17" },
    { id: 3, name: "عبدالله محمود", role: "مستخدم", date: "2023-05-16" },
    // Add more users here
  ];

  const getlastfiveemployees = async () => {
    await axios.get(url + '/getlastfiveemployyes').then(res => {
      setUsers(res.data.data) 
    }) .catch( err => {console.log(err)})
  }
  
  return (
    <>
   <div className="bg-gradient-to-b from-green-900 to-green-500  w-full h-full p-10" dir='rtl' style={{height:'auto'}}>
      <h1 className="text-4xl font-bold text-white mb-6">لوحة التحكم</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <DashboardCard title="إجمالي المستخدمين" value={users.length} />
        <DashboardCard title="إجمالي السيارات" value={users.length} />
        <DashboardCard title="إجمالي سيارات الجمرك" value={users.length} />
        <DashboardCard title="إجمالي التامينات" value={users.length} />
        <DashboardCard title="إجمالي  " value={users.length} />
        <DashboardCard title="إجمالي المستخدمين" value={users.length} />

        {/* Add more dashboard cards here */}
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-white mb-6">آخر 10  حسابات موظفين</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 text-white">الرقم</th>
              <th className="py-2 px-4 text-white ">الاسم</th>
              <th className="py-2 px-4 text-white ">الدور</th>
              <th className="py-2 px-4 text-white ">تاريخ الإنشاء</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 text-white  ">{user.id}</td>
                <td className="py-2 px-4 text-white ">{user.name}</td>
                <td className="py-2 px-4 text-white ">{user.role}</td>
                <td className="py-2 px-4 text-white">{user.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}


function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-4xl font-bold text-green-500">{value}</p>
    </div>
  );
}

export default Home;
