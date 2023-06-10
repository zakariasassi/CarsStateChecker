import React from 'react'
import { Box } from '@mui/material';

function SInedCars() {
  return (
    <>
           <div className="flex flex-col  items-center p-5 w-full" >
  <div className="w-full overflow-x-auto w-full">
    <table className="table m-5 p-lg-5" dir='rtl'>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" style={{ textAlign: 'center' }}>اسم المالك</th>
          <th scope="col" style={{ textAlign: 'center' }}>نوع الاستعمال</th>
          <th scope="col" style={{ textAlign: 'center' }}>القسم</th>
          <th scope="col" style={{ textAlign: 'center' }}>تاريخ التسجيل</th>
          <th scope="col" style={{ textAlign: 'center' }}>الرقم</th>
          <th scope="col" style={{ textAlign: 'center' }}>رقم البطاقة الشخصية</th>
          <th scope="col" style={{ textAlign: 'center' }}>جهة الاصدار</th>
          <th scope="col" style={{ textAlign: 'center' }}>عمليات</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td style={{ textAlign: 'center' }}>محمد علي خالد</td>
          <td style={{ textAlign: 'center' }}>خاصة</td>
          <td style={{ textAlign: 'center' }}>طرابلس</td>
          <td style={{ textAlign: 'center' }}>4-5-2023</td>
          <td style={{ textAlign: 'center' }}>43347347</td>
          <td style={{ textAlign: 'center' }}>43347347</td>
          <td style={{ textAlign: 'center' }}>طرابلس</td>
          <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button type="button" className="btn btn-outline-danger btn-circle btn-lg btn-circle m-2"><i className="fa fa-trash"></i></button>
            <button type="button" className="btn btn-outline-warning btn-circle btn-lg btn-circle m-2"><i className="fa fa-pen"></i></button>
          </td>
        </tr>
        {/* More table rows */}
      </tbody>
    </table>
  </div>
</div>

    </>
  )
}

export default SInedCars
