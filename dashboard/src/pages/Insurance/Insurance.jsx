import React from 'react'
import { FaCar, FaCalendarAlt, FaIdCard, FaUser, FaPhone, FaEnvelope, FaLocationArrow, FaCheckCircle } from 'react-icons/fa';
import { Box } from '@mui/material';

function Insurance() {
  return (
   

<>


<Box style={{display:"flex" , flexDirection:"coulmn" , justifyContent:'center' , alignItems: "center" , padding: 20 , width:'100%' }}>

<div className="w-full mx-auto p-8 bg-white rounded shadow-md" dir='rtl'>
    <h2 className="text-2xl font-bold mb-6">تعبئة تأمين السيارة</h2>
    <div className="max-w-100 mx-auto">
  <h2 className="text-2xl font-bold mb-4">بيانات التأمين</h2>

  <form className="w-100">
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-lg mb-2">اسم الشركة:</label>
        <input className="form-control" type="text" />
      </div>

      <div>
        <label className="block text-lg mb-2">نوع التأمين:</label>
        <input className="form-control" type="text" />
      </div>

      <div>
        <label className="block text-lg mb-2">رقم الوثيقة:</label>
        <input className="form-control" type="text" />
      </div>

      <div>
        <label className="block text-lg mb-2">اسم الفرع أو المكتب الذي أصدر الوثيقة:</label>
        <input className="form-control" type="text" />
      </div>
      <div>
        <label className="block text-lg mb-2">مدة التأمين من ظهر يوم:</label>
        <input className="form-control" type="text" />
      </div>
      <div>
        <label className="block text-lg mb-2">الى ظهر يوم:</label>
        <input className="form-control" type="text" />
      </div>

      <div>
        <label className="block text-lg mb-2">رقم الزبون:</label>
        <input className="form-control" type="text" />
      </div>



      <div>
        <label className="block text-lg mb-2">اسم المؤمن له:</label>
        <input className="form-control" type="text" />
      </div>

      <div>
        <label className="block text-lg mb-2">عنوان المؤمن له:</label>
        <input className="form-control" type="text" />
      </div>
    </div>

    <div className="text-right">
      <button className="btn btn-primary w-full">حفظ</button>
    </div>
  </form>
</div>

  </div>
</Box>


</>
  )
}

export default Insurance
