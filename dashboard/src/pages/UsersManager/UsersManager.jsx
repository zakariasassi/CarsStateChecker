import React from 'react'
import { Box } from '@mui/material';
import { FaTrash, FaEdit, FaStopCircle } from 'react-icons/fa';

function UsersManager() {
  return (
    <>
            <Box style={{display:"flex" , flexDirection:"coulmn" , justifyContent:'center' , alignItems: "center" , padding: 20 , width:'100%' }}>
           <div className='w-100' style={{  height:'100vh'}}>
           <table className="table m-5 p-lg-5" dir='rtl'>
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
    <tr>
      <th scope="row">1</th>
      <td className="text-center">محمد</td>
      <td className="text-center">ساسي</td>
      <td className="text-center">zakria@gmail.com</td>
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
        <button type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle ml-2">
          <FaStopCircle />
        </button>
      </td>
    </tr>
  </tbody>
</table>

           </div>
           </Box>

    </>
  )
}

export default UsersManager