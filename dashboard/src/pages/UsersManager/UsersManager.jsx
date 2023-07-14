import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { FaTrash, FaEdit, FaStopCircle } from 'react-icons/fa';
import { url } from '../../constent/url';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

function UsersManager() {
  const navigate = useNavigate()

  const notify = (msg) => toast(msg);

  const [adminsData, setAdminsData] = useState([]);

  const getalladmins =  async () => {
    await axios.get(url +'/getAllAdmins').then(response => {
      setAdminsData(response.data.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  } 

  const gotoupdatepage = ( e, user) => {
    e.preventDefault();

    navigate('/updateadmin' , {state : {admindata:user}})

  }


  const deleteadmin = async ( e , id) => {
    e.preventDefault();
    await  axios.delete( url + `/deleteadmin/${id}`).then((response) => {
      console.log(response)
      notify(response.data.message)

     })
     getalladmins()
  }

const restrictadmin = async (e , id) => {
  e.preventDefault();
  await  axios.put( url + `/restrictadmin/${id}`).then((response) => {
    console.log(response)
    notify(response.data.message)

   })
   getalladmins()
  }

const activeadmin = async (e , id) => {
  e.preventDefault();
  await  axios.put( url + `/activeadmin/${id}`).then((response) => {
    console.log(response)
    notify(response.data.message)
   
   })
   getalladmins()
}



  useEffect(() => {
    // Fetch data from the server
    getalladmins();
  }, []);

  return (
    <>

    <Toaster position='top-right' />

























      <div className="flex flex-col items-center p-5 w-full">
        <div className="w-full overflow-x-auto w-full">
          <table className="table-auto w-full" dir="rtl">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" className="text-center">الاسم</th>
                <th scope="col" className="text-center">اسم المستخدم</th>
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
                  <td className="text-center">{admin.role}</td>
                  <td className="text-center">
                    <span className=" p-2 rounded-lg bg-red-500 text-white "><span className=' m-2 mt-2'>{admin.state ?  "مفعل" : "غير مفعل"}</span></span>
                  </td>
                  <td className="flex justify-center items-center">
                    <button onClick={(e) => {deleteadmin(e , admin.id)}} type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2">
                      <FaTrash className='text-red-500' />
                    </button>
                    <button onClick={(e) => {gotoupdatepage(e , admin)}} type="button" className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2">
                      <FaEdit />
                    </button>
                    <button type="button" onClick={ e =>  restrictadmin( e , admin.id)} className="btn bg-red-500 btn-outline-danger hover:bg-red-800 btn-circle btn-lg btn-circle ml-2">
                      <FaStopCircle className=' text-white hover:text-red-500' />
                    </button>
                    <button type="button" onClick={ e =>  activeadmin( e , admin.id)} className="  bg-green-500 btn-outline-danger hover:bg-green-800  btn btn-outline-success btn-circle btn-lg btn-circle ml-2">
                      <FaStopCircle  className=' text-white hover:text-red-500'   />
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
