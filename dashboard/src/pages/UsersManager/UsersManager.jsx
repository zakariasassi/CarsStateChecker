import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { FaTrash, FaEdit, FaStopCircle } from 'react-icons/fa';
import { url } from '../../constent/url';

function UsersManager() {
  const [adminsData, setAdminsData] = useState([]);


const restrictadmin = async (e , id) => {
  e.preventDefault();
  await  axios.put( url + `/restrictadmin/${id}`).then((response) => {
    console.log(response)
   })
}

const activeadmin = async (e , id) => {
  e.preventDefault();
  await  axios.put( url + `/activeadmin/${id}`).then((response) => {
    console.log(response)
   })
}



  useEffect(() => {
    // Fetch data from the server
    axios.get(url +'/getAllAdmins')
      .then(response => {
        setAdminsData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center p-5 w-full">
        <div className="w-full overflow-x-auto w-full">
          <table className="table-auto w-full" dir="rtl">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" className="text-center">الاسم</th>
                <th scope="col" className="text-center">اللقب</th>
                <th scope="col" className="text-center">البريد الإلكتروني</th>
                <th scope="col" className="text-center">الصلاحية</th>
                <th scope="col" className="text-center">الحالة</th>
                <th scope="col" className="text-center">عمليات</th>
              </tr>
            </thead>
            <tbody>
              {adminsData.map((admin, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="text-center">{admin.fullname}</td>
                  <td className="text-center">{admin.username}</td>
                  <td className="text-center">{admin.email}</td>
                  <td className="text-center">Superuser</td>
                  <td className="text-center">
                    <span className="badge bg-success">مفعل</span>
                  </td>
                  <td className="flex justify-center items-center">
                    <button type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2">
                      <FaTrash />
                    </button>
                    <button type="button" className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2">
                      <FaEdit />
                    </button>
                    <button type="button" onClick={ e =>  restrictadmin( e , admin.id)} className="btn btn-outline-danger btn-circle btn-lg btn-circle ml-2">
                      <FaStopCircle />
                    </button>
                    <button type="button" onClick={ e =>  activeadmin( e , admin.id)} className="btn btn-outline-success btn-circle btn-lg btn-circle ml-2">
                      <FaStopCircle />
                    </button>

                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UsersManager;
